
import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-semibold text-lg">
          App Name
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link to="/dashboard">Dashboard</Link>
          </Button>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};
