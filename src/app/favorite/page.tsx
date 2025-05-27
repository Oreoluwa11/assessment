import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import Mycarousel from "../Shadcn/mycarousel"
import Navbar from "../navbar/page";
export default function Favorites() {
    return <div>
        <Navbar />
    <div className=" ml-51.5 p-4 h-[125vh] px-[70px] gap-[30px] bg-gray-100 -mt-[970px] py-8 overflow-x-auto">
        <p className="font-bold text-4xl mb-5">Favorites</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white rounded-md p-15 w-80">
            <Mycarousel />
            <div className="-ml-[35px] -mb-[30px]">
            <p className="font-bold">Apple Watch Series 4</p>
            <p className="text-blue-600">$120.00</p>
            <div className="flex">
                <button className='text-yellow-400 flex'>
                    <MdOutlineStarPurple500   />
                    <MdOutlineStarPurple500   />
                    <MdOutlineStarPurple500   />
                    <MdOutlineStarPurple500   />
                </button>
                <button className="text-gray-300 -mt-[4px]">
                    <MdOutlineStarBorderPurple500    />
                </button>
                <p className="text-gray-300 -mt-[4px] ml-1">(131)</p>
            </div>

            <button className="bg-gray-200 mt-3 rounded-md p-1.5 w-30">
                Edit Product
            </button>
            </div>
        </div>

        <div className="bg-white rounded-md p-15 w-80">
            <Mycarousel />
            <div className="-ml-[35px] -mb-[30px]">
            <p className="font-bold">Apple Watch Series 4</p>
            <p className="text-blue-600">$120.00</p>
            <div className="flex">
                <button className='text-yellow-400 flex'>
                    <MdOutlineStarPurple500   />
                    <MdOutlineStarPurple500   />
                    <MdOutlineStarPurple500   />
                    <MdOutlineStarPurple500   />
                </button>
                <button className="text-gray-300 -mt-[4px]">
                    <MdOutlineStarBorderPurple500    />
                </button>
                <p className="text-gray-300 -mt-[4px] ml-1">(131)</p>
            </div>

            <button className="bg-gray-200 mt-3 rounded-md p-1.5 w-30">
                Edit Product
            </button>
            </div>
        </div>
        <div className="bg-white rounded-md p-15 w-80">
            <Mycarousel />
            <div className="-ml-[35px] -mb-[30px]">
            <p className="font-bold">Apple Watch Series 4</p>
            <p className="text-blue-600">$120.00</p>
            <div className="flex">
                <button className='text-yellow-400 flex'>
                    <MdOutlineStarPurple500   />
                    <MdOutlineStarPurple500   />
                    <MdOutlineStarPurple500   />
                    <MdOutlineStarPurple500   />
                </button>
                <button className="text-gray-300 -mt-[4px]">
                    <MdOutlineStarBorderPurple500    />
                </button>
                <p className="text-gray-300 -mt-[4px] ml-1">(131)</p>
            </div>

            <button className="bg-gray-200 mt-3 rounded-md p-1.5 w-30">
                Edit Product
            </button>
            </div>
        </div>
        <div className="bg-white rounded-md p-15 w-80">
            <Mycarousel />
            <div className="-ml-[35px] -mb-[30px]">
            <p className="font-bold">Apple Watch Series 4</p>
            <p className="text-blue-600">$120.00</p>
            <div className="flex">
                <button className='text-yellow-400 flex'>
                    <MdOutlineStarPurple500   />
                    <MdOutlineStarPurple500   />
                    <MdOutlineStarPurple500   />
                    <MdOutlineStarPurple500   />
                </button>
                <button className="text-gray-300 -mt-[4px]">
                    <MdOutlineStarBorderPurple500    />
                </button>
                <p className="text-gray-300 -mt-[4px] ml-1">(131)</p>
            </div>

            <button className="bg-gray-200 mt-3 rounded-md p-1.5 w-30">
                Edit Product
            </button>
            </div>
        </div>
        <div className="bg-white rounded-md p-15 w-80">
            <Mycarousel />
            <div className="-ml-[35px] -mb-[30px]">
            <p className="font-bold">Apple Watch Series 4</p>
            <p className="text-blue-600">$120.00</p>
            <div className="flex">
                <button className='text-yellow-400 flex'>
                    <MdOutlineStarPurple500   />
                    <MdOutlineStarPurple500   />
                    <MdOutlineStarPurple500   />
                    <MdOutlineStarPurple500   />
                </button>
                <button className="text-gray-300 -mt-[4px]">
                    <MdOutlineStarBorderPurple500    />
                </button>
                <p className="text-gray-300 -mt-[4px] ml-1">(131)</p>
            </div>

            <button className="bg-gray-200 mt-3 rounded-md p-1.5 w-30">
                Edit Product
            </button>
            </div>
        </div>
        <div className="bg-white rounded-md p-15 w-80">
            <Mycarousel />
            <div className="-ml-[35px] -mb-[30px]">
            <p className="font-bold">Apple Watch Series 4</p>
            <p className="text-blue-600">$120.00</p>
            <div className="flex">
                <button className='text-yellow-400 flex'>
                    <MdOutlineStarPurple500   />
                    <MdOutlineStarPurple500   />
                    <MdOutlineStarPurple500   />
                    <MdOutlineStarPurple500   />
                </button>
                <button className="text-gray-300 -mt-[4px]">
                    <MdOutlineStarBorderPurple500    />
                </button>
                <p className="text-gray-300 -mt-[4px] ml-1">(131)</p>
            </div>

            <button className="bg-gray-200 mt-3 rounded-md p-1.5 w-30">
                Edit Product
            </button>
            </div>
        </div>        
    </div>
</div>
</div>;
}