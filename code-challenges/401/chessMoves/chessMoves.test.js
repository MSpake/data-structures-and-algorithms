'use strict';

const isTheKingInCheck = require('./chessMoves');

const boardWithCheck = [
  ['Kn', null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, 'R'],
  [null, null, 'K', null, null, null, null, null],
  [null, null, null, 'Q', null, null, null, null],
  ['B', null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
];

const boardWithoutCheck = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, 'K', null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['B', null, null, null, 'Kn', null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, 'Q', null, null],
  [null, null, null, null, null, null, null, 'R'],
];

describe('Chess Board', () => {
  it('Can check if the king is in check', () => {
    expect(isTheKingInCheck(boardWithCheck)).toBeTruthy();
    expect(isTheKingInCheck(boardWithoutCheck)).not.toBeTruthy();
  });
});