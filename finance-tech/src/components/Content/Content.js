import './Content.scss';

const Content = () => {
    return (
        <main className="main">
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
                <button>
                    CONSULTATION
                </button>
            </section>
            <section className="main__section financetech__cards">
                <article className="financetech__main--card">
                    <h5>
                        Current Balance
                    </h5>
                    <h3>
                        $5,750,20
                    </h3>
                    <p>
                        xxxx xxxx xxxx xxxx
                    </p>

                    <span></span>
                    <span></span>
                    <h5>mastercard</h5>

                    <article className="financetech__secondary--card">
                        <span></span>
                        <span></span>

                        <h5>Credit Card</h5>
                        <span>**** 1289</span>
                        <img />
                        <h5>09/30</h5>
                    </article>
                </article>
            </section>
        </main >
    );
}

export default Content;