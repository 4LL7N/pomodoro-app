import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

// import { useParams } from "react-router-dom"

function Pomodoro(props: {
  menu: boolean;
  setMenu: any;
  font: number;
  color: number;
  longBreak: number;
  shortBreak: number;
  pomodoro: number;
  pause: boolean;
  setPause: any;
  result: undefined | string;
  setResult: any;
  page: number;
}) {
  //,setPageParams:any
  // const params = useParams()
  // console.log(params.pomodoro);
  // props.setPageParams(params.pomodoro)

  const params = useParams();
  console.log(params);

  useEffect(() => {
    if (params.pomodoro == "pomodoro") {
      props.setResult(props.pomodoro + ":00");
      minute.current = props.pomodoro;
    } else if (params.pomodoro == "shortbreak") {
      props.setResult(props.shortBreak + ":00");
      minute.current = props.shortBreak;
    } else {
      props.setResult(props.longBreak + ":00");
      minute.current = props.longBreak;
    }
    seconds.current = 0;
    props.setPause(false);
  }, [params.pomodoro, props.pomodoro, props.shortBreak, props.longBreak]);
  // console.log(props.pause);
  const seconds = useRef(0);
  const minute = useRef(props.pomodoro);

  function timerCount() {
    console.log("started");
    console.log(seconds.current.toString().length);

    // if(props.pause){
    console.log(props.pause);

    if (seconds.current > 0) {
      seconds.current -= 1;
      console.log("second");
    } else {
      console.log("minute");

      minute.current -= 1;
      seconds.current = 59;
    }
    props.setResult(
      `${
        minute.current.toString().length == 1
          ? `0${minute.current}`
          : minute.current
      }:${
        seconds.current.toString().length == 1
          ? `0${seconds.current}`
          : seconds.current
      }`
    );

    if (minute.current < 1 && seconds.current < 1) {
      clearInterval(timerId);
    }
    // }
  }

  let timerId: any = null;

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

  let percentage = 0;
  if (params.pomodoro == "pomodoro") {
    percentage =
      ((minute.current * 60 + seconds.current) * 100) / (props.pomodoro * 60);
    console.log("pomodoro percent " + percentage);
  } else if (params.pomodoro == "shortbreak") {
    percentage =
      ((minute.current * 60 + seconds.current) * 100) / (props.shortBreak * 60);
    console.log("shortbreak percent " + percentage);
  } else {
    percentage =
      ((minute.current * 60 + seconds.current) * 100) / (props.longBreak * 60);
    console.log("longbreak percent " + percentage);
  }

  console.log(percentage);

  return (
    <>
      <div
        style={{
          background: "linear-gradient(315deg, #2E325A 0%, #0E112A 100%)",
          boxShadow:
            "50px 50px 100px 0px #121530, -50px -50px 100px 0px #272C5A",
        }}
        className="w-[300px] h-[300px] rounded-[50%] flex items-center justify-center mt-[48px] mb-[79px] md:w-[410px] md:h-[410px] md:mt-[109px] md:mb-[144px] lg:mb-[63px] lg:mt-[45px]"
        onClick={() => {
          props.setPause(!props.pause), console.log("hello");
        }}
      >
        <div className="w-[268px] h-[268px] rounded-[50%] bg-[#161932] flex items-center justify-center md:w-[366px] md:h-[366px] ">
          <CircularProgressbarWithChildren
            styles={buildStyles({
              pathColor:
                props.color == 1
                  ? "#F87070"
                  : props.color == 2
                  ? "#70F3F8"
                  : "#D881F8",
              trailColor: "#161932",
              strokeLinecap: "round",
              pathTransitionDuration: 0.5,
            })}
            strokeWidth={4}
            value={percentage}
            className={` w-[248px] h-[248px] rounded-[50%] flex flex-col items-center justify-center gap-[12px] md:w-[339px] md:h-[339px] `}
          >
            <h2
              className={`text-[80px] md:text-[100px] text-[#D7E0FF]  ${
                props.font == 1
                  ? "font-KumbhSans"
                  : props.font == 2
                  ? "font-RobotoSlab"
                  : "font-SpaceMono  "
              } font-bold tracking-[-6px] `}
            >
              {props.result}
            </h2>
            <p
              className={`text-[#D7E0FF] text-[14px] md:text-[16px] ${
                props.font == 1
                  ? "font-KumbhSans"
                  : props.font == 2
                  ? "font-RobotoSlab"
                  : "font-SpaceMono"
              }  font-bold tracking-[13.125px] md:tracking-[15px]`}
            >
              PAUSE
            </p>
          </CircularProgressbarWithChildren>
        </div>
      </div>
      <img
        src="/images/icon-settings.svg"
        onClick={() => props.setMenu(true)}
      />
    </>
  );
}

export default Pomodoro;
