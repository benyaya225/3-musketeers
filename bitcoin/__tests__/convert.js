'use strict';

const convert = require('..');
const Big = require('big.js');

test('should default to returning a Number', () => {
  //convert(2, 'BTC', 'BTC');
  expect(typeof(convert(2, 'BTC', 'BTC'))).toBe("number");
});

test('should return a Number', () => {
  expect(typeof(convert(2, 'BTC', 'BTC','Number'))).toBe("number");
});

test('should return a Big number', () => {
  //convert(2, 'BTC', 'BTC', 'Big');
  expect(typeof(convert(2, 'BTC', 'BTC','Big'))).toBe("big");
});

test('should return a String', () => {
  expect(typeof(convert(2, 'BTC', 'BTC', 'String'))).toBe("string");
});

test('should convert an integer', () => {
  expect(typeof(convert(123456789012345, 'Satoshi', 'BTC', 'Number'))).toBe("number");
});

test('should convert a number', () => {
  //convert(1234567.89012345, 'BTC', 'Satoshi', 'Number');
  expect(typeof(convert(1234567.89012345, 'BTC', 'Satoshi', 'Number'))).toBe("number");

});

test('should convert a string', () => {
  //convert('2', 'BTC', 'BTC', 'Number');
  expect(typeof(convert('2', 'BTC', 'BTC', 'String'))).toBe("string");
});

test('should convert a Big number', () => {
  //convert(new Big(2), 'BTC', 'BTC', 'Number');
  expect(typeof(convert(new Big(2), 'BTC', 'BTC', 'Number'))).toBe("big");
});

test('should convert a NaN to a Number', () => {
  //convert(NaN, 'BTC', 'BTC', 'Number');
  //convert(NaN, 'BTC', 'mBTC', 'Number');
  throw new Error('test not yet defined... write your test here');
});

test('should convert a NaN to a String', () => {
  //convert(NaN, 'BTC', 'BTC', 'String');
  //convert(NaN, 'BTC', 'mBTC', 'String');
  throw new Error('test not yet defined... write your test here');
});

test('should not convert a NaN to a Big', () => {
  //convert(NaN, 'BTC', 'BTC', 'Big');
  throw new Error('test not yet defined... write your test here');
});

test('should handle rounding errors', () => {
  //convert(4.6, 'Satoshi', 'BTC', 'Number');
  //convert(0.000000046, 'BTC', 'Satoshi', 'Number');
  throw new Error('test not yet defined... write your test here');
});

test('should throw when untest is undefined', () => {
  //convert(new Big(2), 'x', 'BTC', 'Number');
  //convert(new Big(2), 'BTC', 'x', 'Number');
  //convert(NaN, 'x', 'BTC', 'Number');
  //convert(NaN, 'BTC', 'x', 'Number');
  throw new Error('test not yet defined... write your test here');
});

test('should throw when representaion is undefined', () => {
  //convert(2, 'BTC', 'mBTC', 'x');
  //convert(NaN, 'BTC', 'mBTC', 'x');
  throw new Error('test not yet defined... write your test here');
});

test('should allow untest aliases', () => {
  //convert(4.6, 'Satoshi', 'sat');
  //convert(4.6, 'μBTC', 'btest');
  throw new Error('test not yet defined... write your test here');
});
