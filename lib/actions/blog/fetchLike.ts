"use server";

import { FetchLikeProps } from "@/lib/types";
import { getSession } from "../getSession";

/**PATH */
const path = process.env.NEXT_PUBLIC_APP_URL_API + "/manager/likes";

export const fetchLike = async (data: FetchLikeProps) => {
  const session = await getSession();
  try {
    const res = await fetch(path, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + session.token,
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    return response;
    // return { current_page, last_page, data } = response;
  } catch (error) {
    console.log("err", error);
  }
};
