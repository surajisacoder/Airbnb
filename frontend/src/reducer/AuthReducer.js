export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "MODAL":
      return {
        ...state,
        isAuthModalOpen: true,
      };
    case "MODAL_CLOSE":
      return {
        ...state,
        isAuthModalOpen: false,
      };
    case "SIGNUP":
      return {
        ...state,
        selectAuth: "signup",
      };
    case "LOGIN":
      return {
        ...state,
        selectAuth: "login",
      };
    case "NAME":
      return {
        ...state,
        username: payload,
      };
    case "EMAIL":
      return {
        ...state,
        email: payload,
      };
    case "NUMBER":
      return {
        ...state,
        mobile: payload,
      };
    case "PASSWORD":
      return {
        ...state,
        password: payload,
      };
    case "CONFIRM_PASSWORD":
      return {
        ...state,
        cPassword: payload,
      };
      case "CLEAR_ALL":
        return {
          ...state,
          username:"",
          email:"",
          mobile:"",
          password:"",
          cPassword:"",
        };
        case "TOKEN":
          return {
            ...state,
            token: payload,
          };
          case "CLEAR_TOKEN":
            return {
              ...state,
              token:"",
            };
  }
};
