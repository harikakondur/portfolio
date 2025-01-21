
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
                <div><a href="https://docs.google.com/document/d/e/2PACX-1vQ1xywPoVJDAbpk9yzHt6W76IeL8AiyBUa2CWROh52iq7LhrDCeHpVvbdEFhtq_ysxEgNp_366vqLCl/pub" target="_blank" >resume</a></div>
                <div><a href="https://www.linkedin.com/in/harika-kondur/" target="_blank">linkedin</a></div>
                

            </div>

            
            
        </div>
        

    )
}