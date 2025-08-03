import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Users, Shield, UserX, Crown, Search, Plus, Trash2, Edit, Ban, Gavel } from "lucide-react"
import { useState } from "react"

const users = [
  {
    id: "1",
    username: "TechNinja47",
    discriminator: "1234",
    avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
    status: "online",
    roles: ["Admin", "Developer"],
    joinDate: "2023-01-15",
    messageCount: 1547,
    warnings: 0,
    muted: false,
    banned: false
  },
  {
    id: "2",
    username: "GameMaster",
    discriminator: "5678",
    avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
    status: "idle",
    roles: ["Moderator", "Helper"],
    joinDate: "2023-02-20",
    messageCount: 892,
    warnings: 1,
    muted: false,
    banned: false
  },
  {
    id: "3",
    username: "TrollUser99",
    discriminator: "9999",
    avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
    status: "offline",
    roles: ["Member"],
    joinDate: "2023-12-01",
    messageCount: 45,
    warnings: 3,
    muted: true,
    banned: false
  }
]

const moderationActions = [
  { id: "warn", name: "Warn User", icon: Shield, color: "warning" },
  { id: "mute", name: "Mute User", icon: UserX, color: "secondary" },
  { id: "kick", name: "Kick User", icon: Gavel, color: "destructive" },
  { id: "ban", name: "Ban User", icon: Ban, color: "destructive" }
]

export function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.username.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === "all" || 
                         (selectedFilter === "warned" && user.warnings > 0) ||
                         (selectedFilter === "muted" && user.muted) ||
                         (selectedFilter === "banned" && user.banned)
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-success"
      case "idle": return "bg-warning"
      case "dnd": return "bg-destructive"
      default: return "bg-muted"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            User Management
          </CardTitle>
          <CardDescription>
            Manage users, roles, and moderation across your servers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="users" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="users">User List</TabsTrigger>
              <TabsTrigger value="moderation">Moderation</TabsTrigger>
              <TabsTrigger value="roles">Role Management</TabsTrigger>
            </TabsList>

            <TabsContent value="users" className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Users</SelectItem>
                    <SelectItem value="warned">Warned Users</SelectItem>
                    <SelectItem value="muted">Muted Users</SelectItem>
                    <SelectItem value="banned">Banned Users</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <ScrollArea className="h-96">
                <div className="space-y-3">
                  {filteredUsers.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={user.avatar} alt={user.username} />
                            <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${getStatusColor(user.status)}`} />
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{user.username}</h3>
                            <span className="text-sm text-muted-foreground">#{user.discriminator}</span>
                            {user.roles.includes("Admin") && (
                              <Crown className="h-4 w-4 text-warning" />
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2 flex-wrap">
                            {user.roles.map((role) => (
                              <Badge key={role} variant="outline" className="text-xs">
                                {role}
                              </Badge>
                            ))}
                            {user.warnings > 0 && (
                              <Badge variant="destructive" className="text-xs">
                                {user.warnings} warnings
                              </Badge>
                            )}
                            {user.muted && (
                              <Badge variant="secondary" className="text-xs">
                                Muted
                              </Badge>
                            )}
                          </div>
                          
                          <div className="text-xs text-muted-foreground">
                            Joined: {user.joinDate} • Messages: {user.messageCount.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {moderationActions.map((action) => (
                          <Button
                            key={action.id}
                            variant="outline"
                            size="sm"
                            className="p-2"
                          >
                            <action.icon className="h-4 w-4" />
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="moderation" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Auto-Moderation Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-spam">Anti-Spam Protection</Label>
                      <Switch id="auto-spam" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-links">Filter Suspicious Links</Label>
                      <Switch id="auto-links" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-caps">Excessive Caps Filter</Label>
                      <Switch id="auto-caps" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-profanity">Profanity Filter</Label>
                      <Switch id="auto-profanity" defaultChecked />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Moderation Logs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select log channel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mod-logs">#mod-logs</SelectItem>
                        <SelectItem value="admin-logs">#admin-logs</SelectItem>
                        <SelectItem value="audit-logs">#audit-logs</SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="roles" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Server Roles</h3>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Role
                </Button>
              </div>
              
              <div className="space-y-2">
                {["Admin", "Moderator", "Helper", "VIP", "Member"].map((role) => (
                  <div
                    key={role}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-primary rounded-full" />
                      <span className="font-medium">{role}</span>
                      <Badge variant="outline">
                        {role === "Member" ? "2,847" : Math.floor(Math.random() * 50) + 1} members
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      {role !== "Member" && (
                        <Button variant="outline" size="sm" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}