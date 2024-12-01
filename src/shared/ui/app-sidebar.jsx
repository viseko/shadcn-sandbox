import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/shared/ui/sidebar"

import {House, LayoutList, Calendar, RussianRuble, Settings } from "lucide-react";

export function AppSidebar() {
  const mainMenu = [
    {
      url: "#",
      title: "На главную",
      icon: House
    },
    {
      url: "#",
      title: "Список дел",
      icon: LayoutList
    },
    {
      url: "#",
      title: "Календарь",
      icon: Calendar
    },
    {
      url: "#",
      title: "Финансы",
      icon: RussianRuble
    },
  ];

  const addMenu = [
    {
      url: "#",
      title: "Настройки",
      icon: Settings
    },
  ];

  const menuItems = (list) => list.map(item => (
    <SidebarMenuButton asChild key={item.title}>
      <a href={item.url}>
        <item.icon />
        <span>{item.title}</span>
      </a>
    </SidebarMenuButton>
  ));

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        Header
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Основные</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                { menuItems(mainMenu) }
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Дополнительные</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                { menuItems(addMenu) }
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-zinc-100">
        <span>Footer</span>
      </SidebarFooter>
    </Sidebar>
  )
}
