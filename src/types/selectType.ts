import React from 'react';

type SelectOption = {
    label: string;
    name: string;
    dataId: string;
    defaultValue: string;
    values: string[];
    valuesText: string[];
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export { type SelectOption };
