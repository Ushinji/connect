import constants from '../constants';

const initialState = {
  events: [
    {
      name: '勉強会１',
    },
    {
      name: '勉強会２',
    },
    {
      name: '勉強会３',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_EVENTS:
      return state;
    default:
      return state;
  }
};
