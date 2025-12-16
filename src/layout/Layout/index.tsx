import { Content, Root } from "./Layout.styled";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Root>
      <Content>{children}</Content>
    </Root>
  );
};
