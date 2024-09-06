import { useTranslations } from "next-intl";

export default function BlogPage() {
  const t = useTranslations("BlogPage"); // Korzystamy z sekcji BlogPage

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <h2>{t("postTitle")}</h2>
      <p>{t("author")}</p>
    </div>
  );
}
