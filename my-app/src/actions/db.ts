"use server";

import prisma from "@/utils/db";

export async function checkSubdirectory(filename: string){
    const res = await prisma.file.findFirst({
        where: {
            subdirectory: filename
        }
    });
    if(res){
        return res.url;
    }
    return "";
}

export async function dbPush(file: {name: string, key: string, url: string, size: number, type: string }, subdirectory: string) {
    try {
        const res = await prisma.file.create({
            data: {
                name: file.name,
                key: file.key,
                url: file.url,
                size: file.size,
                type: file.type,
                subdirectory: subdirectory

            }
        });
        return res.id;

    } catch (error) {
        console.log(error);
        return null;
    }
}