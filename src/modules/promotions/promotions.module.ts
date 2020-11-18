import { Module } from '@nestjs/common';

import { PromotionsService } from './promotions.service';
import { PromotionsController } from './promotions.controller';
import { promotionsProviders } from './promotions.providers';

@Module({
  providers: [PromotionsService, ...promotionsProviders],
  controllers: [PromotionsController],
})
export class PromotionsModule {}
