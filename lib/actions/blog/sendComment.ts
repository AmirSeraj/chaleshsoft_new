"use server";

import { revalidatePath } from "next/cache";
import { getSession } from "../getSession";

/**PATH */
const path = process.env.NEXT_PUBLIC_APP_URL_API + "/manager/comments";

interface commentInfoProps {}

export const SendComment = async (commentInfo: commentInfoProps) => {
  const session = await getSession();
  console.log("comments:", commentInfo);
  try {
    const res = await fetch(path, {
      next: {
        revalidate: 10,
      },
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${session.token}`,
      },
      body: JSON.stringify(commentInfo),
    });
    const response = await res.json();
    revalidatePath("/blogs");
    return response;
    // return { current_page, last_page, data } = response;
  } catch (error) {
    console.log(error);
  }
};
