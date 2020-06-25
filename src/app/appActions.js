import * as appActionTypes from "./appActionTypes";
import * as api from "../api/api";

/**
 * Инициализация приложения
 */
export function initialize() {
    return (dispatch) => {
        dispatch(resetError());
        dispatch(setLoading());

        api.getLibraries()
            .then((libraries) => {
                dispatch(setLibraries(libraries));
            })
            .catch((error) => {
                dispatch(setError(error));
            })
            .finally(() => {
                dispatch(resetLoading());
            });
    };
}

/**
 * Установить флаг загрузки
 */
function setLoading() {
    return {
        type: appActionTypes.SET_LOADING
    };
}

/**
 * Сбросить флаг загрузки
 */
function resetLoading() {
    return {
        type: appActionTypes.RESET_LOADING
    };
}

/**
 * Установить библиотеки
 * @param {Array<Library>} libraries Библиотеки
 */
function setLibraries(libraries) {
    return {
        type: appActionTypes.SET_LIBRARIES,
        data: libraries
    };
}

/**
 * Установить ошибку
 * @param {Error} error 
 */
function setError(error) {
    return {
        type: appActionTypes.SET_ERROR,
        data: error
    };
}

/**
 * Сбросить ошибку
 */
function resetError() {
    return {
        type: appActionTypes.RESET_ERROR
    };
}