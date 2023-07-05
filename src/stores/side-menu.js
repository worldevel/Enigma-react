import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Home",
        title: "Dashboard",
        pathname: "/dashboard",
      },
      {
        icon: "Layout",
        title: "Create Admin User",
        pathname: "/create-admin-user",
      },
      {
        icon: "Layout",
        title: "Create Agent",
        pathname: "/create-agent",
      },
      {
        icon: "Box",
        title: "List of orders",
        pathname: "/list-of-orders",
      },
      {
        icon: "ShoppingBag",
        title: "Create Order",
        pathname: "/create-order",
      },
      {
        icon: "Inbox",
        title: "Pay For Order",
        pathname: "/pay-for-order",
      },
      {
        icon: "Inbox",
        title: "Routes List",
        pathname: "/routes-list",
      },
      {
        icon: "Inbox",
        title: "Create Route",
        pathname: "/create-route",
      },
    ],
  },
});

export { sideMenu };
