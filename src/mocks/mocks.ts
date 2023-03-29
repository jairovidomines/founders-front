import {
  ProjectStructure,
  ProjectsFromApi,
  ProjectsStructure,
} from "../store/features/projectsSlice/types";

export const mockProjectAndroid: ProjectStructure = {
  name: "Anyone",
  website: "www.anyone.com",
  twitter: "@anyone",
  monthlyUsers: "0-25.000",
  avatar: "avatar.webp",
  shortDescription: "This is a short description",
  description: "This is a description",
  id: "13579",
  maker: "34567",
};

export const mockProjectIos: ProjectStructure = {
  name: "Anyone",
  website: "www.anyone.com",
  twitter: "@anyone",
  monthlyUsers: "0-25.000",
  avatar: "avatar.webp",
  shortDescription: "This is a short description",
  description: "This is a description",
  id: "2468",
  maker: "",
};

export const mockListOfProjects: ProjectsStructure = [mockProjectAndroid];

export const mockProjects: ProjectsFromApi = {
  projects: [mockProjectAndroid, mockProjectIos],
  project: {
    name: "",
    maker: "",
    avatar: "",
    description: "",
    id: "",
    monthlyUsers: "",
    shortDescription: "",
    twitter: "",
    website: "",
  },
};

export const mockProjectTobeCreated = {
  name: "Anyone",
  website: "www.anyone.com",
  twitter: "@anyone",
  monthlyUsers: "",
  avatar: "avatar.webp",
  shortDescription: "This is a short description",
  description: "This is a description",
  maker: "",
};
