import React, { FC } from 'react';
import './heroblock.scss';
import { IoChevronDownOutline } from "@react-icons/all-files/io5/IoChevronDownOutline";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";

const HeroBlock: FC = () => {
  return (
    <section className='hero'>
      <div className="container">
        <div className="row">
          <div className="column">
            small
          </div>
          <div className="column_large">
            <div className="hero__search">
              <div className="hero__search__form">
                <form action="">
                  <div className="hero__search__categories">
                    Все категории
                    <IoChevronDownOutline/>
                  </div>
                  <div className="hero__search__line"></div>
                  <input type="text" name="" id="" placeholder='Введите назнвание...'/>
                  <button type="submit">Поиск</button>
                </form>
              </div>
              <div className="hero__search__phone">
                
                <div className="hero__search__phone__icon">
                  <FaPhone/>
                </div>
                <div className="hero__search__phone__text">
                  <h5>+37529 134-21-97</h5>
                  <span>Поддержка 24/7</span>
                </div>
              </div>
            </div>
            <div className="hero__item">

            </div>
            <div className="hero__text">
              <span>профиль</span>
              <h2>Профнастил и металлочерепица</h2>
              <p>Помощь в расчетах и доставке</p>
              <a href="">Купить</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBlock