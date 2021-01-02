import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../dtos/user.dto';
import { AuthService } from '../services/auth.service';

@ApiTags('User')
@Controller('api/auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) {}

    @Post()
    @ApiResponse({ status: 201, description: 'User created' })
    @ApiResponse({ status: 404, description: 'Error al registrar el usuario' })
    @ApiOperation({ summary: 'Este metodo crea un usuario' })
    //@UseGuards(AuthGuard('jwt'))
    async createUser(@Res() res, @Body() data: UserDto) {
        try {
            const dataUser = await this.authService.createUser(data);
            const result = {
                statusCode: HttpStatus.CREATED,
                data: dataUser
            }
            return res.status(result.statusCode).json(result);
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error});
        }
    }
}
