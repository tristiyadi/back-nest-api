import { User } from '../shared/entity/user.entity';
import { USER_REPOSITORY } from '../../core/constants';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
