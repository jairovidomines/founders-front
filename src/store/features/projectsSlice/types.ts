export interface ProjectStructureToBeCreated {
  name: string;
  website: string;
  twitter: string;
  monthlyUsers: string;
  avatar: string;
  shortDescription: string;
  description: string;
  maker: string;
}

export interface ProjectStructure extends ProjectStructureToBeCreated {
  id: string;
}

export type ProjectsStructure = ProjectStructure[];
export interface ProjectsFromApi {
  projects: ProjectsStructure;
}
