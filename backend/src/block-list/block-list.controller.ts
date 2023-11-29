import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiResponse } from '@nestjs/swagger';
import { AddBlockItemDto, BlockItemDto, BlockListDto, BlockListQueryDto } from './dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionInfoDto } from 'src/auth/dto';
import { BlockListService } from './block-list.service';

@Controller('block-list')
@UseGuards(AuthGuard)
export class BlockListController {
    constructor(
        private blockListService: BlockListService
    ) {}
    @Get()
    @ApiResponse({
        type: BlockListDto
    })
    async getList(
        @Query() query: BlockListQueryDto, 
        @SessionInfo() session: GetSessionInfoDto
    ) {
        return await this.blockListService.getByUser(session.id, query);
    }

    @Post('item')
    @ApiCreatedResponse({
        type: BlockItemDto
    })
    async addBlockItem(
        @Body() body: AddBlockItemDto,
        @SessionInfo() session: GetSessionInfoDto
    ){
        return await this.blockListService.addItem(session.id, body);
    }

    @Delete('item/:id')
    @ApiOkResponse()
    async removeBloCkItem(
        @Param('id', ParseIntPipe) id: number,
        @SessionInfo() session: GetSessionInfoDto
    ) {
        return await this.blockListService.removeItem(session.id, id);
    }
}
