import { useState} from 'react'
import ImageHead from '../assets/head.jpg'
import ImageTail from '../assets/Tail.jpg'
import Coin from './Coin'
export default function FlipCoin() {
   const imgName = [
  { image: ImageHead, name: "head" },
  { image: ImageTail, name: "tail" }
];
   const [currentFace, setCurrentFace]=useState(imgName[0]);
   const [TotalFlip,setTotalFlip]=useState(0);
   const [head,setHead]=useState(0);

   const HandleFlip=()=>{
    const randomNumber= Math.floor(Math.random()*2);
    const face=imgName[randomNumber]
    // const face=randomNumber===0?'head':'tail';
    setCurrentFace(face);
    setTotalFlip((prev)=>prev+1);
    if(face=== imgName[0]){
        setHead((prev)=>prev+1)
    }


   }
  return (
    <div className='Container'>
   <div className='card'>
    <h1>Let's Flip a Coin</h1>
     <Coin face={currentFace.image}/>
    <div className='btn-par'>
      <button onClick={HandleFlip}>Filp me!</button>
      <br />
    <span>{`totalFlip:  ${TotalFlip}    head: ${head} tail ${TotalFlip-head}`}</span>
    </div>
   </div>
    </div>
  )
}
