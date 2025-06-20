import { useEffect, useState } from 'react';

import { TripsFilter } from '../components/tripsFilter.tsx';
import { Card } from '../components/card.tsx';

import DataTrip from '../assets/data/trips.json';

import { mapperTrip } from '../helper/mapperTrip.ts';

import { type CardType } from '../types/cardType.ts';

type TripsFilterProps = {
    search: string;
    duration: string;
    level: string;
};

const Home = () => {
    const [cardTrip, setCardTrip] = useState<CardType[]>([]);
    const [filters, setFilters] = useState<TripsFilterProps>({
        search: '',
        duration: '',
        level: '',
    });

    useEffect(() => {
        setCardTrip(mapperTrip(DataTrip));
    }, []);

    useEffect(() => {
        console.log(filters);
    }, [filters]);

    const handleFilterChange = (field: string, value: string) => {
        setFilters((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <>
            <TripsFilter onChange={handleFilterChange} />
            <section className="trips">
                <h2 className="visually-hidden">Trips List</h2>
                <ul className="trip-list">
                    {cardTrip.map((trip: CardType) => (
                        <Card key={trip.id} {...trip} />
                    ))}
                </ul>
            </section>
        </>
    );
};

export { Home };
