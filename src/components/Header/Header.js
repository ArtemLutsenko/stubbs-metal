import React, { Component } from "react";
import "./Header.scss";
import Logo from "../../assets/logo_t.jpg";
import { ReactComponent as Search } from "../../assets/search.svg";
import LangRu from "../../assets/lang_ru.png";
import LangEn from "../../assets/lang_gb.png";
import LangUa from "../../assets/lang_ua.png";
import closeMenu from "../../assets/menu-close.svg";
import openMenu from "../../assets/menu-open.svg";
import SidebarMenu from "./SidebarMenu";

class Header extends Component {
  state = {
    langMenuOpen: false,
    sidebarMenu: false,
    search: true,
    currentLang: LangRu
  };
  langMenuToggle = () => {
    this.setState(prevState => ({
      langMenuOpen: !prevState.langMenuOpen
    }));
  };
  sidebarMenuToggle = () => {
    this.setState(prevState => ({
      sidebarMenu: !prevState.sidebarMenu
    }));
  };
  searchToggle = () => {
    this.setState(prevState => ({
      search: !prevState.search
    }));
  };
  changeLangHandler = lang => {
    console.log("asd");
    this.setState({
      currentLang: lang
    });
    this.langMenuToggle();
    console.log(this.state.currentLang);
    if (this.state.sidebarMenu) {
      this.sidebarMenuToggle();
    }
  };
  render() {
    const langMenuStatus = this.state.langMenuOpen ? openMenu : closeMenu;
    const langMenu = !this.state.langMenuOpen ? (
      <div className="lang">
        <img
          src={this.state.currentLang}
          alt="ru"
          onClick={this.langMenuToggle}
        />
      </div>
    ) : (
      <div className="lang lang-menu-open">
        <img
          src={LangRu}
          alt="ru"
          onClick={() => this.changeLangHandler(LangRu)}
        />
        <img
          src={LangUa}
          className="lang__aditional-margin"
          alt="ua"
          onClick={() => this.changeLangHandler(LangUa)}
        />
        <img
          src={LangEn}
          alt="en"
          onClick={() => this.changeLangHandler(LangEn)}
        />
        <div className="lang__aditional-container"></div>
      </div>
    );
    const hamberger = this.state.sidebarMenu ? "open" : "";
    const classSearchOpen = this.state.search ? "open" : "";
    const sidebarMenu = this.state.sidebarMenu ? (
      <SidebarMenu
        currentLang={this.state.currentLang}
        menuToggle={this.sidebarMenuToggle}
        changeLang={this.changeLangHandler}
      />
    ) : (
      ""
    );
    return (
      <header className="header" id="header">
        <div className="header__container">
          <div className="header__logo-container">
            <img src={Logo} alt="logo" />
          </div>
          <nav>
            <ul className="header__nav">
              <li className="header__nav-item">
                <a href="#header">Главная</a>
              </li>
              <div className="vertical-line"></div>
              <li className="header__nav-item nav-menu">
                <a href="#servises">Услуги</a>
                <div className="menu-icon">
                  <img src={closeMenu} alt="close" />
                </div>
              </li>
              <div className="vertical-line"></div>
              <li className="header__nav-item">
                <a href="#servises">Наши работы</a>
              </li>
              <div className="vertical-line"></div>
              <li className="header__nav-item">
                <a href="#our-company">О нас</a>
              </li>
              <div className="vertical-line"></div>
              <li className="header__nav-item">
                <a href="footer">Контакты</a>
              </li>
            </ul>
          </nav>
          <div className="header__right-menu">
            <div className="search">
              <label htmlFor="search-inp">
                <Search className={`search-icon ${classSearchOpen}`} onClick={this.searchToggle} />
              </label>
                <div>
                  <div className={`pod ${classSearchOpen}`} onClick={this.searchToggle}></div>
                  <input
                    type="text"
                    className={`search-inp ${classSearchOpen}`}
                    id="search-inp"
                    placeholder="Поиск"
                  />
                </div>
            </div>
            <div className="header__lang-menu">
              {langMenu}
              <div className="menu-icon" onClick={this.langMenuToggle}>
                <img src={langMenuStatus} alt="close" />
              </div>
            </div>
            <div
              className={`hamburger-container ${hamberger}`}
              onClick={this.sidebarMenuToggle}
            >
              <div className="hamburger"></div>
            </div>
          </div>
        </div>
        {sidebarMenu}
      </header>
    );
  }
}
export default Header;
