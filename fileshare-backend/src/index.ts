import { Hono } from "hono";
import ut from "./uploadthing";
import { cors } from "hono/cors";
 
const app = new Hono();
app.use(cors());

app.route("/api/uploadthing", ut);

app.get("/", (c) =>
  c.text("Hello, world!")
)

export default app