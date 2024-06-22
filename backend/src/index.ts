import { Hono } from "hono";
import { cors } from "hono/cors";
import { userRouter } from "./routes/user";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();
app.use("/*", cors());
app.route("app/v1/user", userRouter);
export default app;
