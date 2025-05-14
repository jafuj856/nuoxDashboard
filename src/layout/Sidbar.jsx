import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../utils/sidbarNavigation ";
import { toggleSidebar } from "../redux/rootReducer";

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignOutModal, setShowSignOutModal] = useState(false);
 const toggleSidebarState = useSelector((state) => state.root.toggleSidebar);
  // Navigation items


    useEffect(() => {
  
      
    const checkLoginStatus = () => {
      const token = localStorage.getItem("token");
      console.log("Checking login status, token exists:", !!token);
      setIsLoggedIn(!!token);
    };

    // Check on initial render
    checkLoginStatus();

    // Set up event listener for storage changes
    window.addEventListener("storage", checkLoginStatus);

    // Listen for the tokenChange event that's actually being dispatched
    window.addEventListener("tokenChange", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
      window.removeEventListener("tokenChange", checkLoginStatus);
    };
  }, []);

  const handleCardClick = (e) => {
    e.stopPropagation();
    // setIsModalOpen(true);
    // dispatch(openLoginModal());
    setShowSignOutModal(true);
  };


  const handleSignOut = () => {
    setShowSignOutModal(false);
    navigate("/");
    localStorage.removeItem("token");
    dispatch(loginCheck());
    window.dispatchEvent(new Event("tokenChange"));
  };

  return (
    <aside
      id="logo-sidebar"
      className={`font-urbanist z-50 fixed top-0 left-0 w-62 h-screen pt-2 transition-transform 
        ${toggleSidebarState ? "translate-x-0" : "-translate-x-full"}
        sm:translate-x-0  border-r-[2px] border-black/1  bg-white`}
      aria-label="Sidebar"
    >
      <div className=" relative  ">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className={`absolute sm:hidden block p-2  text-blue-500 text-2xl mt-3 ${
            toggleSidebarState ? "right-6 -top-10" : "-right-16"
          }`}
        >
          {toggleSidebarState ? (
            <div className="w-full h-full border border-white/50">X</div>
          ) : (
            <div className="p-1 border border-black/30 rounded-md flex flex-col justify-between w-[45px] h-[37px]">
              <div className="h-1.5 w-full rounded-full bg-black/30" />
              <div className="h-1.5 w-full rounded-full bg-black/30" />
              <div className="h-1.5 w-full rounded-full bg-black/30" />
            </div>
          )}
        </button>
        <div className=" flex items-center justify-center gap-4 font-[600] text-[30px]  mt-[30px]">
          <img src="/logo.png" alt="Logo" className="w-[56px] h-[56px] " />
          Dabang
        </div>
      </div>

      <nav
        className="flex-1  pb-4 overflow-y-auto mt-10"
        style={{ scrollbarWidth: "none" }}
      >
        <ul className="flex flex-col  gap-y-6 md:gap-y-4 p-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            console.log(item);

            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`p-2 md:p-4 flex items-center gap-8 transition-all  rounded-lg ${
                    isActive
                      ? "opacity-100 b bg-commonColor text-white"
                      : "opacity-60 hover:opacity-100 text-black"
                  }`}
                  title={item.name}
                  drhgrdfh
                >
                  {item.icon(isActive)} {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout button at the bottom */}
      {isLoggedIn && (
        <div className="mt-auto mb-6">
          <button
            className="p-2 pl-4 md:p-4 flex items-center gap-8 transition-all  rounded-lg "
            title="Logout"
            onClick={handleCardClick}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.7747 22.2011L26.3371 16.8777C26.555 16.6292 26.6665 16.3154 26.6666 16C26.6667 15.7842 26.6147 15.5676 26.5091 15.3706C26.4621 15.2828 26.4047 15.1994 26.3371 15.1223L21.7747 9.79894C21.2955 9.23982 20.4538 9.17502 19.8947 9.65422C19.3356 10.1334 19.2708 10.9751 19.75 11.5343L22.4345 14.6666L12.1083 14.6666C11.3719 14.6666 10.775 15.2636 10.775 15.9999C10.775 16.7363 11.3719 17.3333 12.1083 17.3333L22.4347 17.3333L19.75 20.4658C19.2708 21.0249 19.3356 21.8666 19.8947 22.3458C20.4538 22.825 21.2955 22.7602 21.7747 22.2011ZM13.3333 7.99992C14.0697 7.99992 14.6666 8.59687 14.6666 9.33325L14.6666 11.3333C14.6666 12.0696 15.2636 12.6666 16 12.6666C16.7363 12.6666 17.3333 12.0696 17.3333 11.3333L17.3333 9.33325C17.3333 7.12411 15.5424 5.33325 13.3333 5.33325L9.33329 5.33325C7.12415 5.33325 5.33329 7.12411 5.33329 9.33325L5.33329 22.6666C5.33329 24.8757 7.12415 26.6666 9.33329 26.6666L13.3333 26.6666C15.5424 26.6666 17.3333 24.8757 17.3333 22.6666L17.3333 20.6666C17.3333 19.9302 16.7363 19.3333 16 19.3333C15.2636 19.3333 14.6666 19.9302 14.6666 20.6666L14.6666 22.6666C14.6666 23.403 14.0697 23.9999 13.3333 23.9999L9.33329 23.9999C8.59691 23.9999 7.99996 23.403 7.99996 22.6666L7.99996 9.33325C7.99996 8.59687 8.59691 7.99992 9.33329 7.99992L13.3333 7.99992Z"
                fill="#737791"
              />
            </svg>
            Sign Out
          </button>
        </div>
      )}

      {/* <LoginModal open={isModalOpen} onClose={handleCloseModal} /> */}
    </aside>
  );
};

export default Sidebar;
