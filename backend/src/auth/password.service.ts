import { Injectable } from '@nestjs/common';
import { randomBytes, pbkdf2 } from 'crypto';
import { promisify } from 'util';
@Injectable()
export class PasswordService {
  getSalt() {
    return randomBytes(16).toString('hex');
  }

  async getHash(password: string, salt: string) {
    const pbkdf2 = promisify(require('crypto').pbkdf2);
    const derivedKey = await pbkdf2(password, salt, 1000, 64, 'sha512');
    return derivedKey.toString('hex');
  }
}
