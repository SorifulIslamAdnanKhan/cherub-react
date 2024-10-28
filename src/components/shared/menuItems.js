// menuItems.js
export const menuItems = [
  {
    id: 1,
    label: "Home",
    submenu: [
      { id: 1, label: "Home One", href: "/" },
      { id: 2, label: "Home Two", href: "/home-two" },
      { id: 3, label: "Home Three", href: "/home-three" },
    ],
  },

  { id: 2, label: "About Us", href: "/about-us" },
  { id: 3, label: "Services", href: "/services" },
  { id: 4, label: "Projects", href: "/projects" },
  { id: 5, label: "Blog", href: "/blog" },
  { id: 6, label: "Contact", href: "/contact" },
  {
    label: "Pages",
    submenu: [
      { id: 1, label: "Service Details", href: "/service-details" },
      { id: 2, label: "Project Details", href: "/project-details" },
      { id: 3, label: "Single Blog", href: "/blog/single-blog" },
      { id: 4, label: "Coming Soon", href: "/coming-soon" },
      { id: 5, label: "404 Page", href: "/error" },
    ],
  },
];
