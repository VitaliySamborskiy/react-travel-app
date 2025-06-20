import React from 'react';

import { RouterApp } from '../enum/enumRouter.ts';
import { Link } from 'react-router-dom';

import { type CardType } from '../types/cardType.ts';

const Card: React.FC<CardType> = (props) => {
    return (
        <li data-test-id="trip-card" className="trip-card">
            <img data-test-id="trip-card-image" src={props.image} alt="trip photo" />
            <div className="trip-card__content">
                <div className="trip-info">
                    <h3 data-test-id="trip-card-title" className="trip-info__title">
                        {props.title}
                    </h3>
                    <div className="trip-info__content">
                        <span data-test-id="trip-card-duration" className="trip-info__duration">
                            <strong>{props.duration}</strong> days
                        </span>
                        <span data-test-id="trip-card-level" className="trip-info__level">
                            {props.level}
                        </span>
                    </div>
                </div>
                <div className="trip-price">
                    <span>Price</span>
                    <strong data-test-id="trip-card-price-value" className="trip-price__value">
                        {props.price}
                    </strong>
                </div>
            </div>
            <Link to={RouterApp.detailsTrip + props.id} data-test-id="trip-card-link" className="button">
                Discover a trip
            </Link>
        </li>
    );
};

export { Card };
