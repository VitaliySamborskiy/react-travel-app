import React from 'react';

import { type SelectOption } from '../types/selectType.ts';

const CustomSelect: React.FC<SelectOption> = (props) => {
    return (
        <label className="select">
            <span className="visually-hidden">{props.label}</span>
            <select data-test-id={props.dataId} name={props.name} onChange={props.onChange}>
                <option value="">{props.defaultValue}</option>
                {props.values.map((value, index) => (
                    <option key={index + value} value={value}>
                        {props.valuesText[index]}
                    </option>
                ))}
            </select>
        </label>
    );
};

export { CustomSelect };
