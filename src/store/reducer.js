const initialState = {
  age: 21,
};

// First time when an appp runs, it does not have a state, hence, it needs to be set to the initial state.
// ES6 version of JS provided us with default parameters, the way it works is: in the arguement we can set state to default parameters.(eg state=initialState) The initialState will be set if the state is not provided.

export const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "AGE_UP") {
    newState.age += action.value;
  }

  if (action.type === "AGE_DOWN") {
    newState.age -= action.value;
  }

  return newState;
};
