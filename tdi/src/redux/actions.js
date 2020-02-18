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
 * @param      {String}  {type}  Reducer action
 * @param      {int}  {student:{name, age, groupe}}  Student datas
 * @return     {Object}  Redux Store Object
 */
export function addGame(game) {
    return { type: ADD_GAME, game };
}
export function setName(name) {
    return { type: SET_NAME, name };
}



