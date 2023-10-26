import React, { FC } from 'react';
import './header.scss';
import { IoCall } from "@react-icons/all-files/io5/IoCall";
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
                    {/* <IoMail/> */}
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
                Офис: г.Минск, ул.П.Глебки, д.11, оф.402
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="container">
        Header container
      </div>
    </header>
  )
}

export const Header = React.memo(HeaderInner);