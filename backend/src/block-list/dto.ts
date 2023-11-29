import { ApiProperty } from "@nestjs/swagger"
import { IsIn, IsOptional } from "class-validator"
import { BlockItemType } from "@prisma/client";

export class BlockItemDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    blockType: BlockItemType

    @ApiProperty()
    data: string

    @ApiProperty()
    blockListId: number

    @ApiProperty()
    createdAt: Date
}

export class BlockListDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    ownerId: number

    @ApiProperty({
        type: [BlockItemDto],
    })
    items: BlockItemDto[]
}

export class AddBlockItemDto {
    @ApiProperty()
    @IsIn(Object.values(BlockItemType))
    blockType: BlockItemType

    @ApiProperty()
    data: string
}

export class BlockListQueryDto {
    @ApiProperty({nullable: true})
    @IsOptional()
    q?: string
}
