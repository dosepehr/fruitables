import React, { FC, PropsWithChildren } from "react";
type LayoutProps = {
  classname?: string;
};

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  classname,
  children,
}) => {
  return <div className={`myContainer ${classname}`}>{children}</div>;
};

export default Layout;
