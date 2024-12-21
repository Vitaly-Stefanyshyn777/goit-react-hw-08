import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader"; // Замість inline loader
import s from "./Layout.module.css";

/**
 * Layout Component
 * Wrapper for the app layout, includes navigation, notifications, and page content.
 *
 * @returns {JSX.Element}
 */
const Layout = () => {
  return (
    <div className={s.layout || "default-layout"}>
      <AppBar />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
          style: {
            background: "#333",
            color: "#fff",
            fontSize: "14px",
          },
        }}
      />
      <Suspense fallback={<Loader message="Loading page..." />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
