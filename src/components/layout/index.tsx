
import { Header } from "./Header";

export const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      
    </>
  );
};
