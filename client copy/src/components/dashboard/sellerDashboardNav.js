import { Search, DashboardItem } from "@/components";

export const dashboardNav = [
  {
    title: "Overview",
    link: "/admin/",
    icon: "/icon/dashboard/overview.svg",
  },
  {
    title: "Beats",
    link: "/admin/beats",
    icon: "/icon/dashboard/beats.svg",
  },
  {
    title: "Usuarios",
    link: "/admin/users",
    icon: "/icon/dashboard/orders.svg",
  },
  {
    title: "Reviews",
    link: "/admin/reviews",
    icon: "/icon/dashboard/reviews.svg",
  },
  {
    title: "Analytics",
    link: "/admin/analytics",
    icon: "/icon/dashboard/analytics.svg",
  },
];

export default function SellerDashboardNav() {
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
          <h3 className="text-sm-medium color-primary-red-700 ">Dashboard</h3>
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