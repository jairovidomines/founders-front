import { mockProjectAndroid, mockProjectIos } from "../../../mocks/mocks";
import {
  deleteProjectActionCreator,
  loadProjectsActionCreator,
  projectsReducer,
} from "./projectsSlice";
import { ProjectsData, ProjectsDataStructure } from "./types";

const projects: ProjectsDataStructure = [mockProjectAndroid, mockProjectIos];
const initialProjectsState: ProjectsData = { projects: [] };

describe("Given a projectsReducer reducer", () => {
  describe("When it receives a new state and the action to load projects", () => {
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

  describe("When it receives a new state and the deleteProject action to delete a project", () => {
    test("Then it should show an update list without the project deleted", () => {
      const initialState: ProjectsData = {
        projects: [mockProjectAndroid, mockProjectIos],
      };

      const deleteProjectAction = deleteProjectActionCreator(
        mockProjectAndroid.id
      );

      const result = projectsReducer(initialState, deleteProjectAction);

      const updatedProjectList = { projects: [mockProjectIos] };

      expect(updatedProjectList).toStrictEqual(result);
    });
  });
});
