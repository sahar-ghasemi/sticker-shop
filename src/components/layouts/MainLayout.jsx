import NavBar from "../NavBar";

const MainLayout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
        <NavBar/>
      <main>{children}</main>
    </div>
  );
};
export default MainLayout;
