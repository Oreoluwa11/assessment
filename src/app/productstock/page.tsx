'use client';
import { IoIosSearch } from "react-icons/io";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Box } from '@mui/material';
import Navbar from "../components/navbar"



const rows: GridRowsProp = [
  { id: 1, name: 'Apple Wath Series 4', category: 'Digital Product', price: '$690.00', piece: '63', color: ['#000', '#888', 'yellow'], image: '/images/watch.jpg' },
  { id: 2, name: 'Apple Wath Series 4', category: 'Digital Product', price: '$690.00', piece: '63', color: ['brown', 'green', 'blue', 'orange'], image: '/images/watch.jpg' },
  { id: 3, name: 'Apple Wath Series 4', category: 'Digital Product', price: '$690.00', piece: '63', color: ['#000', '#888', 'red'], image: '/images/watch.jpg' },
  { id: 4, name: 'Apple Wath Series 4', category: 'Digital Product', price: '$690.00', piece: '63', color: ['purple', 'green', 'blue'], image: '/images/watch.jpg'},
  { id: 5, name: 'Apple Wath Series 4', category: 'Digital Product', price: '$690.00', piece: '63', color: ['#000', 'gray', 'purple', 'blue'], image: '/images/watch.jpg' },
  { id: 6, name: 'Apple Wath Series 4', category: 'Digital Product', price: '$690.00', piece: '63', color: ['orange', '#888', 'purple', 'blue'], image: '/images/watch.jpg' },
  { id: 7, name: 'Apple Wath Series 4', category: 'Digital Product', price: '$690.00', piece: '63', color: ['#000', '#888', 'pink'], image: '/images/watch.jpg' },

];

const columns: GridColDef[] = [
  { field: 'image', headerName: 'Image', width: 150,
    renderCell: (params) => (
        <img 
        src={params.value} 
        alt="product" 
        style={{width: 80, height: 80, borderRadius: '4px', objectFit: 'cover' }} />
      ),
  },
  { field: 'name', headerName: 'Product Name', width: 250 },
  { field: 'category', headerName: 'Category', width: 200 },
  { field: 'price', headerName: 'Price', width: 100 },
  { field: 'piece', headerName: 'Piece', width: 120 },
  { field: 'color', headerName: 'Available color', width: 200,
    renderCell: (params) => (
        <Box sx={{ display: 'flex', gap: 1.5, marginLeft: 3, }}>
          {params.value.map((color: string, i: number) => (
            <Box
              key={i}
              sx={{
                width: 14,
                height: 14,
                marginTop: 5,
                borderRadius: '50%',
                backgroundColor: color,
              }}
            />
          ))}
        </Box>
      ),
    },
  
  { field: 'action', headerName: 'Action', width: 200,
    renderCell: () => (
        <>
          <IconButton color="primary">
            <EditIcon />
          </IconButton>
          <IconButton color="error">
            <DeleteIcon />
          </IconButton>
        </>
    ),
  
   },

];

export default function Productstock() {
    return<div> 
    <Navbar /> 
    <div className="w-[87%] h-[130vh] flex flex-col ml-51.5 p-5 mx-auto px-[50px] gap-[30px] bg-gray-100 -mt-[970px]">
        
        <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-3xl">Product Stock</p>
            <div className="">
                <form className='w-[500px] relative'>
                    <div className='relative'>
                        <input type='search' placeholder='Search product name' className='w-80 p-3 rounded-full bg-white'/>
                        <button className='absolute right-45 top-1/2 -translate-y-1/2 p-4 '>
                            <IoIosSearch />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    <div style={{ height: 1000, width: '100%', }}>
      <DataGrid rows={rows} columns={columns}
      rowHeight={110} 
      sx={{
        '& .MuiDataGrid-cell': {
          py: 2, // vertical padding (space inside each cell)
          px: 2, // horizontal padding
        },
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: '#e5e7eb', // optional: light gray header
        },
        '& .MuiDataGrid-row': {
          borderBottom: '1px solid #e5e7eb', // light gray row divider
        },
        }}
        />
        </div>
    </div>

    </div>;
}