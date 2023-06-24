import { PrismaClient } from "@prisma/client";
declare global {
    var cachedPrisma: PrismaClient;
}
export declare const db: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
//# sourceMappingURL=prismaDb.d.ts.map