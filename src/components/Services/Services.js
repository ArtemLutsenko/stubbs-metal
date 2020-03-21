import React, { Component } from "react";
import ServisesItem from "./ServisesItem";
import "./Services.scss";
import servImg1 from "../../assets/img/Rectangle1.png";
import servImg2 from "../../assets/img/Rectangle2.png";
import servImg3 from "../../assets/img/Rectangle3.png";
import servImg4 from "../../assets/img/Rectangle4.png";
import servImg5 from "../../assets/img/Rectangle5.png";
import servImg6 from "../../assets/img/Rectangle6.png";
import servImg7 from "../../assets/img/Rectangle7.png";
import servImg8 from "../../assets/img/Rectangle8.png";
import bgDetail from "../../assets/img/Vector.png";

class Servises extends Component {
  state = {
    theposition: 0,
    servisesItiems: [
      {
        title: "Производство оборудования",
        imageUrl: servImg1
      },
      {
        title: "Металическая мебель",
        imageUrl: servImg2
      },
      {
        title: "Металлоконструкции",
        imageUrl: servImg3
      },
      {
        title: "Металлообработка",
        imageUrl: servImg4
      },
      {
        title: "Раскрой металла",
        imageUrl: servImg5
      },
      {
        title: "Конструкторское бюро",
        imageUrl: servImg6
      },
      {
        title: "Аренда техники",
        imageUrl: servImg7
      },
      {
        title: "Ремонт техники",
        imageUrl: servImg8
      }
    ]
  };
  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 1000;

    this.setState({
      theposition: scrolled
    });
  };
  render() {
    const servMenu = this.state.servisesItiems.map(
      ({ ...sectionProps }, id) => <ServisesItem key={id} {...sectionProps} />
    );
    return (
      <section className="servises" id="servises">
        <div className="servises__container">
          <h2 className="h2-style">Услуги</h2>
          <div className="servises__menu">{servMenu}</div>
          <div className="servises__button big">
            Быстрый расчет цены по чертежу
          </div>
          <div className="servises__button small">Расчет стоимости</div>
        </div>
        <div
          className="bg-detail detail1"
          style={{
            backgroundImage: `url(${bgDetail})`,
            transform: `rotate(${this.state.theposition}deg)`
          }}
        ></div>
        <div
          className="bg-detail detail2"
          style={{
            backgroundImage: `url(${bgDetail})`,
            transform: `rotate(${this.state.theposition * 1.5}deg)`
          }}
        ></div>
        <div
          className="bg-detail detail3"
          style={{
            backgroundImage: `url(${bgDetail})`,
            transform: `rotate(${this.state.theposition * 1.2}deg)`
          }}
        ></div>
        <div
          className="bg-detail detail4"
          style={{
            backgroundImage: `url(${bgDetail})`,
            transform: `rotate(${this.state.theposition * 1.4}deg)`
          }}
        ></div>
      </section>
    );
  }
}

export default Servises;
