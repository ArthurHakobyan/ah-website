import React from "react";
import { BUTTON_TYPES } from "@/app/data/button";

const Button = (props) => {
  const { type, btnText, icon, onClick } = props;

  const getButtonClass = () => {
    switch (type) {
      case BUTTON_TYPES.PRIMARY:
        return "py-2 px-4 mr-4 flex align-center justify-center text-cream text-sm font-[600]  bg-azure rounded-full drop-shadow-[0_0_2rem_rgba(black, 0.5)]";

      case BUTTON_TYPES.SECONDARY:
        return "py-2 px-4 mr-4 flex align-center justify-center text-cream text-sm font-[600]  bg-gray rounded-full drop-shadow-[0_0_2rem_rgba(black, 0.5)]";

      default:
        return "py-2 px-4 mr-4 flex align-center justify-center text-gray text-sm font-[600] border";
    }
  };

  return (
    <div>
      <button onClick={onClick} className={`${getButtonClass()}`}>
        <div className="flex gap-2 items-center justify-center">
          {btnText}
          {icon}
        </div>
      </button>
    </div>
  );
};

export default Button;
