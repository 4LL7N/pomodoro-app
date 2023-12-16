import { useRef,useEffect } from "react";

function Shortbreak(props:{menu:boolean,setMenu:any,font:number,color:number,shortBreak:number,setResult:any,result:undefined|string,pause:boolean,setPause:any, setStartInterval:any}){

    useEffect(() => {

        props.setResult(`${minute.current.toString().length == 1?`0${props.shortBreak}`:props.shortBreak}:00`)
        seconds.current = 0
        minute.current = props.shortBreak        
        props.setPause(false)
        // if(props.page != 1){
        //     // clearInterval()
        // }
    },[props.shortBreak])

    const seconds = useRef(0)
    const minute = useRef(props.shortBreak)

    function timerCount(){
        console.log("started")
        console.log(seconds.current.toString().length);
        

        if(seconds.current > 0){
            seconds.current -= 1
            console.log("second");
            
            // if(seconds.toString().length == 1){
            //     seconds.current = Number(`0${seconds.current}`)
            //     console.log(seconds.current)                   
            // }
        }else{
            console.log("minute");
            
            minute.current -= 1
            seconds.current = 59
            // if(minute.current.toString().length == 1){
            //     minute.current = Number(`0${minute.current}`)
            //     console.log(minute.current)
            // }
        }

        props.setResult(`${minute.current.toString().length == 1?`0${minute.current}`:minute.current}:${seconds.current.toString().length == 1?`0${seconds.current}`:seconds.current}`)

        if(minute.current < 1 && seconds.current < 1){
            clearInterval(timerId)
        }
    
    }

    let timerId:any = null;

    useEffect(() => {
        

        if (props.pause) {
        timerId = setInterval(() => {
            timerCount();
        }, 1000);
        }

        return () => {
        clearInterval(timerId);
        };
    }, [props.pause]);

    return(
        <>
            <div style={{background: 'linear-gradient(315deg, #2E325A 0%, #0E112A 100%)',boxShadow: '50px 50px 100px 0px #121530, -50px -50px 100px 0px #272C5A',}} className="w-[300px] h-[300px] rounded-[50%] flex items-center justify-center mt-[48px] mb-[79px]"  >
                <div className="w-[268px] h-[268px] rounded-[50%] bg-[#161932] flex items-center justify-center" >
                    <div className={` w-[248px] h-[248px] rounded-[50%] flex flex-col items-center justify-center gap-[12px] border-[9px] border-solid  ${props.color == 1?"border-[#F87070]":props.color == 2?"border-[#70F3F8]":"border-[#D881F8]"} `}  onClick={() => {props.setPause(!props.pause),props.setStartInterval(true),console.log("hello")}}>
                        <h2 className={`text-[80px] text-[#D7E0FF]  ${props.font == 1?"font-KumbhSans":props.font == 2?"font-RobotoSlab":"font-SpaceMono text-[68px] "} font-bold `} >{props.result}</h2>
                        <p className={`text-[#D7E0FF] text-[14px]  ${props.font == 1?"font-KumbhSans":props.font == 2?"font-RobotoSlab":"font-SpaceMono"}  font-bold tracking-[13.125px]`} >PAUSE</p>
                    </div>
                </div>
            </div>
            <img src="/images/icon-settings.svg" onClick={() => {props.setMenu(true)}} />
        </>
    )
}

export default Shortbreak