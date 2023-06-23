import {
  mysqlEnum,
  mysqlTable,
  int,
  varchar,
  uniqueIndex,
  timestamp,
} from "drizzle-orm/mysql-core"

// database schemas
export const friendlist = mysqlTable("friendlist", {
  id: int("id").primaryKey().autoincrement(),
  userId: varchar("userId", { length: 50 }).notNull(),
  friendId: varchar("friendId", { length: 50 }).notNull(),
  friendImage: varchar("friendImage", { length: 256 }),
  friendName: varchar("friendName", { length: 50 }).notNull(),
  created_at: timestamp("created_at").defaultNow(),
  status: mysqlEnum("status", ["friend", "pending"])
    .default("pending")
    .notNull(),
})

export const friendrequest = mysqlTable(
  "friendrequest",
  {
    id: int("id").primaryKey().autoincrement(),
    receiverId: varchar("receiverId", { length: 50 }),
    senderId: varchar("senderId", { length: 50 }),
    senderName: varchar("senderId", { length: 50 }),
    senderImage: varchar("senderId", { length: 256 }),
  },
  (table) => ({
    singleRequest: uniqueIndex("singleRequest").on(
      table.senderId,
      table.receiverId
    ),
  })
)
