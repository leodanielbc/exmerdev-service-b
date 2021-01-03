import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../dtos/user.dto';
import { UserService } from '../services/user.service';

@ApiTags('User')
@Controller()
export class UserController {

    constructor(
        private userService: UserService
    ) {}

    @ApiResponse({ status: 201, description: 'User created' })
    @ApiResponse({ status: 404, description: 'Error al registrar el usuario' })
    @ApiOperation({ summary: 'Este metodo recibe los datos del servicio B y retorna los datos que se guardaron' })
    @MessagePattern('rabbit-mq-producer')
    public async execute(@Payload() data: UserDto, @Ctx() context: RmqContext) {
        const channel = context.getChannelRef();
        try {
            const orginalMessage = context.getMessage();

            const saveUser = await this.userService.createUser(data);
            console.log('data', data);
            channel.ack(orginalMessage);

            const result = {
                statusCode: HttpStatus.CREATED,
                data: saveUser
            }
            return result;
        } catch (error) {
            channel.ack({statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: "Error en el canal"});
            throw error;
        }
    }
}
