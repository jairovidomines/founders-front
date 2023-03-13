export interface ProjectDataStructure {
  name: string;
  website: string;
  twitter: string;
  platforms: string;
  monthlyUsers: string;
  avatar: string;
  shortDescription: string;
  description: string;
  id: string;
}

export interface ProjectsData {
  projects: ProjectsDataStructure;
}

export type ProjectsDataStructure = ProjectDataStructure[];
