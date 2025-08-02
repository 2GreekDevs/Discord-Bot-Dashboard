import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings, Users, Crown, Shield, ExternalLink } from "lucide-react"

const servers = [
  {
    id: "1",
    name: "Gaming Central",
    icon: "https://cdn.discordapp.com/embed/avatars/1.png",
    members: 1247,
    owner: true,
    permissions: ["administrator"],
    prefix: "!",
    status: "active"
  },
  {
    id: "2", 
    name: "Dev Community",
    icon: "https://cdn.discordapp.com/embed/avatars/2.png",
    members: 856,
    owner: false,
    permissions: ["manage_guild", "manage_channels"],
    prefix: "?",
    status: "active"
  },
  {
    id: "3",
    name: "Art & Design",
    icon: "https://cdn.discordapp.com/embed/avatars/3.png", 
    members: 423,
    owner: false,
    permissions: ["manage_messages"],
    prefix: "$",
    status: "inactive"
  }
]

export function ServerManagement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Server Management
        </CardTitle>
        <CardDescription>
          Manage bot settings across your servers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {servers.map((server) => (
            <div
              key={server.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={server.icon} alt={server.name} />
                  <AvatarFallback>{server.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{server.name}</h3>
                    {server.owner && (
                      <Crown className="h-4 w-4 text-warning" />
                    )}
                    <Badge 
                      variant={server.status === "active" ? "default" : "secondary"}
                      className={server.status === "active" ? "bg-success/10 text-success border-success/20" : ""}
                    >
                      {server.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {server.members.toLocaleString()} members
                    </span>
                    <span className="flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      Prefix: {server.prefix}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Configure
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open Server
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}