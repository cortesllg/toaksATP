"use client";

import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es",
          layout: (window as any).google.translate.TranslateElement.InlineLayout
            .SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div id="google_translate_element" className="google-translate-widget" />
  );
}
