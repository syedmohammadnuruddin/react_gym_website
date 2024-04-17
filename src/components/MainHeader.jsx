import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../images/main_header.png';
import '../pages/home/Home.css';

const MainHeader = () => {
    return (
        <>
            <header className='main_header'>
                <div className='container main_header_container'>
                    <div className='main_header_left'>
                        <h4>#100DaysOfWorkOut</h4>
                        <h1>Join the Legends of the Fitness World</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                        <Link to='/plans' className='btn lg'>Get Started</Link>
                    </div>
                    <div className='main_header_right'>
                        <div className='main_header_circle'></div>
                        <div className='main_header_image'>
                            <img src={Image} alt='Main Header Image'/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default MainHeader;