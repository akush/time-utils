'use strict';

const TimeUtils = {};
const MAX = 4e10;

TimeUtils.getTime = function () {
    return Date.now();
};

const getTimeinSec = () => Math.floor(Date.now() * 0.001);

TimeUtils.getString = function (limit = 36) {
    return getTimeinSec().toString(limit);
}

TimeUtils.getHash = function (limit = 36, asc) {
    if (asc) return this.getString();
    return (MAX - getTimeinSec()).toString(limit);
}

exports = module.exports = TimeUtils;