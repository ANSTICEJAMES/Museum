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
                            <a href="https://goo.gl/maps/kGsTTQrmHwpS8H7a6" target="_blank"><img src={iconmap} className="icon"></img></a>
                            <p>Адрес: 237000, Россия, Ростовская обл., г. Таганрог, ул. Чехова, 22, корп."Б", 2-й подъезд</p>
                        </div>
                        <div className="proictis"> <a href="https://proictis.ru/" target="_blank"><img src={proictis} alt="proictis" className="proictis_img"></img></a></div>
                        <div className="phone"> <img src={iconphone} className="icon"></img> <p>8(863)-437-14-61</p></div>

                    </div>
                </div>
            </div>

            <div className="copyright"> <p>&copy; 2020 Политехнический музей ЮФУ. Все права защищены.</p></div>
        </div>



  );
}
export default Footer;
