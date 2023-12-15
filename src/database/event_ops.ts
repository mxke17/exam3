"use server";

//import { NewAuctionJSON } from "./auctions";
import { Post, PostFormData } from "./fetch";

const PATH = "events";

//export async function CreateNewEvent(event: NewAuctionJSON) {
    //return await Post(PATH, event);
//}


export async function NewEventFromForm(formData: FormData, user: string) {
    const nombre = formData.get("eventName");
    const timestamp = formData.get("date");
    const picture = formData.get("picture") as File;

    if(!nombre || !timestamp || !picture) {
        return;
    }

    const imageFormData = new FormData();
    imageFormData.set("file", picture);

    const imageResponse = await PostFormData("images", imageFormData);
    if(imageResponse.status !== 200) {
        return;
    }

    const imageResponseJson = await imageResponse.json();
    const url = imageResponseJson.imageUrl;

    //const newEvent = await CreateNewEvent({
        //nombre: nombre as string,
        //"timestamp": new Date(timestamp as string),
        //Foto: url,
    //});

    //return await newEvent.json();
}