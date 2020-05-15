import React from 'react';
import './Footer.css';
import iconmap from '../../images/footer/iconmap.png';
import iconphone from '../../images/footer/iconphone.png';


function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <div className="adress"> <img src={iconmap} alt = "Tel" width="20" height="20"></img>
          Адрес: 237000, Россия, Ростовская обл., г. Таганрог, ул. Чехова, 22, корп."Б", 2-й подъезд</div>
        <div className="phone">  <img src={iconphone} alt = "Tel" width="20" height="20"></img> 8(863)-437-14-61</div> </div>
      <div className="copyright"> &copy; 2020 Политехнический музей ЮФУ. Все права защищены.</div>
    </div>
  );
}

export default Footer;
