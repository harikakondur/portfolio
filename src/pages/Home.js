
import Header from "../components/Header"
import { useEffect, useState } from "react";


export default function Home(){

    

    return(
        <div className="bg-light-purple h-screen relative flex justify-center items-center">

            <div className="fixed top-0 right-0 h-full bg-purple-100 flex flex-col justify-start items-center shadow-md p-16 space-y-2">
                <a href="https://github.com/harikakondur" target="_blank" class="underline italic">GitHub</a>
                <a href="https://docs.google.com/document/d/e/2PACX-1vQ1xywPoVJDAbpk9yzHt6W76IeL8AiyBUa2CWROh52iq7LhrDCeHpVvbdEFhtq_ysxEgNp_366vqLCl/pub" target="_blank" class="underline italic">Resume</a>
                <a href="https://www.linkedin.com/in/harika-kondur/" target="_blank" class="underline italic">LinkedIn</a>
            </div>

            <div className="text-center text-gray-800">
                <h1 className="text-4xl font-bold"> Homepage</h1>
                <p className="text-lg mt-2">Hi my name is Harika Kondur</p>
            </div>
            
        </div>
        

    )
}