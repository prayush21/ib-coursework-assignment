import React, { PropsWithChildren } from "react";

type Props = {};

const CourseworkLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-full max-w-5xl p-2 sm:px-0">{children}</div>;
};

export default CourseworkLayout;
