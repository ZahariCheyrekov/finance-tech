import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';
import Partners from '../Partners/Partners';

import './Home.scss';

const Home = () => {
    return (
        <div className="div__wrapper">
            <Navbar />
            <Content />
            <Partners />
        </div>
    );
}

export default Home;