import * as regionsActionTypes from "./regionsActionTypes";

/**
 * Установить фильтр по регионам
 * @param {Array<RegionsFilter>} filter Фильтр по регионам
 */
function setFilter(filter) {
    return {
        type: regionsActionTypes.SET_FILTER,
        data: filter
    };
}

/**
 * Установить сортировку
 * @param {RegionsSorting} sorting Сортировка регионов
 */
function setSorting(sorting) {
    return {
        type: regionsActionTypes.SET_SORTING,
        data: sorting
    };
}

/**
 * Установить фильтр по региону
 * @param {string} region Область
 */
export function changeFilterRegion(region) {
    return (dispatch, getState) => {
        const appState = getState();
        const regions = Object.assign({}, appState.regions);
        const filter = Object.assign({}, regions.filter, { region });

        return dispatch(setFilter(filter));
    };
}

/**
 * Изменить сортировку сначала много библиотек
 */
export function changeSortingIsManyLibrariesFirst() {
    return (dispatch, getState) => {
        const appState = getState();
        const regions = Object.assign({}, appState.regions);
        const sorting = Object.assign({}, regions.sorting);
        sorting.isManyLibrariesFirst = !sorting.isManyLibrariesFirst;

        return dispatch(setSorting(sorting));
    };
}