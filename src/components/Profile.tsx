import React from 'react'
import { Button } from './ui/button';
import { MailIcon, MapIcon, PhoneIcon } from 'lucide-react';

interface ProfileProps {
  profileInfo: {
    Photo: string;
    Name: string;
    DOB: string;
    Title: string;
    Email: string;
    Phone: string;
    City: string;
    Country: string;
  };
}



export default function Profile({ profileInfo } : ProfileProps) {
    
  return (
    <div>
      {/* <div className='bg-gray-600/40 rounded-4xl m-[2rem]'>
            <img className='rounded-full p-[1rem]' src={profileInfo.Photo} alt="Profile" />
      </div> */}
      <div className='text-gray-400  flex flex-col justify-center items-center gap-[1rem]'>
        <p className='font-bold'>{profileInfo.Name}</p>
        <div className='bg-gray-600/40 py-[0.3rem] px-[0.7rem] flex justify-center items-center '>
            <p className='text-xs'>{profileInfo.Title}</p>
        </div>
        
        <span className='w-3/4 my-2 flex items-center'>
            <hr className='border-t border-gray-500 w-full ' />
        </span>

        <div className="flex flex-col gap-4 text-xs  max-w-xs">
        {[
        { icon: <MailIcon />, label: "Email", value: profileInfo.Email },
        { icon: <PhoneIcon />, label: "Phone", value: profileInfo.Phone },
        { icon: <MapIcon />, label: "Address", value: `${profileInfo.City}, ${profileInfo.Country}` },
        ].map((item, index) => (
        <div key={index} className="flex gap-4">
            <Button className="border-gray-600/40 border-1 bg-special text-yellow-200" size="icon">
            {item.icon}
            </Button>
            <div className="flex flex-col">
            <span>{item.label}</span>
            <span>{item.value}</span>
            </div>
        </div>
        ))}
        </div>
        
        {/* <div className='flex justify-center gap-[0.5rem] w-[1.5rem] h-[1.5rem]'>
            <img src='/companies/facebook.svg' />
            <img src='/companies/github.svg' />
            <img src='/companies/instagram.svg' />
        </div> */}
      </div>
    </div>
  )
}
