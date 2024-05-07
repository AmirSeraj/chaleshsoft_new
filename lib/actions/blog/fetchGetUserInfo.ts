"use server";

import { FetchGetUserInfoProps } from "@/lib/types";

/**PATH */
const path = process.env.NEXT_PUBLIC_APP_URL_API + "/front/articles-user/";

export const fetchGetUserInfo = async ({
  articleId,
  token,
}: FetchGetUserInfoProps) => {
  try {
    const res = await fetch(path + articleId, {
      //   next: {
      //     revalidate: 5,
      //   },
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const response = await res.json();
    return response;
    // return { current_page, last_page, data } = response;
  } catch (error) {
    console.log("err", error);
  }
};
