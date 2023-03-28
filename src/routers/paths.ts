interface Routes {
  home: string;
  login: string;
  myProjects: string;
  createProject: string;
  detail: string;
  filter: string;
}

const endpoints: Routes = {
  home: "/",
  login: "/login",
  myProjects: "/my-projects",
  createProject: "/create",
  detail: "/detail",
  filter: "/:filter",
};

export default endpoints;
