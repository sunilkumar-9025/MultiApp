import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoute } from "./allRoutes";
import NonAuthLayout from "../components/Layout/NonAuthLayout";

const index = () => {
  return (
    <React.Fragment>
      <Routes>
        {publicRoute?.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={<NonAuthLayout>{route.component}</NonAuthLayout>}
          />
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default index;
