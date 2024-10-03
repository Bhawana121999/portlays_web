'use client'

import React, { useState } from 'react'
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { IoIosArrowDown, IoIosCloseCircle, IoMdClose } from 'react-icons/io'
import { PiUserBold } from 'react-icons/pi'
import { Description, Field, Label, Select } from '@headlessui/react'
import clsx from 'clsx'
import { LuMail } from 'react-icons/lu'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlinePhone } from 'react-icons/hi'


export default function JoinPortlaysForm(props:any) {



    return (

        <Dialog open={props.isOpen} as="div" className="relative z-30 focus:outline-none" onClose={props.close} __demoMode>
            <div className="fixed inset-0 z-30 w-screen overflow-y-auto bg-[#00000085]">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-[60.3rem] rounded-[4px] bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                    >
                        <DialogTitle as="h3" className="text-[32px] font-semibold text-mainHeadingColor relative mb-9">
                            Join With <span className='text-primaryColor'> Portlays</span>

                            <button onClick={() => props.setIsOpen(!props.isOpen)} className='absolute top-[0.25rem] right-0 w-12 h-12 bg-[#E1E1E1] rounded-full flex flex-row items-center justify-center'>
                                <IoMdClose className='text-[32px] text-mainHeadingColor' />
                            </button>
                        </DialogTitle>

                        <form className="grid grid-cols-12  w-full gap-4" >
                            <div className="col-span-6 flex flex-col gap-3 relative">
                                <label className="text-sm font-normal text-heading">
                                    First Name
                                    <span className="text-sm font-normal text-red-600">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        placeholder='Enter Your First Name'
                                        type='text'
                                        className="py-[0.95rem] px-4 border border-[#DFDFDF] rounded bg-[#fafafa] text-sm font-normal text-paraColor w-full outline-0"
                                    />

                                    <button type='button' className='absolute top-1/2 right-4 transform -translate-y-1/2 text-xl text-paraColor'>
                                        <PiUserBold />
                                    </button>
                                </div>
                            </div>


                            <div className="col-span-6 flex flex-col gap-3 relative">
                                <label className="text-sm font-normal text-heading">
                                    Last Name
                                    <span className="text-sm font-normal text-red-600">*</span>
                                </label>

                                <div className="relative">
                                    <input
                                        placeholder='Enter Your Last Name'
                                        type='password'
                                        className="py-[0.95rem] px-4 border border-[#DFDFDF] rounded bg-[#fafafa] text-sm font-normal text-paraColor w-full outline-0"
                                    />

                                    <button type='button' className='absolute top-1/2 right-4 transform -translate-y-1/2 text-xl text-paraColor'>
                                        <PiUserBold />
                                    </button>
                                </div>

                            </div>


                            <div className="col-span-6 flex flex-col gap-3 relative">
                                <label className="text-sm font-normal text-heading">
                                    Email
                                    <span className="text-sm font-normal text-red-600">*</span>
                                </label>

                                <div className="relative">
                                    <input
                                        placeholder='Enter Your Email'
                                        type='email'
                                        className="py-[0.95rem] px-4 border border-[#DFDFDF] rounded bg-[#fafafa] text-sm font-normal text-paraColor w-full outline-0"
                                    />

                                    <button type='button' className='absolute top-1/2 right-4 transform -translate-y-1/2 text-xl text-paraColor'>
                                        <LuMail />
                                    </button>
                                </div>

                            </div>


                            <div className="col-span-6 flex flex-col gap-3 relative">
                                <label className="text-sm font-normal text-heading">
                                    Phone Number
                                    <span className="text-sm font-normal text-red-600">*</span>
                                </label>

                                <div className="relative">
                                    <input
                                        placeholder='Enter Your Last Name'
                                        type='number'
                                        className="py-[0.95rem] px-4 border border-[#DFDFDF] rounded bg-[#fafafa] text-sm font-normal text-paraColor w-full outline-0"
                                    />

                                    <button type='button' className='absolute top-1/2 right-4 transform -translate-y-1/2 text-xl text-paraColor'>
                                        <HiOutlinePhone />
                                    </button>
                                </div>

                            </div>

                            <div className="col-span-12">
                                <div className="w-full">
                                    <Field>
                                        <Label className="text-sm font-normal text-heading">
                                            Select Role
                                            <span className="text-sm font-normal text-red-600">*</span>
                                        </Label>
                                        <div className="relative">
                                            <Select
                                                className={clsx(
                                                    'mt-3 block w-full appearance-none border border-[#DFDFDF] rounded bg-[#fafafa] py-[0.95rem] px-4 text-sm font-normal text-paraColor',
                                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                                                    // Make the text of each option black on Windows
                                                    '*:text-black'
                                                )}
                                            >
                                                <option value="active">Athletes</option>
                                                <option value="paused">Athletes</option>
                                                <option value="delayed">Athletes</option>
                                                <option value="canceled">Athletes</option>
                                            </Select>
                                            <IoIosArrowDown
                                                className="group pointer-events-none absolute top-[1.05rem] right-4 text-xl text-paraColor"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </Field>
                                </div>
                            </div>

                            <div className="col-span-12 flex flex-col gap-3">
                                <label className="text-sm font-normal text-heading">
                                    Message
                                    <span className="text-sm font-normal text-red-600">*</span>
                                </label>

                                <textarea placeholder='Enter message' className='resize-none h-[145px] py-[0.95rem] px-4 border border-[#DFDFDF] rounded bg-[#fafafa] text-sm font-normal text-paraColor w-full outline-0' />
                            </div>
                        </form>

                        <div className="mt-4">
                            <Button
                                className="text-xl font-semibold text-white bg-secondaryBg rounded-full py-3 px-6 mt-3"
                                onClick={props.close}
                            >
                                Submit Request
                            </Button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
