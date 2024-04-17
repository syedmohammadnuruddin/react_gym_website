import Logo from '../images/logo.png';
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            <div className='container footer_container'>
                <article>
                    <Link path="/" className='logo'>
                        <img src={Logo} alt='Footer Logo'/>
                    </Link>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    </p>
                    <div className='footer_socials'>
                        <a href='https://linkedin.com/' target="_blank" rel="noreferrer noopener"><FaLinkedinIn/></a>
                        <a href='https://facebook.com/' target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
                        <a href='https://twitter.com/' target="_blank" rel="noreferrer noopener"><FaTwitter/></a>
                        <a href='https://instagram.com/' target="_blank" rel="noreferrer noopener"><AiFillInstagram /></a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/plans">Plans</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to="/s">Blog</Link>
                    <Link to="/s">Case Studies</Link>
                    <Link to="/s">Events</Link>
                    <Link to="/s">Communities</Link>
                    <Link to="/s">FAQs</Link>
                </article>
                <article>
                    <h4>Get in Touch</h4>
                    <Link to="contact">Contact Us</Link>
                    <Link to="/s">Support</Link>
                </article>
            </div>
            <div className='footer_copyright'>
                <small>2024 Syed Md &copy; All Rights Reserved</small>
            </div>
        </footer>
    );
};

export default Footer;