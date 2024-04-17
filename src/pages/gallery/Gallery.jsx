import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_3.jpg';
import './Gallery.css';

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const importImages = async () => {
            const importedImages = [];
            const galleryLength = 15;

            for (let i = 1; i <= galleryLength; i++) {
                try {
                    const imageModule = await import(`../../images/gallery${i}.jpg`);
                    importedImages.push(imageModule.default);
                } catch (error) {
                    console.error(`Error importing image galery${i}:`, error);
                }
            }

            setImages(importedImages);
        };

        importImages();
    }, []);

    // console.log(images);
    return (
        <>
            <Header title="Our Gallery" image={HeaderImage}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            </Header>
            <section className='gallery'>
                <div className='container gallery_container'>
                    {
                        images.map((image, index) => {
                            return <article key={index}>
                                <img src={image} alt={`Gallery Image ${index + 1}`}/>
                            </article>
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Gallery;