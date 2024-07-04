"use client"
import { Dispatch, SetStateAction, useEffect } from "react"

interface Mines {
  minesRatio: number,
  setMinesRatio: Dispatch<SetStateAction<number>>,
  generateDiamondsAndMinesArray: () => string[],
  setIncluded: Dispatch<SetStateAction<number[]>>,
  bet: String,
  setBet: Dispatch<SetStateAction<String>>,
  setGrid:()=>void
}

const Bet = ({ minesRatio, bet,setGrid, setMinesRatio, setIncluded, generateDiamondsAndMinesArray }: Mines) => {
  
  function Restart(): void {
    setIncluded([])
    setGrid()
 
  }

  function onChangeHandler(e: any) {
    setMinesRatio(Number(e.target.value))
  }

  useEffect(() => {
    setIncluded([])
    generateDiamondsAndMinesArray()

  }, [minesRatio])

  return (
    <div className="md:w-[25%] w-80 h-[40%] md:h-full flex flex-col p-2 bg-gray-500 py-10 rounded-l-md">
      <h1 className="text-white text-center text-xl">Mines</h1>
      <input type="number" value={String(minesRatio)} className="p-1 outline-none bg-gray-800 text-white py-2 rounded-md" onChange={onChangeHandler} />
      <br />
      <button onClick={Restart} className="bg-lime-400 text-center py-1.5 rounded-md w-full">{bet}</button>
    </div>
  )
}

export default Bet
