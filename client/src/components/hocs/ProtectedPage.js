import React, { useContext } from 'react';

const ProtectedRoute = ({ Component }) => {
  return () => {
    let view;
    if (true) {
      view = (
        <>
          <Component />
        </>
      );
    } else {
      view = null;
    }
    return <>{view}</>;
  };
};

export default function ProtectedPage(Component) {
  const ProtectedPage = () => {
    return <ProtectedRoute Component={Component} />;
  };

  return ProtectedPage;
}
