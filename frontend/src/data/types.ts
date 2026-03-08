export type ProjectType = {
  id: string;
  title: string;
  date: string;
  description: string;
  skills: string;
  tags: string[];
  link: string;

}

export type ProjectsType = {
  projects: ProjectType[];
}

export type ResearchPaperType = {
  id: string;
  title: string;
  description: string;
  publicationDate: string;
  link: string;

}

export type ContactInfoType = {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export type SkillType = {
  id: string;
  name: string;
  proficiency: string;
  icon: string;

}
