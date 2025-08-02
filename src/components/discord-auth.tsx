import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface User {
  id: string
  username: string
  discriminator: string
  avatar: string
  global_name: string
}

interface DiscordAuthProps {
  onAuthChange: (user: User | null) => void
}

export function DiscordAuth({ onAuthChange }: DiscordAuthProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const mockUser: User = {
    id: "123456789012345678",
    username: "BotMaster",
    discriminator: "2024",
    avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
    global_name: "Bot Master"
  }

  const handleLogin = async () => {
    setIsLoading(true)
    
    // Simulate Discord OAuth flow
    setTimeout(() => {
      setUser(mockUser)
      onAuthChange(mockUser)
      setIsLoading(false)
      toast({
        title: "Welcome back!",
        description: "Successfully logged in with Discord.",
      })
    }, 1500)
  }

  const handleLogout = () => {
    setUser(null)
    onAuthChange(null)
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    })
  }

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.avatar} alt={user.username} />
          <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{user.global_name || user.username}</p>
          <p className="text-xs text-muted-foreground">#{user.discriminator}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleLogout}
          className="h-8 px-2"
        >
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-xs font-bold text-primary-foreground">D</span>
          </div>
          Login with Discord
        </CardTitle>
        <CardDescription>
          Connect your Discord account to manage your bot
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={handleLogin} 
          disabled={isLoading}
          className="w-full bg-primary hover:bg-primary-glow"
          size="lg"
        >
          {isLoading ? "Connecting..." : "Continue with Discord"}
        </Button>
      </CardContent>
    </Card>
  )
}