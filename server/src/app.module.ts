import { Module } from '@nestjs/common';
import { VideoGateway } from './app/app.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [VideoGateway],
})
export class AppModule {}
