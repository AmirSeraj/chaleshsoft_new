import React from "react";

const CategoriesRelatedToThisBlog = ({
  categoryName,
}: {
  categoryName: string;
}) => {
  return (
    <span className="bg-[#F2F2F2] text-black lg:text-sm lg:p-3 text-[0.7rem] p-2 rounded-3xl capitalize cursor-pointer">
      {categoryName}
    </span>
  );
};

export default CategoriesRelatedToThisBlog;
