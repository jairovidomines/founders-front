import { loadProjectsActionCreator, projectsReducer } from "./projectsSlice";
import { ProjectDataStructure, ProjectsDataStructure } from "./types";

const mockProjectAndroid: ProjectDataStructure = {
  name: "Anyone",
  website: "www.anyone.com",
  twitter: "@anyone",
  platforms: "Android",
  monthlyUsers: "1000",
  avatar: "avatar.webp",
  shortDescription: "This is a short description",
  description: "This is a description",
};

const mockProjectIos: ProjectDataStructure = {
  name: "Anyone",
  website: "www.anyone.com",
  twitter: "@anyone",
  platforms: "IOS",
  monthlyUsers: "1000",
  avatar: "avatar.webp",
  shortDescription: "This is a short description",
  description: "This is a description",
};

const projects: ProjectsDataStructure = [mockProjectAndroid, mockProjectIos];

describe("Given a user reducer", () => {
  describe("When it receives a new state an the action to load projects", () => {
    test("Then it should return a list of 2 projects", () => {
      const expectedProjectsLoaded: ProjectsDataStructure = projects;

      const loadProjectsAction = loadProjectsActionCreator(projects);

      const newProjects = projectsReducer([], loadProjectsAction);

      expect(newProjects).toStrictEqual(expectedProjectsLoaded);
    });
  });
});
