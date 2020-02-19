import {
    SET_NAME,
    ADD_GAME,
} from './actions'


const initialState = {
    /**
     *
     * games game[{Object}]
     *
     * @param      {String}  {name}
     * @param      {Number}  {score}
     * @param      {Number}  {number}
     */
    name:'Joueur1',
    games: []
};


export default function reducer(state = initialState, action) {
    console.log('reducer', action.type);
    console.log(action.games);
    console.log(state);
    switch (action.type) {

        case ADD_GAME:
            return {...state, games: action.games};
        case SET_NAME:
            return {...state, name: action.name};
        default :
            return state;
    }
}
