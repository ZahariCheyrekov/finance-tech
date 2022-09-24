import partners from '../../assets/partners.png';

import './Partners.scss';

const Partners = () => {
    return (
        <section className="financetech__partners">
            <img
                src={partners}
                alt="FinanceTech Partners"
                className="partners"
            />
        </section>
    );
}

export default Partners;