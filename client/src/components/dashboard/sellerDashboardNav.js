import { Search, DashboardItem } from "@/components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function SellerDashboardNav() {

  const theme = useSelector((state) => state.client.authSession.theme);

  const dashboardNav = [
    {
      title: "Overview",
      link: "/admin/",
      icon: (() => {
        if (theme === "dark") {
          return "/icon/dashboard/overview.svg";
        } else {
          return "/icon/dashboard/overview.svg";
        }
      })(),
    },
    {
      title: "Beats",
      link: "/admin/beats",
      icon: "/icon/dashboard/musical-black.svg",
    },
    {
      title: "Usuarios",
      link: "/admin/users",
      icon: "/icon/dashboard/user-black.svg",
    },
    {
      title: "Reviews",
      link: "/admin/reviews",
      icon: "/icon/dashboard/reviews.svg",
    },
  ];

  return (
    <>
      <div className="gap-estilo2 flex flex-col">
        {/* <Search colorMode={"red"} sizeMode={"small"} className={"w-full"} /> */}

        <DashboardItem
          title={"Inbox"}
          link={"/admin/inbox"}
          icon={"/icon/dashboard/overview.svg"}
        />
        <div className="gap-estilo4 flex  flex-col">
          <h3 className="text-sm-medium color-primary-red-700  dark:text-red-600">
            Dashboard
          </h3>
          {dashboardNav.map((item) => (
            <NavItems
              itemTitle={item.title}
              itemLink={item.link}
              itemIcon={item.icon}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function NavItems(props) {
  return (
    <div className="flex flex-col ">
      <DashboardItem
        title={props.itemTitle}
        link={props.itemLink}
        icon={props.itemIcon}
      />
    </div>
  );
}
