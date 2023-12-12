import React from 'react';

const SelectInput = ({ data = [] }) => {
    return (
        <select className="form-control">
            {data?.map((item) => {
                <option value={item.id}>{item.title}</option>
            })}
        </select>
    );
};

export default SelectInput;