"use client"

import TeamCard from "./team-card"
import { Briefcase, Calculator, Settings, ClipboardList } from "lucide-react"
import { useTranslations } from "next-intl"

export default function AboutTeam() {
  const t = useTranslations("AboutTeam")

  const teamMembers = [
    {
      name: "Eugen Reimer",
      role: t("roles.0"),
      image: "/about/team/eugen.png",
      icon: <Briefcase className="h-8 w-8" />,
      contact: "+49 176 45922485",
      socials: {
        linkedin: "https://www.linkedin.com/in/timecriticallogistics-eugene-reimer-obccare/",
        facebook: "https://web.facebook.com/EugenReimerBF/",
        instagram: "https://www.instagram.com/eugenreimer_bf/",
      },
    },
    {
      name: "Tatiana Reimer",
      role: t("roles.1"),
      image: "/about/team/Tanya.png",
      icon: <Calculator className="h-8 w-8" />,
      contact: "+49 179 1394318",
      socials: {
        linkedin: "https://www.linkedin.com/in/tatiana-reimer-053431288/",
        instagram: "https://www.instagram.com/tanya_reimer/",
      },
    },
    {
      name: "Alexander Reimer",
      role: t("roles.2"),
      image: "/about/team/alexander.png",
      icon: <Settings className="h-8 w-8" />,
      contact: "+44 7488 818707",
      socials: {
        linkedin: "https://www.linkedin.com/in/alexanderreimer/",
        instagram: "https://www.instagram.com/al3ks11/",
      },
    },
    {
      name: "Cristine Acosta",
      role: t("roles.3"),
      image: "/about/team/cristine.png",
      icon: <ClipboardList className="h-8 w-8" />,
      contact: "+1 (610) 245-8815",
    },
    {
      name: "Noreleen Neypes",
      role: t("roles.4"),
      image: "/about/team/noreleen.jpeg", // Reusing image for now
      icon: <ClipboardList className="h-8 w-8" />,
      contact: "+44 7700 183290",
    },
    {
      name: "Renz Abad",
      role: t("roles.5"),
      image: "/about/team/renz.png", // Reusing image for now
      icon: <ClipboardList className="h-8 w-8" />,
      contact: "+44 7700 183458",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#91c73e] font-semibold tracking-wider uppercase">{t("label")}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#194479] mt-2">
            {t("title")}
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
              contact={member.contact}
              socials={member.socials}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
