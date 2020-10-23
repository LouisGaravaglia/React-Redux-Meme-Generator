const INITIAL_STATE = {memes: [], id_keeper: 0};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_MEME":
      return { ...state, memes: [...state.memes, {...action.meme}]};
    case "REMOVE_MEME":
      return { ...state, memes: state.memes.filter(meme => meme.id !== action.id)};
    case "INCREMENT_ID":
      return { ...state, id_keeper: state.id_keeper + 1};
    default:
      return state;
  }
}

export default rootReducer;