import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import Navigation from "../../components/Navigation";
import "../../app/globals.css";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale || "en";

  // Pobieranie wiadomości dla danego języka
  const messages = (await import(`../../src/messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation locale={locale} />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
