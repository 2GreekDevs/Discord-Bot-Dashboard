import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Server, Cpu, HardDrive, Wifi, RefreshCw, Power, AlertTriangle } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

const botStats = {
  status: "online",
  uptime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), // 7 days ago
  version: "v2.4.1",
  lastRestart: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
  cpu: 23,
  memory: 67,
  disk: 45,
  latency: 42,
  guilds: 156,
  users: 48392,
  channels: 892
}

const recentEvents = [
  {
    id: "1",
    type: "restart",
    message: "Bot restarted successfully",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    severity: "info"
  },
  {
    id: "2",
    type: "warning",
    message: "High memory usage detected",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    severity: "warning"
  },
  {
    id: "3",
    type: "update",
    message: "Updated to version v2.4.1",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6),
    severity: "success"
  }
]

export function BotStatus() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-success"
      case "idle":
        return "bg-warning"
      case "dnd":
        return "bg-destructive"
      default:
        return "bg-muted"
    }
  }

  const getEventIcon = (type: string) => {
    switch (type) {
      case "restart":
        return <RefreshCw className="h-4 w-4" />
      case "warning":
        return <AlertTriangle className="h-4 w-4" />
      case "update":
        return <Server className="h-4 w-4" />
      default:
        return <Server className="h-4 w-4" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${getStatusColor(botStats.status)}`} />
            Bot Status
          </div>
          <Badge variant="outline" className="ml-auto">
            {botStats.version}
          </Badge>
        </CardTitle>
        <CardDescription>
          Monitor your bot's health and performance metrics
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Status Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-success">
              {botStats.guilds}
            </div>
            <div className="text-sm text-muted-foreground">Servers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">
              {botStats.users.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">
              {botStats.channels}
            </div>
            <div className="text-sm text-muted-foreground">Channels</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {botStats.latency}ms
            </div>
            <div className="text-sm text-muted-foreground">Latency</div>
          </div>
        </div>

        <Separator />

        {/* System Resources */}
        <div className="space-y-4">
          <h4 className="font-semibold flex items-center gap-2">
            <Server className="h-4 w-4" />
            System Resources
          </h4>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">CPU Usage</span>
              </div>
              <span className="text-sm font-medium">{botStats.cpu}%</span>
            </div>
            <Progress value={botStats.cpu} className="h-2" />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HardDrive className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Memory Usage</span>
              </div>
              <span className="text-sm font-medium">{botStats.memory}%</span>
            </div>
            <Progress value={botStats.memory} className="h-2" />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HardDrive className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Disk Usage</span>
              </div>
              <span className="text-sm font-medium">{botStats.disk}%</span>
            </div>
            <Progress value={botStats.disk} className="h-2" />
          </div>
        </div>

        <Separator />

        {/* Uptime & Recent Events */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Uptime Information</h4>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Restart Bot
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Running for:</span>
              <div className="font-medium">
                {formatDistanceToNow(botStats.uptime)}
              </div>
            </div>
            <div>
              <span className="text-muted-foreground">Last restart:</span>
              <div className="font-medium">
                {formatDistanceToNow(botStats.lastRestart, { addSuffix: true })}
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Recent Events */}
        <div className="space-y-4">
          <h4 className="font-semibold">Recent Events</h4>
          <div className="space-y-2">
            {recentEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-center gap-3 p-3 border rounded-lg"
              >
                <div className="flex-shrink-0">
                  {getEventIcon(event.type)}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{event.message}</div>
                  <div className="text-xs text-muted-foreground">
                    {formatDistanceToNow(event.timestamp, { addSuffix: true })}
                  </div>
                </div>
                <Badge 
                  variant={
                    event.severity === "warning" ? "destructive" :
                    event.severity === "success" ? "default" : "secondary"
                  }
                  className="text-xs"
                >
                  {event.severity}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}