import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from "react-router-dom"
import logo from "../img/logo.gif"


const Header = () => {
    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);
  
    const toggle = () => setModal(!modal);
    const toggleNested = () => {
      setNestedModal(!nestedModal);
      setCloseAll(false);
    };
    const toggleAll = () => {
      setNestedModal(!nestedModal);
      setCloseAll(true);
    };
  
    return (
      <>
      <Modal isOpen={modal} toggle={toggle}>
      <div data-slot="content" className="z-10 inline-flex flex-col items-center justify-center subpixel-antialiased outline-none box-border text-small bg-content1 rounded-large shadow-medium w-full p-1 min-w-[200px]" data-placement="bottom">
  <ul data-slot="list" className="w-full flex flex-col gap-0.5 outline-none p-2 text-dark" role="menu" tabIndex="-1">
    <a href="#ticket" role="menuitem" tabIndex="-1" className="flex gap-2 text-dark items-center justify-between relative px-2 py-1.5 w-full h-full box-border rounded-small cursor-pointer hover:bg-default-100 text-decoration-none no-underline">
      <div className="w-full flex flex-col items-start text-dark">
        <span className="flex-1 text-small  " style={{fontSize:"0.875rem", fontWeight: 400}}>Raise ticket</span>
        <span className="text-tiny text-foreground-500 group-hover:text-current" style={{ color: "hsl(240, 3.83%, 46.08%)", fontSize: "0.75rem" }}>Raise a ticket for your complaint and it will be resolved within 48 hours.</span>
      </div>
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </a>
    <a href="mailto:support@sukhvivah.com" role="menuitem" tabIndex="-1" className="flex text-dark group gap-2 items-center justify-between relative px-2 py-1.5 w-full h-full box-border rounded-small cursor-pointer tap-highlight-transparent outline-none hover:bg-default-100 text-decoration-none no-underline">
      <div className="w-full flex flex-col items-start">
      <span className="flex-1 text-small  " style={{fontSize:"0.875rem", fontWeight: 400}}>Contact Us</span>
      <span className="text-tiny text-foreground-500 group-hover:text-current" style={{ color: "hsl(240, 3.83%, 46.08%)", fontSize: "0.75rem" }}>Email us about your complaint, and we will respond within 48 hours.</span>
      </div>
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </a>
    <a href="https://wa.me/message/NWKIFGCO5X2GI1" role="menuitem" tabIndex="-1" className="flex text-dark group gap-2 items-center justify-between relative px-2 py-1.5 w-full h-full box-border rounded-small cursor-pointer tap-highlight-transparent outline-none hover:bg-default-100 text-decoration-none no-underline">
      <div className="w-full flex flex-col items-start">
      <span className="flex-1 text-small  " style={{fontSize:"0.875rem", fontWeight: 400}}>Emergency</span>
      <span className="text-tiny text-foreground-500 group-hover:text-current" style={{ color: "hsl(240, 3.83%, 46.08%)", fontSize: "0.75rem" }}>Report emergencies on WhatsApp. Quick action will be taken within 12 hours.</span>
      </div>
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </a>
  </ul>
</div>

      </Modal>
    <div className=" list-unstyled absolute inset-0 flex justify-between items-center h-24 max-w-full mx-auto py-8 px-5% sm:px-1 md:px-7% lg:px-15% text-white z-50">
    
      <a className="sm:block flex justify-center items-center mr-4" href="/">
        <div className="relative shadow-black/5 shadow-none rounded-lg" style={{ maxWidth: '150px' }}>
          <img
            alt="sukhvivah.com logo"
            fetchpriority="high"
            width="150"
            height="140"
            decoding="async"
            className="relative z-10 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none duration-300 rounded-lg min-h-20 sm:min-w-24 sm:min-h-24"
            style={{ color: 'transparent' }}
            srcSet={logo}
            src={logo}
            data-loaded="true"
          />
        </div>
      </a>
      <ul className="hidden md:flex items-center justify-center gap-3">
        <li>
          <div className="group flex flex-col w-full relative justify-end border rounded min-w-full max-w-full px-4 outline-none border-white">
            <div className="h-full flex flex-col">
              <div className="relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm  gap-3 border-medium border-default-200 hover:border-default-400 group-focus:border-default-foreground h-10 min-h-10 rounded-md transition-background duration-150 transition-colors">
                <div className="inline-flex w-full items-center h-full box-border">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1.5em"
                    width="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <input
                    className="w-full mx-3 font-normal bg-transparent outline-none placeholder:text-foreground-500 focus-visible:outline-none text-small pr-6 h-full"
                    aria-label="Profile search"
                    type="text"
                    placeholder="Search a profile"
                    id="profile-search"
                    value=""
                    // onChange={()=>value}
                  />
                    <Link className='text-white text-decoration-none' to='/login'>
                  <span
                    role="button"
                    tabIndex="0"
                    className="p-2 -m-2 z-10 hidden absolute right-3 opacity-0 hover:opacity-100 cursor-pointer active:opacity-70 rounded-full outline-none"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      height="1em"
                      role="presentation"
                      viewBox="0 0 24 24"
                      width="1em"
                    >
                      <path
                        d="M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <button
            className="z-10 flex gap-1"
            aria-haspopup="true"
            aria-expanded="false"
            id="help-button"
            type="button"
            onClick={toggle}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              className="w-5 h-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M204.73,51.85A108.07,108.07,0,0,0,20,128v56a28,28,0,0,0,28,28H64a28,28,0,0,0,28-28V144a28,28,0,0,0-28-28H44.84A84.05,84.05,0,0,1,128,44h.64a83.7,83.7,0,0,1,82.52,72H192a28,28,0,0,0-28,28v40a28,28,0,0,0,28,28h19.6A20,20,0,0,1,192,228H136a12,12,0,0,0,0,24h56a44.05,44.05,0,0,0,44-44V128A107.34,107.34,0,0,0,204.73,51.85ZM64,140a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V140Zm124,44V144a4,4,0,0,1,4-4h20v48H192A4,4,0,0,1,188,184Z"
              />
            </svg>
            Help
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </li>
        <li className="rounded-xl">
          <Link className='text-white text-decoration-none' to='/login'>
          <button className="flex items-center justify-center" href='/login'>
            Login
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          </Link>
        </li>
      </ul>
      <div className="flex justify-center items-center gap-3 md:hidden m-3">
        <button className="block sm:hidden">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 4V20H17V12H19V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2H13V4H7ZM19 6H22L18 10L14 6H17V2H19V6ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18Z"
            />
          </svg>
        </button>
        <li className='text-decoration-none'>
          <button
            className="z-10 flex gap-1"
            
            type="button"
            onClick={toggle}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              className="w-5 h-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M204.73,51.85A108.07,108.07,0,0,0,20,128v56a28,28,0,0,0,28,28H64a28,28,0,0,0,28-28V144a28,28,0,0,0-28-28H44.84A84.05,84.05,0,0,1,128,44h.64a83.7,83.7,0,0,1,82.52,72H192a28,28,0,0,0-28,28v40a28,28,0,0,0,28,28h19.6A20,20,0,0,1,192,228H136a12,12,0,0,0,0,24h56a44.05,44.05,0,0,0,44-44V128A107.34,107.34,0,0,0,204.73,51.85ZM64,140a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V140Zm124,44V144a4,4,0,0,1,4-4h20v48H192A4,4,0,0,1,188,184Z"
              />
            </svg>
            
          </button>
        </li>
        <li className="rounded-xl">
        <Link className='text-white text-decoration-none' to='/login'>
          <button className="flex items-center justify-center">
            Login
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          </Link>
        </li>
      </div>
    </div>
    </>
  );
};

export default Header;
