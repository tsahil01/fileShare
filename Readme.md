# File Sharing Application
- An application where user can upload files.
- Files are stored in the server for 24 hrs.
- Files can be accessed by anyone by visiting the `url/filename`.
- Will be using NextJS for frontend and backend and either Uploadthing or AWS S3 to store files.
- Files will be rendered on the user screen using `<iframe/>` tag or any other alternative.
- If a user visits `url/abc`, there might be two conditions,
    - Either already a file exist or no file exist.
    - If no file exist then user will get an upload btn where they can upload the file.
    - If the file exist, it will appear on that page which would be visible for 24hrs from the time of uploading of the file.

## Tech Stack - 
- NextJS
- Tailwind
- ShadCN
- Uploadthing or AWS S3
- Prisma using Postgres.

## Future Idea - 
- A user can go to any `/filename` but can only see files without login.
- To upload files a user have to login so that that user cannot upload `max x` number of files in a day.