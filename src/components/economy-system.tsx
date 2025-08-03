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
import { Coins, TrendingUp, Gift, Star, Trophy, Target, Plus, Edit, Trash2 } from "lucide-react"

const economyStats = {
  totalCoins: 2847592,
  activeUsers: 1247,
  dailyTransactions: 342,
  topEarner: { name: "CryptoKing", coins: 50000 }
}

const rewards = [
  {
    id: "1",
    name: "Daily Bonus",
    description: "Daily login reward",
    amount: 100,
    type: "daily",
    enabled: true,
    claimed: 1247
  },
  {
    id: "2",
    name: "Message Reward",
    description: "Coins per message (with cooldown)",
    amount: 5,
    type: "message",
    enabled: true,
    claimed: 15642
  },
  {
    id: "3",
    name: "Voice Activity",
    description: "Coins per minute in voice chat",
    amount: 2,
    type: "voice",
    enabled: true,
    claimed: 3421
  },
  {
    id: "4",
    name: "Weekly Challenge",
    description: "Complete weekly tasks",
    amount: 500,
    type: "challenge",
    enabled: false,
    claimed: 89
  }
]

const shopItems = [
  {
    id: "1",
    name: "VIP Role",
    description: "Get VIP status for 30 days",
    price: 5000,
    type: "role",
    stock: "unlimited",
    purchases: 45
  },
  {
    id: "2",
    name: "Custom Color",
    description: "Custom name color for 7 days",
    price: 1500,
    type: "cosmetic",
    stock: "unlimited",
    purchases: 123
  },
  {
    id: "3",
    name: "Channel Access",
    description: "Access to exclusive channels",
    price: 3000,
    type: "access",
    stock: "unlimited",
    purchases: 67
  }
]

const leaderboard = [
  { rank: 1, name: "CryptoKing", coins: 50000, level: 47 },
  { rank: 2, name: "CoinsCollector", coins: 42000, level: 41 },
  { rank: 3, name: "GrindMaster", coins: 38500, level: 39 },
  { rank: 4, name: "EconomyExpert", coins: 35000, level: 36 },
  { rank: 5, name: "WealthBuilder", coins: 32000, level: 34 }
]

export function EconomySystem() {
  return (
    <div className="space-y-6">
      {/* Economy Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Economy</CardTitle>
            <Coins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{economyStats.totalCoins.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              coins in circulation
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{economyStats.activeUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              users with coins
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Transactions</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{economyStats.dailyTransactions}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+12%</span> from yesterday
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Earner</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{economyStats.topEarner.coins.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {economyStats.topEarner.name}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coins className="h-5 w-5" />
            Economy & Leveling System
          </CardTitle>
          <CardDescription>
            Manage your server's economy, rewards, and leveling system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="rewards" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
              <TabsTrigger value="shop">Shop</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="rewards" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Reward System</h3>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Reward
                </Button>
              </div>

              <div className="space-y-3">
                {rewards.map((reward) => (
                  <div
                    key={reward.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <Switch checked={reward.enabled} />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{reward.name}</h4>
                          <Badge variant="outline" className="capitalize">
                            {reward.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {reward.description}
                        </p>
                        <div className="text-sm">
                          <span className="font-medium text-primary">{reward.amount} coins</span>
                          <span className="text-muted-foreground ml-2">
                            • Claimed {reward.claimed.toLocaleString()} times
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="shop" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Economy Shop</h3>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {shopItems.map((item) => (
                  <Card key={item.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Coins className="h-4 w-4 text-primary" />
                          <span className="font-bold text-lg">{item.price.toLocaleString()}</span>
                        </div>
                        <Badge variant="outline" className="capitalize">
                          {item.type}
                        </Badge>
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        Stock: {item.stock} • {item.purchases} purchases
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="leaderboard" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Top Users</h3>
                <Select defaultValue="coins">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="coins">By Coins</SelectItem>
                    <SelectItem value="level">By Level</SelectItem>
                    <SelectItem value="messages">By Messages</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold">
                        {user.rank}
                      </div>
                      <div>
                        <h4 className="font-semibold">{user.name}</h4>
                        <div className="text-sm text-muted-foreground">
                          Level {user.level}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Coins className="h-4 w-4 text-primary" />
                        <span className="font-bold">{user.coins.toLocaleString()}</span>
                      </div>
                      <Progress 
                        value={(user.level % 10) * 10} 
                        className="w-20 h-2 mt-1"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Economy Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currency-name">Currency Name</Label>
                      <Input id="currency-name" defaultValue="coins" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="currency-symbol">Currency Symbol</Label>
                      <Input id="currency-symbol" defaultValue="🪙" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="starting-balance">Starting Balance</Label>
                      <Input id="starting-balance" type="number" defaultValue="100" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="economy-enabled">Enable Economy System</Label>
                      <Switch id="economy-enabled" defaultChecked />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Leveling Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="xp-per-message">XP per Message</Label>
                      <Input id="xp-per-message" type="number" defaultValue="15" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="level-up-channel">Level Up Channel</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select channel" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">#general</SelectItem>
                          <SelectItem value="level-ups">#level-ups</SelectItem>
                          <SelectItem value="dm">Direct Message</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="level-message">Level Up Message</Label>
                      <Textarea
                        id="level-message"
                        placeholder="🎉 Congratulations {user}! You've reached level {level}!"
                        rows={3}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="leveling-enabled">Enable Leveling System</Label>
                      <Switch id="leveling-enabled" defaultChecked />
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