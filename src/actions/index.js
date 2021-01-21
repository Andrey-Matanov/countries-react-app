import restCountries from '../apis';

export const FETCH_AND_RENDER_COUNTRIES = 'FETCH_AND_RENDER_COUNTRIES';
export const RENDER_COUNTRIES = 'RENDER_COUNTRIES';

export const fetchAndRenderCountries = () => async (dispatch, getState) => {
    const response = await restCountries.get('/all');

    dispatch({ type: FETCH_AND_RENDER_COUNTRIES, payload: response.data });
    dispatch({ type: RENDER_COUNTRIES, payload: 8 });
};

export const renderCountries = (amount) => {
    return {
        type: RENDER_COUNTRIES,
        payload: amount,
    };
};
