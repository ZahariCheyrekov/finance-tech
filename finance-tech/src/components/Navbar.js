const Navbar = () => {
    return (
        <header className="header">
            <ul className="header__ul header__list">
                <li className="header__list--item">
                    <i className="fa-sharp fa-solid fa-building-columns" />
                    <h3>
                        Finance<span>Tech</span>
                    </h3>
                </li>
                <li className="header__list--item">
                    <i className="fa-solid fa-bars" />
                </li>
            </ul>
        </header>
    );
}

export default Navbar;