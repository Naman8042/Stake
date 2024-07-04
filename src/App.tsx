"use client"
import Bet from './component/Bet'
import Mines from './component/Mines'
import { useState ,useEffect} from "react"

const page = () => {
  const[minesRatio,setMinesRatio] = useState<number>(3)
  const size:number = 16
  const[diamond,setDiamond] = useState<String[]>([])
  const[included,setIncluded]= useState<number[]>([])
  const[bet,setBet] = useState<String>("Bet")
  
    function generateDiamondsAndMinesArray():string[]{

      const numMines = minesRatio;
      const numDiamonds = size - numMines;
      const array = Array(numDiamonds).fill('diamond').concat(Array(numMines).fill('mine'));
  
      // Fisher-Yates shuffle
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  
      return array;
    } 
    function setGrid(){
      const Grid = generateDiamondsAndMinesArray()
      setDiamond(Grid)
    }
    useEffect(()=>{
      setGrid()
     },[minesRatio])
    
    

  
  return (
    <div className="flex flex-col md:flex-row px-[5%] md:py-10  md:justify-start md:items-start md:px-[10%] justify-center items-center bg-gray-600 md:h-screen h-screen">
      <Bet setGrid={setGrid} setIncluded={setIncluded} bet={bet} setBet={setBet} minesRatio={minesRatio} setMinesRatio={setMinesRatio} generateDiamondsAndMinesArray={generateDiamondsAndMinesArray}/>
      <Mines diamonds={diamond} included={included} bet={bet} setBet={setBet} setIncluded={setIncluded} setDiamond={setDiamond} minesRatio={minesRatio} setMinesRatio={()=>setMinesRatio} generateDiamondsAndMinesArray={generateDiamondsAndMinesArray}/>
    </div>
  )
}

export default page
