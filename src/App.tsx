import { useState } from 'react'
import { createBrowserRouter,Navigate,RouterProvider, } from 'react-router-dom'
import Layout from './Components/Layout'
import Pomodoro from './Components/Pomodoro'

function App() {

  const  [page, setPage] = useState<number>(1)
  const [menu,setMenu] = useState<boolean>(false)

  const [font,setFont] = useState<number>(1)
  const [color, setColor] = useState<number>(1)

  const [pomodoro, setPomodoro] = useState<number>(25)
  const [shortBreak, setShortBreak] = useState<number>(10)
  const [longBreak, setLongBreak] = useState<number>(15)

  const [pause, setPause] = useState<boolean>(false)
  
  const [result,setResult] = useState<undefined|string>("00:00")

  

  const router = createBrowserRouter([
    {
      element:<Layout page={page} setPage={setPage} menu={menu} setMenu={setMenu} font={font} setFont={setFont} color={color} setColor={setColor} pomodoro={pomodoro} setPomodoro={setPomodoro} shortBreak={shortBreak} setShortBreak={setShortBreak} longBreak={longBreak} setLongBreak={setLongBreak} setResult={setResult}  pause={pause} setPause={setPause}/>,
      children:[
        { 
          path:"/",
          element:<Navigate to="/pomodoro"/>
        },
        {
          path:"/:pomodoro",
          element:<Pomodoro menu={menu} setMenu={setMenu} font={font} color={color} longBreak={longBreak} shortBreak={shortBreak} pomodoro={pomodoro} pause={pause} setPause={setPause}  result={result}setResult={setResult} page={page} />
        }
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
