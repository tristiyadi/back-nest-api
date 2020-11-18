import { User } from './../entity/user.entity';
import { Gender } from './../entity/enum/gender';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    readonly email: string;

    @ApiProperty()
    readonly firstName: string;

    @ApiProperty()
    readonly lastName: string;

    @ApiProperty()
    readonly gender: Gender;

    @ApiProperty()
    readonly birthday: string;
    
    @ApiProperty()
    readonly role_id: number;

    @ApiProperty()
    readonly user_groups: string;

    @ApiProperty()
    readonly verified_at: Date;

    constructor(user: User) {
        this.id = user.id;
        this.email = user.email;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.gender = user.gender;
        this.birthday = user.birthday;
        this.role_id = user.role_id;
        this.user_groups = user.user_groups;
        this.verified_at = user.verified_at;
    }
}
