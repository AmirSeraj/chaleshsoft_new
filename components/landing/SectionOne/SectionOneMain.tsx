import React from "react";
import ContentLeft from "./Sections/ContentLeft";
import ContentRight from "./Sections/ContentRight";
import clsx from "clsx";
import styles from "./styles.module.css";
const SectionOneMain = () => {
  return (
    <div
      className={clsx(styles.container, "lg:flex-row flex-col lg:gap-0 gap-7")}
    >
      <ContentLeft />
      <ContentRight />
    </div>
  );
};

export default SectionOneMain;
