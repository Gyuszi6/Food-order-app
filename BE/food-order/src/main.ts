import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(
    cookieSession({
      keys: ['dsadfsfda'],
    }),
  );
  await app.listen(8000);
}
bootstrap();
