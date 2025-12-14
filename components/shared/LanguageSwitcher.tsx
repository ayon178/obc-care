"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/routing"
import { ChangeEvent, useTransition } from "react"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale})
    })
  }

  // Improved UI: Earth Icon + Dropdown
  // Just a simple select for now, styled to be minimal
  return (
    <div className="relative flex items-center">
      <Globe className="w-5 h-5 md:w-6 md:h-6 text-white absolute left-0 pointer-events-none" />
      <select
        defaultValue={locale}
        onChange={onSelectChange}
        disabled={isPending}
        className="bg-transparent text-transparent w-full appearance-none pl-6 cursor-pointer focus:outline-none"
        style={{ width: '24px' }} // Hide the select text, just show icon interaction or overlay
        aria-label="Select language"
      >
        <option value="en" className="text-black">English</option>
        <option value="de" className="text-black">German</option>
        <option value="es" className="text-black">Spanish</option>
      </select>
    </div>
  )
}
