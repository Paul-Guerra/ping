interface user {
  id: String | null,
  fname: String | null,
  lname: String | null
};

const INITIAL_STATE = {
  id: null,
  fname: null,
  lname: null
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
