
import { useNavigate } from "react-router"

export default function Home(){

    const navigate = useNavigate()



    

    return(
        <div className="bg-light-purple h-screen relative flex flex-col justify-center items-center">

            

            <div className="text-6xl font-mono tracking-widest">
                <span>harika </span> 
                <span>kondu</span>
                <span>r</span>
            </div>

            <div className="mt-4 font-mono italic p-2 items-center text-md">
                <div  onClick={() => navigate('/projects')}>projects</div>
                <div><a href="https://github.com/harikakondur" target="_blank">github</a></div>
                <div><a href="https://docs.google.com/document/d/e/2PACX-1vTueuYxIGag7Q6V4_dJTP4plmAIJGgCYeT218Uc4SM_7crc6ZVSQT5QzpxHQ7jUPWT0eyBBYT0wcJpJ/pub" target="_blank" >resume</a></div>
                <div><a href="https://www.linkedin.com/in/harika-kondur/" target="_blank">linkedin</a></div>
                

            </div>

            
            
        </div>
        

    )
}