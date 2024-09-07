"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HomePage({ params }: { params: { locale: string } }) {
  const t = useTranslations("HomePage");
  const router = useRouter();

  const changeLanguage = () => {
    const newLocale = params.locale === "en" ? "pl" : "en";
    router.push(`/${newLocale}`);
  };

  return (
    // <div
    //   className="flex flex-col items-center justify-center mx-20 h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-400 animate-gradient"
    //   style={{ height: "calc(100vh - 80px)" }}
    // >
    //   <h1>{t("title")}</h1>
    //   <button onClick={changeLanguage}>{t("changeLanguage")}</button>
    //   <Link href={`/${params.locale}/blog`}>{t("toBlog")}</Link>
    // </div>
    <div className="relative h-screen overflow-hidden bg-backgroundLight dark:bg-backgroundDark transition-all duration-500">
      {/* Zawartość strony */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl font-bold text-textLight dark:text-textDark">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-textLight dark:text-textDark">
          Explore my work
        </p>
      </div>
    </div>
  );
}
