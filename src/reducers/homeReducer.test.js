import homeReducer from './homeReducer'; 

const defaultState = {
    genreMap: {},
    featuredList: [],
    shownList: [],
    totalPages: 1,
    totalResults: 0,
    searchIsEmpty: true,
    sortByRating: true,
    searchVal: '',
    resultPage: 1,
};

describe('Testing homeReducer', () => {
    describe('Testing Default State', () => {
        it('Should return default  without action', () => {
            expect(JSON.stringify(homeReducer())).toBe("{\"genreMap\":{},\"featuredList\":[],\"shownList\":[],\"totalPages\":1,\"totalResults\":0,\"searchIsEmpty\":true,\"sortByRating\":true,\"searchVal\":\"\",\"resultPage\":1}");
        });
        it('Should return default  with action', () => {
            expect(JSON.stringify(homeReducer(defaultState, {
                type: "SET_GENRE_MAP_SUCCESS",
                payload: ['Genre 1', 'Genre 2']
            }))).toBe("{\"genreMap\":[\"Genre 1\",\"Genre 2\"],\"featuredList\":[],\"shownList\":[],\"totalPages\":1,\"totalResults\":0,\"searchIsEmpty\":true,\"sortByRating\":true,\"searchVal\":\"\",\"resultPage\":1}");
        });
    });

    describe('Testing Correct State', () => {});

    describe('Testing Failure State', () => {});
});