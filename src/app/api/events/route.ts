import { NextRequest, NextResponse } from "next/server";
import { HasAllKeys } from "@/lib/dict_helper";
import { Filter, Document } from "mongodb";
import { GetEvents } from "@/lib/database";
import { getServerSession } from "next-auth";

const KEYS: string[] = [
    "nombre",
    "timestamp",
    "lugar",
    "imagen"
];

export async function GET(request: NextRequest) {
    const events = await GetEvents();

    //Filter
    const params = request.nextUrl.searchParams;
    const filter: Filter<Document> = {$and: []};
    

    //En el caso de que el and este vacio, hay que borrar el and porque sino no funciona
    if(filter.$and?.length === 0) {
        delete filter.$and;
    }
    const res = await events.find(filter).toArray();

    return NextResponse.json(
        res,
        {
            status : 200
        }
    );
}

// Insert
export async function POST(request: NextRequest){
    const events = await GetEvents();
    const json = await request.json();
    const session = await getServerSession();


    if(!HasAllKeys(json, KEYS)){
        return NextResponse.json(
            {msg: "Faltan atributos"},
            {
                status: 406
            }
        );
    }

    json["organizador"] = session?.user?.email;

    const result = await events.insertOne(json);
    const status = result.acknowledged? 201: 500;
    const id = result.insertedId;

    return NextResponse.json(
        {
            id: id
        },
        {
            status: status
        }
    );
}