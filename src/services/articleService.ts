import axiosClient from "../api/axiosClient";
import { Project } from "../types/type";
import dummyData from "../data/projects.json";

const USE_DUMMY = true;

export async function getProjects(): Promise<Project[]> {
  if (USE_DUMMY) {
    return dummyData;
  }

  const res = await axiosClient.get("/projects");
  return res.data;
}
