import { User, UserState } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

const initialState: UserState = {
  username: "",
  isLogged: false,
  token: "",
  id: "",
};

describe("Given a user reducer", () => {
  const user: User = {
    username: "Jairo",
    token: "1p2o3i4u5y",
    id: "",
  };
  describe("When it receives a user action to log in the user", () => {
    test("Then it should return the user with isLogged property as a true", () => {
      const expectedUserState: UserState = {
        username: "Jairo",
        token: "1p2o3i4u5y",
        id: "",
        isLogged: true,
      };

      const loginUserAction = loginUserActionCreator(user);

      const newUserState = userReducer(initialState, loginUserAction);

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });

  describe("When it receives a user action to log out the user", () => {
    test("Then it should return the user with isLogged property as a false", () => {
      const logoutUserAction = logoutUserActionCreator();

      const newUserState = userReducer(initialState, logoutUserAction);

      expect(newUserState).toStrictEqual(initialState);
    });
  });
});
