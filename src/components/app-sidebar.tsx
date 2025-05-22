"use client";

import * as React from "react";
import {
  IconCalendarTime,
  IconDashboard,
  IconHourglass,
  IconUsers,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { t } = useTranslation("dashboard");
  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: t("dashboard"),
        url: "/dashboard",
        icon: IconDashboard,
      },
      {
        title: t("pendingSupplier"),
        url: "#",
        icon: IconHourglass,
      },
      {
        title: t("pendingEvent"),
        url: "#",
        icon: IconCalendarTime,
      },
      {
        title: t("moderatePost"),
        url: "#",
        icon: ShieldCheck,
      },
      {
        title: t("userManagement"),
        url: "#",
        icon: IconUsers,
      },
    ],
  };
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href={"/dashboard"}>
                {/* <IconInnerShadowTop className="!size-5" /> */}
                <span className="text-base font-semibold">
                  {t("adminDashboard")}
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
