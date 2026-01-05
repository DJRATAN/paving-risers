import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            {/* --- HEADER --- */}
            <header className="bg-black text-white border-b-4 border-[#cc2221]">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo Component */}
                    <Link href={'/'} className="shrink-0">
                        <Image
                            src={'/PAVING-RISERS-LOGO.png'}
                            alt='Mega Foundries'
                            height={80}
                            width={80}
                            className="object-contain h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-40 bg-white p-1 rounded-sm"
                        />
                    </Link>

                    {/* Navigation */}
                    <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wider">
                        <a href="#products" className="hover:text-[#cc2221] transition-colors">Products</a>
                        <a href="#features" className="hover:text-[#cc2221] transition-colors">Advantages</a>
                        <a href="#contact" className="hover:text-[#cc2221] transition-colors">Contact</a>
                    </div>

                    <Button className="bg-[#cc2221] hover:bg-[#a01b1a] text-white font-bold hidden sm:flex">
                        Get Quote
                    </Button>
                </div>
            </header>
        </div>
    )
}

export default Navbar