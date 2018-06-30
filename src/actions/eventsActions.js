import constants from '../constants';

function getEvents() {
  const projects = [
    {
      id: 1,
      display_name: 'テストプロジェクト１',
    },
    {
      id: 2,
      display_name: 'テストプロジェクト２',
    },
  ];

  return {
    type: constants.SET_EVENTS,
    projects,
  };
}

export default {
  getEvents,
};
