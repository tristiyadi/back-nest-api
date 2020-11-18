import { ApiProperty } from '@nestjs/swagger';
import { Promotions } from './../entity/promotions.entity';

export class PromotionsDto {
    @ApiProperty()
    readonly id: number;

    // @ApiProperty()
    // readonly orders_id: number;

    @ApiProperty()
    readonly discount: number;

    @ApiProperty()
    readonly created_at: Date;

    @ApiProperty()
    readonly updated_at: Date;

    constructor(_d: Promotions) {
        this.id = _d.id;
        // this.orders_id = _d.orders_id;
        this.discount = _d.discount;
        this.created_at = _d.created_at;
        this.updated_at = _d.updated_at;
    }
}
