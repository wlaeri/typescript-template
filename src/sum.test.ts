import { sum } from './sum';

describe('sum function', () => {
  it('adds two numbers', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
