import HeaderImage from '../../images/header_bg_2.jpg';
import {MdEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import './Contact.css';
import Header from '../../components/Header';


const Contact = () => {
    return (
        <>
            <Header title="Get In Touch" image={HeaderImage}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            </Header>
            <section className='contact'>
                <div className='container contact_container'>
                    <div className='contact_wrapper'>
                        <a href='syedmdnuruddin11@gmail.com' target='_blank' rel='noreferrer noopener'><MdEmail/></a>
                        <a href='' target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
                        <a href='' target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;