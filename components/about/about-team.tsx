"use client"

import TeamCard from "./team-card"
import { Truck, Package, User, HardHat } from "lucide-react"

export default function AboutTeam() {
  const teamMembers = [
    {
      name: "James Cameron",
      role: "Deliver Boy",
      image: "/images/about/team-1.png",
      icon: <Truck className="h-8 w-8" />,
    },
    {
      name: "William Logan",
      role: "Driver", // Keeping role as per reference, even if he's in a suit
      image: "/images/about/team-2.png",
      icon: <Package className="h-8 w-8" />,
    },
    {
      name: "Sophia Arthur",
      role: "HR Manager",
      image: "/images/about/team-3.png",
      icon: <User className="h-8 w-8" />,
    },
    {
      name: "Michael Grey",
      role: "Manager",
      image: "/images/about/team-4.png",
      icon: <HardHat className="h-8 w-8" />,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#91c73e] font-semibold tracking-wider uppercase">Dedicated Team</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#194479] mt-2">
            Meet Our Special Team Members!
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              icon={member.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
