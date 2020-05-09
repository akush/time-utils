'use strict';

const TimeUtils = {};
const MAX = 9999999999;

TimeUtils.getTime = function () {
    return Date.now();
};

TimeUtils.getString = function (limit = 36) {
    return Math.floor(Date.now() * 0.001).toString(limit);
}

TimeUtils.getReveseString = function (limit = 36) {
    return (MAX - Math.floor(Date.now() * 0.001)).toString(limit);
}

exports = module.exports = TimeUtils;