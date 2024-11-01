import type { ApiResponse, RequestOptions } from "./types/basic.types.ts";

/** Request `url` and add API key to url */
export const request = async <Return, Response = Return>(
  url: string,
  options?: RequestOptions<Return, Response>,
): Promise<ApiResponse<Return>> => {
  try {
    const apiKey = import.meta.env.VITE_ACCUWEATHER_API_KEY;
    const apiUrl = `${url}&apikey=${apiKey}`;

    const response = await fetch(apiUrl, { signal: options?.signal });
    const data = await response.json();
    const transformedData = options?.transformResponse
      ? options.transformResponse(data)
      : data;

    return { data: transformedData };
  } catch (error) {
    return { error };
  }
};
