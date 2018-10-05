const favourites = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FAVOURITE':
            return [
                ...state,
                action.id
            ];
        case 'REMOVE_FAVOURITE':
            return state.filter((item) => item !== action.id);
        default:
            return state;
    }
};

export default favourites;