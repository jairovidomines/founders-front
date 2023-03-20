import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectsFromApi, ProjectsStructure, ProjectStructure } from "./types";

export const initialStateProjects: ProjectsFromApi = {
  projects: [],
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

const projectsSlice = createSlice({
  name: "project",
  initialState: initialStateProjects,
  reducers: {
    loadProjects: (
      currentProjectState,
      action: PayloadAction<ProjectsStructure>
    ) => ({ ...currentProjectState, projects: action.payload }),

    deleteProject: (currentProjectState, action: PayloadAction<string>) => ({
      ...currentProjectState,
      projects: currentProjectState.projects.filter(
        (project) => project.id !== action.payload
      ),
    }),

    getProjectById: (
      currentProjectState,
      action: PayloadAction<ProjectStructure>
    ) => ({ ...currentProjectState, project: action.payload }),
  },
});

export const projectsReducer = projectsSlice.reducer;
export const {
  loadProjects: loadProjectsActionCreator,
  deleteProject: deleteProjectActionCreator,
  getProjectById: getProjectByIdActionCreator,
} = projectsSlice.actions;
