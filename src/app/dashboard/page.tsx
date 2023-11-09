import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function DashboardPage() {
  return (
    <div className="grid grid-rows-2">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="align-center">div components</div>
      </div>
      {/* <Sidebar /> */}
      {/* <div className="grid grid-rows-2">
    <div>
      <div>Dashboard Page Content</div>
    </div>
  </div> */}
    </div>
  );
}
