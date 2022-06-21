import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const LanguageSelector = () => {
  const { locale, asPath } = useRouter();
  const [showLanguages, setShowLanguages] = useState(false);
  return (
    <div className="language-selector">
      <div
        className={`icon-wrapper ${showLanguages ? "show-languages" : ""}`}
        // onClick={(e) => {
        //   e.stopPropagation();
        //   setShowLanguages(true);
        // }}
        // onBlur={() => setShowLanguages(false)}
      >
        <i className="icon-long-arrow-right" />
        <div className="menu-container">
          <Link
            className={locale === "es-ES" ? "active" : ""}
            href={asPath}
            locale="es-ES"
          >
            <a href="" className="custom-link">
              {locale === "es-ES" ? "Español" : "Spanish"}
            </a>
          </Link>

          <Link
            className={locale === "es-ES" ? "active" : ""}
            href={asPath}
            locale="en-US"
          >
            <a href="" className="custom-link">
              {locale === "es-ES" ? "Inglés" : "English"}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LanguageSelector;
