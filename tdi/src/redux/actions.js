/*
 * action types
 */
export const ADD_GAME = 'ADD_GAME';
export const SET_NAME = 'SET_NAME';


export const SEND_NUMBER = 'SEND_NUMBER';
export const SEND_NAME = 'SEND_NAME';
export const RETRY = 'RETRY';


/*
 * action creators
 */

/**
 * Add student to store
 *
 * @return     {Object}  Redux Store Object
 * @param game
 */
export function addGame(games) {
    return { type: ADD_GAME, games };
}
export function setName(name) {
    return { type: SET_NAME, name };
}



