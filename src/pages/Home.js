
import { useNavigate } from "react-router"

export default function Home(){

    const navigate = useNavigate()

    return(
        <div className="bg-light-purple h-screen relative flex flex-col justify-center items-center">

            <div className="text-6xl font-mono tracking-widest text-center sm:text-6xl md:text-8xl">
                <span>harika </span>
                <span>kondur</span>
            </div>

            <div className="mt-8 font-mono italic p-2 items-center text-center text-md space-y-2">
                <div  className= "hover:text-lime-600" onClick={() => navigate('/projects')}>projects</div>
                <div className= "hover:text-lime-600"><a href="https://github.com/harikakondur" target="_blank">github</a></div>
                <div className= "hover:text-lime-600"><a href="https://docs.google.com/document/d/e/2PACX-1vTtEgxaOa7EwZEfFHwbpqGA_n-XLpu8kYJe_oB7gJ_wtuzf0NyK-_orOXfsqhKNp_MCqZV5-eYYSKGj/pub" target="_blank" >resume</a></div>
                <div className= "hover:text-lime-600"><a href="https://www.linkedin.com/in/harika-kondur/" target="_blank">linkedin</a></div>
                

            </div>        
        </div>
        

    )
}