
/**
 * is-number <https://github.com/jonschlinkert/is-number>
 * @param number
 * @returns {boolean}
 */
module.exports = (num) => {
    if (typeof num === 'number') {
        return num - num === 0;
    }
    if (typeof num === 'string' && num.trim() !== '') {
        // 判断是否为一个有限数值
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
    }
    return false;
};