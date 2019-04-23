/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import LoginScreen from '../Components/screen/LoginScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// import console = require('console');
console.log('chal rha hai')
it('renders correctly', () => {
  renderer.create(<App />);
});
it('renders correctly', () => {
  renderer.create(<LoginScreen />);
});
