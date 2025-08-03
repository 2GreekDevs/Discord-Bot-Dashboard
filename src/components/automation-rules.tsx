import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Heart, Gift, Smile, MessageCircle, Calendar, Bell, Music, Upload } from "lucide-react"
import { useState } from "react"

const welcomeTemplates = [
  {
    id: "1",
    name: "Friendly Welcome",
    message: "👋 Welcome to **{server}**, {user}! We're excited to have you here. Make sure to read our rules in #rules and introduce yourself in #introductions!",
    embed: true
  },
  {
    id: "2", 
    name: "Gaming Server",
    message: "🎮 {user} just joined the game! Welcome to {server}. Check out #game-announcements for the latest updates and find your squad in #looking-for-group!",
    embed: true
  },
  {
    id: "3",
    name: "Professional",
    message: "Welcome {user} to {server}. Please review our community guidelines and feel free to introduce yourself to the team.",
    embed: false
  }
]

const eventTypes = [
  { id: "giveaway", name: "Giveaway", icon: Gift, color: "primary" },
  { id: "announcement", name: "Announcement", icon: Bell, color: "secondary" },
  { id: "event", name: "Community Event", icon: Calendar, color: "accent" },
  { id: "music", name: "Music Session", icon: Music, color: "warning" }
]

export function AutomationRules() {
  const [selectedTemplate, setSelectedTemplate] = useState("1")
  const [welcomeEnabled, setWelcomeEnabled] = useState(true)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Automation & Events
          </CardTitle>
          <CardDescription>
            Configure automated messages, events, and community features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="welcome" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="welcome">Welcome Messages</TabsTrigger>
              <TabsTrigger value="events">Scheduled Events</TabsTrigger>
              <TabsTrigger value="reactions">Auto Reactions</TabsTrigger>
              <TabsTrigger value="triggers">Custom Triggers</TabsTrigger>
            </TabsList>

            <TabsContent value="welcome" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Welcome Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="welcome-enabled">Enable Welcome Messages</Label>
                      <Switch 
                        id="welcome-enabled" 
                        checked={welcomeEnabled}
                        onCheckedChange={setWelcomeEnabled}
                      />
                    </div>
                    
                    {welcomeEnabled && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="welcome-channel">Welcome Channel</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select channel" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">#general</SelectItem>
                              <SelectItem value="welcome">#welcome</SelectItem>
                              <SelectItem value="introductions">#introductions</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="welcome-template">Message Template</Label>
                          <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {welcomeTemplates.map((template) => (
                                <SelectItem key={template.id} value={template.id}>
                                  {template.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="auto-role">Auto-assign Role</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select role (optional)" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="member">@Member</SelectItem>
                              <SelectItem value="newcomer">@Newcomer</SelectItem>
                              <SelectItem value="guest">@Guest</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Message Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {welcomeEnabled && (
                      <div className="p-3 border rounded-lg bg-muted/50">
                        <div className="text-sm">
                          {welcomeTemplates.find(t => t.id === selectedTemplate)?.message
                            .replace("{user}", "@NewUser123")
                            .replace("{server}", "Gaming Central")}
                        </div>
                      </div>
                    )}
                    {!welcomeEnabled && (
                      <div className="text-sm text-muted-foreground text-center py-4">
                        Welcome messages are disabled
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Leave Messages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="leave-enabled">Enable Leave Messages</Label>
                    <Switch id="leave-enabled" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="leave-message">Leave Message</Label>
                    <Textarea
                      id="leave-message"
                      placeholder="👋 {user} has left {server}. We'll miss you!"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="events" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Scheduled Events</h3>
                <Button>
                  <Calendar className="h-4 w-4 mr-2" />
                  Create Event
                </Button>
              </div>

              <div className="grid gap-4">
                {eventTypes.map((eventType) => (
                  <Card key={eventType.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <eventType.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{eventType.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {eventType.id === "giveaway" && "Automated prize giveaways"}
                              {eventType.id === "announcement" && "Scheduled announcements"}
                              {eventType.id === "event" && "Community events and meetups"}
                              {eventType.id === "music" && "Music listening parties"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">
                            {Math.floor(Math.random() * 5) + 1} active
                          </Badge>
                          <Button variant="outline" size="sm">
                            Configure
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reactions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Auto Reactions</CardTitle>
                  <CardDescription>
                    Automatically add reactions to messages in specific channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="reaction-channel">Channel</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select channel" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="suggestions">#suggestions</SelectItem>
                          <SelectItem value="announcements">#announcements</SelectItem>
                          <SelectItem value="memes">#memes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="reaction-emojis">Reactions</Label>
                      <Input
                        id="reaction-emojis"
                        placeholder="👍 👎 ❤️ 😂"
                        defaultValue="👍 👎"
                      />
                    </div>
                  </div>
                  
                  <Button>
                    <Smile className="h-4 w-4 mr-2" />
                    Add Auto Reaction
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="triggers" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Custom Triggers</CardTitle>
                  <CardDescription>
                    Create custom automated responses to keywords or phrases
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="trigger-keyword">Trigger Keyword</Label>
                      <Input
                        id="trigger-keyword"
                        placeholder="hello"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="trigger-response">Response</Label>
                      <Input
                        id="trigger-response"
                        placeholder="Hello there! 👋"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="exact-match" />
                      <Label htmlFor="exact-match" className="text-sm">Exact match only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="case-sensitive" />
                      <Label htmlFor="case-sensitive" className="text-sm">Case sensitive</Label>
                    </div>
                  </div>
                  
                  <Button>
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Add Trigger
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