import { mockProjectAndroid, mockProjectIos } from "../../../mocks/mocks";
import { loadProjectsActionCreator, projectsReducer } from "./projectsSlice";
import { ProjectsData, ProjectsDataStructure } from "./types";

const projects: ProjectsDataStructure = [mockProjectAndroid, mockProjectIos];
const initialProjectsState: ProjectsData = { projects: [] };

describe("Given a user reducer", () => {
  describe("When it receives a new state an the action to load projects", () => {
    test("Then it should return a list of 2 projects", () => {
      const loadProjectsAction = loadProjectsActionCreator(projects);

      const expectedProjectsLoaded: ProjectsData = { projects: projects };

      const newProjects = projectsReducer(
        initialProjectsState,
        loadProjectsAction
      );

      expect(newProjects).toStrictEqual(expectedProjectsLoaded);
    });
  });
});
