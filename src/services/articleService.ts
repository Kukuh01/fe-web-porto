import axiosClient from "../api/axiosClient";
import { type Article } from "../types/type";
import dummyData from "../data/articles.json";

const USE_DUMMY = true;

export async function getArticles(): Promise<Article[]> {
  if (USE_DUMMY) {
    return dummyData;
  }

  const res = await axiosClient.get("/articles");
  return res.data;
}
