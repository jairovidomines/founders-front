import { mockProjectAndroid, mockProjectIos } from "../../../mocks/mocks";
import {
  deleteProjectActionCreator,
  getProjectByIdActionCreator,
  initialStateProjects,
  loadProjectsActionCreator,
  projectsReducer,
} from "./projectsSlice";
import { ProjectsFromApi, ProjectsStructure } from "./types";

const projects: ProjectsStructure = [mockProjectAndroid, mockProjectIos];

describe("Given a projectsReducer reducer", () => {
  describe("When it receives a new state and the action to load projects", () => {
    test("Then it should return a list of 2 projects", () => {
      const loadProjectsAction = loadProjectsActionCreator(projects);

      const expectedProjectsLoaded: ProjectsFromApi = {
        ...initialStateProjects,
        projects: projects,
      };

      const newProjects = projectsReducer(
        initialStateProjects,
        loadProjectsAction
      );

      expect(newProjects).toStrictEqual(expectedProjectsLoaded);
    });
  });

  describe("When it receives a new state and the deleteProject action to delete a project", () => {
    test("Then it should show an update list without the project deleted", () => {
      const initialProjects: ProjectsFromApi = {
        ...initialStateProjects,
        projects: [mockProjectAndroid, mockProjectIos],
      };

      const deleteProjectAction = deleteProjectActionCreator(
        mockProjectAndroid.id
      );

      const result = projectsReducer(initialProjects, deleteProjectAction);

      const updatedProjectList = {
        ...initialStateProjects,
        projects: [mockProjectIos],
      };

      expect(updatedProjectList).toStrictEqual(result);
    });
  });

  describe("When it receives project and the getProjectById action", () => {
    test("Then it should update list that contains the project and show only the project selected", () => {
      const initialProjects: ProjectsFromApi = {
        ...initialStateProjects,
        project: mockProjectIos,
      };

      const loadTipByIdAction = getProjectByIdActionCreator(mockProjectIos);
      const result = projectsReducer(initialProjects, loadTipByIdAction);
      const updatedTipsList = {
        ...initialStateProjects,
        project: mockProjectIos,
      };

      expect(updatedTipsList).toStrictEqual(result);
    });
  });
});
