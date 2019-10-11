type user = {
  id?: String,
  fname: String,
  lname: String
};

const INITIAL_STATE = {
  fname: 'Unknown',
  lname: 'User'
};

export default (state: user = INITIAL_STATE, action:any) => {
  let newState;

  switch (action.type) {
    default:
      newState = state;
      break;
  }

  return newState;
};
