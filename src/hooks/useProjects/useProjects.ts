import { useCallback } from "react";
import { loadProjectsActionCreator } from "../../store/features/projectsSlice/projectsSlice";
import { ProjectsData } from "../../store/features/projectsSlice/types";
import {
  openModalActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const apiUrl = process.env.REACT_APP_URL_API;
const pathProjects = "/projects";
const getProjectsEndpoint = "/";
const getUserProjectsEndpoint = "/my-projects";

const useProjects = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.token);

  const getProjects = useCallback(async () => {
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await fetch(
        `${apiUrl}${pathProjects}${getProjectsEndpoint}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      const { projects } = (await response.json()) as ProjectsData;

      dispatch(unsetIsLoadingActionCreator());
      dispatch(loadProjectsActionCreator(projects));
    } catch (error) {
      dispatch(unsetIsLoadingActionCreator());

      return (error as Error).message;
    }
  }, [dispatch]);

  const getUserProjects = useCallback(async () => {
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await fetch(
        `${apiUrl}${pathProjects}${getUserProjectsEndpoint}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { projects } = (await response.json()) as ProjectsData;

      dispatch(unsetIsLoadingActionCreator());
      dispatch(loadProjectsActionCreator(projects));
    } catch (error) {
      dispatch(unsetIsLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          isSuccess: false,
          message: "Couldn't find projects",
        })
      );
      return (error as Error).message;
    }
  }, [dispatch, token]);

  return { getProjects, getUserProjects };
};

export default useProjects;
