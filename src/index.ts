import { Elysia } from "elysia";
import { checkDatabaseConnection } from "./db";
import { userRoutes } from "./routes/user.routes";

const port = Number(process.env.PORT) || 3000;

const app = new Elysia()
  // Root health-check endpoint
  .get("/", () => ({
    name: "Belajar Vibe Coding API",
    status: "running",
    runtime: "Bun",
    framework: "ElysiaJS",
    timestamp: new Date().toISOString(),
  }))
  .get("/health", async () => {
    const isDbConnected = await checkDatabaseConnection();
    return {
      status: "ok",
      database: isDbConnected ? "connected" : "disconnected / unreachable",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  })
  // Mount routes
  .use(userRoutes)
  .listen(port);

console.log(
  `🦊 Elysia server is running at http://${app.server?.hostname}:${app.server?.port}`
);

// Optional initial DB connectivity check on startup
checkDatabaseConnection().then((connected) => {
  if (connected) {
    console.log("🗄️ MySQL database connected successfully.");
  } else {
    console.log("ℹ️ MySQL not connected yet. Check your .env configuration when MySQL is running.");
  }
});

export type App = typeof app;
