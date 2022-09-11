import React from "react";
import s from './Main.module.css'


const Main = () => {
    return (
        <div>

            <div className={s.main}>
{/* Пролоадер */}
            {/* <div id="page-preloader" className="preloader"></div> */}
                <div className={s.FirstText}>
                    <div>{/*left*/}</div>
                    <div>Hi, my name is</div>
                    <div>{/*right*/}</div>
                </div>
                <div className={s.Name}>
                    <div>{/*left*/}</div>
                    <div>Ilya Rebrov</div>
                    <div>{/*right*/}</div>
                </div>
                <div className={s.Professison}>
                    <div>{/*left*/}</div>
                    <div>UI/UX DESIGNER + DEVELOPER</div>
                    <div>{/*right*/}</div>
                </div>
                <div className={s.Skills}>
                    <div>{/*left*/}</div>
                    <div>I’m a professional UI/UX designer with front end development skills based in Ukraine.</div>
                    <div>{/*right*/}</div>
                </div>
            </div>
        </div>
    )
}

export default Main;