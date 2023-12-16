
function Menu(props:{menu:boolean,setMenu:any,setFont:any,font:number,color:number,setColor:any,pomodoro:number,setPomodoro:any,shortBreak:number,setShortBreak:any,longBreak:number,setLongBreak:any,setResult:any,pause:boolean,setPause:any}){
    // console.log(props.pomodoro);  ,pageParams:string|null
    
    
    

    // useEffect(()=>{


    //     if(props.pageParams == "pomodoro"){
            
    //         minute.current = props.pomodoro
    //         console.log("pomodor "+minute.current);
        
    //     }else if(props.pageParams == "shortbreak"){
    //         minute.current = props.shortBreak
    //         console.log("shortbreak "+minute.current);

    //     }else if(props.pageParams == "longbreak"){
    //         minute.current = props.longBreak
    //         console.log("longbreak "+minute.current);

    //     }


    // },[])

    // useEffect(()=>{

    //     clearInterval(timer)
    //     props.setStartInterval(false)
    //     props.setPause(false)

    //     if(props.pageParams == "pomodoro"){
    //         console.log("close");
    //         minute.current = props.pomodoro
    //         console.log("pomodor "+minute.current);
        
    //     }else if(props.pageParams == "shortbreak"){
    //         console.log("close");
    //         minute.current = props.shortBreak
    //         console.log("shortbreak "+minute.current);

    //     }else if(props.pageParams == "longbreak"){
            
            
    //         // console.log("close");
    //         minute.current = props.longBreak
    //         // console.log("longbreak "+minute.current);

    //     }

    //     props.setResult(`${minute.current.toString().length == 1? `0${minute.current}`:minute.current}:${seconds.current.toString().length == 1? `0${seconds.current}`:seconds.current}`)

    // },[props.pageParams])
    

    
    // let timer:any = null

    // // {props.startInterval?
    //     timer = setInterval(() => { props.pause?timerCount():console.log("going")} ,1000)
    //     // :timer = null}

    // clearInterval(timer)

    return(
        <>
         <div className={`w-[327px] h-[549px] md:w-[540px] md:h-[464px] rounded-[15px] bg-[#FFF]  absolute ${props.menu?"block duration-700 top-[46px] md:top-[267px] lg:top-[155px] ":"duration-700 top-[-670px]"} `} >
            <header className="flex items-center justify-between px-[24px] pt-[24px] pb-[28px] md:px-[40px] md:pt-[34px] md:pb-[31px] border-b border-b-solid border-b-[#E3E1E1]" >
                <h1 className={`text-[#161932] text-[20px] md:text-[28px] leading-[20px] md:leading-[35px] ${props.font == 1?"font-KumbhSans":props.font == 2?"font-RobotoSlab":"SpaceMono"}  font-bold`} >Settings</h1>
                <img className="mb-[-10px]" src="/images/icon-close.svg" onClick={() => props.setMenu(false)} />
            </header>
            <div className="px-[23px] md:px-[40px]">
                <div className="flex flex-col items-center md:items-start w-[100%]  border-b border-b-solid border-b-[#E3E1E1] ">
                    <h2 className={`text-[#161932] text-[11px] md:text-[13px] tracking-[4.231px] md:tracking-[5px]  ${props.font == 1?"font-KumbhSans":props.font == 2?"font-RobotoSlab":"SpaceMono"}  font-bold mt-[24px] mb-[18px] md:mb-[26px]`}  >TIME (MINUTES)</h2>
                    <div className="flex flex-col gap-[8px] w-[100%] md:flex-row md:gap-[21px]" >
                        <div className="flex items-center justify-between w-[100%] md:flex-col md:items-start md:justify-start md:gap-[10px]" >
                            <p className={`text-[12px] text-[#1E213F] opacity-40  ${props.font == 1?"font-KumbhSans":props.font == 2?"font-RobotoSlab":"SpaceMono"}  font-bold `}>pomodoro</p>
                            <div className="flex items-center justify-between w-[140px] h-[40px] px-[16px] py-[12px] bg-[#EFF1FA] rounded-[10px]"  >
                                <input className={`text-[#1E213F] text-[14px]  ${props.font == 1?"font-KumbhSans":props.font == 2?"font-RobotoSlab":"SpaceMono"}  font-bold w-[30px] h-[20px] bg-transparent focus:outline-none`} type="number" name="number" id="number" value={props.pomodoro} onChange={(e) => props.setPomodoro(Number(e.target.value)) }  />
                                <div className="flex flex-col h-[20px] justify-between" >
                                    <img src="/images/icon-arrow-up.svg" onClick={() => props.setPomodoro(props.pomodoro + 1)} />
                                    <img src="/images/icon-arrow-down.svg" onClick={() => props.setPomodoro(props.pomodoro - 1)}  />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-[100%] md:flex-col md:items-start md:justify-start md:gap-[10px]" >
                            <p className={`text-[12px] text-[#1E213F] opacity-40  ${props.font == 1?"font-KumbhSans":props.font == 2?"font-RobotoSlab":"SpaceMono"}  font-bold `}>short break</p>
                            <div className="flex items-center justify-between w-[140px] h-[40px] px-[16px] py-[12px] bg-[#EFF1FA] rounded-[10px]"  >
                                <input className={`text-[#1E213F] text-[14px]  ${props.font == 1?"font-KumbhSans":props.font == 2?"font-RobotoSlab":"SpaceMono"}  font-bold w-[30px] h-[20px] bg-transparent focus:outline-none`} type="number" name="number" id="number" value={props.shortBreak} onChange={(e) => props.setShortBreak(Number(e.target.value)) }  />
                                <div className="flex flex-col h-[20px] justify-between">
                                    <img src="/images/icon-arrow-up.svg"  onClick={() => props.setShortBreak(props.shortBreak + 1)} />
                                    <img src="/images/icon-arrow-down.svg"  onClick={() => props.setShortBreak(props.shortBreak - 1)}  />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-[100%] mb-[24px] md:flex-col md:items-start md:justify-start md:gap-[10px]" >
                            <p className={`text-[12px] text-[#1E213F] opacity-40  ${props.font == 1?"font-KumbhSans":props.font == 2?"font-RobotoSlab":"SpaceMono"}  font-bold `}>long break</p>
                            <div className="flex items-center justify-between w-[140px] h-[40px] px-[16px] py-[12px] bg-[#EFF1FA] rounded-[10px]"  >
                                <input className={`text-[#1E213F] text-[14px]  ${props.font == 1?"font-KumbhSans":props.font == 2?"font-RobotoSlab":"SpaceMono"}  font-bold w-[30px] h-[20px] bg-transparent focus:outline-none`} type="number" name="number" id="number" value={props.longBreak} onChange={(e) => props.setLongBreak(Number(e.target.value)) }  />
                                <div className="flex flex-col h-[20px] justify-between">
                                    <img src="/images/icon-arrow-up.svg"  onClick={() => props.setLongBreak(props.longBreak + 1)}/>
                                    <img src="/images/icon-arrow-down.svg"  onClick={() => props.setLongBreak(props.longBreak - 1)}/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-col items-center gap-[18px] border-b border-b-solid border-b-[#E3E1E1] md:flex-row md:justify-between md:mt-[24px] md:pb-[24px]" >
                    <h2 className="text-[11px] text-[#161932] font-kumbhSans font-bold tracking-[4.231px] mt-[24px] md:m-0" >FONT</h2>
                    <div className="flex justify-between w-[152px] mb-[24px] md:m-0" >
                        <button className={`w-[40px] h-[40px] text-center text-[15px] ${props.font == 1?"text-[#FFF]":"text-[#1E213F] text-opacity-70"} font-kumbhSans font-bold ${props.font == 1?"bg-[#161932]":"bg-[#EFF1FA]"} rounded-[50%]`} onClick={() => props.setFont(1)} >Aa</button>
                        <button className={`w-[40px] h-[40px] text-center text-[15px]  ${props.font == 2?"text-[#FFF]":"text-[#1E213F] text-opacity-70"} font-RobotoSlab font-bold  ${props.font == 2?"bg-[#161932]":"bg-[#EFF1FA]"}  rounded-[50%]`} onClick={() => props.setFont(2)} >Aa</button>
                        <button className={`w-[40px] h-[40px] text-center text-[15px]  ${props.font == 3?"text-[#FFF]":"text-[#1E213F] text-opacity-70"} font-SpaceMono font-bold ${props.font == 3?"bg-[#161932]":"bg-[#EFF1FA]"} rounded-[50%]`} onClick={() => props.setFont(3)} >Aa</button>
                    </div>
                </div>
                <div className="flex flex-col items-center w-[100%] gap-[18px] md:flex-row md:justify-between md:mt-[24px] md:mb-[30px]" >
                    <h2 className="text-[11px] text-[#161932] font-kumbhSans font-bold tracking-[4.231px] mt-[16px] md:m-0" >COLOR</h2>
                    <div className="flex justify-between w-[152px] mb-[24px] md:m-0" >
                        <button className={`flex justify-center items-center w-[40px] h-[40px] text-center text-[15px] font-kumbhSans font-bold bg-[#F87070] rounded-[50%]`} onClick={() => props.setColor(1)} ><img className={`${props.color != 1?"hidden":null}`}  src="/images/icon-check.svg" /></button>
                        <button className={`flex justify-center items-center w-[40px] h-[40px] text-center text-[15px] font-kumbhSans font-bold bg-[#70F3F8] rounded-[50%]`} onClick={() => props.setColor(2)} ><img className={`${props.color != 2?"hidden":null}`}  src="/images/icon-check.svg" /></button>
                        <button className={`flex justify-center items-center w-[40px] h-[40px] text-center text-[15px] font-kumbhSans font-bold bg-[#D881F8] rounded-[50%]`} onClick={() => props.setColor(3)} ><img className={`${props.color != 3?"hidden":null}`}  src="/images/icon-check.svg" /></button>
                    </div>
                </div>
            </div>
            <button className="w-[140px] h-[53px] px-[47px] pt-[17px] bg-[#F87070] rounded-[26.5px] pb-[20px] text-center text-[#FFF] text-[16px] font-KumbhSans font-bold ml-[94px] md:ml-[201px] mt-[-5px] " onClick={() => {props.setPause(false),props.setMenu(false)}} >Apply</button>
         </div>
        </>
    )
}



export default Menu


