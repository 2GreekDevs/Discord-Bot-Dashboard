import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Download, Upload, Database, Clock, Shield, Archive, RotateCcw, Plus } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

const backups = [
  {
    id: "1",
    name: "Daily Auto Backup",
    type: "automatic",
    size: "245 MB",
    created: new Date(Date.now() - 1000 * 60 * 60 * 24),
    status: "completed",
    includes: ["messages", "settings", "users", "roles"]
  },
  {
    id: "2",
    name: "Pre-Update Backup",
    type: "manual",
    size: "189 MB",
    created: new Date(Date.now() - 1000 * 60 * 60 * 48),
    status: "completed",
    includes: ["settings", "commands", "economy"]
  },
  {
    id: "3",
    name: "Weekly Full Backup",
    type: "automatic",
    size: "512 MB",
    created: new Date(Date.now() - 1000 * 60 * 60 * 168),
    status: "completed",
    includes: ["messages", "settings", "users", "roles", "economy", "logs"]
  }
]

const integrations = [
  {
    id: "1",
    name: "YouTube Music",
    description: "Play music from YouTube in voice channels",
    icon: "🎵",
    enabled: true,
    category: "music",
    config: { apiKey: "yt_xxxxx", quality: "high" }
  },
  {
    id: "2",
    name: "Twitch Notifications",
    description: "Get notified when streamers go live",
    icon: "📺",
    enabled: true,
    category: "notifications",
    config: { channels: ["channel1", "channel2"] }
  },
  {
    id: "3",
    name: "GitHub Webhooks",
    description: "Track repository updates and commits",
    icon: "📋",
    enabled: false,
    category: "development",
    config: { repos: [], webhook: "" }
  },
  {
    id: "4",
    name: "Weather API",
    description: "Get weather information for any location",
    icon: "🌤️",
    enabled: true,
    category: "utility",
    config: { apiKey: "weather_xxxxx" }
  }
]

const apiKeys = [
  {
    id: "1",
    name: "OpenAI API",
    service: "ChatGPT Integration",
    masked: "sk-...xyz123",
    created: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30),
    lastUsed: new Date(Date.now() - 1000 * 60 * 60 * 2),
    status: "active"
  },
  {
    id: "2",
    name: "YouTube Data API",
    service: "Music Bot",
    masked: "AIza...abc789",
    created: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15),
    lastUsed: new Date(Date.now() - 1000 * 60 * 30),
    status: "active"
  },
  {
    id: "3",
    name: "Spotify Web API",
    service: "Music Integration",
    masked: "BQD...def456",
    created: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    lastUsed: new Date(Date.now() - 1000 * 60 * 60 * 24),
    status: "expired"
  }
]

export function BackupIntegrations() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Backup & Integrations
          </CardTitle>
          <CardDescription>
            Manage backups, third-party integrations, and API configurations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="backups" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="backups">Backups</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="api-keys">API Keys</TabsTrigger>
              <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            </TabsList>

            <TabsContent value="backups" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Create Backup
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Backup
                    </Button>
                    <Button variant="outline" className="w-full">
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Restore Latest
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Storage Usage</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Used Storage</span>
                        <span>946 MB / 2 GB</span>
                      </div>
                      <Progress value={47} className="h-2" />
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Next auto-backup in 18 hours
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Backup Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-backup" className="text-sm">Auto Backup</Label>
                      <Switch id="auto-backup" defaultChecked />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-sm">Frequency</Label>
                      <Select defaultValue="daily">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Backup History</h3>
                {backups.map((backup) => (
                  <div
                    key={backup.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{backup.name}</h4>
                        <Badge variant={backup.type === "automatic" ? "default" : "secondary"}>
                          {backup.type}
                        </Badge>
                        <Badge variant="outline">{backup.size}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Created {formatDistanceToNow(backup.created, { addSuffix: true })}
                      </div>
                      <div className="flex gap-1">
                        {backup.includes.map((item) => (
                          <Badge key={item} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Restore
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Available Integrations</h3>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Integration
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {integrations.map((integration) => (
                  <Card key={integration.id}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{integration.icon}</div>
                          <div>
                            <CardTitle className="text-lg">{integration.name}</CardTitle>
                            <CardDescription className="text-sm">
                              {integration.description}
                            </CardDescription>
                          </div>
                        </div>
                        <Switch checked={integration.enabled} />
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="capitalize">
                          {integration.category}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="api-keys" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">API Keys</h3>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add API Key
                </Button>
              </div>

              <div className="space-y-3">
                {apiKeys.map((apiKey) => (
                  <div
                    key={apiKey.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{apiKey.name}</h4>
                        <Badge 
                          variant={apiKey.status === "active" ? "default" : "destructive"}
                        >
                          {apiKey.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {apiKey.service} • {apiKey.masked}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Created {formatDistanceToNow(apiKey.created, { addSuffix: true })} • 
                        Last used {formatDistanceToNow(apiKey.lastUsed, { addSuffix: true })}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-destructive">
                        Revoke
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="webhooks" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Webhook Configuration</CardTitle>
                  <CardDescription>
                    Set up webhooks to receive notifications from external services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="webhook-name">Webhook Name</Label>
                      <Input id="webhook-name" placeholder="GitHub Repository" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="webhook-url">Webhook URL</Label>
                      <Input 
                        id="webhook-url" 
                        placeholder="https://discord.com/api/webhooks/..." 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="webhook-events">Events</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select events to listen for" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="push">Git Push</SelectItem>
                        <SelectItem value="issues">Issues</SelectItem>
                        <SelectItem value="pull_request">Pull Requests</SelectItem>
                        <SelectItem value="release">Releases</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="webhook-channel">Target Channel</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select channel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">#general</SelectItem>
                        <SelectItem value="dev-updates">#dev-updates</SelectItem>
                        <SelectItem value="announcements">#announcements</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Webhook
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}