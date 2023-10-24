'use client'
// 1. Import area
import React from 'react'
import { Select, MenuItem } from "@mui/material";
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


// 1. Function Defination Area
 function Home() { // old way to define the function
  // 2.1 Hooks area
  const [stockName, setStockName] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [stockPrice, setStockPrice] = useState('');

  // useEffect do something after the page load
  useEffect(()=>{
    setInterval(function(){
      console.log("Okey");
      getStockPrice(stockName); // I want to use DRY principal
    },8000);
  },[stockName]);

  
  // 2.2 function 
  // New way to define the function in ES6 (2015)
  const getStockPrice = (sn:any) => {
 // This is call promiseChain
    fetch(`/api/getstockprice?stockName=${sn}`)
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data);
      console.log(data.price);
      setStockPrice(data.price);
    }).catch((err)=>{
      console.error('Error fetching stock price:', err);
    }).finally(()=>{

    }) 
  }
  const handleChange = (dkm:any) => { 
             // object.property.property
    console.log(dkm.target.value);
    setStockName(dkm.target.value);
    getStockPrice(dkm.target.value); // I want to use DRY principal
    
    // setSelectedValue(dkm.target.value)
  }

  // 2.3 Return Statement
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-10 pr-10 pt-10 pb-10;">
      <Box sx={{
        width:'100%',
        backgroundColor: 'primary.light',
        padding: '25px'
      }}>
      <Typography variant="h1" sx={{ fontSize: '1.5rem' }} className='p-0 pb-10 m-0 fs-5'>The current price of the {stockName} Stock is Rs. {stockPrice}</Typography>
      <Select className='w-full' value={selectedValue} onChange={handleChange}>
        <MenuItem value="ICICI">ICICI Bank</MenuItem>
        <MenuItem value="HDFC">HDFC Bank</MenuItem>
        <MenuItem value="IDFC">IDFC Bank</MenuItem>
      </Select>
      </Box>
    </main>
  )
}

// 3. export area
export default Home;