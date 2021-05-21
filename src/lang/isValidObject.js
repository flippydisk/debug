/**
 * @function isValidObject
 * @parent Lang
 * @description checks if an element is an object and it is not empty
 *
 * @param {String|Array|Object|Number} ele any Javascript type
 *
 * @return {Boolean} true if ele '[object Object]' and not {} else it returns
 * false
 */

import isObject from './isObject';
import isEmptyObject from './isEmptyObject';

const isValidObject = ele => isObject(ele) && !isEmptyObject(ele);
export default isValidObject;
