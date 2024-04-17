import HeaderImage from '../../images/header_bg_4.jpg';
import {plans} from '../../data.js';
import Card from '../../UI/Card.jsx'
import './Plans.css';
import Header from '../../components/Header.jsx';

const Plans = () => {
    return (
        <>
            <Header title="Our Gallery" image={HeaderImage}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            </Header>
            <section className='plans'>
                <div className='container plans_container'>
                    {
                        plans.map(({id, name, desc, price, features})=>{
                            return <Card key={id} className="plan">
                                <h3>{name}</h3>
                                <small>{desc}</small>
                                <h1>{`$${price}`}</h1><h2>/mo</h2>
                                <h4>Features</h4>
                                {
                                    features.map(({feature, available}, index)=>{
                                        return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                                    })
                                }
                                <button className='btn lg'>Choose Plan</button>
                            </Card>
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Plans;