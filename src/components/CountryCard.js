import React from 'react';

const CountryCard = ({ flag, name, population, region, capital }) => {
    return (
        <div className='country_card'>
            <img width='100' heigh='50' src={flag} alt='flag' />
            <p>{name}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
        </div>
    );
};

export default CountryCard;
