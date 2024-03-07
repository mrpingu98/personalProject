import * as React from "react";
import NavBar from "./Navbar";
import { ReactNode } from "react";
import createTheme from "@mui/material/styles/createTheme";

interface LayoutProps {
  children: ReactNode;
}

const theme = createTheme();

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main style={{
        flexGrow: 1,
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#f3efeb",
        marginTop: 65,
        padding: theme.spacing(6)
      }}>
        <div style={{marginBottom: theme.spacing(5),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)}}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;








//chldren is an inbuilt prop - basically saying that wherever the Layout component is used, any 'children' of it (what is wrapped within its layer), will be passed as the prop children

//In TypeScript, ReactNode is a type that represents the possible children of a React component.
//It is a union type that includes all possible types of values that can be rendered as children in a React component.

//usestyles stuff was a bit annoying - bascially seems that some updates have been done wioth how you do this for miu v5

//useStyles is how you apply classNames to mui components

//theme is an object that has styled related properties that you can use within mui (spacing, transitions, - look online for more)
//them.spacing(2)   = `${8 * 2}px` = '16px' - uses 8px as a default value
