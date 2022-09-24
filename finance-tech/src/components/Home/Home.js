import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';
import Partners from '../Partners/Partners';

import './Home.scss';

const Home = () => {
    return (
        <div className="div__wrapper">
            <span className="shadow__bottom"></span>
            <Navbar />
            <Content />
            <Partners />
            <span className="shadow__top"></span>
        </div>
    );
}

export default Home;