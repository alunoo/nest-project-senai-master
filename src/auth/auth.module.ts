import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  providers: [AuthService]
})
export class AuthModule {}
