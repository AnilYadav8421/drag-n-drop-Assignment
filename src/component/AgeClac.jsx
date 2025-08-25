import React, { useState } from 'react'

const AgeClac = () => {
    const [selectDate, setSelectDate] = useState('');
    const [message, setMessage] = useState('');

    const handleClick = () => {
        if(selectDate){
            setMessage(selectDate)
        }
        else{
            setMessage("please select date")
        }
    }
    return (
        <div className='flex justify-center items-center h-screen'>

            <div className=' flex flex-col gap-8 w-[80%] bg-sky-200 px-[25px] py-8  rounded-2xl'>
                <h1 className='text-center font-bold text-2xl font-serif'>Age Calculator</h1>
                <div>
                    <p className='text-xs text-red-500 mb-2'>Enter or select a birthdate:</p>
                    <input value={selectDate} onChange={(e) => setSelectDate(e.target.value)} className='border-2 p-2 w-full border-gray-400 rounded-lg ' type="date" />
                </div>
                <button onClick={selectDate} className='bg-blue-500 rounded-lg py-2' >Caluclate</button>

                <p className='text-center text-green-500 font-bold'>{message}</p>
            </div>
        </div>
    )
}

export default AgeClac
