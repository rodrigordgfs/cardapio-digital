import Header from "../../components/Header";

// import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      {/* <div className="flex-1 flex justify-center  bg-zinc-50">
        <div className="w-full max-w-[1200px] bg-white p-4">
          <Outlet />
        </div>
      </div> */}
    </div>
  );
}
