const favourites = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FAVOURITE':
            return [
                ...state,
                { id: action.id }
            ];
        case 'REMOVE_FAVOURITE':
            //TODO remove id from list of favourites
            return state;
        default:
            return state;
    }
};

export default favourites;