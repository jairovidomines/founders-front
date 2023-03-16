import {
  mockProjectAndroid,
  mockProjectIos,
  mockProjects,
} from "../../../mocks/mocks";
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
      const deleteProjectAction =
        deleteProjectActionCreator(mockProjectAndroid);

      const expectedProjects: ProjectsData = mockProjects;

      const newProjects = projectsReducer(mockProjects, deleteProjectAction);

      expect(newProjects).toStrictEqual(expectedProjects);
    });
  });
});
