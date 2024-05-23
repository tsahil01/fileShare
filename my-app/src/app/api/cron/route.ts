import prisma from "@/utils/db";
import { NextRequest } from "next/server";
import { UTApi } from "uploadthing/server";

export async function GET(req: NextRequest) {

  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }
  console.log("Deleting all files now");
    try{
        let allFiles = await prisma.file.findMany();
        let count = 0;
        for (let file of allFiles) {

            const utapi = new UTApi();
            const upt = await utapi.deleteFiles(file.key);

            const neondb = await prisma.file.delete({
                where: {
                    id: file.id
                }
            });

            console.log("Uploadthing: ",upt);
            console.log("NeonDB: ",neondb);
            count++;
        }
        return new Response(JSON.stringify({
          msg: "Deleted",
          count: count
        }))
      }
      catch(e){
        console.log("Error: ",e);
        return new Response(JSON.stringify({
          msg: "Error",
          error: e
        }))
      }
  }

// export async function GET(req: NextRequest) {
//   const authHeader = req.headers.get('authorization');
//   if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
//     return new Response('Unauthorized', {
//       status: 401,
//     });
//   }
//   return new Response(JSON.stringify({
//     msg: "Hello from CRON"
//   }))
// }