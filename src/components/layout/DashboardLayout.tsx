
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container pt-20 pb-8 animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
};
