import React from "react"
import { DarkThemeContext } from "../Constants/Contexts"

export const useTypographyOverrides = () => {

  const {darkTheme} = React.useContext(DarkThemeContext)

    const overrides = {
        typography: {
            h1: {
                fontSize: 55,
                fontWeight: 500,
                color: darkTheme ? '#f3efeb' : "#656565",
                fontFamily: 'Arial',
              },
              h2: {
                fontSize: 40,
                fontWeight: 500,
                color: darkTheme ? '#f3efeb' : "#656565",
                fontFamily: 'Arial',
              },
              h3: {
                fontSize: 30,
                fontWeight: 500,
                color: darkTheme ? '#f3efeb' : "#656565",
                fontFamily: 'Arial',
              },
              h4: {
                fontSize: 25,
                fontWeight: 400,
                color: darkTheme ? '#f3efeb' : "#656565",
                fontFamily: 'Arial',
              },
              body1: {
                fontSize: 20,
                lineHeight: 1.2,
                color: darkTheme ? '#f3efeb' : "#656565",
                fontFamily: 'Arial',
              },
              body2: {
                fontSize: 15,
                lineHeight: 1.2,
                color: darkTheme ? '#f3efeb' : "#656565",
                fontFamily: 'Arial',
              },
        }
       
    }

    return {overrides}
}