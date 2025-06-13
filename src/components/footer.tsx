import svgHeart from '../assets/images/heart.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <span className="footer__text">
                © 2025, from
                <a className="footer__link" href="https://binary-studio.com" target="_blank" rel="noopener noreferrer">
                    binary studio
                </a>
                with
                <img className="footer__icon" src={svgHeart} alt="heart" />
            </span>
        </footer>
    );
};

export { Footer };
