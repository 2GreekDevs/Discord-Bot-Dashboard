import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts"
import { TrendingUp, Users, MessageSquare, Activity } from "lucide-react"

const commandUsageData = [
  { name: "kick", uses: 120 },
  { name: "ban", uses: 85 },
  { name: "play", uses: 340 },
  { name: "poll", uses: 60 },
  { name: "help", uses: 450 },
  { name: "warn", uses: 75 }
]

const memberActivityData = [
  { day: "Mon", joins: 12, leaves: 3, messages: 1240 },
  { day: "Tue", joins: 15, leaves: 2, messages: 1580 },
  { day: "Wed", joins: 8, leaves: 5, messages: 980 },
  { day: "Thu", joins: 22, leaves: 1, messages: 1920 },
  { day: "Fri", joins: 18, leaves: 4, messages: 2100 },
  { day: "Sat", joins: 25, leaves: 2, messages: 2340 },
  { day: "Sun", joins: 20, leaves: 6, messages: 1650 }
]

const serverDistributionData = [
  { name: "Gaming Central", value: 45, color: "hsl(var(--primary))" },
  { name: "Dev Community", value: 30, color: "hsl(var(--secondary))" },
  { name: "Art & Design", value: 15, color: "hsl(var(--accent))" },
  { name: "Others", value: 10, color: "hsl(var(--muted))" }
]

export function AnalyticsCharts() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Commands</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,130</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+12%</span> from last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+8%</span> from last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages Processed</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">11,810</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+23%</span> from last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uptime</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.9%</div>
            <p className="text-xs text-muted-foreground">
              Last 30 days
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Analytics Dashboard</CardTitle>
          <CardDescription>
            Detailed insights into your bot's performance and usage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="commands" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="commands">Command Usage</TabsTrigger>
              <TabsTrigger value="activity">Member Activity</TabsTrigger>
              <TabsTrigger value="servers">Server Distribution</TabsTrigger>
            </TabsList>
            
            <TabsContent value="commands" className="space-y-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={commandUsageData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="name" 
                      className="text-muted-foreground"
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      className="text-muted-foreground"
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "6px"
                      }}
                    />
                    <Bar 
                      dataKey="uses" 
                      fill="hsl(var(--primary))" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="activity" className="space-y-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={memberActivityData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="day" 
                      className="text-muted-foreground"
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      className="text-muted-foreground"
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "6px"
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="joins" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      name="Joins"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="leaves" 
                      stroke="hsl(var(--destructive))" 
                      strokeWidth={2}
                      name="Leaves"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="messages" 
                      stroke="hsl(var(--secondary))" 
                      strokeWidth={2}
                      name="Messages"
                      yAxisId="right"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="servers" className="space-y-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={serverDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {serverDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "6px"
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}