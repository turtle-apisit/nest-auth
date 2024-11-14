import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  private user:UserDto = {
    email:"test@admin.com",
    password:"admintest"
  }

  constructor(
    private jwtService:JwtService
  ){}

  async signIn(user: UserDto) {

    if (user.email !== this.user.email || user.password !== this.user.password) {
      throw new UnauthorizedException("Invalid username or password");
    }

    const payload = {email : user.email}
    const token = this.jwtService.sign(payload)
    return {token}
  }

  
}
