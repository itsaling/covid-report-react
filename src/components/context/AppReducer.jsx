export default (state, action) => {
  switch (action.type) {
    case "GET_STATE":
      return console.log("from payload " + action.payload + state);

    // ...state,
    // infos: state.infos.filter((info) => info.name == action.payload),
  }
};
