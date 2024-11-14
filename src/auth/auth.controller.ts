import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto/user.dto';
import { AuthGuard } from '@nestjs/passport';
import { get } from 'http';
import { GetUser } from './get-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signIn(@Body() body: UserDto) {
    const user = body;
    const result = await this.authService.signIn(user);
    return { code: 200, status: 'success', data: result };
  }

  @Get('test')
  @UseGuards(AuthGuard())
  
  async test(@GetUser() user) {

    return user;
  }
}
