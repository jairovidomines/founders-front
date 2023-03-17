import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectsData, ProjectsDataStructure } from "./types";

const initialState: ProjectsData = { projects: [] };

const projectsSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    loadProjects: (
      currentProjectState,
      action: PayloadAction<ProjectsDataStructure>
    ) => ({ ...currentProjectState, projects: action.payload }),

    deleteProject: (currentProjectState, action: PayloadAction<string>) => {
      const updateProjects = currentProjectState.projects.filter(
        (project) => project.id !== action.payload
      );

      return { projects: updateProjects };
    },
  },
});

export const projectsReducer = projectsSlice.reducer;
export const {
  loadProjects: loadProjectsActionCreator,
  deleteProject: deleteProjectActionCreator,
} = projectsSlice.actions;
