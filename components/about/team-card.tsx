"use client"

import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Package, Truck, User, HardHat } from "lucide-react"

interface TeamCardProps {
  name: string
  role: string
  image: string
  icon?: React.ReactNode
}

export default function TeamCard({ name, role, image, icon }: TeamCardProps) {
  return (
    <div className="group relative w-full">
      {/* Image Container */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Bottom Content Box */}
      <div className="relative -mt-8 mx-4 bg-white p-6 pt-10 text-center shadow-lg transition-all duration-500 group-hover:bg-[#194479] group-hover:-translate-y-2">
        
        {/* Floating Icon */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-white text-[#91c73e] shadow-md transition-all duration-500 group-hover:bg-[#91c73e] group-hover:text-white group-hover:border-[#194479]">
             {icon}
        </div>

        {/* Content Container - Relative to hold absolute positioned elements if needed, or just stack them */}
        <div className="relative h-14 overflow-hidden">
            {/* Default Content (Name & Role) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 group-hover:translate-y-10 group-hover:opacity-0">
                <h3 className="text-xl font-bold text-[#194479]">{name}</h3>
                <p className="text-sm text-gray-500 mt-1">{role}</p>
            </div>

            {/* Hover Content (Social Icons) */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#194479] transition-colors hover:bg-[#91c73e] hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#194479] transition-colors hover:bg-[#91c73e] hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#194479] transition-colors hover:bg-[#91c73e] hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

