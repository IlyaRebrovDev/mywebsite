import React from "react";
import s from './Footer.module.css'


const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.grid}>
                <div className={s.Text}> © 2022 Ilya Rebrov</div>
                <div className={s.link1}>
                    <a href='https://www.instagram.com/_ilyarebrov/' target="_blank"></a>
                </div>
                <div className={s.link2}>
                    <a href='https://www.linkedin.com/in/ilya-rebrov-a1a292218/' target="_blank"></a>
                </div>
            </div>
        </div>
    )
}


export default Footer;