import { GetEvents } from "@/lib/database";
import { HasCorrectKeys } from "@/lib/dict_helper";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { GetIdFilter, Params } from "@/lib/route-helper";

interface RouteParams {
    id: string
}

const KEYS: string[] = [
    "nombre"
];

export async function GET(_: NextRequest, {params}: Params<RouteParams>) {
    const id = params.id;

    if(!ObjectId.isValid(id)) {
        return NextResponse.json({}, {status: 406});
    }

    const event = await GetEvents();

    const res = await event.findOne(GetIdFilter(id));

    if(!res) {
        return NextResponse.json({}, {status: 404});
    }

    return NextResponse.json(res, {status: 200});
}

export async function DELETE(_: NextRequest, {params}: Params<RouteParams>) {
    const id = params.id;

    if(!ObjectId.isValid(id)) {
        return NextResponse.json({}, {status: 406});
    }

    const event = await GetEvents();

    const res = await event.deleteOne(GetIdFilter(id));

    const status = res.acknowledged ? 200: 500;

    return NextResponse.json(
        {},
        {
            status: status
        }
    );
}

export async function PUT(request: NextRequest, {params}: Params<RouteParams>) {
    const id = params.id;

    if(!ObjectId.isValid(id)) {
        return NextResponse.json({}, {status: 406});
    }

    const json = await request.json();

    const event = await GetEvents();

    if(!HasCorrectKeys(json, KEYS)) {
        return NextResponse.json({}, {status: 406});
    }

    const res = await event.updateOne(
        GetIdFilter(id),
        {
            $set: json
        }
    );

    if(res.matchedCount === 0) {
        return NextResponse.json({}, {status: 404});
    }

    return NextResponse.json({}, {status: 200});
}
