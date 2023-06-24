"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendrequest = exports.friendlist = void 0;
var mysql_core_1 = require("drizzle-orm/mysql-core");
// database schemas
exports.friendlist = (0, mysql_core_1.mysqlTable)("friendlist", {
    id: (0, mysql_core_1.int)("id").primaryKey().autoincrement(),
    userId: (0, mysql_core_1.varchar)("userId", { length: 50 }).notNull(),
    friendId: (0, mysql_core_1.varchar)("friendId", { length: 50 }).notNull(),
    friendImage: (0, mysql_core_1.varchar)("friendImage", { length: 256 }),
    friendName: (0, mysql_core_1.varchar)("friendName", { length: 50 }).notNull(),
    created_at: (0, mysql_core_1.timestamp)("created_at").defaultNow(),
    status: (0, mysql_core_1.mysqlEnum)("status", ["friend", "pending"])
        .default("pending")
        .notNull(),
});
exports.friendrequest = (0, mysql_core_1.mysqlTable)("friendrequest", {
    id: (0, mysql_core_1.int)("id").primaryKey().autoincrement(),
    receiverId: (0, mysql_core_1.varchar)("receiverId", { length: 50 }),
    senderId: (0, mysql_core_1.varchar)("senderId", { length: 50 }),
    senderName: (0, mysql_core_1.varchar)("senderId", { length: 50 }),
    senderImage: (0, mysql_core_1.varchar)("senderId", { length: 256 }),
}, function (table) { return ({
    singleRequest: (0, mysql_core_1.uniqueIndex)("singleRequest").on(table.senderId, table.receiverId),
}); });
