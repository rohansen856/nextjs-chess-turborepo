export declare const friendlist: import("drizzle-orm/select.types.d-e43b2599").ar<{
    name: "friendlist";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlInt<{
            tableName: "friendlist";
            name: "id";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
        }>;
        userId: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "friendlist";
            name: "userId";
            data: string;
            driverParam: string | number;
            hasDefault: false;
            enumValues: [string, ...string[]];
            notNull: true;
        }>;
        friendId: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "friendlist";
            name: "friendId";
            data: string;
            driverParam: string | number;
            hasDefault: false;
            enumValues: [string, ...string[]];
            notNull: true;
        }>;
        friendImage: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "friendlist";
            name: "friendImage";
            data: string;
            driverParam: string | number;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        friendName: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "friendlist";
            name: "friendName";
            data: string;
            driverParam: string | number;
            hasDefault: false;
            enumValues: [string, ...string[]];
            notNull: true;
        }>;
        created_at: import("drizzle-orm/mysql-core").MySqlTimestamp<{
            tableName: "friendlist";
            name: "created_at";
            data: Date;
            driverParam: string | number;
            notNull: false;
            hasDefault: true;
        }>;
        status: import("drizzle-orm/mysql-core").MySqlEnumColumn<{
            tableName: "friendlist";
            name: "status";
            data: "friend" | "pending";
            driverParam: string;
            hasDefault: true;
            enumValues: ["friend", "pending"];
            notNull: true;
        }>;
    };
}>;
export declare const friendrequest: import("drizzle-orm/select.types.d-e43b2599").ar<{
    name: "friendrequest";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlInt<{
            tableName: "friendrequest";
            name: "id";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
        }>;
        receiverId: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "friendrequest";
            name: "receiverId";
            data: string;
            driverParam: string | number;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        senderId: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "friendrequest";
            name: "senderId";
            data: string;
            driverParam: string | number;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        senderName: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "friendrequest";
            name: "senderId";
            data: string;
            driverParam: string | number;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        senderImage: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "friendrequest";
            name: "senderId";
            data: string;
            driverParam: string | number;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
    };
}>;
//# sourceMappingURL=drizzleDb.schema.d.ts.map