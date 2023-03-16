import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ProjectDataStructure,
  ProjectsData,
  ProjectsDataStructure,
} from "./types";

const initialState: ProjectsData = { projects: [] };

const projectsSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    loadProjects: (
      currentProjectState,
      action: PayloadAction<ProjectsDataStructure>
    ) => ({ ...currentProjectState, projects: action.payload }),

    deleteProject: (
      currentProjectState,
      action: PayloadAction<ProjectDataStructure>
    ) => {
      currentProjectState.projects.filter(
        (project) => project.id !== action.payload.id
      );
    },
  },
});

export const projectsReducer = projectsSlice.reducer;
export const {
  loadProjects: loadProjectsActionCreator,
  deleteProject: deleteProjectActionCreator,
} = projectsSlice.actions;
