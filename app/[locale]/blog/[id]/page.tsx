import { useTranslations } from "next-intl";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const t = useTranslations("BlogPost");
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("content")}</p>
    </div>
  );
}
