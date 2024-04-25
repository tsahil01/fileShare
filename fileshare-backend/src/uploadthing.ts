import { Hono } from "hono";
import { createRouteHandler, createUploadthing, type FileRouter } from "uploadthing/server";
 
const f = createUploadthing();
 
export const uploadRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 4,
    },
  }).onUploadComplete((data) => {
    console.log("upload completed", data);
  }),
} satisfies FileRouter;
 


const { GET, POST } = createRouteHandler({
    router: uploadRouter,
    config: { 
        uploadthingSecret: "",
        uploadthingId: ""

     },
  });


const ut = new Hono()
  .get("/", (context) => GET(context.req.raw))
  .post("/", (context) => POST(context.req.raw));

export default ut;