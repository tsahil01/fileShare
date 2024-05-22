import { UTApi } from "uploadthing/server";

export async function DELETE() {
    try{
        // const url = data.url.substring(data.url.lastIndexOf("/") + 1);
        const url = "e9314c87-d073-4f23-a330-5ce3cd9b93e0-65y24m.pdf"
        const utapi = new UTApi();
        const res = await utapi.deleteFiles(url);
        return new Response(JSON.stringify({
          msg: "Deleted",
          res: res
        }))
      }
      catch(e){
        return new Response(JSON.stringify({
          msg: "Error",
          error: e
        }))
      }
  }

export async function GET(req: Request) {
  return new Response(JSON.stringify({
    msg: "Hello from CRON"
  }))
}