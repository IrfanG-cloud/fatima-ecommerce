// import { NextRequest, NextResponse } from 'next/server'
// import { db, cartTable } from '../../../lib/drizzle'

// import { v4 as uuid } from "uuid"
// import { cookies } from 'next/dist/client/components/headers'

// export const GET= async () => {

//     try{
//         const res = await db.select().from(cartTable)
//         return NextResponse.json({res})
//     } catch(error){
//         console.log(error)
//         return NextResponse.json({ message: "Something went wrong"})
//     }
// }

// export const POST= async (request: Request) => {
//     const req = await request.json();

//     const uid = uuid();     // uuid make random userid

//     const setCookies = cookies(); // cookies() add userid in cookies

//     // console.log(cookies().get("user_id")?.value)

//     setCookies.set("user_id", uid)

//     const user_id = cookies().get("user_id")
//     if(!user_id) {
//         setCookies.set("user_id", uid)  // set user-id in cookies
//     }
    
//     try{
//         const res = await db.insert(cartTable).values({
//             product_id: req.product_id,
//             quantity: 1,
//             user_id: cookies().get("user_id")?.value as string
//         })
//         return NextResponse.json({res})
//     } catch(error){

//     }
// }