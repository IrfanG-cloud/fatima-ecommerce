import React from "react";
import Checkproduct from "./components/Checkproduct";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Promotions from "./components/Promotions";
import { UserButton } from "@clerk/nextjs";


export default async function Home() {
  return (
    <div>
        <UserButton afterSignOutUrl="/"/>
        <Hero />
        <Promotions />
        <Checkproduct />
        <Newsletter />
        

    </div>
  )
}

