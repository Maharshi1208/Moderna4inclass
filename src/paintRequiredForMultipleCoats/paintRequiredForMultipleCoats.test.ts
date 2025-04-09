import paintRequiredForMultipleCoats from './paintRequiredForMultipleCoats';

describe('paintRequiredForMultipleCoats', () => {
  test('should calculate paint required correctly for positive values', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 2)).toBe(20);
    expect(paintRequiredForMultipleCoats(200, 20, 3)).toBe(30);
    expect(paintRequiredForMultipleCoats(150, 15, 4)).toBe(40);
  });

  test('should return 0 for area of 0', () => {
    expect(paintRequiredForMultipleCoats(0, 10, 2)).toBe(0);
  });

  test('should return 0 for coveragePerLiter of 0', () => {
    expect(paintRequiredForMultipleCoats(100, 0, 2)).toBe(Infinity);
  });

  test('should handle negative values correctly', () => {
    expect(paintRequiredForMultipleCoats(-100, 10, 2)).toBe(-20);
    expect(paintRequiredForMultipleCoats(100, -10, 2)).toBe(-20);
    expect(paintRequiredForMultipleCoats(100, 10, -2)).toBe(-20);
  });

  test('should handle coats of 0 correctly', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 0)).toBe(0);
  });
  test('should calculate paint required correctly for large values', () => {
    expect(paintRequiredForMultipleCoats(10000, 100, 5)).toBe(500);
    expect(paintRequiredForMultipleCoats(5000, 50, 10)).toBe(1000);
  });

  test('should handle very small values for area and coveragePerLiter', () => {
    expect(paintRequiredForMultipleCoats(0.1, 0.1, 1)).toBe(1);
  });

  test('should return Infinity for coveragePerLiter of 0 (invalid coverage)', () => {
    expect(paintRequiredForMultipleCoats(500, 0, 2)).toBe(Infinity);
  });

  test('should return Infinity for negative coveragePerLiter', () => {
    expect(paintRequiredForMultipleCoats(500, -10, 2)).toBe(Infinity);
  });

  test('should handle very large number of coats correctly', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 1000)).toBe(1000000);
  });

  test('should return 0 when all parameters are 0', () => {
    expect(paintRequiredForMultipleCoats(0, 0, 0)).toBe(0);
  });

  test('should handle floating point values correctly', () => {
    expect(paintRequiredForMultipleCoats(150.5, 15.5, 2.5)).toBeCloseTo(25.8, 1);
  });

  test('should handle negative area correctly and return negative paint required', () => {
    expect(paintRequiredForMultipleCoats(-100, 10, 3)).toBe(-30);
  });

  test('should handle negative coats correctly and return negative paint required', () => {
    expect(paintRequiredForMultipleCoats(100, 10, -3)).toBe(-30);
  });
});
