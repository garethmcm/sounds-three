import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Landing from './Landing';

const SimpleOscillator = React.lazy(() => import("./SimpleOscillator"));
const BasicsFront = React.lazy(() => import("../Basics/BasicsFront"));

function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Background" element={<SimpleOscillator />} />
        <Route path="/Basics" element={<BasicsFront />} />
        {/* Other routes can be added here */}
      </Routes>
    </Suspense>
  );
}

export default Router;
