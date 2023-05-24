const initialState = {
    newsResult: null,
};

const newsReducer = (state = initialState, {type, data}) => {

    switch (type) {

        case 'SET_NEWS_RESULT': {
            const payload = {
                newsResult: data,
            };

            return Object.assign({}, state, payload);
        }

        default: {
            return state;
        }
    }
};

export default newsReducer;