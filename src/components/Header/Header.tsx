import React, { FC } from 'react';
import './header.scss';
import { IoCall } from "@react-icons/all-files/io5/IoCall";
import { IoBagHandle } from "@react-icons/all-files/io5/IoBagHandle";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaMapMarkedAlt } from "@react-icons/all-files/fa/FaMapMarkedAlt";

const HeaderInner: FC = () => {
  return (
    <header className='header'>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="header__top__left">
                <div className="mail_block">
                  <div>
                    <FaEnvelope size={16}/>
                  </div>
                  <div>skrama@tut.by</div>
                </div>
                <div className="line"></div>
                <div className="text">
                  <IoCall size={18}/>
                  +375 29 134-21-97
                </div>
              </div>
            </div>
            <div className="column">
              <div className="header__top__right">
                <FaMapMarkedAlt size={20}/>
                г.Минск, ул.П.Глебки, д.11, оф.402
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="container">
        <div className="row">
          <div className="column">
            <h1 className="header__title">
              Skrama
              <span>24</span>
            </h1>
          </div>
          <div className="column large">
            <div className="header__menu">
              <ul>
                <li className='active'>
                  <a href="">Главная</a>
                </li>
                <li>
                  <a href="">Магазин</a>
                </li>
                <li>
                  <a href="">Блог</a>
                </li>
                <li>
                  <a href="">Контакты</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="header__cart">
              <a href="">
                <IoBagHandle size={30}/>
                <span>7</span>
              </a>
              <div className="header__cart__price">
                BYN:
                <span>156.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export const Header = React.memo(HeaderInner);