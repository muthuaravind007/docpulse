import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink.jsx';

export default function Header() {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuBar = () => {
        setMenuOpen(!isMenuOpen);
    }

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const dropDown1 = () => {
        setIsOpen1(!isOpen1);
    }
    const dropDown2 = () => {
        setIsOpen2(!isOpen2);
    }


    return (
        <header>
           
            <div className='flex flex-wrap bg-lime-600 max-w-8xl gap-x-10 items-center md:justify-center lg:justify-end sm:py-2 px-5 py-4'>
                <div className="inline-flex items-center gap-0.5 relative">
                    <p className="text-white sm:text-base text-sm font-bold font-['Segoe UI']">Sales: </p>
                        <img className='w-3.5 h-[15px]' src='./images/telephone.png' />
                        <span className="text-white sm:text-base text-sm font-normal font-['Segoe UI'] cursor-pointer">08069484993</span>
                        
                        <img className='flex w-[20px] h-[25px]' src='./images/email.png' />
                    <p className="flex text-white sm:text-base text-sm font-normal font-['Segoe UI'] sm:items-center cursor-pointer">contactus@docpulse.com</p>
                </div>

                <div className="inline-flex items-center relative">
                        <Link to='/contact-us'>
                        <button className="flex md:ml-5 lg:ml-7 w-[186px] h-10 bg-orange-500 rounded-[3px] items-center gap-0.5 text-white text-[15px] font-normal font-['Segoe UI'] px-[25px] py-2.5 ">Schedule A Demo
                        <span><img className="w-[15px] h-[15px] " src="./images/contactUs.png" /></span>
                        </button>
                        </Link>

                        <Link to='/login'>
                        <button className="flex ml-4 lg:ml-3 w-[105px] h-10 bg-blue-800 rounded-[3px] items-center gap-0.5 text-white text-[15px] font-normal font-['Segoe UI'] px-[25px] py-2.5">Login
                        <span><img className="w-[15px] h-[15px]" src="./images/login.png" /></span>
                        </button> 
                        </Link>
                </div>
            </div>


            
           <div className="flex bg-white border border-black/opacity-5 items-center p-2.5 relative">
                <div className="flex md:ml-20 lg:ml-10 mx-auto gap-36 relative">
                <Link to='/'>
                    <img className="flex w-[110px] h-[40px] md:w-[225px] md:h-[81px] lg:w-[180px] lg:h-[65px] relative" src='./images/logo.png'/>
                </Link>

                <button className='flex lg:hidden items-center cursor-pointer' onClick={menuBar}>
                    <img className='w-8 h-4 md:ml-44' src='./images/menubar.png' />
                </button>
                </div>

            <div className="flex ml-auto lg:mr-5 relative">
                <ul className="lg:flex hidden relative gap-[23px] text-sm cursor-pointer font-normal font-['Work Sans']
                 list-none uppercase">

                <Link to='/'>
                    <li className='hover:text-neutral-500'>home</li>
                </Link>
                <Link to='/product-videos'>
                    <NavLink label="PRODUCTS VIDEOS" items={false} hasDropDown={false} />
                </Link>

                <NavLink label="PRODUCTS"
                    items={[
                        { text:
                            <Link className='flex text-zinc-800 hover:text-neutral-500 hover:bg-white px-2 py-2.5 w-[349px]'
                            to='/products/telemedicine-software'>Telemedicine Software
                            </Link>
                        },
                                        
                        { text: 
                            <Link 
                            className='flex text-zinc-800 hover:text-neutral-500 hover:bg-white px-2 py-2.5 w-[349px]'
                            to='/products/appointment-scheduling-software'>Appointment Scheduling Software
                            </Link>
                        },
                         
                        { text: 
                            <Link
                            className='flex text-zinc-800 hover:text-neutral-500 hover:bg-white px-2 py-2.5 w-[349px]'
                            to='/products/electronic-health-medical-records'>Electronic Medical/Health Records
                            </Link>
                        },
                        
                        { text: 
                            <Link
                            className='flex text-zinc-800 hover:text-neutral-500 hover:bg-white px-2 py-2.5 w-[349px]'
                            to='/products/patient-appointment-reminders'>Patient Appointment Reminders
                            </Link>
                        },
                        
                        { text: 
                            <Link
                            className='flex text-zinc-800 hover:text-neutral-500 hover:bg-white px-2 py-2.5 w-[349px]'
                            to='/products/pharmacy-management-system'>Pharmacy Management System
                            </Link>
                        },
                        
                        { text: 
                            <Link
                            className='flex flex-wrap text-zinc-800 hover:text-neutral-500 hover:bg-white px-2 py-2.5 w-[349px] justify-between relative'
                            to='/products/vaccination-management'>Vaccination Management
                            </Link>
                        },
                        
                        { text: 
                            <Link
                            className='flex text-zinc-800 hover:text-neutral-500 hover:bg-white px-2 py-2.5 w-[349px]'
                            to='/products/appointment-booking-software-ivr'>Appointment Booking Software with IVR Solutions
                            </Link>
                        },
                        
                        { text: 
                            <Link
                            className='flex text-zinc-800 hover:text-neutral-500 hover:bg-white px-2 py-2.5 w-[349px]'
                            to='/products/medical-billing-software'>Medical Billing Software
                            </Link>
                        },
                        
                        { text: 
                            <Link
                            className='flex text-zinc-800 hover:text-neutral-500 hover:bg-white px-2 py-2.5 w-[349px]'
                            to='/products/lims-software'>LIMS Software
                            </Link>
                        },
                        
                        { text: 
                            <Link
                            className='flex text-zinc-800 hover:text-neutral-500 hover:bg-white px-2 py-2.5 w-[349px]'
                            to='/products/hospital-stock-and-inventory-management'>Hospital Stock And Inventory Management
                            </Link>
                        },
                        
                        { text: 
                            <Link
                            className='flex text-zinc-800 hover:text-neutral-500 hover:bg-white px-2 py-2.5 w-[349px]'
                            to='/products/patient-management-system'>Patient Management System
                            </Link>
                        },
                         
                        { text: 
                            <Link
                            className='flex text-zinc-800 hover:text-neutral-500 hover:bg-white px-2 py-2.5 w-[349px]'
                            to='/products/doctor-appointment-app'>Doctor Appointment App
                            </Link>
                        }
                    ]
                    } hasDropDown={true} />


                    <NavLink label="SOLUTIONS" items={[
                        { text:
                            <Link
                            className='flex hover:bg-white hover:text-neutral-500 w-[218px] h-[41px] px-2 py-2.5'
                            to='/solutions/clinic-management-software'>Clinic Management Software
                            </Link>
                        },

                        { text:
                            <Link
                            className='flex hover:bg-white hover:text-neutral-500 w-[218px] h-[41px] px-2 py-2.5'
                            to='/solutions/medical-software'>Medical Software
                            </Link>
                        }, 

                        { text:
                            <Link
                            className='flex hover:bg-white hover:text-neutral-500 w-[218px] h-[41px] px-2 py-2.5'
                            to='/solutions/hospital-management-software'>Hospital Management Software
                            </Link>
                        },

                        { text:
                            <Link
                            className='flex hover:bg-white hover:text-neutral-500 w-[218px] h-[41px] px-2 py-2.5'
                            to='/solutions/clinic-chains'>Clinic Chains
                            </Link>
                        }
                    ]} hasDropDown={true} additionalStyle={true} />
                        <NavLink label="CONTACT US" items={false} hasDropDown={false} />
            </ul>
            
            </div>
            </div>

                    <div className={`flex flex-col inset-0 lg:hidden bg-gray-50 border-black/15 w-[350px] h-screen mt-0 fixed overflow-y-auto transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="flex justify-between px-5 py-8 relative">
                            <img className='w-[100px] h-[22px] cursor-pointer items-center' src='./images/logo1.png' />
                            <button className='relative cursor-pointer top-[-8px]'
                                    onClick={menuBar}
                            >
                            <img className='w-[45px] h-[42px]' src='./images/closebutton.png' />
                            </button>
                        </div>
                            <ul className="flex flex-col space-y-5 px-3">
                                <li className="text-neutral-500 text-sm cursor-pointer font-normal font-['Work Sans'] list-none uppercase cursor-pointer">home</li>
                                <li className="text-black hover:text-neutral-500 text-sm font-normal font-['Work Sans'] list-none uppercase cursor-pointer">product videos</li>
                                <li className="flex items-center justify-between text-black hover:text-neutral-500 text-sm font-normal font-['Work Sans'] list-none uppercase">products
                                <button onClick={dropDown1}>
                                <img className='flex px-1.5 py-0.5 relative cursor-pointer'alt='dropdown' src='./images/dropdownarrow.png'/>
                                </button></li>

                                {isOpen1 && ( <ul className="w-[350px] h-[606px]  py-4 bg-zinc-100 relative cursor-pointer">
                                    <Link to='/products/telemedicine-software'>
                                        <li className="relative text-zinc-800 text-xs hover:text-neutral-500 hover:bg-white px-4 py-4 font-normal font-['Segoe UI']">
                                            Telemedicine Software
                                        </li>
                                    </Link>

                                    <Link to='/products/appointment-scheduling-software'>
                                        <li className="relative text-zinc-800 text-xs hover:text-neutral-500 hover:bg-white px-4 py-4 font-normal font-['Segoe UI']">
                                            Appointment Scheduling Software
                                        </li>
                                    </Link>
                                    <Link to='/products/electronic-health-medical-records'>
                                        <li className="relative text-zinc-800 text-xs hover:text-neutral-500 hover:bg-white px-4 py-4 font-normal font-['Segoe UI']">
                                            Electronic Health/Medical Records
                                        </li>
                                    </Link>
                                    <Link to='/products/patient-appointment-reminders'>
                                        <li className="relative text-zinc-800 text-xs hover:text-neutral-500 hover:bg-white px-4 py-4 font-normal font-['Segoe UI']">
                                            Patient Appointment Reminders
                                        </li>
                                    </Link>
                                    <Link to='/products/pharmacy-management-system'>
                                        <li className="relative text-zinc-800 text-xs hover:text-neutral-500 hover:bg-white px-4 py-4 font-normal font-['Segoe UI']">
                                            Pharmacy Management System
                                        </li>
                                    </Link>
                                    <Link to='/products/vaccination-management'>
                                        <li className="relative text-zinc-800 text-xs hover:text-neutral-500 hover:bg-white px-4 py-4 font-normal font-['Segoe UI']">
                                            Vaccination Management
                                        </li>
                                    </Link>
                                    <Link to='/products/appointment-booking-software-ivr'>
                                        <li className="relative text-zinc-800 text-xs hover:text-neutral-500 hover:bg-white px-4 py-4 font-normal font-['Segoe UI']">
                                            Appointment Booking Software with IVR Solutions
                                        </li>
                                    </Link>
                                    <Link to='/products/medical-billing-software'>
                                        <li className="relative text-zinc-800 text-xs hover:text-neutral-500 hover:bg-white px-4 py-4 font-normal font-['Segoe UI']">
                                            Medical Billing Software
                                        </li>
                                    </Link>
                                    <Link to='/products/lims-software'>
                                        <li className="relative text-zinc-800 text-xs hover:text-neutral-500 hover:bg-white px-4 py-4 font-normal font-['Segoe UI']">
                                            LIMS Software
                                        </li>
                                    </Link>
                                    <Link to='/products/hospital-stock-and-inventory-management'>
                                        <li className="relative text-zinc-800 text-xs hover:text-neutral-500 hover:bg-white px-4 py-4 font-normal font-['Segoe UI']">
                                            Hospital Stock and Inventory Management
                                        </li>
                                    </Link>
                                    <Link to='/products/patient-management-system'>
                                        <li className="relative text-zinc-800 text-xs hover:text-neutral-500 hover:bg-white px-4 py-4 font-normal font-['Segoe UI']">
                                            Patient Management System
                                        </li>
                                    </Link>
                                    <Link to='/products/doctor-appointment-app'>
                                        <li className="relative text-zinc-800 text-xs hover:text-neutral-500 hover:bg-white px-4 py-4 font-normal font-['Segoe UI']">
                                            Doctor Appointment App
                                        </li>
                                    </Link>
                                </ul>
                                )}

                                <li className="flex items-center justify-between text-black hover:text-neutral-500 text-sm font-normal font-['Work Sans'] list-none uppercase">solutions
                                <button onClick={dropDown2}>
                                    <img className='flex px-1.5 py-0.5 relative cursor-pointer'
                                           alt='dropdown' src='./images/dropdownarrow.png'
                                      />
                                </button>
                                </li>

                                {isOpen2 && ( 
                                <ul className="w-[350px] h-[222px] py-4 bg-zinc-100 relative cursor-pointer">
                                    <Link to='/solutions/clinic-management-software'>
                                        <li className="relative text-zinc-800 text-xs hover:text-neutral-500 hover:bg-white px-4 py-4 font-normal font-['Segoe UI']">
                                            Clinic Management Software
                                        </li>
                                    </Link>
                                    <Link to='/solutions/medical-software'>
                                        <li className="relative text-zinc-800 text-xs hover:text-neutral-500 hover:bg-white px-4 py-4 font-normal font-['Segoe UI']">
                                            Hospital Management Software
                                        </li>
                                    </Link>
                                    <Link to='/solutions/hospital-management-software'>
                                        <li className="relative text-zinc-800 text-xs hover:text-neutral-500 hover:bg-white px-4 py-4 font-normal font-['Segoe UI']">
                                            Clinic Chains
                                        </li>
                                    </Link>
                                    <Link to='/solutions/clinic-chains'>
                                        <li className="relative text-zinc-800 text-xs hover:text-neutral-500 hover:bg-white px-4 py-4 font-normal font-['Segoe UI']">
                                            Medical Software
                                        </li>
                                    </Link>
                                </ul>
                                )}
                                
                                <li className="text-black hover:text-neutral-500 text-sm cursor-pointer font-normal font-['Work Sans'] list-none uppercase cursor-pointer">contact us</li>

                            </ul>
                        </div>
           
        </header>
    )
    }
