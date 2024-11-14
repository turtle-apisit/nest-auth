import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { UserDto } from './dto/user.dto';
import { UnauthorizedException } from '@nestjs/common';

export class AuthJwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private user: UserDto = {
      email: 'test@admin.com',
      password: 'admintest',
    },
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'test555',
    });
  }

  async validate(payload : UserDto) {
    const user_default = this.user;
    const user  = payload;

    if(user.email !== user_default.email ){
        throw new UnauthorizedException()
    }

    return {email : user.email}
    
  }
}
