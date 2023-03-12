import {
  ProjectDataStructure,
  ProjectsDataStructure,
} from "../store/features/projectsSlice/types";

export const mockProjectAndroid: ProjectDataStructure = {
  name: "Anyone",
  website: "www.anyone.com",
  twitter: "@anyone",
  platforms: "Android",
  monthlyUsers: "1000",
  avatar: "avatar.webp",
  shortDescription: "This is a short description",
  description: "This is a description",
};

export const mockProjectIos: ProjectDataStructure = {
  name: "Anyone",
  website: "www.anyone.com",
  twitter: "@anyone",
  platforms: "IOS",
  monthlyUsers: "1000",
  avatar: "avatar.webp",
  shortDescription: "This is a short description",
  description: "This is a description",
};

export const mockProjects: ProjectsDataStructure = [
  mockProjectAndroid,
  mockProjectIos,
];
