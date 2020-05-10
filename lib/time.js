'use strict';

const TimeUtils = {};

TimeUtils.getTime = () => {
  return Date.now();
};

TimeUtils.getTimeinSec = () => Math.floor(Date.now() * 0.001);

TimeUtils.getString = (limit = 36) => {
  return TimeUtils.getTimeinSec().toString(limit);
}

exports = module.exports = TimeUtils;