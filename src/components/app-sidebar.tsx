import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Vote,
  ScrollText,
  IdCard,
  Zap,
  Lightbulb,
  BookOpenText,
  Heart
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Elections",
    url: "/elections",
    icon: Vote,
  },
  {
    title: "Legislation",
    url: "/legislation",
    icon: ScrollText,
  },
  {
    title: "Identity",
    url: "/identity",
    icon: IdCard,
  }, 
  {
    title: "Forum",
    url: "/forum",
    icon: Lightbulb,
  }, 
  {
    title: "Learn",
    url: "/learn",
    icon: BookOpenText,
  }, 
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Demos</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Dialog>
              <DialogTrigger asChild>
                <SidebarMenuButton>
                  <Heart />
                  <span>Donate</span>
                </SidebarMenuButton>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Support Our Mission</DialogTitle>
                  <DialogDescription>
                    If you can afford it, any contribution will help us continue building tools to decentralize democracy and create trustless government.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-1 gap-4">
                    <p>Bitcoin address: </p>
                    <p>Ethereum address: </p>
                    <p>Cardano address: </p>
                    <p>Midnight address: </p>
                  </div>
                  
                </div>
                <DialogFooter>
                  <p className="text-xs text-muted-foreground text-center w-full">
                    If you can't afford it, no worries! Your support by using and spreading the word about Demos is invaluable and greatly appreciated.
                  </p>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
