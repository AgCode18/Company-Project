// import { Outlet } from "react-router-dom";
// import { useState } from "react";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";

// const MainLayout = () => {


//     return (
//         <div className="flex">
//             {/* Sidebar */}
//             sidebar
//             {/* Content */}
//             <div className="flex flex-col h-screen w-full md:ml-64">
//                 <Header />
//                 <div className="flex-1 p-4 md:p-6 overflow-auto bg-gray-50">
//                     <Outlet />
//                     <Footer />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MainLayout;
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      {/* Remove if not needed */}
      {/* sidebar */}

      <div className="flex flex-col min-h-screen w-full">
        <Header />

        <main className="flex-1 bg-gray-50">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;