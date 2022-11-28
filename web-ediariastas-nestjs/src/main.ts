import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as methodOverride from 'method-override';
import * as exphbs from 'express-handlebars';
import * as session from 'express-session';
import flash = require('connect-flash');
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const viewPath = join(__dirname, '..', 'views');
  app.useGlobalPipes(new ValidationPipe());

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(viewPath);
  app.setViewEngine('hbs');
  app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'main' }));

  app.use(methodOverride('_method'));

  app.use(
    session({
      secret: 'nest-ediaristas',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(flash());
  await app.listen(3000);
}
bootstrap();
