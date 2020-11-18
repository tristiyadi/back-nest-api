import { Promotions } from '../../core/entity/promotions.entity';
import { PROMOTIONS_REPOSITORY } from '../../core/constants';

export const promotionsProviders = [
    {
        provide: PROMOTIONS_REPOSITORY,
        useValue: Promotions,
    },
];
