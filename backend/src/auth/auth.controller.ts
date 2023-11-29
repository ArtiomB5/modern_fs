import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res, Session, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetSessionInfoDto, SignInBodyDto, SignUpBodyDto } from './dto';
import { AuthService } from './auth.service';
import { CookieService } from './cookie.service';
import { Response } from 'express';
import { AuthGuard } from './auth.guard';
import { SessionInfo } from './session-info.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly cookieService: CookieService
  ) {}

  @Post('sign-up')
  @ApiCreatedResponse()
  async signUp(@Body() body: SignUpBodyDto, @Res({ passthrough: true }) res: Response) {
    const { email, password } = body;
    const { accessToken } = await this.authService.signUp(email, password);
    this.cookieService.setToken(res, accessToken);
  }

  @Post('sign-in')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() body: SignInBodyDto, @Res({ passthrough: true }) res: Response) {
    const { email, password } = body;
    const { accessToken } = await this.authService.signIn(email, password);
    this.cookieService.setToken(res, accessToken);
  }

  @Post('sign-out')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  signOut(@Res({ passthrough: true }) res: Response) {
    this.cookieService.removeToken(res);
  }

  @Get('session')
  @ApiOkResponse({
    type: GetSessionInfoDto,
  })
  @UseGuards(AuthGuard)
  getSessionInfo(@SessionInfo() session: GetSessionInfoDto) {
    return session;
  }
}
