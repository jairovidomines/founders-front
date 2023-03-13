import { renderHook } from "@testing-library/react";
import { mockProjects } from "../../mocks/mocks";
import { loadProjectsActionCreator } from "../../store/features/projectsSlice/projectsSlice";
import { store } from "../../store/store";
import Wrapper from "../../testUtils/Wrapper";
import useProjects from "./useProjects";

afterEach(() => {
  jest.clearAllMocks();
});

const spy = jest.spyOn(store, "dispatch");

describe("Given a useApi custom hook", () => {
  describe("When the getProjects function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getProjects },
        },
      } = renderHook(() => useProjects(), { wrapper: Wrapper });

      await getProjects();

      expect(spy).toHaveBeenCalledWith(
        loadProjectsActionCreator(mockProjects.projects)
      );
    });
  });
});
