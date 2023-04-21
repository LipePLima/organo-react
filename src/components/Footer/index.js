import "./Footer.css"
import fb   from "../../img/fb.png"
import ig   from "../../img/ig.png"
import tw   from "../../img/tw.png"
import logo from "../../img/logo.png"
import { Fragment } from "react"

const Footer = () => {
    return (
        <Fragment>
            <footer className="container__footer">
                <section className="footer__medias">
                    <ul className="medias__list">
                        <li>
                            <a href="facebook.com" target="_blank">
                                <img src={fb} alt="Logo Facebook" />            
                            </a>           
                        </li>
                        <li>
                            <a href="instagram.com" target="_blank">    
                                <img src={ig} alt="Logo Instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="twitter.com" target="_blank">  
                                <img src={tw} alt="Logo Twitter" />
                            </a>
                        </li>
                    </ul>
                </section>
                <img className="footer__logo" src={logo} alt="Logo Organo" />
                <p className="footer__credits">Desenvolvido por <a href="https://github.com/LipePLima" target="blank">Felipe Lima</a></p>
            </footer>
        </Fragment>       
    )
}

export default Footer;