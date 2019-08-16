import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import * as dom from '@testing-library/jest-dom/extend-expect';

import App from './App';
import Form from './Form';


// const ipcRenderer = { send: jest.fn(), on: jest.fn() };
// const electron = { ipcRenderer };
// global.require = jest.fn().mockReturnValue(electron);

const input = require('./input.json');

const output = {
  name: 'John Foo',
  dob: '1990-01-01',
  gender: '1',
};

afterEach(cleanup)

test('renders without crashing', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('app-screen')).toBeTruthy();
  expect(getByTestId('form')).toBeTruthy();
});

test('Form has valid input Name', () => {  
  const { getByTestId, getByLabelText } = render(<Form input ={input} />);
  expect(getByTestId('form')).toContainElement(getByTestId('input-name'));
  
  const inputName = getByLabelText('Name');
  inputName.value = '';
  expect(inputName.checkValidity()).toBe(false);

  inputName.value = 'Mary';
  expect(inputName.checkValidity()).toBe(false);

  inputName.value = 'Anna Pavlou';
  expect(inputName.checkValidity()).toBe(true);
});

test('Form has correct input for DOB', () => {
  const { getByTestId, getByLabelText } = render(<Form input ={input} />);
  expect(getByTestId('form')).toContainElement(getByTestId('input-dob'));

  const inputDOB = getByLabelText('DOB');
  inputDOB.value = '';
  expect(inputDOB.checkValidity()).toBe(false);

  inputDOB.value = 'Crazy';
  expect(inputDOB.checkValidity()).toBe(false);

  inputDOB.value = '2015-02-15';
  expect(inputDOB.checkValidity()).toBe(false);

  inputDOB.value = '2001-02-20';
  expect(inputDOB.checkValidity()).toBe(true);

});

test('test that gender has correct selection',() => {
  const { getByTestId, getByLabelText } = render(<Form input ={input} />);
  expect(getByTestId('form')).toContainElement(getByTestId('input-gender'));

  const inputGender = getByLabelText('Gender');
  inputGender.value = '';
  expect(inputGender.checkValidity()).toBe(true);

  inputGender.value = '0';
  expect(inputGender.checkValidity()).toBe(true);

  inputGender.value = '1';
  expect(inputGender.checkValidity()).toBe(true);
});

test('that we may submit the form', () => {
  const onSubmit = jest.fn();
  const { getByLabelText } = render(
    <Form input ={input} output={onSubmit }/>
  );
  const inputName = getByLabelText('Name');
  fireEvent.change(inputName, {target: {value: 'John Foo'}});


});
