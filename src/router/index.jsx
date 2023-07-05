import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/side-menu/Main";
import SimpleMenu from "../layouts/simple-menu/Main";
import TopMenu from "../layouts/top-menu/Main";
import DashboardOverview1 from "../views/dashboard-overview-1/Main";
import DashboardOverview2 from "../views/dashboard-overview-2/Main";
import DashboardOverview3 from "../views/dashboard-overview-3/Main";
import DashboardOverview4 from "../views/dashboard-overview-4/Main";
import Categories from "../views/categories/Main";
import CreateOrder from "../views/create-order/Main";
import ListOfOrders from "../views/list-of-orders/Main";
import ProductGrid from "../views/product-grid/Main";
import RoutesList from "../views/routes-list/Main";
import CreateRoute from "../views/create-route/Main";
import TransactionDetail from "../views/transaction-detail/Main";
import SellerList from "../views/seller-list/Main";
import SellerDetail from "../views/seller-detail/Main";
import Reviews from "../views/reviews/Main";
import Inbox from "../views/inbox/Main";
import FileManager from "../views/file-manager/Main";
import PointOfSale from "../views/point-of-sale/Main";
import Chat from "../views/chat/Main";
import Post from "../views/post/Main";
import Calendar from "../views/calendar/Main";
import CrudDataList from "../views/crud-data-list/Main";
import PayForOrder from "../views/pay-for-order/Main";
import UsersLayout1 from "../views/users-layout-1/Main";
import UsersLayout2 from "../views/users-layout-2/Main";
import UsersLayout3 from "../views/users-layout-3/Main";
import ProfileOverview1 from "../views/profile-overview-1/Main";
import ProfileOverview2 from "../views/profile-overview-2/Main";
import ProfileOverview3 from "../views/profile-overview-3/Main";
import CreatAdminUser from "../views/create-admin-user/Main";
import CreatAgent from "../views/create-agent/Main";
import WizardLayout3 from "../views/wizard-layout-3/Main";
import BlogLayout1 from "../views/blog-layout-1/Main";
import BlogLayout2 from "../views/blog-layout-2/Main";
import BlogLayout3 from "../views/blog-layout-3/Main";
import PricingLayout1 from "../views/pricing-layout-1/Main";
import PricingLayout2 from "../views/pricing-layout-2/Main";
import InvoiceLayout1 from "../views/invoice-layout-1/Main";
import InvoiceLayout2 from "../views/invoice-layout-2/Main";
import FaqLayout1 from "../views/faq-layout-1/Main";
import FaqLayout2 from "../views/faq-layout-2/Main";
import FaqLayout3 from "../views/faq-layout-3/Main";
import Login from "../views/login/Main";
import AdminLogin from "../views/login/Admin-Main";
import Register from "../views/register/Main";
import ErrorPage from "../views/error-page/Main";
import UpdateProfile from "../views/update-profile/Main";
import ChangePassword from "../views/change-password/Main";
import RegularTable from "../views/regular-table/Main";
import Tabulator from "../views/tabulator/Main";
import Modal from "../views/modal/Main";
import SlideOver from "../views/slide-over/Main";
import Notification from "../views/notification/Main";
import Tab from "../views/tab/Main";
import Accordion from "../views/accordion/Main";
import Button from "../views/button/Main";
import Alert from "../views/alert/Main";
import ProgressBar from "../views/progress-bar/Main";
import Tooltip from "../views/tooltip/Main";
import Dropdown from "../views/dropdown/Main";
import Typography from "../views/typography/Main";
import Icon from "../views/icon/Main";
import LoadingIcon from "../views/loading-icon/Main";
import RegularForm from "../views/regular-form/Main";
import Datepicker from "../views/datepicker/Main";
import TomSelect from "../views/tom-select/Main";
import FileUpload from "../views/file-upload/Main";
import WysiwygEditor from "../views/wysiwyg-editor/Main";
import Validation from "../views/validation/Main";
import Chart from "../views/chart/Main";
import Slider from "../views/slider/Main";
import ImageZoom from "../views/image-zoom/Main";
import { Children } from "react";
import { element } from "prop-types";

function Router() {
  const routes = [

    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin",
      children: [
        {
          path: 'login',
          element: <AdminLogin />,
        }
      ]
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
    {
      path: "/",
      element: <SideMenu />,
      children: [
        {
          path: "/dashboard",
          element: <DashboardOverview1 />
        },
        {
          path: "/create-admin-user",
          element: <CreatAdminUser />
        },
        {
          path: "/create-agent",
          element: <CreatAgent />,
        },
        {
          path: "/list-of-orders",
          element: <ListOfOrders />,
        },
        {
          path: "/create-order",
          element: <CreateOrder />,
        },
        {
          path: "/pay-for-order",
          element: <PayForOrder />,
        },
        {
          path: "/routes-list",
          element: <RoutesList />,
        },
        {
          path: "/create-route",
          element: <CreateRoute />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
