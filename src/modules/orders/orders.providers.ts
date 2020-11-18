import { Orders } from '../../core/entity/orders.entity';
import { ORDERS_REPOSITORY } from '../../core/constants';

export const ordersProviders = [
    {
        provide: ORDERS_REPOSITORY,
        useValue: Orders,
    },
];
