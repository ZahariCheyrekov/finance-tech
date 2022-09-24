import mastercardLogo from '../../assets/mastercard-logo.png';
import cardChip from '../../assets/card-chip.png';

import './Content.scss';

const Content = () => {
    return (
        <main className="main">
            <span className="shadow__bottom"></span>
            <section className="main__section financetech__inforamtion">
                <h2 className="main__section--title section__title--purple">
                    Scale Fintech
                </h2>
                <h2 className="main__section--title">
                    Safe And Secure
                </h2>
                <summary className="main__section--summary">
                    Ship your fintech products to your customers with fast and reliable processes.
                    Secure and highly customizable. Rise Finance is the best partner for you if you
                    want to scale your finance products worldwide.
                </summary>
                <button className="consultation__button">
                    CONSULTATION
                </button>
            </section>
            <section className="main__section financetech__cards">
                <article className="financetech__main--card">
                    <section className="card__information">
                        <h5 className="card__title">
                            Current Balance
                        </h5>
                        <h3 className="card__balance">
                            $5,750,20
                        </h3>
                        <p className="card__number">
                            xxxx xxxx xxxx xxxx
                        </p>
                    </section>
                    <section className="mastercard__logo">
                        <img src={mastercardLogo} alt="MaterCard" />
                        <h5 className="mastercard__title">
                            mastercard
                        </h5>
                    </section>
                </article>
                <article className="financetech__secondary--card">
                    <div className="secondary__card--circles"></div>
                    <h5 className="credit__card--title">
                        Credit Card
                    </h5>
                    <span className="credit__card--data">
                        **** 1289
                    </span>
                    <section className="card__bottom">
                        <div className="card__chip--wrapper">
                            <img src={cardChip} alt="card chip" />
                        </div>
                        <h5>09/30</h5>
                    </section>
                </article>
            </section>
            <span className="shadow__top"></span>
        </main>
    );
}

export default Content;