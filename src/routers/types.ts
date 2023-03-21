interface Routes {
  home: string;
  login: string;
  myProjects: string;
  createProject: string;
  detail: string;
}

const endpoints: Routes = {
  home: "/",
  login: "/login",
  myProjects: "/my-projects",
  createProject: "/create",
  detail: "/detail",
};

export default endpoints;
