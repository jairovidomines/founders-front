import { renderHook } from "@testing-library/react";
import { toast } from "react-toastify";
import { errorHandlers } from "../../mocks/handlers";
import {
  mockProjectAndroid,
  mockProjectIos,
  mockProjects,
} from "../../mocks/mocks";
import { server } from "../../mocks/server";
import { showErrorToast } from "../../modals/modals";
import {
  deleteProjectActionCreator,
  loadProjectsActionCreator,
} from "../../store/features/projectsSlice/projectsSlice";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { store } from "../../store/store";
import Wrapper from "../../testUtils/Wrapper";
import useProjects from "./useProjects";

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

afterEach(() => {
  jest.clearAllMocks();
});

const spyDispatch = jest.spyOn(store, "dispatch");

describe("Given a useProjects custom hook", () => {
  describe("When the getProjects function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getProjects },
        },
      } = renderHook(() => useProjects(), { wrapper: Wrapper });

      await getProjects("");

      expect(spyDispatch).toHaveBeenCalledWith(
        loadProjectsActionCreator(mockProjects.projects)
      );
    });
  });

  describe("When the getProjects function is called and the reponse from the request is failed", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should not call the dispatch", async () => {
      const {
        result: {
          current: { getProjects },
        },
      } = renderHook(() => useProjects(), { wrapper: Wrapper });

      await getProjects();

      expect(spyDispatch).toHaveBeenCalledWith(unsetIsLoadingActionCreator());
    });
  });

  describe("When the getUserProjects function is called and an error happens", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getUserProjects },
        },
      } = renderHook(() => useProjects(), { wrapper: Wrapper });

      await getUserProjects();

      expect(spyDispatch).toHaveBeenCalledWith(unsetIsLoadingActionCreator());
    });
  });

  describe("When the getUserProjects function is called", () => {
    test("Then it should call the dispatch loadProjectsActionCreator", async () => {
      const {
        result: {
          current: { getUserProjects },
        },
      } = renderHook(() => useProjects(), { wrapper: Wrapper });

      await getUserProjects();

      expect(spyDispatch).toHaveBeenCalledWith(
        loadProjectsActionCreator([mockProjectAndroid, mockProjectIos])
      );
    });
  });

  describe("When the deleteProject function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { deleteProject },
        },
      } = renderHook(() => useProjects(), { wrapper: Wrapper });

      await deleteProject(mockProjectAndroid.id);

      expect(spyDispatch).toHaveBeenNthCalledWith(
        2,
        deleteProjectActionCreator(mockProjectAndroid.id)
      );
    });

    test("Then it should call the setIsLoadingActionCreator dispatch", async () => {
      const {
        result: {
          current: { deleteProject },
        },
      } = renderHook(() => useProjects(), { wrapper: Wrapper });

      await deleteProject(mockProjectAndroid.id);

      expect(spyDispatch).toHaveBeenCalledWith(setIsLoadingActionCreator());
    });

    test("Then it should call the unsetIsLoadingActionCreator dispatch", async () => {
      const {
        result: {
          current: { deleteProject },
        },
      } = renderHook(() => useProjects(), { wrapper: Wrapper });

      await deleteProject(mockProjectAndroid.id);

      expect(spyDispatch).toHaveBeenCalledWith(unsetIsLoadingActionCreator());
    });
  });

  describe("When the deleteProject function is called and the response failed", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should call the showError toast function with the message: 'Project was not deleted, try again'", () => {
      const errorMessage = "Project was not deleted, try again";
      const errorOptions = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      };

      showErrorToast(errorMessage);

      expect(toast.error).toHaveBeenCalledWith(errorMessage, errorOptions);
    });

    test("Then it should call the dispatch with unsetIsLoadingActionCreator", async () => {
      const {
        result: {
          current: { deleteProject },
        },
      } = renderHook(() => useProjects(), { wrapper: Wrapper });

      await deleteProject(mockProjectAndroid.id);

      expect(spyDispatch).toHaveBeenCalledWith(unsetIsLoadingActionCreator());
    });
  });

  describe("When the createProject function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { createProject },
        },
      } = renderHook(() => useProjects(), { wrapper: Wrapper });

      await createProject(mockProjectAndroid);

      expect(spyDispatch).toHaveBeenCalled();
    });
    test("Then it should call the setIsLodingActionCreator dispatch", async () => {
      const {
        result: {
          current: { createProject },
        },
      } = renderHook(() => useProjects(), { wrapper: Wrapper });

      await createProject(mockProjectAndroid);

      expect(spyDispatch).toHaveBeenCalledWith(setIsLoadingActionCreator());
    });

    test("Then it should call de unsetIsLoadingActionCreator dispatch", async () => {
      const {
        result: {
          current: { createProject },
        },
      } = renderHook(() => useProjects(), { wrapper: Wrapper });

      await createProject(mockProjectAndroid);

      expect(spyDispatch).toHaveBeenCalledWith(unsetIsLoadingActionCreator());
    });
  });

  describe("When the createProject function is called and the response fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should call the showError toast function with the message: 'The project cannot be created'", () => {
      const errorMessage = "The project cannot be created";
      const errorOptions = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      };

      showErrorToast(errorMessage);

      expect(toast.error).toHaveBeenCalledWith(errorMessage, errorOptions);
    });

    test("Then it should call the dispatch with unsetIsLoadingActionCreator", async () => {
      const {
        result: {
          current: { createProject },
        },
      } = renderHook(() => useProjects(), { wrapper: Wrapper });

      await createProject(mockProjectAndroid);

      expect(spyDispatch).toHaveBeenCalledWith(unsetIsLoadingActionCreator());
    });
  });

  describe("When the getProjectById function is called", () => {
    test("Then it should call the dispatch method", async () => {
      const {
        result: {
          current: { getProjectById },
        },
      } = renderHook(() => useProjects(), { wrapper: Wrapper });

      await getProjectById(mockProjectAndroid.id);

      expect(spyDispatch).toHaveBeenCalled();
    });
  });

  describe("When the getProjectById function is called and the response fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should call the showError toast function with the message: 'Not possible to show the project'", () => {
      const errorMessage = "Not possible to show the project";
      const errorOptions = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      };

      showErrorToast(errorMessage);

      expect(toast.error).toHaveBeenCalledWith(errorMessage, errorOptions);
    });

    test("Then it should call the dispatch with unsetIsLoadingActionCreatr", async () => {
      const {
        result: {
          current: { getProjectById },
        },
      } = renderHook(() => useProjects(), { wrapper: Wrapper });

      await getProjectById(mockProjectAndroid.id);

      expect(spyDispatch).toHaveBeenCalledWith(unsetIsLoadingActionCreator());
    });
  });
});
