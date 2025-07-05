import checkHealth from '../src/healthy';

describe('checkHealth', () => {
  it('returns "healthy" when greater than 50', () => {
    expect(checkHealth({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  it('returns "wounded" when health is between 15 and 50', () => {
    expect(checkHealth({ name: 'Маг', health: 40 })).toBe('wounded');
    expect(checkHealth({ name: 'Маг', health: 15 })).toBe('wounded');
  });

  it('returns "critical" when health is less than 15', () => {
    expect(checkHealth({ name: 'Маг', health: 10 })).toBe('critical');
    expect(checkHealth({ name: 'Маг', health: 0 })).toBe('critical');
  });
});

import sortHeroes from '../src/matchers';

describe('sortHeroes', () => {
  it('sort in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
    expect(sortHeroes(heroes)).toEqual(expected);
  });

  it('handling an empty array', () => {
    expect(sortHeroes([])).toEqual([]);
  });

  it('processing with one hero', () => {
    const heroes = [{ name: 'маг', health: 100 }];
    expect(sortHeroes(heroes)).toEqual(heroes);
  });
});