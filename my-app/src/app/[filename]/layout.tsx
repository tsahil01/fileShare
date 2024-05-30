import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "../api/uploadthing/core";
import { Metadata } from "next";
 
 
export const metadata: Metadata = {
  title: "Files | Quick Share - Effortlessly Share Your Files Anywhere!", 
  description: "Here you can view and share your files. Simplify your file sharing experience with our intuitive platform. Seamlessly upload, share, and access your files anytime, anywhere. Start sharing smarter today!",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        {children}
      </body>
    </html>
  );
}