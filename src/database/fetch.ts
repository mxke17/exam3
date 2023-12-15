import { error } from "console";

const uri = process.env["NEXTAUTH_URL"] as string;
if(!uri) {
    error("You need to specify NEXTAUTH_URL in .env");
}

export async function Get(path: string) {
    return await fetch(uri + "api/" + path);
}

export async function Post(path: string, data: any) {
    return await fetch(uri + "api/" + path, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    });
}

export async function PostFormData(path: string, data: FormData) {
    return await fetch(uri + "api/" + path, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: data
    });
}