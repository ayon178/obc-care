"use client"

import { useTranslations } from "next-intl"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  const t = useTranslations("PrivacyPolicy")

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28 md:pt-24 lg:pt-36 md:pb-28">
        <div className="max-w-4xl mx-auto">
          <h1 className="headingFont text-3xl md:text-4xl lg:text-5xl font-bold text-[#194479] mb-8">
            {t("title")}
          </h1>

          <div className="prose prose-slate md:prose-lg max-w-none paragraphFont text-gray-700">
            {/* Intro */}
            <div className="mb-8">
              {(t.raw("intro") as string[]).map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 1. Definitions */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#194479] mb-4">{t("definitions.title")}</h2>
              <p className="mb-4">{t("definitions.intro")}</p>
              <div className="pl-4">
                {(t.raw("definitions.items") as { title: string; content: string }[]).map((item, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. Controller */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#194479] mb-4">{t("controller.title")}</h2>
              <p className="mb-2">{t("controller.content")}</p>
              <address className="not-italic bg-gray-50 p-4 rounded-lg border border-gray-100">
                <span className="font-bold text-[#194479]">OBC CARE e.K.</span>
                <br />
                <span dangerouslySetInnerHTML={{ __html: t.raw("controller.address") }} />
              </address>
            </section>

            {/* 3. Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#194479] mb-4">{t("cookies.title")}</h2>
              {(t.raw("cookies.content") as string[]).map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </section>

            {/* 4. General Data */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#194479] mb-4">{t("generalData.title")}</h2>
              {(t.raw("generalData.content") as string[]).map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </section>

            {/* 5. Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#194479] mb-4">{t("contact.title")}</h2>
              {(t.raw("contact.content") as string[]).map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </section>

            {/* 6. Erasure */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#194479] mb-4">{t("erasure.title")}</h2>
              {(t.raw("erasure.content") as string[]).map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </section>

            {/* 7. Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#194479] mb-4">{t("rights.title")}</h2>
              <div className="pl-4">
                {(t.raw("rights.items") as { title: string; content: string }[]).map((item, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: item.content }} />
                  </div>
                ))}
              </div>
            </section>

            {/* 8. Facebook */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#194479] mb-4">{t("facebook.title")}</h2>
              {(t.raw("facebook.content") as string[]).map((paragraph, index) => (
                <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
