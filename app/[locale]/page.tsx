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
    <div className="flex flex-col items-center justify-center bg-slate-400 mx-20 h-screen">
      <h2>test czy dziala</h2>
      <h1>{t("title")}</h1>
      <button onClick={changeLanguage}>{t("changeLanguage")}</button>
      <Link href={`/${params.locale}/blog`}>{t("toBlog")}</Link>
    </div>
  );
}
