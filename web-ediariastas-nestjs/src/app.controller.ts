import {
  Controller,
  Get,
  Render,
  Post,
  Redirect,
  UseGuards,
  UseFilters,
  Request,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './commom/guards/login.guard';
import { AuthException } from './commom/filters/auth-exceptions.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('admin/login')
  @Render('login')
  getLogin(@Request() req) {
    return {
      layout: false,
      loginError: req.flash('loginError'),
      class: req.flash('class'),
    };
  }

  @UseGuards(LoginGuard)
  @UseFilters(AuthException)
  @Post('admin/login')
  @Redirect('/admin/usuarios/index')
  doLogin() {
    //
  }
}
