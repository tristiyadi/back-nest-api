import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  UseGuards,
  Req,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOkResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';

import { PromotionsService } from './promotions.service';
import { Promotions as PromotionsEntity } from '../../core/entity/promotions.entity';
import { PromotionsDto } from '../../core/dto/promotions.dto';

@Controller('promotions')
@ApiTags('promotions')
export class PromotionsController {
  constructor(private readonly promotionsService: PromotionsService) {}

  @Get()
  @ApiOkResponse({ type: PromotionsDto })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    // get all promotions in the db
    return await this.promotionsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PromotionsDto })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: number): Promise<PromotionsEntity> {
    // find the promotions with this id
    const promotions = await this.promotionsService.findOne(id);

    // if the promotions doesn't exit in the db, throw a 404 error
    if (!promotions) {
      throw new NotFoundException("This promotions doesn't exist");
    }

    // if promotions exist, return the promotions
    return promotions;
  }

  @Post()
  @ApiOkResponse({ type: PromotionsDto })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async create(
    @Body() promotions: PromotionsDto,
    @Req() req,
  ): Promise<PromotionsEntity> {
    // create a new promotions and return the newly created promotions
    return await this.promotionsService.create(promotions, req.user.id);
  }

  @Put(':id')
  @ApiOkResponse({ type: PromotionsDto })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async update(
    @Param('id') id: number,
    @Body() promotions: PromotionsDto,
    @Req() req,
  ): Promise<PromotionsEntity> {
    // get the number of row affected and the updated promotions
    const {
      numberOfAffectedRows,
      updatedPromotions,
    } = await this.promotionsService.update(id, promotions, req.user.id);

    // if the number of row affected is zero, it means the promotions doesn't exist in our db
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This promotions doesn't exist");
    }

    // return the updated promotions
    return updatedPromotions;
  }

  @Delete(':id')
  @ApiOkResponse({ type: PromotionsDto })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: number, @Req() req) {
    // delete the promotions with this id
    const deleted = await this.promotionsService.delete(id, req.user.id);

    // if the number of row affected is zero, then the promotions doesn't exist in our db
    if (deleted === 0) {
      throw new NotFoundException("This promotions doesn't exist");
    }

    // return success message
    return 'Successfully deleted';
  }
}
