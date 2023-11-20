import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "./Main";

export default function DashboardPage() {
  return (
    <div className="grid grid-rows-2">
      <Header />
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
