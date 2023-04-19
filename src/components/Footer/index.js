import "./Footer.css"
import fb   from "../../img/fb.png"
import ig   from "../../img/ig.png"
import tw   from "../../img/tw.png"
import logo from "../../img/logo.png"

const Footer = () => {
    return (
        <section className="container__footer">
            <div className="footer__medias">
                <img src={fb} alt="Logo Facebook" />
                <img src={ig} alt="Logo Instagram" />
                <img src={tw} alt="Logo Twitter" />
            </div>
            <img className="footer__logo" src={logo} alt="Logo Organo" />
            <p className="footer__credits">Desenvolvido por <a href="https://github.com/LipePLima" target="blank">Felipe Lima</a></p>
        </section>
        
    )
}

export default Footer;