import React from 'react';
import { Link } from 'react-router-dom';
import { RouterApp } from '../enum/enumRouter.ts';

import svgBookings from '../assets/images/briefcase.svg';
import svgProfile from '../assets/images/user.svg';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <Link data-test-id="header-logo" to={RouterApp.mainPage} className="header__logo">
                    Travel App
                </Link>
                <nav data-test-id="header-nav" className="header__nav">
                    <ul className="nav-header__list">
                        <li className="nav-header__item" title="Bookings">
                            <Link
                                to={RouterApp.bookings}
                                className="nav-header__inner"
                                data-test-id="header-bookings-link"
                            >
                                <span className="visually-hidden">Bookings</span>
                                <img src={svgBookings} alt="bookings" />
                            </Link>
                        </li>
                        <li className="nav-header__item" title="Profile">
                            <div data-test-id="header-profile-nav" className="nav-header__inner profile-nav">
                                <span className="visually-hidden">Profile</span>
                                <img src={svgProfile} alt="profile" />
                                <ul data-test-id="header-profile-nav-list" className="profile-nav__list">
                                    <li data-test-id="header-profile-nav-username" className="profile-nav__item">
                                        John Doe
                                    </li>
                                    <li className="profile-nav__item">
                                        <Link
                                            to={RouterApp.signIn}
                                            data-test-id="header-profile-nav-sign-out"
                                            className="profile-nav__sign-out button"
                                        >
                                            Sign Out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export { Header };
