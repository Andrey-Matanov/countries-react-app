import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CountryCard from '../components/CountryCard';
import Header from '../components/Header';
import { fetchAndRenderCountries, renderCountries } from '../actions';
import Inputs from '../components/Inputs';

const Main = ({
    renderedCountries,
    fetchAndRenderCountries,
    renderCountries,
}) => {
    useEffect(() => {
        fetchAndRenderCountries();
    }, []);

    return (
        <>
            <Header />
            <Inputs />
            <main className='main'>
                <div className='wrapper'>
                    {renderedCountries.map(
                        ({ flag, name, population, region, capital }) => (
                            <CountryCard
                                key={name}
                                flag={flag}
                                name={name}
                                population={population}
                                region={region}
                                capital={capital}
                            />
                        )
                    )}
                    {renderedCountries.length < 250 && (
                        <button onClick={() => renderCountries(16)}>
                            Load more
                        </button>
                    )}
                </div>
            </main>
        </>
    );
};

const mapStateToProps = (state) => ({
    renderedCountries: state.countries.renderedCountries,
});

export default connect(mapStateToProps, {
    fetchAndRenderCountries,
    renderCountries,
})(Main);
