"use server";

/**PATH */
const path = process.env.NEXT_PUBLIC_APP_URL_API + "/front/single_article/";

export const fetchSingleArticle = async (slug: string) => {
  try {
    const res = await fetch(path + slug, {
      // next: {
      //   revalidate: 1,
      // },
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const response = await res.json();
    return response;
    // return { current_page, last_page, data } = response;
  } catch (error) {
    console.log(error);
  }
};
