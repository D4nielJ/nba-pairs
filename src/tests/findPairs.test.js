import '@testing-library/jest-dom';
import findPairs from '../helpers/findPairs';
import mockData from './mockData.json';

describe('Function find pairs returns the values expected', () => {
  it('returns an array', () => {
    const value = 150;

    const results = findPairs(mockData, value);

    expect(results).toBeInstanceOf(Array);
  });

  it('returns an array of length 1', () => {
    const value = 167;

    const results = findPairs(mockData, value);

    expect(results.length).toBe(1);
  });

  it('returns an array of length 3', () => {
    const value = 153;

    const results = findPairs(mockData, value);

    expect(results.length).toBe(3);
  });

  it('returns an array of length 4', () => {
    const value = 160;

    const results = findPairs(mockData, value);

    expect(results.length).toBe(4);
  });

  it('returns the correct values of the players', () => {
    const value = 167;

    const results = findPairs(mockData, value);

    expect(results[0][0].first_name).toBe('Alexis');
    expect(results[0][0].last_name).toBe('Ajinca');
    expect(results[0][0].h_in).toBe('84');
    expect(results[0][0].h_meters).toBe('2.13');

    expect(results[0][1].first_name).toBe('LaMarcus');
    expect(results[0][1].last_name).toBe('Aldridge');
    expect(results[0][1].h_in).toBe('83');
    expect(results[0][1].h_meters).toBe('2.11');
  });
});
