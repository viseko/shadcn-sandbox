import { SidebarProvider, SidebarTrigger } from "@/shared/ui/sidebar"
import { AppSidebar } from "@/shared/ui/app-sidebar";

const App = () => {
  return (
    <div className="h-screen">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <div className="p-2 border-b-1">
            <SidebarTrigger />
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}

export default App;