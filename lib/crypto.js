'use strict';


const MAX = 4e10;

const CryptoUtils = {};

const getTimeinSec = () => Math.floor(Date.now() * 0.001);

CryptoUtils.getTimedHash = (limit = 36, asc) => {
  if (asc) return getTimeinSec().toString(limit);
  return (MAX - getTimeinSec()).toString(limit);
};

exports = module.exports = CryptoUtils;