import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { HelpCircle, MessageSquare, Clock, CheckCircle, X, Plus, Tag, User } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

const tickets = [
  {
    id: "T-001",
    title: "Account Recovery Help",
    description: "I can't access my account and need help recovering it",
    user: {
      name: "HelpSeeker123",
      avatar: "https://cdn.discordapp.com/embed/avatars/1.png"
    },
    status: "open",
    priority: "high",
    category: "account",
    assignee: "SupportBot",
    created: new Date(Date.now() - 1000 * 60 * 30),
    lastUpdate: new Date(Date.now() - 1000 * 60 * 15),
    messages: 3
  },
  {
    id: "T-002",
    title: "Bug Report - Commands Not Working",
    description: "The music commands aren't responding when I use them",
    user: {
      name: "MusicLover",
      avatar: "https://cdn.discordapp.com/embed/avatars/2.png"
    },
    status: "in-progress",
    priority: "medium",
    category: "bug",
    assignee: "TechSupport",
    created: new Date(Date.now() - 1000 * 60 * 60 * 2),
    lastUpdate: new Date(Date.now() - 1000 * 60 * 45),
    messages: 7
  },
  {
    id: "T-003",
    title: "Feature Request - Custom Roles",
    description: "Can we add a feature to create custom roles with specific permissions?",
    user: {
      name: "ServerAdmin",
      avatar: "https://cdn.discordapp.com/embed/avatars/3.png"
    },
    status: "resolved",
    priority: "low",
    category: "feature",
    assignee: "DevTeam",
    created: new Date(Date.now() - 1000 * 60 * 60 * 24),
    lastUpdate: new Date(Date.now() - 1000 * 60 * 60 * 4),
    messages: 12
  }
]

const categories = [
  { id: "account", name: "Account Issues", color: "primary" },
  { id: "bug", name: "Bug Reports", color: "destructive" },
  { id: "feature", name: "Feature Requests", color: "secondary" },
  { id: "general", name: "General Support", color: "outline" },
  { id: "billing", name: "Billing", color: "warning" }
]

const ticketStats = {
  total: 156,
  open: 23,
  inProgress: 8,
  resolved: 125,
  avgResponseTime: "4.2 hours",
  satisfaction: 94
}

export function TicketSystem() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "destructive"
      case "in-progress":
        return "warning"
      case "resolved":
        return "success"
      default:
        return "secondary"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive"
      case "medium":
        return "warning"
      case "low":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <div className="space-y-6">
      {/* Ticket Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tickets</CardTitle>
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{ticketStats.total}</div>
            <p className="text-xs text-muted-foreground">
              all time
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{ticketStats.open}</div>
            <p className="text-xs text-muted-foreground">
              need attention
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{ticketStats.avgResponseTime}</div>
            <p className="text-xs text-muted-foreground">
              response time
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Satisfaction</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{ticketStats.satisfaction}%</div>
            <p className="text-xs text-muted-foreground">
              user satisfaction
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Support Ticket System
          </CardTitle>
          <CardDescription>
            Manage support tickets and help your community members
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="tickets" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="tickets">Active Tickets</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="tickets" className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Ticket
                </Button>
              </div>

              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {tickets.map((ticket) => (
                    <Card key={ticket.id}>
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{ticket.title}</h3>
                              <Badge variant="outline" className="text-xs">
                                {ticket.id}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {ticket.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={getStatusColor(ticket.status) as any}>
                              {ticket.status.replace("-", " ")}
                            </Badge>
                            <Badge variant={getPriorityColor(ticket.priority) as any}>
                              {ticket.priority}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={ticket.user.avatar} />
                                <AvatarFallback>{ticket.user.name.slice(0, 2)}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{ticket.user.name}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Category: {categories.find(c => c.id === ticket.category)?.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Assigned: {ticket.assignee}
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{ticket.messages} messages</span>
                            <span>Updated {formatDistanceToNow(ticket.lastUpdate, { addSuffix: true })}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="categories" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Ticket Categories</h3>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Category
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {categories.map((category) => (
                  <Card key={category.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-primary rounded-full" />
                          <div>
                            <h4 className="font-semibold">{category.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {Math.floor(Math.random() * 20) + 5} active tickets
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Tag className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Ticket Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="tickets-enabled">Enable Ticket System</Label>
                      <Switch id="tickets-enabled" defaultChecked />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="ticket-channel">Ticket Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="support">Support Tickets</SelectItem>
                          <SelectItem value="help">Help Requests</SelectItem>
                          <SelectItem value="reports">Bug Reports</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="support-role">Support Role</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="support">@Support Team</SelectItem>
                          <SelectItem value="moderator">@Moderator</SelectItem>
                          <SelectItem value="admin">@Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-close">Auto-close inactive tickets</Label>
                      <Switch id="auto-close" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Welcome Message</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="welcome-title">Welcome Title</Label>
                      <Input
                        id="welcome-title"
                        defaultValue="Support Ticket Created"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="welcome-message">Welcome Message</Label>
                      <Textarea
                        id="welcome-message"
                        rows={4}
                        defaultValue="Hello {user}! Thank you for creating a support ticket. Our team will be with you shortly. Please describe your issue in detail."
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="close-message">Close Message</Label>
                      <Textarea
                        id="close-message"
                        rows={3}
                        defaultValue="This ticket has been resolved and will be closed. Thank you for contacting support!"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}