import { Elysia, t } from "elysia";
import { db, users } from "../db";
import { eq } from "drizzle-orm";

export const userRoutes = new Elysia({ prefix: "/api/users" })
  .get("/", async () => {
    try {
      const allUsers = await db.select().from(users);
      return { success: true, data: allUsers };
    } catch (error) {
      return {
        success: false,
        message: "Failed to fetch users (ensure MySQL is running and migrations are applied)",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  })
  .get("/:id", async ({ params: { id }, set }) => {
    try {
      const [user] = await db.select().from(users).where(eq(users.id, Number(id)));
      if (!user) {
        set.status = 404;
        return { success: false, message: "User not found" };
      }
      return { success: true, data: user };
    } catch (error) {
      set.status = 500;
      return {
        success: false,
        message: "Failed to fetch user",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  })
  .post(
    "/",
    async ({ body, set }) => {
      try {
        const result = await db.insert(users).values({
          name: body.name,
          email: body.email,
          bio: body.bio ?? null,
        });

        set.status = 201;
        return {
          success: true,
          message: "User created successfully",
          insertedId: result[0]?.insertId,
        };
      } catch (error) {
        set.status = 500;
        return {
          success: false,
          message: "Failed to create user",
          error: error instanceof Error ? error.message : "Unknown error",
        };
      }
    },
    {
      body: t.Object({
        name: t.String({ minLength: 1 }),
        email: t.String(),
        bio: t.Optional(t.String()),
      }),
    }
  )
  .delete("/:id", async ({ params: { id }, set }) => {
    try {
      await db.delete(users).where(eq(users.id, Number(id)));
      return { success: true, message: `User ${id} deleted successfully` };
    } catch (error) {
      set.status = 500;
      return {
        success: false,
        message: "Failed to delete user",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  });
