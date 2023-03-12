import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar";
import { Suspense } from "react";
import css from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={css.Layout__container}>
      <AppBar />
      <Suspense fallback={null}>
        <div className={css.Layout__container_outlet}>
          <Outlet />
        </div>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
