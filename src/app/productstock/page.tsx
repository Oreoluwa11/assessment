'use client';
import Image from "next/image";
import { GridRowsProp } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import Navbar from "../navbar/page"



const rows: GridRowsProp = [
  { id: 1, name: 'Apple Wath Series 4', category: 'Digital Product', price: '$690.00', piece: '63', color: ['#000', '#888', 'yellow'], image: '/images/watch.jpg' },
  { id: 2, name: 'Apple Wath Series 4', category: 'Digital Product', price: '$690.00', piece: '63', color: ['brown', 'green', 'blue', 'orange'], image: '/images/watch.jpg' },
  { id: 3, name: 'Clone Wath Series 4', category: 'Digital Product', price: '$690.00', piece: '63', color: ['#000', '#888', 'red'], image: '/images/watch.jpg' },
  { id: 4, name: 'Apple Wath Series 4', category: 'Digital Product', price: '$690.00', piece: '63', color: ['purple', 'green', 'blue'], image: '/images/watch.jpg'},
  { id: 5, name: 'Apple Wath Series 4', category: 'Digital Product', price: '$690.00', piece: '63', color: ['#000', 'gray', 'purple', 'blue'], image: '/images/watch.jpg' },
  { id: 6, name: 'Apple Wath Series 4', category: 'Digital Product', price: '$690.00', piece: '63', color: ['orange', '#888', 'purple', 'blue'], image: '/images/watch.jpg' },
  { id: 7, name: 'Apple Wath Series 4', category: 'Digital Product', price: '$690.00', piece: '63', color: ['#000', '#888', 'pink'], image: '/images/watch.jpg' },

];


export default function Productstock() {
    return<div> 
    <Navbar /> 
    <div className="w-[87%] h-[130vh] px-[50px] gap-[30px] bg-gray-100 -mt-[970px] py-8 overflow-x-auto flex flex-col ml-51.5 p-5 mx-auto   ">
        
        <div className="flex justify-between items-center mb-2">
          <p className="font-bold text-3xl">Product Stock</p>
        </div>

        {/* Mobile Cards */}
    <div className="block  space-y-4  ">
      {rows.map((row) => (
        <div key={row.id} className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-4">
        <Image
          src={row.image}
          alt="Product"
          width={80}
          height={80}
          className="rounded object-cover"
        />
        <div className="flex-1">
          <p className="font-bold">{row.name}</p>
          <p className="text-sm text-gray-600">{row.category}</p>
          <p className="text-sm font-medium">{row.price}</p>
          <p className="text-sm">Piece: {row.piece}</p>
          <div className="flex gap-1 mt-1">
            {Array.isArray(row.color) &&
              (row.color as string[]).map((color: string, index: number) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: color }}
                />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <IconButton color="primary" size="small">
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton color="error" size="small">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    </div>
  ))}
  </div>
</div>


    </div>;
}