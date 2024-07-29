import React from "react";

const withConsoleLog = <P extends object>(Component: React.ComponentType<P>): React.FC<P> => {
    const WrappedComponent: React.FC<P> = (props) => {
      console.log('compose in use')
      return (
        <Component
          {...props}
        />
      );
    };
    return WrappedComponent;
  }

  export {withConsoleLog}