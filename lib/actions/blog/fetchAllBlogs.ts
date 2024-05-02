"use server";

/**PATH */
const path =
  process.env.NEXT_PUBLIC_APP_URL_API + "/front/landing_articles?page=";

export const fetchAllArticles = async (page: number) => {
  try {
    const res = await fetch(path + page, {
      next: {
        revalidate: 5,
      },
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const response = await res.json();
    return response;
    // return { current_page, last_page, data } = response;
  } catch (error) {
    console.log("err", error);
  }
};
