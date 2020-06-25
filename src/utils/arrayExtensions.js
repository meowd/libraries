
/**
 * Группировка массива по ключу
 * @param {Array<any>} array Массив
 * @param {string} key Ключ
 * @returns {Array}
 */
export function groupByKey(array, key) {
    return array.reduce((result, item) => {
        if (result[item[key]]) {
            result[item[key]].push(item);
        } else {
            result[item[key]] = [item];
        }

        return result;
    }, {});
}