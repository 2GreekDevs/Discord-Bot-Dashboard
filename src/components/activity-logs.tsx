import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Activity, Shield, MessageSquare, UserPlus, UserMinus, Volume2, Settings } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

const logs = [
  {
    id: "1",
    type: "moderation",
    action: "Member Kicked",
    user: "ModeratorBot",
    target: "BadUser123",
    reason: "Spam messages",
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    server: "Gaming Central"
  },
  {
    id: "2",
    type: "message",
    action: "Message Deleted",
    user: "AutoMod",
    target: "#general",
    reason: "Inappropriate content",
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    server: "Gaming Central"
  },
  {
    id: "3",
    type: "member",
    action: "Member Joined",
    user: "NewUser456",
    target: null,
    reason: null,
    timestamp: new Date(Date.now() - 1000 * 60 * 120),
    server: "Dev Community"
  },
  {
    id: "4",
    type: "voice",
    action: "Voice Channel Created",
    user: "AdminUser",
    target: "Team Meeting",
    reason: null,
    timestamp: new Date(Date.now() - 1000 * 60 * 180),
    server: "Gaming Central"
  },
  {
    id: "5",
    type: "settings",
    action: "Bot Settings Updated",
    user: "AdminUser",
    target: "Prefix changed to '!'",
    reason: null,
    timestamp: new Date(Date.now() - 1000 * 60 * 240),
    server: "Art & Design"
  },
  {
    id: "6",
    type: "moderation",
    action: "Member Banned",
    user: "ModeratorBot",
    target: "TrollUser789",
    reason: "Repeated violations",
    timestamp: new Date(Date.now() - 1000 * 60 * 360),
    server: "Dev Community"
  }
]

const getLogIcon = (type: string) => {
  switch (type) {
    case "moderation":
      return <Shield className="h-4 w-4" />
    case "message":
      return <MessageSquare className="h-4 w-4" />
    case "member":
      return <UserPlus className="h-4 w-4" />
    case "voice":
      return <Volume2 className="h-4 w-4" />
    case "settings":
      return <Settings className="h-4 w-4" />
    default:
      return <Activity className="h-4 w-4" />
  }
}

const getLogColor = (type: string) => {
  switch (type) {
    case "moderation":
      return "destructive"
    case "message":
      return "secondary"
    case "member":
      return "default"
    case "voice":
      return "outline"
    case "settings":
      return "outline"
    default:
      return "secondary"
  }
}

export function ActivityLogs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Activity Logs
        </CardTitle>
        <CardDescription>
          Recent bot activities across all servers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-3">
            {logs.map((log) => (
              <div
                key={log.id}
                className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    {getLogIcon(log.type)}
                  </div>
                </div>
                
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant={getLogColor(log.type) as any} className="capitalize">
                      {log.type}
                    </Badge>
                    <span className="font-medium">{log.action}</span>
                    <span className="text-sm text-muted-foreground">
                      in {log.server}
                    </span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">{log.user}</span>
                    {log.target && (
                      <>
                        {log.action.includes("Joined") ? " joined the server" : 
                         log.action.includes("Created") ? ` created ${log.target}` :
                         ` → ${log.target}`}
                      </>
                    )}
                    {log.reason && (
                      <span className="block text-xs mt-1">
                        Reason: {log.reason}
                      </span>
                    )}
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {formatDistanceToNow(log.timestamp, { addSuffix: true })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}