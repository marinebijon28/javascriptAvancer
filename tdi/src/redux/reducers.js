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
    games: [{
        name: 'Joueur1',
        score: 1,
        number: 12
    },{
        name: 'Joueur2',
        score: 3,
        number: 3
    },{
        name: 'Joueur2',
        score: 3,
        number: 11
    }]
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
