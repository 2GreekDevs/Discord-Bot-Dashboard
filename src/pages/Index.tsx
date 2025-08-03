import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DiscordAuth } from "@/components/discord-auth"
import { DashboardStats } from "@/components/dashboard-stats"
import { ServerManagement } from "@/components/server-management"
import { BotSettings } from "@/components/bot-settings"
import { CommandManagement } from "@/components/command-management"
import { ActivityLogs } from "@/components/activity-logs"
import { AnalyticsCharts } from "@/components/analytics-charts"
import { BotStatus } from "@/components/bot-status"
import { UserManagement } from "@/components/user-management"
import { AutomationRules } from "@/components/automation-rules"
import { EconomySystem } from "@/components/economy-system"
import { TicketSystem } from "@/components/ticket-system"
import { BackupIntegrations } from "@/components/backup-integrations"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface User {
  id: string
  username: string
  discriminator: string
  avatar: string
  global_name: string
}

const Index = () => {
  const [user, setUser] = useState<User | null>(null)

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <DiscordAuth onAuthChange={setUser} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={user} onAuthChange={setUser} />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {user.global_name || user.username}! Here's your bot overview.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-9 max-w-4xl">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="commands">Commands</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="automation">Automation</TabsTrigger>
            <TabsTrigger value="economy">Economy</TabsTrigger>
            <TabsTrigger value="tickets">Tickets</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="backup">Backup</TabsTrigger>
            <TabsTrigger value="status">Status</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <DashboardStats />
            <div className="grid gap-6 lg:grid-cols-2">
              <ServerManagement />
              <BotSettings />
            </div>
          </TabsContent>
          
          <TabsContent value="commands" className="space-y-6">
            <CommandManagement />
          </TabsContent>
          
          <TabsContent value="users" className="space-y-6">
            <UserManagement />
          </TabsContent>
          
          <TabsContent value="automation" className="space-y-6">
            <AutomationRules />
          </TabsContent>
          
          <TabsContent value="economy" className="space-y-6">
            <EconomySystem />
          </TabsContent>
          
          <TabsContent value="tickets" className="space-y-6">
            <TicketSystem />
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-6">
            <AnalyticsCharts />
          </TabsContent>
          
          <TabsContent value="backup" className="space-y-6">
            <BackupIntegrations />
          </TabsContent>
          
          <TabsContent value="logs" className="space-y-6">
            <ActivityLogs />
          </TabsContent>
          
          <TabsContent value="status" className="space-y-6">
            <BotStatus />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
};

export default Index;
