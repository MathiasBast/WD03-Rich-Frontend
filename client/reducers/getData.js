function getData(state = [], action) {
  switch (action.type) {
    case "GET_DATA":
      console.log(action)
      return action.data

    default:
    return state
  }
}

export default getData