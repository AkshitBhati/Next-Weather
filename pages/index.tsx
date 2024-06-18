import WeatherData from '@/components/WeatherData'
import React, { useEffect, useState } from 'react'

export default function app() {
  const [cityName, setCityName] = useState<string>('')


  const fetchData = async function(){
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=830f61e732ac4b49ae6183341241806 &q=${cityName}&aqi=yes`)

    const data = await res.json()
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='mt-10 w-full flex flex-col justify-center items-center'>
        <div className='flex  gap-5'>
          <input 
          className='border border-gray-200 bg-gray-100 p-2  rounded-md ' 
          type="text" 
          placeholder='Search City'
          />
          <button className='cursor-pointer bg-gray-700 hover:bg-gray-500 p-2 rounded-md text-white'>Search</button>
        </div>
      
      

      <div className='h-10 bg-red-300 mt-10 w-[40%] flex items-center justify-center'>
        <WeatherData />
      </div>
    </div>
  )
}
