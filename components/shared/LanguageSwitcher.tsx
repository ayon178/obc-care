"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
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
      // Replace the locale in the pathname
      // Assumes pathname starts with /en, /de, or /es, or is just /
      // But pathname from next/navigation might include locale or not depending on middleware.
      // Actually with next-intl middleware, pathname usually includes locale if we are on a locale path.
      
      // Simpler approach: construct new path.
      // However, if we just swap the prefix, it works.
      
      const segments = pathname.split('/')
      // segments[0] is empty, segments[1] is likely the locale if using prefix routing
      if (['en', 'de', 'es'].includes(segments[1])) {
          segments[1] = nextLocale
      } else {
          // If no locale prefix (e.g. default locale hidden), we might need to prepend or replace
          // Check middleware config. If prefix is always there.
          // For now, let's assume we replace or prepend.
           segments.splice(1, 0, nextLocale); // This is risky if simpler logic exists.
      }
       // Actually next-intl provides a Link and useRouter that handles this automatically, 
       // but we are using standard router here?
       // Let's use string manipulation for now as it's robust enough if we assume /locale/... structure.
       
       let newPath = pathname;
       if (newPath.startsWith('/en') || newPath.startsWith('/de') || newPath.startsWith('/es')) {
           newPath = newPath.replace(/^\/(en|de|es)/, `/${nextLocale}`);
       } else {
           newPath = `/${nextLocale}${newPath}`;
       }
       
      router.replace(newPath)
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
