import { ElixResponse } from "../types";

const API_KEY = "1c24171393dc52ea4ffcb21f1182ab28";
const BASE_URL = "https://elix-api-preprod.cleverapps.io/meanings";

export async function searchWord(word: string): Promise<ElixResponse> {
  const url = `${BASE_URL}/${encodeURIComponent(word)}?apikey=${API_KEY}&size=10`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  
  return response.json();
}

