import React, { useEffect, useState } from "react";
import { connectWallet, getAccount } from "../utils/wallet";

const Navbar: React.FC = () => {
  

  return (
		<div className='flex justify-between items-center'>
			<div>
				<img
					src='./assets/logo copy.png'
					alt=''
					className='w-[300px] mt-3'
				/>
			</div>
			<div className='flex gap-14 font-medium text-xl mt-2 nav'>
				<p className='transition-all cursor-pointer hover:text-[#92BE19]'>
					Home
				</p>
				<p className='transition-all cursor-pointer hover:text-[#92BE19]'>
					About Us
				</p>
				<p className='transition-all cursor-pointer hover:text-[#92BE19]'>
					Explore
				</p>
				<p className='transition-all cursor-pointer hover:text-[#92BE19]'>
					Contact Us
				</p>
			</div>
		</div>
	);
};

export default Navbar;
