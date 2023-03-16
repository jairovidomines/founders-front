import { useAppDispatch } from "../../store/hooks";
import { CustomTokenPayload } from "../useUser/types";
import decodeToken from "jwt-decode";
import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import Wrapper from "../../testUtils/Wrapper";

jest.mock("../../store/hooks");

jest.mock("jwt-decode", () => jest.fn());

beforeAll(() => {
  jest.clearAllMocks();
});

const mockTokenPayload: CustomTokenPayload = {
  username: "Jairo",
  sub: "12345678",
};

describe("Given a useToken custom hook", () => {
  describe("When a token exists", () => {
    test("Then it should call the dispatch", () => {
      const mockToken = "Jairo1p2o3i4u5y";

      localStorage.setItem("token", mockToken);

      const dispatchMock = jest.fn();

      (useAppDispatch as jest.Mock).mockReturnValue(dispatchMock);

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), { wrapper: Wrapper });

      getToken();

      expect(dispatchMock).toHaveBeenCalled();
    });

    test("Then it should remove the token from local storage", () => {
      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useToken(), { wrapper: Wrapper });

      removeToken();

      expect(localStorage.getItem("token")).toBeNull();
    });
  });
});
