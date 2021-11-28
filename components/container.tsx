import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => <div className="container mx-auto px-5">{children}</div>;

export default Container;
