import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthJwtStrategy } from './auth.jwt.strategy';


@Module({
  imports:[
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({
      secret: "test555",
      signOptions:{
        expiresIn:5000
      }
    }),

  ],
  controllers: [AuthController],
  providers: [AuthService , AuthJwtStrategy],
  exports: [AuthJwtStrategy , PassportModule] //exprots auth
})
export class AuthModule {}
