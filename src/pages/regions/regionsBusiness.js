import {groupByKey} from "../../utils/arrayExtensions";

/**
 * Получить группирование по регионам библиотеки
 * @param {Array<Library>} libraries Библиотеки
 */
function getLibrariesGroupedByRegions(libraries) {
    if (!libraries || !libraries.length) {
        return undefined;
    }

    return groupByKey(libraries, "territory");
}

/**
 * Список названий регионов
 * @param {HashSet<Region>} regions Регионы
 * @returns {Array<string>}
 */
function getRegionNames(regions) {
    if (!regions) {
        return undefined;
    }

    return Object.keys(regions);
}

/**
 * Получить информацию о регионах
 * @param {Array<Library>} libraries Библиотеки
 * @param {RegionsFilter} filter Фильтр по регионам
 * @param {RegionsSorting} sorting Сортировка
 * @returns {Array<Region>}
 */
export function getRegions(libraries, filter, sorting) {
    const filteredLibraries = filterLibraries(libraries, filter);
    const regions = getLibrariesGroupedByRegions(filteredLibraries);
    const regionNames = getRegionNames(regions);

    if (!regionNames || !regionNames.length) {
        return undefined;
    }

    return regionNames.map(regionName => ({
        name: regionName,
        libraries: regions[regionName].map(regionLibrary => ({
            fullname: regionLibrary.fullname,
            order: regionLibrary.order
        }))
    }))
    .sort((a, b) => sortRegions(a, b, sorting));
}

/**
 * Сортировка регионов
 * @param {Region} a Регион
 * @param {Region} b Регион
 * @param {RegionsSorting} sorting Сортировка
 * @returns {Array<Region>}
 */
function sortRegions(a, b, sorting) {
    if (!sorting) {
        return a.libraries.length - b.libraries.length;
    }

    if (sorting.isManyLibrariesFirst) {
        return b.libraries.length - a.libraries.length;
    }

    return a.libraries.length - b.libraries.length;
}

/**
 * Филтровать библиотеки
 * @param {Array<Library>} libraries Библиотеки
 * @param {Array<RegionsFilter>} filter Фильтр по регионам
 * @returns {Array<Library>}
 */
function filterLibraries(libraries, filter) {
    if (!libraries || !libraries.length || !filter) {
        return libraries;
    }

    let filteredLibraries = filterLibrariesByRegion(libraries, filter.region);

    return filteredLibraries;
}

/**
 * Фильтровать библиотеки по названию региона
 * @param {Array<Library>} libraries Библиотеки
 * @param {string} region Регион
 * @returns {Array<Library>}
 */
function filterLibrariesByRegion(libraries, region) {
    if (!libraries || !libraries.length || !region) {
        return libraries;
    }

    return libraries.filter(library => library &&
        library.territory &&
        library.territory.toLowerCase().includes(region.toLowerCase()));
}