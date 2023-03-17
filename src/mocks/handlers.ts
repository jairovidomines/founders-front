import { rest } from "msw";
import { mockProjects } from "./mocks";

const routes = {
  user: "/users",
  login: "/login",
  projects: "/projects",
  getProjects: "/",
  getMyProjects: "/my-projects",
  delete: "/delete",
  findId: "/:id",
};

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.user}${routes.login}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ token: "jairo1020!" }))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.projects}${routes.getProjects}`,
    async (req, res, ctx) => res(ctx.status(200), ctx.json(mockProjects))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.projects}${routes.getMyProjects}`,
    async (req, res, ctx) => res(ctx.status(200), ctx.json(mockProjects))
  ),

  rest.delete(
    `${process.env.REACT_APP_URL_API}${routes.projects}${routes.delete}${routes.findId}`,
    async (req, res, ctx) => res(ctx.status(200), ctx.json(mockProjects))
  ),
];

export const errorHandlers = [
  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.projects}${routes.getProjects}`,
    (req, res, ctx) => {
      return res(ctx.status(404));
    }
  ),
  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.projects}${routes.getMyProjects}`,
    async (req, res, ctx) => res(ctx.status(404))
  ),
];
