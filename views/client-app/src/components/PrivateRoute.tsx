import React from "react";
import { Route, Redirect } from "react-router-dom";
function PrivateRoute({ children, user, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
