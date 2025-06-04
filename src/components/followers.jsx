import React from 'react'

export default function Followers({ desc, num }) {
    return (
        <div className='h-[40px] w-fit rounded-lg bg-[#111629] flex items-center justify-center '>
            <div className='h-[30px] bg-[#111629] border-r-1 border-white flex items-center justify-center'>
                <p className='text-white text-sm p-4 text-center'>{desc}</p>
            </div>
            <div className='h-[30px] bg-[#111629] flex items-center justify-center'>
                <p className='text-white text-sm p-4 text-center'>{num}</p>
            </div>
        </div>
    )
}
