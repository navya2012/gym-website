import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { SiOpenaigym } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-9">

        <div className="mb-6">
          <div className="flex items-center mb-4 gap-2">
          <SiOpenaigym size={20}  />
            <h6 className="font-bold text-green-700 text-lg">GymFluencer</h6>
          </div>
          <p className="text-sm leading-6">329 Queensberry Street, North Melbourne VIC</p>
          <p className="text-sm leading-6">3051, Australia.</p>
          <div className="mb-2 flex items-center gap-2">
          <IoMdMail className=' text-green-700' size={20}/>
          <p className="text-sm leading-6">support@gymfluencer.com</p>
          </div>

          <div className="mb-2 flex items-center gap-2">
          <IoCall className=' text-green-700' size={20}/>
            <p className="text-primary text-base">123 456 720</p>
          </div>
        </div>

        <div>
          <h6 className="font-bold text-green-700 mb-6">Resources</h6>
          <ul>
            <Link to="#" className="text-sm leading-6 mb-2">Our Products</Link >
            <Link to="#" className="text-sm leading-6 mb-2">Flow</Link >
            <Link to="#" className="text-sm leading-6 mb-2">Development</Link >
            <Link to="#" className="text-sm leading-6 mb-2">Strategy</Link >
            <Link to="#" className="text-sm leading-6 mb-2">My Bookmarks</Link >
          </ul>
        </div>

        <div>
          <h6 className="font-bold text-green-700 mb-6">Links</h6>
          <ul>
            <Link to="#" className="text-sm leading-6 mb-2">Our Services</Link >
            <Link to="#" className="text-sm leading-6 mb-2">Premium Support</Link >
            <Link to="#" className="text-sm leading-6 mb-2">Our Team</Link >
            <Link to="#" className="text-sm leading-6 mb-2">Our Team</Link >
          </ul>
        </div>

        <div>
          <h6 className="font-bold mb-6 text-green-700">About Us</h6>
          <ul>
            <Link to="#" className="text-sm leading-6 mb-2">About Us</Link >
            <Link to="#" className="text-sm leading-6 mb-2"> Page Invoice</Link >
            <Link to="#" className="text-sm leading-6 mb-2"> Dashboard</Link >
            <Link to="#" className="text-sm leading-6 mb-2">Terms Page</Link >
            <Link to="#" className="text-sm leading-6 mb-2">Blog</Link >
            <Link to="#" className="text-sm leading-6 mb-2">Contact</Link >
          </ul>
        </div>

        <div>
          <h6 className="font-bold text-green-700 mb-6">Follow Us</h6>
          <p className="text-sm leading-6">Click and Get Started in Seconds</p>
          <div className="flex items-center py-5 space-x-4">
          <FaFacebook size={23} className='text-green-700' />
          <FaInstagram size={23} className='text-green-700'/>
          <FaTwitter size={23} className='text-green-700'/>
          <FaLinkedin size={23} className='text-green-700' />
        </div>
        </div>        
      </div>

        <div className="text-base text-center text-green-700 font-bold py-6">
          <p>© 2023 Careerpedia by ib-themes. All Right Reserved.</p>
        </div>
    </div>
  </footer>
  )
}

export default Footer