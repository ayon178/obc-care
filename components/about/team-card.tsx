"use client"

import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Package, Truck, User, HardHat, Phone } from "lucide-react"

interface TeamCardProps {
  name: string
  role: string
  image: string
  icon?: React.ReactNode
  contact?: string
  socials?: {
    linkedin?: string
    facebook?: string
    instagram?: string
  }
}

export default function TeamCard({ name, role, image, icon, contact, socials }: TeamCardProps) {
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

        {/* Content Container */}
        <div className="relative h-24 overflow-hidden">
            {/* Default Content (Name & Role) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 group-hover:translate-y-10 group-hover:opacity-0">
                <h3 className="text-xl font-bold text-[#194479]">{name}</h3>
                <p className="text-sm text-gray-500 mt-1">{role}</p>
                {contact && (
                  <div className="flex items-center gap-1.5 text-[#194479] font-medium mt-2 opacity-100 md:opacity-0 md:group-hover:opacity-0 transition-opacity">
                    <Phone className="h-3 w-3" />
                    <span className="text-xs">{contact}</span>
                  </div>
                )}
            </div>

            {/* Hover Content (Social Icons & Contact) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10">
              
              {contact && (
                <div className="flex items-center gap-2 text-white font-medium mb-1">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">{contact}</span>
                </div>
              )}

              <div className="flex items-center gap-3">
                {socials?.linkedin && (
                  <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#194479] transition-colors hover:bg-[#91c73e] hover:text-white border border-gray-100">
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
                {socials?.facebook && (
                  <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#194479] transition-colors hover:bg-[#91c73e] hover:text-white border border-gray-100">
                    <Facebook className="h-4 w-4" />
                  </a>
                )}
                {socials?.instagram && (
                  <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#194479] transition-colors hover:bg-[#91c73e] hover:text-white border border-gray-100">
                    <Instagram className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

