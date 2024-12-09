// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

// Loading component to display during loading
const Loading = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
    <p className="ml-4 text-lg font-medium text-gray-700">L...</p>
  </div>
);

function ProtectedRoute({ children }) {
  const { isSignedIn, isLoaded } = useUser();

  //If authentication state is still loading, show loading screen
  if (!isLoaded) {
    return <Loading />;
  }

  // If the user is not authenticated, it redirects to the 403 page
  if (!isSignedIn) {
    return <Navigate to="/403" replace />;
  }

  // If authenticated and the state is loaded, render the child component
  return children;
}

export default ProtectedRoute;
