const initialState = [];

const doArticles = ( articles = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH_ONE':
            return action.payload;
        default:
            return articles;
    }
};

export default doArticles;