import './Home.css';
import '../../components/MainHeader';
import MainHeader from '../../components/MainHeader';
import Programs from '../../components/Programs';
import Values from '../../components/Values';
import FAQs from '../../components/FAQs';
import Testimonials from '../../components/Testimonials';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <>
            <MainHeader/>
            <Programs/>
            <Values/>
            <FAQs/>
            <Testimonials/>
        </>
    );
};

export default Home;