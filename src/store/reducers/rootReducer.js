import { combineReducers } from 'redux';

const userReducer = () => {
  return [
    { name: 'Poopy McPooperson', description: 'Lengthy Description goes here' },
    { name: 'John Doe', description: 'Lengthy Description goes here' },
    { name: 'Some Dude', description: 'Lengthy Description goes here' },
    { name: 'Whatever', description: 'Lengthy Description goes here' }
  ];
};

export default combineReducers({
  users: userReducer,
});