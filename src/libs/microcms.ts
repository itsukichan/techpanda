import MicroCMS from "microcms-js-sdk";
import type { Work, MicroCMSListResponse } from "@types";

const client = MicroCMS.createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
})

export const getWorks = async (queries: MicroCMS.MicroCMSQueries): Promise<MicroCMSListResponse<Work>> => {
  try {
    return await client.get({ endpoint: "works", queries });
  } catch (error) {
    console.error("Failed to fetch works:", error);
    throw new Error("作品の取得に失敗しました");
  }
}

export const getWorkDetail = async (
  workId: string,
  queries?: MicroCMS.MicroCMSQueries
): Promise<Work> => {
  try {
    return await client.getListDetail({ endpoint: "works", contentId: workId, queries });
  } catch (error) {
    console.error(`Failed to fetch work detail for ID ${workId}:`, error);
    throw new Error("作品詳細の取得に失敗しました");
  }
}
