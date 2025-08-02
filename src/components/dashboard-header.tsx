import { ThemeToggle } from "@/components/theme-toggle"
import { DiscordAuth } from "@/components/discord-auth"

interface User {
  id: string
  username: string
  discriminator: string
  avatar: string
  global_name: string
}

interface DashboardHeaderProps {
  user: User | null
  onAuthChange: (user: User | null) => void
}

export function DashboardHeader({ user, onAuthChange }: DashboardHeaderProps) {
  return (
    <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
      <div className="container flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">B</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Bot Dashboard</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {user && (
            <DiscordAuth onAuthChange={onAuthChange} />
          )}
        </div>
      </div>
    </header>
  )
}