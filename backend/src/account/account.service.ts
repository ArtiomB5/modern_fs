import { Injectable } from '@nestjs/common';
import { AccountDto, PatchAccountDto } from './dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class AccountService {
    constructor(private db: DbService) { }

    async createAccount(userId: number): Promise<AccountDto> {
        return await this.db.account.create({
            data: {
                ownerId: userId,
                isBlockingEnabled: false
            }
        })
    }

    async getAccount(userId: number): Promise<AccountDto> {
        return await this.db.account.findUniqueOrThrow({ where: { ownerId: userId } })
    }

    async patchAccount(userId: number, patch: PatchAccountDto): Promise<AccountDto> {
        return await this.db.account.update({
            where: { ownerId: userId },
            data: { ...patch }
        })
    }
}
