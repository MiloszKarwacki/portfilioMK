"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomePage({ params }: { params: { locale: string } }) {
  const t = useTranslations("HomePage");

  return (
    <div
      className="flex flex-col items-center justify-center bg-slate-400 mx-20 h-screen"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <h1>{t("title")}</h1>
      <Link href={`/${params.locale}/blog`}>{t("toBlog")}</Link>
    </div>
  );
}
