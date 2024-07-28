import React from "react";
import { WithDeleteDialogProps } from "../Constants/Types/HOC";

const withDeleteDialog = <P extends object>(Component: React.ComponentType<P & WithDeleteDialogProps>): React.FC<P & WithDeleteDialogProps> => {
    const WrappedComponent: React.FC<P & WithDeleteDialogProps> = (props) => {
      const [counter, setCounter] = React.useState<number>(0);
      return (
        <Component
          {...props}
          counter={counter}
          toggle={() => setCounter(counter + 1)}
        />
      );
    };
    return WrappedComponent;
  }

  export {withDeleteDialog}