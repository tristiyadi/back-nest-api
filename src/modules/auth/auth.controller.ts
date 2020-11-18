import { Controller, Body, Post, UseGuards, Req, HttpCode } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOkResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { UserDto } from '../../core/dto/user.dto';
import { DoesUserExist } from '../../core/guards/doesUserExist.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @HttpCode(200)
  @ApiOkResponse({ type: UserDto })
  async login(@Req() req) {
    return await this.authService.login(req.user);
  }

  @UseGuards(DoesUserExist)
  @Post('signup')
  @ApiOkResponse({ type: UserDto })
  async signUp(@Body() user: UserDto) {
    return await this.authService.create(user);
  }
}
