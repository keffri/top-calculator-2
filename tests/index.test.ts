import Calculator from '../index';

describe('performs correct operation', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });

  test('subtracts 7 - 2 to equal 5', () => {
    expect(Calculator.subtract(7, 2)).toBe(5);
  });

  test('subtracts 4 - -5 to equal 9', () => {
    expect(Calculator.subtract(4, -5)).toBe(9);
  });

  test('multiples 13 * 6 to equal 78', () => {
    expect(Calculator.multiply(13, 6)).toBe(78);
  });

  test('divides 14 / 3 to equal 4.66', () => {
    expect(Calculator.divide(14, 3)).toBe(4.66);
  });

  test('divides 63 / 14.5 to equal 4.34', () => {
    expect(Calculator.divide(63, 14.5)).toBe(4.34);
  });
});

describe('use selected operator to perform correct operation', () => {
  test('uses add operator to add 1 + 2 to equal 3', () => {
    expect(Calculator.operate('add', '1', '2')).toBe(3);
  });

  test('uses subtract operator to subtract 7 - 2 to equal 5', () => {
    expect(Calculator.operate('subtract', '7', '2')).toBe(5);
  });

  test('uses subtract operator to subtract 4 - -5 to equal 9', () => {
    expect(Calculator.operate('subtract', '4', '-5')).toBe(9);
  });

  test('uses multiply operator to multiply 13 * 6 to equal 78', () => {
    expect(Calculator.operate('multiply', '13', '6')).toBe(78);
  });

  test('uses divide operator to divide 14 / 3 to equal 4.66', () => {
    expect(Calculator.operate('divide', '14', '3')).toBe(4.66);
  });

  test('uses divide operator to divide 63 / 14.5 to equal 4.34', () => {
    expect(Calculator.operate('divide', '63', '14.5')).toBe(4.34);
  });
});
