import React from 'react';

import { CustomSelect } from './select.tsx';

type TripsFilter = {
    onChange: (field: string, value: string) => void;
};

const TripsFilter: React.FC<TripsFilter> = ({ onChange }) => {
    return (
        <>
            <h1 className="visually-hidden">Travel App</h1>
            <section className="trips-filter">
                <h2 className="visually-hidden">Trips filter</h2>
                <form className="trips-filter__form" autoComplete="off">
                    <label className="trips-filter__search input">
                        <span className="visually-hidden">Search by name</span>
                        <input
                            data-test-id="filter-search"
                            name="search"
                            type="search"
                            placeholder="search by title"
                            onChange={(e) => onChange('search', e.target.value)}
                        />
                    </label>
                    <CustomSelect
                        label="Search by duration"
                        name="duration"
                        dataId="filter-duration"
                        defaultValue="duration"
                        values={['0_x_5', '5_x_10', '10']}
                        valuesText={['< 5 days', '< 10 days', '≥ 10 days']}
                        onChange={(e) => onChange('duration', e.target.value)}
                    />
                    <CustomSelect
                        label="Search by level"
                        defaultValue="level"
                        name="level"
                        dataId="filter-level"
                        values={['easy', 'moderate', 'difficult']}
                        valuesText={['easy', 'moderate', 'difficult']}
                        onChange={(e) => onChange('level', e.target.value)}
                    />
                </form>
            </section>
        </>
    );
};

export { TripsFilter };
