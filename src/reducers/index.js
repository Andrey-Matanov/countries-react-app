import { combineReducers } from 'redux';
import { FETCH_AND_RENDER_COUNTRIES, RENDER_COUNTRIES } from '../actions';

const countriesReducer = (
    countriesObject = {
        countries: [],
        renderedCountries: [],
    },
    action
) => {
    switch (action.type) {
        case FETCH_AND_RENDER_COUNTRIES: {
            return { ...countriesObject, countries: action.payload };
        }
        case RENDER_COUNTRIES: {
            const amount = action.payload;
            const currentLength = countriesObject.renderedCountries.length;
            const result = [...countriesObject.renderedCountries];
            const resultLength =
                currentLength + amount > 250 ? 250 : currentLength + amount;

            for (let i = currentLength; i < resultLength; i++) {
                result.push(countriesObject.countries[i]);
            }

            return { ...countriesObject, renderedCountries: result };
        }
        default: {
            return countriesObject;
        }
    }
};

export default combineReducers({
    countries: countriesReducer,
});
