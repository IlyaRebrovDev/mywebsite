import React from "react";
import s from './About.module.css'


const Main = () => {
    return (
        <div className={s.main}>
{/* Пролоадер */}
            {/* <div id="page-preloader" className="preloader"></div> */}

            <div className={s.content}>
                <div className={s.Text}>
                    I am Ilya Rebrov, front-end developer, I develop<br/> websites using HTML, CSS and Javascript.<br/>
                    I'm passionate about leveraging my diverse<br/> backgrounds to decipher challenging problems and <br/> create delightful experiences.<br/>
                    I also successfully implement the React Js + Redux<br/> and CSS-Grid into my projects.<br/>
                    As a diligent, hardworking and result oriented man,<br/> Of course, I'm good at git version control and figma layout editor. <br/>
                    I always work to achieve the best result in every project <br/>I undertake. :)

                </div>
                <div className={s.Image}></div>
            </div>

            <div className={s.grid}>
                <div className={s.maintext}>
                    About Me
                </div>
            </div>


        </div>
    )
}

export default Main;