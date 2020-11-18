import { Injectable, Inject } from '@nestjs/common';

import { Promotions } from '../../core/entity/promotions.entity';
import { PromotionsDto } from '../../core/dto/promotions.dto';
import { Orders } from '../../core/entity/orders.entity';
import { User } from '../../core/entity/user.entity';
import { PROMOTIONS_REPOSITORY } from '../../core/constants';

@Injectable()
export class PromotionsService {
  constructor(
    @Inject(PROMOTIONS_REPOSITORY) private readonly promotionsRepository: typeof Promotions,
  ) {}

  async create(promotions: PromotionsDto, user_id): Promise<Promotions> {
    return await this.promotionsRepository.create<Promotions>({ ...promotions, user_id });
  }

  async findAll(): Promise<Promotions[]> {
    return await this.promotionsRepository.findAll<Promotions>({
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }

  async findOne(id): Promise<Promotions> {
    return await this.promotionsRepository.findOne({
      where: { id },
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }

  async delete(id, user_id) {
    return await this.promotionsRepository.destroy({ where: { id, user_id } });
  }

  async update(id, data, user_id) {
    const [
      numberOfAffectedRows,
      [updatedPromotions],
    ] = await this.promotionsRepository.update(
      { ...data },
      { where: { id, user_id }, returning: true },
    );
    return { numberOfAffectedRows, updatedPromotions };
  }
}
