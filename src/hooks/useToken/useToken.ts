import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import decodeToken from "jwt-decode";
import { CustomTokenPayload } from "../useUser/types";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";

interface UseTokenStructure {
  getToken: () => void;
  removeToken: () => void;
}

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const { username, sub: id } = decodeToken<CustomTokenPayload>(token);

      dispatch(loginUserActionCreator({ username, id, token }));
    }
  }, [dispatch]);

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return { getToken, removeToken };
};

export default useToken;
