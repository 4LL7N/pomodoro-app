import { useEffect } from "react"
import Head from "./Head"
import Menu from "./Menu"
import { Outlet, useNavigate } from "react-router-dom"


function Layout(props:{setPage:any,page:number,menu:boolean,setMenu:any,setFont:any,font:number,color:number,setColor:any,pomodoro:number,setPomodoro:any,shortBreak:number,setShortBreak:any,longBreak:number,setLongBreak:any,setResult:any,pause:boolean,setPause:any}){
    //pageParams:string|null,
    const naviget = useNavigate()
    

    useEffect(() => {

        naviget("/pomodoro")
     },[])
    return(
        <>
        <div className="flex flex-col items-center bg-[#1E213F] min-h-[100vh] overflow-hidden " >
            
            <Head setPage={props.setPage} page={props.page} font={props.font} color={props.color} />
            <Outlet />
            <div className={`w-[100%] h-[100%] bg-[#0A0C1C80] ${props.menu?"duration-700 absolute top-0":"bg-transparent"}`} />
            <Menu menu={props.menu} setMenu={props.setMenu} font={props.font} setFont={props.setFont} color={props.color}  setColor={props.setColor} pomodoro={props.pomodoro} setPomodoro={props.setPomodoro}  shortBreak={props.shortBreak} setShortBreak={props.setShortBreak}  longBreak={props.longBreak} setLongBreak={props.setLongBreak} setResult={props.setResult} pause={props.pause} setPause={props.setPause}/>
            {/* pageParams={props.pageParams} */}
        </div> 
        </>
    )
}
export default Layout