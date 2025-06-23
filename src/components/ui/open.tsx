import React from "react";

function OpenSheetWhite() {
  return (
    <div className="group py-3 hover:cursor-pointer">
      <div className="flex flex-col gap-[4px]">
        <div className="w-5 h-[1px] bg-white -translate-x-0.5 group-hover:-translate-x-1 transform duration-700" />
        <div className="w-5 h-[0.5px] bg-white  translate-x-0.5 group-hover:translate-x-1  transform duration-700" />
      </div>
    </div>
  );
}
function OpenSheetBlack() {
  return (
    <div className="group py-3 hover:cursor-pointer">
      <div className="flex flex-col gap-[4px]">
        <div className="w-5 h-[1px] bg-black -translate-x-0.5 group-hover:-translate-x-1 transform duration-700" />
        <div className="w-5 h-[0.5px] bg-black  translate-x-0.5 group-hover:translate-x-1  transform duration-700" />
      </div>
    </div>
  );
}

function OpenSheet3Lines() {
  return (
    <div className="group m- hover:cursor-pointer">
      <div className="flex flex-col gap-[4px]">
        <div className="w-5 h-[0.5px] bg-black -translate-x-0.5 group-hover:-translate-x-1 transform duration-700" />
        <div className="w-5 h-[0.5px] bg-black  translate-x-0.5 group-hover:translate-x-1  transform duration-700" />
        <div className="w-5 h-[0.5px] bg-black -translate-x-0.5 group-hover:-translate-x-1 transform duration-700" />
      </div>
    </div>
  );
}

export { OpenSheetWhite, OpenSheetBlack, OpenSheet3Lines };
