import {
  Table,
  Column,
  Model,
  Unique,
  IsEmail,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
} from 'sequelize-typescript';
import { Gender } from './enum/gender';
import { Orders } from './orders.entity';
import { Promotions } from './promotions.entity';

@Table({
  tableName: 'user',
})
export class User extends Model<User> {
  @Column({
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      primaryKey: true,
  })
  id: string;

  @Unique
  @IsEmail
  @Column
  email: string;

  @Column
  password: string;

  @Column({ field: 'first_name' })
  firstName: string;

  @Column({ field: 'last_name' })
  lastName: string;

  @Column({ type: DataType.ENUM(Gender.female, Gender.male) })
  gender: Gender;

  @Column(DataType.DATEONLY)
  birthday: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  role_id: number;

  @Column
  user_groups: string;

  @Column({
    type: DataType.DATE
  })
  verified_at: Date;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;

  @HasMany(() => Orders)
  orders: Orders[];
}
