'use client'

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
 import {
    BookAIcon,
    ChevronDown,
    ChevronRight,
    Factory,
    FireExtinguisherIcon,
    Menu,
    Power,
    Search,
    User,
    UserCheck2Icon,
    X,
    Zap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

// 1. LOGIN OPTIONS
const loginOptions = [
    { label: "Team Mega Login", href: "/login/team" },
    { label: "Engineers/Architect Login", href: "/login/engineer" },
    { label: "Customer Login", href: "/login/customer" },
    { label: "Logistics Login", href: "/login/logistics" },
    { label: "Foundries Login", href: "/login/foundry" },
    { label: "Forge Shops Login", href: "/login/forge" },
    { label: "Fabricators Login", href: "/login/fabricator" },
    { label: "Other Vendors Login", href: "/login/vendor" },
]

// 2. MENU ITEMS
const topMenuItems = [
    { label: 'Become a', href: '/sellerHomepage', content: 'Supplier', icon: UserCheck2Icon },
    { label: 'Request for', href: '#', content: 'Quotations', icon: BookAIcon },
    { label: 'Welcome', href: '#', content: 'Sign In/Register', icon: User, isLogin: true }
];

const countryOptions = [
    { label: "USA", flag: "🇺🇸", id: "us" },
    { label: "Canada", flag: "🇨🇦", id: "ca" },
    { label: "Latin America", flag: "🇧🇷", id: "lat" },
    { label: "North America", flag: "🌎", id: "na" },
    { label: "Caribbean", flag: "🇯🇲", id: "car" },
    { label: "Europe", flag: "🇪🇺", id: "eu" },
]

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countryOptions[0])

    return (
        <div className="w-full relative z-40">
            <header className="bg-white shadow-md sticky top-0">

                <div className="w-full px-4 sm:px-6 lg:px-10 py-3">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                        <div className="w-full lg:w-auto flex justify-between item-start gap-6 shrink-0">

                            <div className="items-center gap-4 hidden lg:flex">
                                <Link href={'/'} className="shrink-0">
                                    <Image
                                        src={'/PAVING-RISERS-LOGO.PNG'}
                                        alt='Mega Foundries'
                                        height={80}
                                        width={80}
                                        className="object-contain h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
                                    />
                                </Link>

                            </div>
                            {/* Mobile Toggle */}
                            <div className="flex items-center gap-2 lg:hidden">
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="p-2 text-neutral-600 hover:text-[#cc2221] transition-colors"
                                >
                                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                                </button>
                            </div>
                        </div>



                        <div className="hidden lg:flex shrink-0 items-center space-x-6">

                            <div className="flex items-center space-x-6">
                                {topMenuItems.map((item) => {
                                    if (item.isLogin) {
                                        return (
                                            <DropdownMenu key={item.label}>
                                                <DropdownMenuTrigger className="flex items-center gap-2 group outline-none cursor-pointer">
                                                    <div className='text-neutral-600 group-hover:text-[#cc2221] transition-colors'>
                                                        <item.icon size={28} strokeWidth={1.5} />
                                                    </div>
                                                    <div className="flex flex-col justify-center text-left">
                                                        <p className='text-sm text-neutral-500 leading-tight'>{item.label}</p>
                                                        <p className='text-xs font-bold text-neutral-800 group-hover:text-[#cc2221] transition-colors'>{item.content}</p>
                                                    </div>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="w-56 p-2 bg-white border border-gray-100 shadow-lg rounded-md">
                                                    {loginOptions.map((opt) => (
                                                        <DropdownMenuItem key={opt.label} asChild>
                                                            <Link href={opt.href} className="cursor-pointer flex items-center gap-2 py-2 hover:bg-red-50 rounded px-2 group">
                                                                <ChevronRight className="w-4 h-4 text-[#cc2221] opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                <span className="font-medium text-sm text-gray-700 group-hover:text-[#cc2221]">{opt.label}</span>
                                                            </Link>
                                                        </DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        )
                                    }
                                    return (
                                        <Link className='flex items-center gap-2 group' key={item.label} href={item.href}>
                                            <div className='text-neutral-600 group-hover:text-[#cc2221] transition-colors'>
                                                <item.icon size={28} strokeWidth={1.5} />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <p className='text-sm text-neutral-500 leading-tight'>{item.label}</p>
                                                <p className='text-xs font-bold text-neutral-800 group-hover:text-[#cc2221] transition-colors'>{item.content}</p>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>

                            <div className="h-12 w-[1px] bg-gray-200"></div>

                        </div>

                    </div>
                </div>

                {/* === MOBILE MENU (UNCHANGED) === */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-neutral-50 border-t border-neutral-200 px-4 py-4 shadow-inner space-y-4 h-[calc(100vh-80px)] overflow-y-auto">
                        {topMenuItems.map((item) => (
                            <div key={item.label}>
                                {item.isLogin ? (
                                    <div className="space-y-2 bg-white p-2 rounded border border-gray-100">
                                        <div className='flex items-center gap-4 text-[#cc2221] mb-2'>
                                            <item.icon size={24} />
                                            <div>
                                                <p className='text-xs text-neutral-500'>{item.label}</p>
                                                <p className='text-sm font-bold'>Select Login Type:</p>
                                            </div>
                                        </div>
                                        <div className="pl-2 space-y-1">
                                            {loginOptions.map(opt => (
                                                <Link key={opt.label} href={opt.href} className="flex items-center gap-2 p-2 text-sm text-neutral-600 hover:text-[#cc2221] hover:bg-red-50 rounded">
                                                    <ChevronRight className="w-3 h-3" />
                                                    {opt.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link className='flex items-center gap-4 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all' href={item.href}>
                                        <div className='text-[#cc2221]'>
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <p className='text-xs text-neutral-500'>{item.label}</p>
                                            <p className='text-sm font-bold text-neutral-800'>{item.content}</p>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                )}

            </header>
        </div>
    )
}

export default Navbar