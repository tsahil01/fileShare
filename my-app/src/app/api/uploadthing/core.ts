import prisma from "@/utils/db";
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
// FileRouter for your app, can contain multiple FileRoutes

export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
  .onUploadError(async ({ error }) => {
        // This code RUNS ON YOUR SERVER after upload
        console.log("Upload error:", error);
        return { success: false, error: error.message };
    })
  .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
    //   const dbFile = await dbPush(file, "image");
    //   if (!dbFile) {
    //       return { success: false, error: "Database error" };
    //   } 
      console.log("Upload complete for file:", file);
      console.log("file url: ", file.url);
    //   console.log("Neon DB: ", dbFile);
 
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { success: true, url: file.url };
    }),

    pdfUploader: f({ pdf: { maxFileSize: "4MB" } })
    .onUploadError(async ({ error }) => {
        // This code RUNS ON YOUR SERVER after upload
        console.log("Upload error:", error);
        return { success: false, error: error.message };
    })
    .onUploadComplete(async ({ metadata, file }) => {
        // This code RUNS ON YOUR SERVER after upload
        
        // const dbFile = await dbPush(file, "pdf");
        // if (!dbFile) {
        //     return { success: false, error: "Database error" };
        // } 
        console.log("Upload complete for file:", file);
        console.log("file url: ", file.url);
        // console.log("Neon DB: ", dbFile);
 
        // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
        return { success: true, url: file.url }  
    }),
    
};

export type ourFileRouter = typeof ourFileRouter;

