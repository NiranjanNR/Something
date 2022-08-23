import { IoChevronForwardSharp  } from "react-icons/io5";

const tmpData = [
  {
    name: "Nadan Swad",
    description: "Belly filled with the best local food that you can get.",
    image: "https://c8.alamy.com/zooms/9/94c9889227b44e78a9758e440f43d876/m99rgh.jpg"
  },
  {
    name: "NallaBhoomi",
    description: "Eniku onnum ariyilla, venekil poyi kazhiku",
    image: "https://lh5.googleusercontent.com/p/AF1QipPnzSe2DOv4-Ld1hXL7ISqPhHWq9AYjfT5fg2uA=w1080-k-no"
  },
  {
    name: "Spicy Villa",
    description: "Eniku onnum ariyilla, venekil poyi kazhiku",
    image: "https://10619-2.s.cdn12.com/rests/original/106_509754993.jpg"
  },
  {
    name: "Casablanca",
    description: "Eniku onnum ariyilla, venekil poyi kazhiku",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/05/18/89/c0/casablanca-restaurant.jpg"
  }
]

const Restaurants = () => {
  return (
    <div className="w-full grid grid-cols-4 gap-4 flex-wrap">
      {
        tmpData.map((item, index) => (
          <div key={index} className="  p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
    <img className=" h-80 w-full rounded-xl" src={item.image} alt="" />
    <div className="p-2">
    <h2 className="font-bold text-lg mb-2 ">{item.name}</h2>
    <p className="text-sm text-gray-600">{item.description}</p>
    </div>
    <div className="flex w-full justify-end">
      <IoChevronForwardSharp className=" text-xl text-orange-500" />
    </div>
  </div>
        ))
      }
</div>
  )
}

export default Restaurants