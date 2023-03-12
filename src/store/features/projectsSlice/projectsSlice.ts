import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectsDataStructure } from "./types";

const initialState: ProjectsDataStructure = [];

const projectsSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    loadProjects: (
      currentProjectState,
      action: PayloadAction<ProjectsDataStructure>
    ) => [...action.payload],
  },
});

export const projectsReducer = projectsSlice.reducer;
export const { loadProjects: loadProjectsActionCreator } =
  projectsSlice.actions;
