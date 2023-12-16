import { Link } from "react-router-dom";

function Head(props: {
  setPage: any;
  page: number;
  font: number;
  color: number;
}) {
  return (
    <>
      <header className="flex flex-col items-center gap-[45px] mt-[32px] md:gap-[55px]">
        <h1 className="text-[24px] text-[#D7E0FF] font-KumbhSans font-bold md:text-[32px] ">
          pomodoro
        </h1>
        <div
          className={`relative flex items-center w-[327px] h-[63px] p-[8px] rounded-[31.5px] bg-[#161932] overflow-hidden md:w-[373px]  `}
        >
          <div
            className={`w-[105.2px] h-[48px] rounded-[26.5px] ${
              props.color == 1
                ? "bg-[#F87070]"
                : props.color == 2
                ? "bg-[#70F3F8]"
                : "bg-[#D881F8]"
            } ${
              props.page == 1
                ? "duration-500 ease-in ml-[0]"
                : props.page == 2
                ? "duration-500 ease-in ml-[105.2px] md:ml-[120px]"
                : "duration-500 ease-in ml-[210.4px] md:ml-[240px]"
            }  md:w-[120px]  `}
          />
          <div className="absolute  flex items-center w-[100%] pl-[21px] pr-[24px]">
            <Link
              to="/pomodoro"
              className={`text-[12px] ${
                props.page == 1
                  ? "duration-500 text-[#1E213F]"
                  : "duration-500 text-[#D7E0FF] opacity-40"
              } ${
                props.font == 1
                  ? "font-KumbhSans"
                  : props.font == 2
                  ? "font-RobotoSlab"
                  : "font-SpaceMono"
              } font-bold md:text-[14px]  hover:opacity-100`}
              onClick={() => props.setPage(1)}
            >
              pomodoro
            </Link>
            <Link
              to="/shortbreak"
              className={`text-[12px] ${
                props.page == 2
                  ? "duration-500 text-[#1E213F]"
                  : "duration-500 text-[#D7E0FF] opacity-40"
              }  ${
                props.font == 1
                  ? "font-KumbhSans ml-[43px] md:ml-[52px]"
                  : props.font == 2
                  ? "font-RobotoSlab ml-[43px] md:ml-[52px]"
                  : "font-SpaceMono ml-[38px] md:ml-[40px]"
              }  font-bold  md:text-[14px]  hover:hover:opacity-100`}
              onClick={() => props.setPage(2)}
            >
              short break
            </Link>
            <Link
              to="/longbreak"
              className={`text-[12px] ${
                props.page == 3
                  ? "duration-500 text-[#1E213F]"
                  : "duration-500 text-[#D7E0FF] opacity-40"
              } ml-[39px] ${
                props.font == 1
                  ? "font-KumbhSans md:ml-[47px]"
                  : props.font == 2
                  ? "font-RobotoSlab ml-[45px] md:ml-[47px] "
                  : "font-SpaceMono ml-[27px] md:ml-[33px]"
              } font-bold  md:text-[14px] hover:hover:opacity-100 `}
              onClick={() => props.setPage(3)}
            >
              long break
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Head;
