import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusSquare } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__left-nav">
          <h4>О компании</h4>
          <nav>
            <ul>
              <li>
                <a href="#servises">Наши работы</a>
              </li>
              <li>
                <a href="#servises">Контакты</a>
              </li>
              <li>
                <a href="#servises">Доставка</a>
              </li>
              <li>
                <a href="#servises">Форма закза</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__center-nav">
          <h4>Услуги</h4>
          <nav>
            <ul>
              <li>
                <a href="#servises">Производство оборудования</a>
              </li>
              <li>
                <a href="#servises">Металлическая мебель</a>
              </li>
              <li>
                <a href="#servises">Металлоконструкции</a>
              </li>
              <li>
                <a href="#servises">Металлообработка</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#servises">Раскрой металла</a>
              </li>
              <li>
                <a href="#servises">Конструкторское бюро</a>
              </li>
              <li>
                <a href="#servises">Аренда техники</a>
              </li>
              <li>
                <a href="#servises">Ремонт техники</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__contact">
          <h4>Контактная информация</h4>
          <p className="footer__contact-adress">Заводская улица, 2В, Буча, <br/>Киевская область, 08292</p>
          <p>ПН - ПТ: 09:00 - 18:00</p>
          <p>+38(097)123-45-67</p>
          <div className="social">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              style={{ color: "#3E3E3E" }}
              size="2x"
            />
            <FontAwesomeIcon
              icon={faInstagramSquare}
              style={{ color: "#3E3E3E" }}
              size="2x"
            />
            <FontAwesomeIcon
              icon={faYoutubeSquare}
              style={{ color: "#3E3E3E" }}
              size="2x"
            />
            <FontAwesomeIcon
              icon={faGooglePlusSquare}
              style={{ color: "#3E3E3E" }}
              size="2x"
            />
          </div>
        </div>
      </div>
      <div className= "createdBy">
        <p>Developed by</p>
        <p className = "strong">Stubbs</p>
      </div>
    </footer>
  );
};
