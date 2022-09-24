import Navbar from '../Navbar/Navbar';
import Partners from '../Partners/Partners';

import './Home.scss';

const Home = () => {
    return (
        <div className="div__wrapper">
            <Navbar />
            <Partners/>
        </div>
    );
}

export default Home;