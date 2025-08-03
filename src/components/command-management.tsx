import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Command, Settings, Plus, Search, Trash2, Edit } from "lucide-react"
import { useState } from "react"

const commands = [
  {
    id: "1",
    name: "kick",
    description: "Kick a member from the server",
    category: "moderation",
    enabled: true,
    usage: "/kick @user [reason]",
    permissions: ["KICK_MEMBERS"],
    cooldown: 5,
    uses: 1247
  },
  {
    id: "2", 
    name: "ban",
    description: "Ban a member from the server",
    category: "moderation",
    enabled: true,
    usage: "/ban @user [reason]",
    permissions: ["BAN_MEMBERS"],
    cooldown: 10,
    uses: 856
  },
  {
    id: "3",
    name: "play",
    description: "Play music from YouTube or Spotify",
    category: "music",
    enabled: false,
    usage: "/play <song name>",
    permissions: ["CONNECT", "SPEAK"],
    cooldown: 2,
    uses: 3421
  },
  {
    id: "4",
    name: "poll",
    description: "Create a poll with reactions",
    category: "utility",
    enabled: true,
    usage: "/poll <question> [options]",
    permissions: ["SEND_MESSAGES"],
    cooldown: 30,
    uses: 521
  }
]

const categories = ["all", "moderation", "music", "utility", "fun", "admin"]

export function CommandManagement() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCommands = commands.filter(cmd => {
    const matchesCategory = selectedCategory === "all" || cmd.category === selectedCategory
    const matchesSearch = cmd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cmd.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Command className="h-5 w-5" />
          Command Management
        </CardTitle>
        <CardDescription>
          Configure and manage your bot commands
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <TabsList className="grid w-full grid-cols-6 max-w-md">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="capitalize">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search commands..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Command
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            {filteredCommands.map((command) => (
              <div
                key={command.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <Switch checked={command.enabled} />
                  
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">/{command.name}</h3>
                      <Badge variant="outline" className="capitalize">
                        {command.category}
                      </Badge>
                      {!command.enabled && (
                        <Badge variant="secondary">Disabled</Badge>
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {command.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Usage: <code className="bg-muted px-1 py-0.5 rounded">{command.usage}</code></span>
                      <span>Uses: {command.uses.toLocaleString()}</span>
                      <span>Cooldown: {command.cooldown}s</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredCommands.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Command className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No commands found matching your criteria</p>
            </div>
          )}
        </Tabs>
      </CardContent>
    </Card>
  )
}