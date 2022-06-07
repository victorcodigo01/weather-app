import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Facebook from '../../assets/Facebook.svg'
import Instagram from '../../assets/INSTAGRAM.svg'
import Twitter from '../../assets/twitter.svg'

// import { BsFacebook } from "react-icons/bs";
// import { AiOutlineInstagram } from "react-icons/ai";
// import { AiOutlineTwitter } from "react-icons/ai";


function Footer (){

    return(
        <>
        <section className='container-footer'>
            <div className='three-col'>
                <div className='col1'>
                    <h6 className='text-black'>Nuestra empresa</h6>
                    <p className='text-gray'>Aviso legal</p>
                    <p className='text-gray'>Envíos y devoluciones</p>
                    <p className='text-gray'>Políticas y privacidad</p>
                </div>
                <div className='col2'>
                    <h6 className='text-black'>Tu cuenta</h6>
                    <p className='text-gray'>Informacion personal</p>
                    <p className='text-gray'>Pedidos</p>
                    <p className='text-gray'>Favoritos</p>
                </div>
                <div className='col3'>
                    <h6 className='text-black'>RRSS</h6>
                    <p className='rrss'><img src={Facebook} alt="logo de Facebook" /></p>
                    <p className='rrss'><img src={Instagram} alt="Logo de Instagram" /></p>
                    <p className='rrss'><img src={Twitter} alt="logo de Twitter" /></p>
                </div>
            </div>
        </section>
        
        </>
    )

}

export default Footer;
