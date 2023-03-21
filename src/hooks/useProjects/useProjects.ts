import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../modals/modals";
import endpoints from "../../routers/types";
import {
  deleteProjectActionCreator,
  getProjectByIdActionCreator,
  loadProjectsActionCreator,
} from "../../store/features/projectsSlice/projectsSlice";
import {
  ProjectsFromApi,
  ProjectStructureToBeCreated,
} from "../../store/features/projectsSlice/types";
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
const deleteProjectEndpoint = "/delete";
const deleteProjectId = "/";
const createProjectEndpoint = "/create";

const useProjects = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.token);
  const navigateTo = useNavigate();

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
      const { projects } = (await response.json()) as ProjectsFromApi;

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
      const { projects } = (await response.json()) as ProjectsFromApi;

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

  const deleteProject = async (id: string) => {
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await fetch(
        `${apiUrl}${pathProjects}${deleteProjectEndpoint}${deleteProjectId}${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorMessage = "Project was not deleted, try again";

        throw new Error(errorMessage);
      }

      dispatch(deleteProjectActionCreator(id));
      dispatch(unsetIsLoadingActionCreator());
      navigateTo(endpoints.home);
      showSuccessToast("Project was succesfully deleted");
    } catch (error: unknown) {
      const errorMessage = (error as Error).message;
      dispatch(unsetIsLoadingActionCreator());
      showErrorToast(errorMessage);
    }
  };

  const createProject = useCallback(
    async (maker: ProjectStructureToBeCreated) => {
      try {
        dispatch(setIsLoadingActionCreator());

        const response = await fetch(
          `${apiUrl}${pathProjects}${createProjectEndpoint}`,
          {
            method: "POST",
            body: JSON.stringify(maker),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const errorMessage = "The project cannot be created";

          throw new Error(errorMessage);
        }

        dispatch(unsetIsLoadingActionCreator());
        navigateTo(endpoints.myProjects);
        showSuccessToast("Project was succesfully created");
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;

        dispatch(unsetIsLoadingActionCreator());
        showErrorToast(errorMessage);
      }
    },
    [dispatch, navigateTo, token]
  );

  const getProjectById = useCallback(
    async (id: string) => {
      try {
        dispatch(setIsLoadingActionCreator());

        const response = await fetch(`${apiUrl}${pathProjects}/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorMessage = "Not possible to show the project";

          throw new Error(errorMessage);
        }

        const { project } = (await response.json()) as ProjectsFromApi;

        dispatch(getProjectByIdActionCreator(project));
        dispatch(unsetIsLoadingActionCreator());
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;

        dispatch(unsetIsLoadingActionCreator());
        showErrorToast(errorMessage);
      }
    },
    [dispatch, token]
  );

  return {
    getProjects,
    getUserProjects,
    deleteProject,
    createProject,
    getProjectById,
  };
};

export default useProjects;
