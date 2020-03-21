import React from "react";
import "./SidebarMenu.scss";
import LangRu from "../../assets/lang_ru.png";
import LangUa from "../../assets/lang_ua.png";
import LangEn from "../../assets/lang_gb.png";

const SidebarMenu = ({ menuToggle, currentLang, changeLang }) => {
  const allLang = [LangRu, LangUa, LangEn];
  const langBlock = allLang.map((lang, id) => {
    const lnagClass = lang !== currentLang ? "opacity" : "";
    return (
      <div className={`lang ${lnagClass}`} key = {id}>
        <img src={lang} alt="ru" onClick={() =>changeLang(lang)} />
      </div>
    );
  });

  return (
    <div className="SidebarMenu">
      <nav>
        <div className="lang-menu">{langBlock}</div>
        <ul onClick={menuToggle}>
          <li>
            <a href="#header">Меню</a>
          </li>
          <li>
            <a href="#servises" className="nested">Услуги</a>
          </li>
          <li>
            <a href="#our-company">Наши работы</a>
          </li>
          <li>
            <a href="#our-compan">О нас</a>
          </li>
          <li>
            <a href="#footer">Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarMenu;
