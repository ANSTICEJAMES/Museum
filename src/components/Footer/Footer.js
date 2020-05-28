import React from 'react';
import './Footer.css';
import iconmap from '../../images/footer/iconmap.png';
import iconphone from '../../images/footer/iconphone.png';
import proictis from '../../images/footer/logo_proictis_1.png'



function Footer() {

    return (
        <div className="footer">
            <div className="main_container">
                <div className="template_align">

                    <div className="contact">
                        <div className="adress">
                            <a href="https://goo.gl/maps/kGsTTQrmHwpS8H7a6" target="_blank"><img src={iconmap} alt="Tel" width="20" height="20"></img></a>
                            Адрес: 237000, Россия, Ростовская обл., г. Таганрог, ул. Чехова, 22, корп."Б", 2-й подъезд
                        </div>
                        <div className="proictis"> <a href="https://proictis.ru/" target="_blank"><img src={proictis} alt="proictis" height="40"></img></a></div>
                        <div className="phone"> <img src={iconphone} alt="Tel" width="20" height="20"></img> 8(863)-437-14-61</div>

                    </div>
                </div>
            </div>

            <div className="copyright"> &copy; 2020 Политехнический музей ЮФУ. Все права защищены.</div>
        </div>



  );
}
export default Footer;
