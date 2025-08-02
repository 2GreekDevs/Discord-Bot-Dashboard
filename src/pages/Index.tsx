import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DiscordAuth } from "@/components/discord-auth"
import { DashboardStats } from "@/components/dashboard-stats"
import { ServerManagement } from "@/components/server-management"
import { BotSettings } from "@/components/bot-settings"

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

        <DashboardStats />
        
        <div className="grid gap-6 lg:grid-cols-2">
          <ServerManagement />
          <BotSettings />
        </div>
      </main>
    </div>
  )
};

export default Index;
