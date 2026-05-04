// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//test cases for isPhoneNumber
test('valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('invalid phone number', () => {
  expect(isPhoneNumber('123-456-770')).toBe(false);
});
test('invalid phone number', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

//test cases for isEmail
test('valid email', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('valid email', () => {
  expect(isEmail('john@gmail.com')).toBe(true);
});

test('invalid email', () => {
  expect(isEmail('userexample.com')).toBe(false);
});

test('invalid email', () => {
  expect(isEmail('user@.com')).toBe(false);
});

//test cases for isStrongPassword
test('valid password', () => {
  expect(isStrongPassword('Abc123')).toBe(true);
});

test('valid password', () => {
  expect(isStrongPassword('A1b2c3d4')).toBe(true);
});

test('invalid password', () => {
  expect(isStrongPassword('1234')).toBe(false);
});

test('invalid password', () => {
  expect(isStrongPassword('a123456789qwerty')).toBe(false);
});

//test cases for isDate
test('valid date', () => {
  expect(isDate('12/31/2020')).toBe(true);
});

test('valid date', () => {
  expect(isDate('1/1/2020')).toBe(true);
});

test('invalid date', () => {
  expect(isDate('2020/12/31')).toBe(false);
});

test('invalid date', () => {
  expect(isDate('12-31-2020')).toBe(false);
});

//test cases for isHexColor
test('valid hex color', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('valid hex color', () => {
  expect(isHexColor('#123456')).toBe(true);
});

test('invalid hex color', () => {
  expect(isHexColor('12345G')).toBe(false);
});

test('invalid hex color', () => {
  expect(isHexColor('#12345')).toBe(false);
});

