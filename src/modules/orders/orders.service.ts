import { Injectable, Inject } from '@nestjs/common';

import { Orders } from './../../core/entity/orders.entity';
import { OrdersDto } from '../../core/dto/orders.dto';
import { User } from './../../core/entity/user.entity';
import { ORDERS_REPOSITORY } from '../../core/constants';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(ORDERS_REPOSITORY) private readonly ordersRepository: typeof Orders,
  ) {}

  async create(orders: OrdersDto, user_id): Promise<Orders> {
    return await this.ordersRepository.create<Orders>({ ...orders, user_id });
  }

  async findAll(): Promise<Orders[]> {
    return await this.ordersRepository.findAll<Orders>({
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }

  async findOne(id): Promise<Orders> {
    return await this.ordersRepository.findOne({
      where: { id },
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }

  async delete(id, user_id) {
    return await this.ordersRepository.destroy({ where: { id, user_id } });
  }

  async update(id, data, user_id) {
    const [
      numberOfAffectedRows,
      [updatedOrders],
    ] = await this.ordersRepository.update(
      { ...data },
      { where: { id, user_id }, returning: true },
    );
    return { numberOfAffectedRows, updatedOrders };
  }
}
