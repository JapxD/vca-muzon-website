import SideBar from "../components/SideBar";
import GridCalendar from "../components/GridCalendar";

const Dashboard = () => {
  return (
    <>
      <SideBar />
      <div className="h-screen flex items-start justify-start gap-5 bg-[var(--color-primary)]/90">
        <GridCalendar />
      </div>
    </>
  );
};

export default Dashboard;
