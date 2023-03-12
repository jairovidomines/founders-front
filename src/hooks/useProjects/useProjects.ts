import { useCallback } from "react";
import { loadProjectsActionCreator } from "../../store/features/projectsSlice/projectsSlice";
import { ProjectsDataStructure } from "../../store/features/projectsSlice/types";
import { useAppDispatch } from "../../store/hooks";

const apiUrl = process.env.REACT_APP_URL_API;
const pathProjects = "/projects";
const getProjectsEndpoint = "/projects";

const useProjects = () => {
  const dispatch = useAppDispatch();

  const getProjects = useCallback(async () => {
    try {
      const response = await fetch(
        `${apiUrl}${pathProjects}${getProjectsEndpoint}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      const projects = (await response.json()) as ProjectsDataStructure;

      if (!response.ok) {
        return;
      }

      dispatch(loadProjectsActionCreator(projects));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  return { getProjects };
};

export default useProjects;
