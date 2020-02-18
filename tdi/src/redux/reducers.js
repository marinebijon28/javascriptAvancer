import {
    SET_NAME,
    ADD_GAME,
} from './actions'


const initialState = {
    /**
     * Student datas [{Object}]
     *
     * @param      {String}  {name}
     * @param      {Number}  {score}
     * @param      {Number}  {number}
     */
    name:'',
    games: []
};

const arrayHasIndex = (array, index) => Array.isArray(array) && array.hasOwnProperty(index);

export default function reducer(state = initialState, action) {
    console.log('reducer', action.type);
    console.log(action.game);
    console.log(state);
    switch (action.type) {

        case ADD_GAME:
            return {...state, games: [...state.games, action.game]};
        case SET_NAME:
            return {...state, name: action.name};
        default :
            return state;
    }
}