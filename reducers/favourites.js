const favourites = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FAVOURITE':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state;
    }
};

export default favourites;