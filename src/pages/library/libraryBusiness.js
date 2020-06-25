/**
 * Получить библиотеку по id
 * @param {Array<Library>} libraries Библиотеки
 * @param {number} id Идентификатор
 * @returns {Library}
 */
export function getLibraryById(libraries, id) {
    if (!libraries || !libraries.length) {
        return undefined;
    }

    return libraries.find(library => library.order === parseInt(id));
}