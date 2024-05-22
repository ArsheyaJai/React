import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Components/Card"
import Hero from "./Components/Hero"

function App() {
const [count, setCount] = useState(0)

return (
<>
<Hero/>
{count}
<button onClick={()=> setCount(count + 1)}>+</button>
<Card
image="https://i.pinimg.com/736x/2b/5d/15/2b5d15091143a4f0029f067d4ee317db.jpg"
name="Rhysand"
ingredients="Handsome High Lord of the Night Court"
recipe="sacrifices a lot to protect his court"
/>

<Card
image="https://i.pinimg.com/736x/ec/9e/6a/ec9e6a31ce9f292bbb3ce54134649f54.jpg"
name="Cassian"
ingredients="Illyrian Warrior"
recipe="show off, comical, fiercy loyal to loved ones"
/>

<Card
image="https://crushon.ai/_next/image?url=https%3A%2F%2Fcdn.crushon.ai%2Fimages%2F0329fd95-7c1c-11ee-a114-2a15228f628a%2Fd62aaa58-0dec-4027-81ad-ccfb9ae91b27&w=640&q=75"
name="Azriel"
ingredients="Shadowsinger"
recipe="quiet and shy but powerful and dangerous"
/>
</>
)
}

export default App