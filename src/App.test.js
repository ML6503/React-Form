import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import 'jest-dom/extend-expect';
import * as dom from 'dom-testing-library';

import App from './App';
import Form from './Form';


const ipcRenderer = { send: jest.fn(), on: jest.fn() };
const electron = { ipcRenderer };
global.require = jest.fn().mockReturnValue(electron);

const input = require('../input.json');
console.log(input);

const output = {
  name: 'John Foo',
  dob: '1990-01-01',
  gender: '1',
};

afterEach(cleanup)

test('renders without crashing', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('app-screen')).toBeTruthy();
});

test('App renders Form', () => {

});
