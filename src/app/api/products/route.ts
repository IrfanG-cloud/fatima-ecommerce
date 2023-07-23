import { createClient } from "next-sanity";   // createClient use for connection
import { NextResponse } from "next/server";

const client = createClient({
    projectId:`${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
    dataset:`${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    apiVersion: "2022-03-25",
    useCdn: false

})

export async function GET(){
    try {
        let response= await client.fetch(`*[_type == "product"]`)
        return NextResponse.json({response})
    }
    catch(error){
        return NextResponse.json({"Error": error})
    }
}