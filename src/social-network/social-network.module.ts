import { Module } from '@nestjs/common';
import { SocialNetworkController } from './social-network.controller';
import { SocialNetworkService } from './social-network.service';

@Module({
  controllers: [SocialNetworkController],
  providers: [SocialNetworkService]
})
export class SocialNetworkModule {}
