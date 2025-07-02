import * as sqlite from 'drizzle-orm/sqlite-core';

export const user = sqlite.sqliteTable('user', {
  id: sqlite.text().primaryKey(),
  name: sqlite.text().notNull(),
  email: sqlite.text().notNull().unique(),
  emailVerified: sqlite.integer({ mode: 'boolean' }).$defaultFn(() => false).notNull(),
  image: sqlite.text(),
  createdAt: sqlite.integer({ mode: 'timestamp' }).$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
  updatedAt: sqlite.integer({ mode: 'timestamp' }).$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
});

export const session = sqlite.sqliteTable('session', {
  id: sqlite.text().primaryKey(),
  expiresAt: sqlite.integer({ mode: 'timestamp' }).notNull(),
  token: sqlite.text().notNull().unique(),
  createdAt: sqlite.integer({ mode: 'timestamp' }).notNull(),
  updatedAt: sqlite.integer({ mode: 'timestamp' }).notNull(),
  ipAddress: sqlite.text(),
  userAgent: sqlite.text(),
  userId: sqlite.text().notNull().references(() => user.id, { onDelete: 'cascade' }),
});

export const account = sqlite.sqliteTable('account', {
  id: sqlite.text().primaryKey(),
  accountId: sqlite.text().notNull(),
  providerId: sqlite.text().notNull(),
  userId: sqlite.text().notNull().references(() => user.id, { onDelete: 'cascade' }),
  accessToken: sqlite.text(),
  refreshToken: sqlite.text(),
  idToken: sqlite.text(),
  accessTokenExpiresAt: sqlite.integer({ mode: 'timestamp' }),
  refreshTokenExpiresAt: sqlite.integer({ mode: 'timestamp' }),
  scope: sqlite.text(),
  password: sqlite.text(),
  createdAt: sqlite.integer({ mode: 'timestamp' }).notNull(),
  updatedAt: sqlite.integer({ mode: 'timestamp' }).notNull(),
});

export const verification = sqlite.sqliteTable('verification', {
  id: sqlite.text().primaryKey(),
  identifier: sqlite.text().notNull(),
  value: sqlite.text().notNull(),
  expiresAt: sqlite.integer({ mode: 'timestamp' }).notNull(),
  createdAt: sqlite.integer({ mode: 'timestamp' }).$defaultFn(() => /* @__PURE__ */ new Date()),
  updatedAt: sqlite.integer({ mode: 'timestamp' }).$defaultFn(() => /* @__PURE__ */ new Date()),
});
