'use strict';

const leftJoin = require('./leftJoin.js');

const leftMap = new Map();
leftMap.set('joy', 'excitement');
leftMap.set('ocean', 'sea');
leftMap.set('bubbly', 'effervescent');
leftMap.set('light', 'illumination');

const rightMap = new Map();
rightMap.set('joy', 'sorrow');
rightMap.set('ocean', 'land');
rightMap.set('light', 'darkness');
rightMap.set('awake', 'asleep');

describe('Left Join', () => {
  it('Can left join two maps', () => {
    const joined = leftJoin(leftMap, rightMap);

    expect(joined.has('joy')).toBeTruthy();
    expect(joined.has('ocean')).toBeTruthy();
    expect(joined.has('light')).toBeTruthy();
    expect(joined.has('bubbly')).toBeTruthy();
    expect(joined.has('awake')).toBeFalsy();

    expect(joined.get('joy')).toEqual(['excitement', 'sorrow']);
    expect(joined.get('ocean')).toEqual(['sea', 'land']);
    expect(joined.get('light')).toEqual(['illumination', 'darkness']);
    expect(joined.get('bubbly')).toEqual(['effervescent', null]);

  });
});