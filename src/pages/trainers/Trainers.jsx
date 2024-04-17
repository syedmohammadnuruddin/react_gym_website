import HeaderImage from '../../images/header_bg_5.jpg';
import {trainers} from '../../data.js';
import { BsInstagram } from "react-icons/bs";
import {AiOutlineTwitter} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import './Trainers.css';
import Header from '../../components/Header.jsx';
import Trainer from '../../components/Trainer.jsx';

const Trainers = () => {
    return (
        <>
            <Header title="Our Gallery" image={HeaderImage}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            </Header>
            <section className='trainers'>
                <div className='container trainers_container'>
                    {
                        trainers.map(({id, image, name, job, socials})=>{
                            return <Trainer key={id} image={image} name={name} job={job} socials={
                                [
                                    {icon: <BsInstagram/>, link: socials[0]},
                                    {icon: <AiOutlineTwitter/>, link: socials[1]},
                                    {icon: <FaFacebook/>, link: socials[2]},
                                    {icon: <FaLinkedinIn/>, link: socials[3]}
                                ]
                            }>

                            </Trainer>
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Trainers;