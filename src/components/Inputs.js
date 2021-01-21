import React from 'react';

const Inputs = () => {
    return (
        <div className='inputs_container'>
            <div className='wrapper'>
                <input
                    className='search'
                    placeholder='Search for a country...'
                ></input>
                <select>
                    <option value='/all' hidden selected>
                        Filter by region
                    </option>
                    <option value='/all'>All</option>
                    <option value='/region/africa'>Africa</option>
                    <option value='/region/america'>America</option>
                    <option value='/region/asia'>Asia</option>
                    <option value='/region/europe'>Europe</option>
                    <option value='/region/oceania'>Oceania</option>
                </select>
            </div>
        </div>
    );
};

export default Inputs;
