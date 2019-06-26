'use strict';

function leftJoin(leftMap, rightMap) {
  const words = leftMap.keys();

  for (let key of words) {
    const synonym = leftMap.get(key);
    let antonym = rightMap.get(key) || null;
    
    leftMap.set(key, [synonym, antonym]);
  }
  return leftMap;
}

module.exports = leftJoin;