"use server";

import { ElixResponse } from "@/features/dictionary/types";

const API_KEY = process.env.ELIX_API_KEY;
const BASE_URL = "https://elix-api-preprod.cleverapps.io/meanings";

export async function searchWord(word: string): Promise<ElixResponse> {
  if (!API_KEY) {
    throw new Error("ELIX_API_KEY is not configured");
  }

  const url = `${BASE_URL}/${encodeURIComponent(word)}?apikey=${API_KEY}&size=10`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

