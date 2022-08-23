import { AiOutlineClockCircle, AiOutlineDown } from "react-icons/ai";
import Restaurants from "../components/Restaurants";

export default function Home() {
  return (
    <div className='flex flex-col gap-4 m-10'>
      <div className="h-3/4 bg-orange-500 rounded-3xl p-10">
        <div className="grid grid-cols-2 h-full">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-white font-bold text-5xl">
              Craving
              <span className="text-orange-800">  momo&apos;s </span>?
              <br />
             <span className='text-2xl text-red-900'>Then check out the following restaturants....</span> 
            </h1>
            <h1 className="text-white text-xl text-left">
              Lores ispum Lores ispum Lores ispum Lores ispum Lores ispum Lores ispum Lores ispum Lores ispum
            </h1>
            <div className=" bg-zinc-800 w-fit self-end p-2 text-lg rounded-full px-4 hover:cursor-pointer hover:bg-gray-400">
              <h1 className="text-white font-semibold">Check it out</h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center p-5 px-10">
            <img src="https://cdn.foodaciously.com/static/recipes/ee9fd204-25cf-4e97-be5a-d7626470d420/easy-vegan-momos-recipe-7ab341154a5c13d6d9642300e7e2c92d-2560.jpg"
            className="rounded-3xl w-2/3 border p-1 border-gray-500"></img>
            
          </div>
        </div>
      </div>
      <div className='flex w-full justify-between'>
        <h1 className=' text-black text-2xl self-start '>Restaurants </h1>
        <div className='flex text-white px-5 py-2 rounded-3xl bg-orange-500 items-center gap-2'>
          <AiOutlineClockCircle className=" text-xl" />
          <h1 className="text-lg">Open</h1>
          <AiOutlineDown className=" text-xl" />
        </div>
      </div>
      <Restaurants />
      
    </div>
  )
}
