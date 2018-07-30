// state argument is not whole app state, but only a piece this reducer is responsible for
export default function(state = null, action) {
    switch (action.type) {
        case "BOOK_SELECTED":
        return action.payload;

        default:
        return state;
    }
}