import React from 'react';
import { ReactComponent as Transfer } from '../../src/components/svg/Transfer.svg';

function Home() {
  return (
    <div className='h-screen w-full justify-between flex items-center bg-[#DFF2EB]'>
      <div className='items-start ms-8 h-full justify-center flex flex-col'>
        <div className='text-[#4A628A] text-start w-3/5 text-2xl font-semibold'>
          A platform for those who have lost items to post their missing products and for those who find them to reach out and connect.
        </div>
        <div className='mt-6 flex gap-4'>
          <button className='bg-[#7AB2D3] hover:bg-[#4A628A] text-white py-2 px-6 rounded-md transition'>
            Yash
          </button>
          <button className='bg-[#4A628A] hover:bg-[#7AB2D3] text-white py-2 px-6 rounded-md transition'>
            Malviya
          </button>
        </div>
      </div>
      <Transfer className="w-1/3" />
      
    </div>
  );
}

export default Home;
