import Loading from "@/components/loading/Loading_1/page";
import clsx from "clsx";
import React from "react";
import { useTranslation } from "react-i18next";

interface CustomBtnProps {
  handleOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  className?: string | "";
  disabled?: boolean;
}

const CustomBtn: React.FC<CustomBtnProps> = ({
  handleOnClick,
  loading,
  className,
  disabled,
}) => {
  const { t } = useTranslation();
  return (
    <button
      disabled={disabled}
      className={clsx(
        "bg-gradient-to-r from-[#81ecec] to-[#a29bfe] px-3 py-2 rounded-lg font-semibold text-black/75 " +
          className
      )}
      onClick={handleOnClick}
      type="submit"
    >
      {loading ? <Loading /> : t("submit")}
    </button>
  );
};

export default CustomBtn;
