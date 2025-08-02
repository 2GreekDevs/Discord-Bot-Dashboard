import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, MessageSquare, Shield, Zap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function BotSettings() {
  const { toast } = useToast()

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Bot configuration has been updated successfully.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          Bot Configuration
        </CardTitle>
        <CardDescription>
          Configure your bot's behavior and settings
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="moderation">Moderation</TabsTrigger>
            <TabsTrigger value="commands">Commands</TabsTrigger>
            <TabsTrigger value="logs">Logging</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="bot-name">Bot Name</Label>
                <Input id="bot-name" defaultValue="My Discord Bot" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bot-status">Bot Status Message</Label>
                <Input id="bot-status" defaultValue="Watching over the server" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="activity-type">Activity Type</Label>
                <Select defaultValue="watching">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="playing">Playing</SelectItem>
                    <SelectItem value="watching">Watching</SelectItem>
                    <SelectItem value="listening">Listening to</SelectItem>
                    <SelectItem value="streaming">Streaming</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-respond to mentions</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically respond when the bot is mentioned
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="moderation" className="space-y-4">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Auto-moderation
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically moderate inappropriate content
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Spam protection</Label>
                  <p className="text-sm text-muted-foreground">
                    Detect and prevent spam messages
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="warn-threshold">Warning threshold</Label>
                <Select defaultValue="3">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 warning</SelectItem>
                    <SelectItem value="3">3 warnings</SelectItem>
                    <SelectItem value="5">5 warnings</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="banned-words">Banned words (one per line)</Label>
                <Textarea 
                  id="banned-words" 
                  placeholder="Enter banned words..." 
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="commands" className="space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="command-prefix">Command Prefix</Label>
                <Input id="command-prefix" defaultValue="!" className="w-20" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Enable music commands
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Allow users to play music in voice channels
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable fun commands</Label>
                  <p className="text-sm text-muted-foreground">
                    Include memes, jokes, and entertainment commands
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable utility commands</Label>
                  <p className="text-sm text-muted-foreground">
                    Weather, calculator, and other utility functions
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="logs" className="space-y-4">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Log message deletions
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Track when messages are deleted
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Log member joins/leaves</Label>
                  <p className="text-sm text-muted-foreground">
                    Track server member activity
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Log role changes</Label>
                  <p className="text-sm text-muted-foreground">
                    Track when user roles are modified
                  </p>
                </div>
                <Switch />
              </div>

              <div className="space-y-2">
                <Label htmlFor="log-channel">Log Channel</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a channel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">#general</SelectItem>
                    <SelectItem value="mod-logs">#mod-logs</SelectItem>
                    <SelectItem value="bot-logs">#bot-logs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

          <div className="flex justify-end pt-4">
            <Button onClick={handleSave}>Save Configuration</Button>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}