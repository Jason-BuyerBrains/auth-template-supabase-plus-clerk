
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="space-y-6 animate-slideIn">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {user?.firstName || "User"}
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Add dashboard cards here */}
      </div>
    </div>
  );
};

export default Dashboard;
