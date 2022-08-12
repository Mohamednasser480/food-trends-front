import Navlinks from "./MobileNav/Navlinks";

const DashboardSidebar = ({ links, showSidebar }) => {
  return (
    <div
      className={`overflow-y-auto ${
        showSidebar ? "w-1/4" : "w-0"
      } transition-[width] duration-500`}
    >
      <div className="p-8">
        <Navlinks links={links} />
      </div>
    </div>
  );
};

export default DashboardSidebar;
