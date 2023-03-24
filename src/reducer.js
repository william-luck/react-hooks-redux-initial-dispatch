let state;

// The difference of this lab is we declare but never assign state, and assign a default value for state, because it will be undefined with the init dispatch. 
function changeState(state = {count: 0}, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action);
  render();
}

function render() {
  const app = document.querySelector("#app");
  app.textContent = state.count;
}

// Responsible for the initial render on the page, because it will attempt to change state, only being returned the default value from the reducer
dispatch({ type: "@@INIT" });