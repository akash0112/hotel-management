let userState;
if(window.localStorage.getItem('auth'))
{
  userState=JSON.parse(window.localStorage.getItem('auth'))
}
else{
  userState=null
}
export const authreducer = (state = userState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "LOGGED_IN_USER":
        return { ...state, ...payload };
      case "LOGOUT":
        return payload;
      default:
        return state;
    }
  };