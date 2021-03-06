import { PrismaClient } from '@prisma/client'

export class UserLoader {
  constructor(private client: PrismaClient) {}

  public async load(username: string) {
    return await this.client.user.findUnique({ where: { username: username } })
  }

  public async loadById(id: string) {
    return await this.client.user.findUnique({ where: { id } })
  }
}
