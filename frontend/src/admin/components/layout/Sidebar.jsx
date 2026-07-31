import React from "react";

function Sidebar() {
  export const menuItems = [

    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin/dashboard",
    },
    {
      title: "Website",
      children: [
        {
          title: "Home",
          icon: House,
          path: "/admin/home",
        },
      ],
    },
    {
      title: "Blogs",
      icon: FileText,
      path: "/admin/blogs",
    },
    {
      title: "Jobs",
      icon: BriefcaseBusiness,
      path: "/admin/jobs",
    },
    {
      title: "Applications",
      icon: Users,
      path: "/admin/applications",
    },
    {
      title: "Gallery",
      icon: Image,
      path: "/admin/gallery",
    },
    {
      title: "Testimonials",
      icon: MessageSquareQuote,
      path: "/admin/testimonials",
    },
    {
      title: "SEO",
      icon: Search,
      path: "/admin/seo",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/admin/settings",
    },
  ];


  return (
    <>
      <h1>This is sidebar menu</h1>
    </>
  );
}

export default Sidebar;
