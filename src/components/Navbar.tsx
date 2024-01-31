import React, { useEffect, useState } from "react";
import { connectWallet, getAccount } from "../utils/wallet";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  

  return (
		<div className='flex justify-between items-center ml-12 mr-16 h-[90px]'>
			<Link to={'/'}>
				<img
					src='./assets/logo copy.png'
					alt=''
					className='w-[280px] mt-3'
				/>
			</Link>
			<div className='flex gap-14 font-medium text-xl mt-2 nav'>
				<Link to={'/'} className='transition-all cursor-pointer hover:text-[#92BE19]'>
					Home
				</Link>
				<Link to={'/about'} className='transition-all cursor-pointer hover:text-[#92BE19]'>
					About Us
				</Link>
				<Link to={'/explore'} className='transition-all cursor-pointer hover:text-[#92BE19]'>
					Explore
				</Link>
				<Link to={'/contactus'} className='transition-all cursor-pointer hover:text-[#92BE19]'>
					Contact Us
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
