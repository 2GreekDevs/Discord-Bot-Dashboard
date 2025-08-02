import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Server, MessageCircle, TrendingUp, Zap, Shield } from "lucide-react"

const stats = [
  {
    title: "Total Servers",
    value: "1,247",
    description: "+12% from last month",
    icon: Server,
    trend: "up",
    color: "text-primary"
  },
  {
    title: "Active Users",
    value: "23,459",
    description: "+18% from last month",
    icon: Users,
    trend: "up",
    color: "text-success"
  },
  {
    title: "Messages Today",
    value: "5,672",
    description: "+7% from yesterday",
    icon: MessageCircle,
    trend: "up",
    color: "text-warning"
  },
  {
    title: "Commands Used",
    value: "892",
    description: "Last 24 hours",
    icon: Zap,
    trend: "stable",
    color: "text-accent"
  }
]

const botStatus = {
  status: "online",
  uptime: "7d 14h 32m",
  latency: "45ms",
  version: "v2.1.4"
}

export function DashboardStats() {
  return (
    <div className="space-y-6">
      {/* Bot Status */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Bot Status
              </CardTitle>
              <CardDescription>Current operational status</CardDescription>
            </div>
            <Badge variant="outline" className="bg-success/10 text-success border-success/20">
              <div className="w-2 h-2 rounded-full bg-success mr-2"></div>
              Online
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Uptime</p>
              <p className="text-lg font-semibold">{botStatus.uptime}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Latency</p>
              <p className="text-lg font-semibold">{botStatus.latency}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Version</p>
              <p className="text-lg font-semibold">{botStatus.version}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Memory</p>
              <p className="text-lg font-semibold">234 MB</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  {stat.trend === "up" && <TrendingUp className="h-3 w-3 text-success" />}
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}