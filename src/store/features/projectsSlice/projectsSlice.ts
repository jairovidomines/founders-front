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
  },
});

export const projectsReducer = projectsSlice.reducer;
export const { loadProjects: loadProjectsActionCreator } =
  projectsSlice.actions;
