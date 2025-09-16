import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { UserPlus, Users, FileText, DollarSign, TrendingUp, Calendar, Star, Target, Award } from "lucide-react"

interface AgentDashboardProps {
  level: 1 | 2 | 3
}

export function AgentDashboard({ level }: AgentDashboardProps) {
  const agentData = {
    1: {
      name: "Sunita Singh",
      color: "green",
      icon: Star,
      canRecruit: true,
      nextLevel: "Level 2",
      stats: {
        directUsers: 12,
        activePolicies: 10,
        downlineAgents: 3,
        monthlyCommission: "₹18,500",
      },
      downline: [
        { name: "Vikram Gupta", level: "Level 2", policies: 8, commission: "₹12,000" },
        { name: "Neha Joshi", level: "Level 2", policies: 6, commission: "₹9,500" },
        { name: "Rahul Sharma", level: "Level 2", policies: 4, commission: "₹6,200" },
      ],
    },
    2: {
      name: "Vikram Gupta",
      color: "blue",
      icon: Target,
      canRecruit: true,
      nextLevel: "Level 3",
      stats: {
        directUsers: 8,
        activePolicies: 6,
        downlineAgents: 2,
        monthlyCommission: "₹12,000",
      },
      downline: [
        { name: "Ravi Kumar", level: "Level 3", policies: 5, commission: "₹7,500" },
        { name: "Pooja Patel", level: "Level 3", policies: 3, commission: "₹4,800" },
      ],
    },
    3: {
      name: "Neha Joshi",
      color: "purple",
      icon: Award,
      canRecruit: false,
      nextLevel: null,
      stats: {
        directUsers: 6,
        activePolicies: 5,
        downlineAgents: 0,
        monthlyCommission: "₹9,500",
      },
      downline: [],
    },
  }

  const currentAgent = agentData[level]
  const colorClasses = {
    green: "bg-green-100 text-green-600 border-green-200",
    blue: "bg-blue-100 text-blue-600 border-blue-200",
    purple: "bg-purple-100 text-purple-600 border-purple-200",
  }

  const stats = [
    { title: "Direct Users", value: currentAgent.stats.directUsers.toString(), change: "This month", icon: Users },
    {
      title: "Active Policies",
      value: currentAgent.stats.activePolicies.toString(),
      change: "Conversion rate",
      icon: FileText,
    },
    {
      title: "Downline Agents",
      value: currentAgent.stats.downlineAgents.toString(),
      change: level === 3 ? "Max level" : "Can recruit",
      icon: TrendingUp,
    },
    {
      title: "Monthly Commission",
      value: currentAgent.stats.monthlyCommission,
      change: "Last payout",
      icon: DollarSign,
    },
  ]

  const recentActivities = [
    {
      action: "Commission received",
      amount: currentAgent.stats.monthlyCommission,
      time: "2 days ago",
      type: "commission",
    },
    { action: "New user added", user: "Rajesh Patel", time: "3 days ago", type: "user-add" },
    { action: "Policy activated", user: "Meera Singh", time: "5 days ago", type: "policy-active" },
    {
      action: level < 3 ? "Agent recruited" : "Policy renewed",
      user: level < 3 ? "New Level " + (level + 1) : "Existing customer",
      time: "1 week ago",
      type: level < 3 ? "recruitment" : "renewal",
    },
  ]

  const commissionBreakdown = [
    {
      source: "Direct Policies",
      amount: "₹" + (Number.parseInt(currentAgent.stats.monthlyCommission.replace(/[₹,]/g, "")) * 0.6).toLocaleString(),
      percentage: "60%",
    },
    {
      source: "Level " + (level + 1) + " Downline",
      amount: "₹" + (Number.parseInt(currentAgent.stats.monthlyCommission.replace(/[₹,]/g, "")) * 0.3).toLocaleString(),
      percentage: "30%",
    },
    {
      source: "Level " + (level + 2) + " Downline",
      amount: "₹" + (Number.parseInt(currentAgent.stats.monthlyCommission.replace(/[₹,]/g, "")) * 0.1).toLocaleString(),
      percentage: "10%",
    },
  ].filter((_, index) => level + index + 1 <= 3)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${colorClasses[currentAgent.color]}`}>
            <currentAgent.icon className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Level {level} Agent Dashboard</h1>
            <p className="text-gray-600">Welcome back, {currentAgent.name}</p>
          </div>
        </div>
        <div className="flex space-x-3">
          {currentAgent.canRecruit && (
            <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
              <Users className="h-4 w-4" />
              <span>Recruit Agent</span>
            </Button>
          )}
          <Button className="bg-red-600 hover:bg-red-700 flex items-center space-x-2">
            <UserPlus className="h-4 w-4" />
            <span>Add New User</span>
          </Button>
        </div>
      </div>

      {/* Level Status Card */}
      <Card
        className={`border-2 ${colorClasses[currentAgent.color].replace("text-", "border-").replace("bg-", "bg-opacity-20 bg-")}`}
      >
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <currentAgent.icon className="h-5 w-5" />
              <span>Level {level} Agent Status</span>
            </div>
            <Badge className={colorClasses[currentAgent.color]}>
              {level === 3 ? "Maximum Level" : `Can recruit ${currentAgent.nextLevel}`}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-600">Commission Eligibility</p>
              <p className="text-lg font-bold text-green-600">Active</p>
              <p className="text-xs text-gray-500">
                Earning from {level === 3 ? "direct users only" : `${Math.min(3 - level + 1, 2)} levels`}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Recruitment Status</p>
              <p className="text-lg font-bold text-gray-900">
                {currentAgent.canRecruit ? "Can Recruit" : "Max Level Reached"}
              </p>
              <p className="text-xs text-gray-500">
                {currentAgent.canRecruit ? `Build your ${currentAgent.nextLevel} team` : "Focus on direct sales"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-600 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Commission Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5" />
              <span>Commission Breakdown</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {commissionBreakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.source}</p>
                    <p className="text-xs text-gray-600">{item.percentage} of total</p>
                  </div>
                  <p className="text-sm font-bold text-green-600">{item.amount}</p>
                </div>
              ))}
              <div className="border-t pt-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900">Total Monthly Commission</p>
                  <p className="text-lg font-bold text-green-600">{currentAgent.stats.monthlyCommission}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Downline Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>{currentAgent.downline.length > 0 ? "My Downline" : "Recent Activities"}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {currentAgent.downline.length > 0 ? (
              <div className="space-y-4">
                {currentAgent.downline.map((agent, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{agent.name}</p>
                      <p className="text-xs text-gray-600">
                        {agent.level} • {agent.policies} policies
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-green-600">{agent.commission}</p>
                      <p className="text-xs text-gray-500">Monthly</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-600">{activity.user || activity.amount}</p>
                    </div>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <UserPlus className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Add New User</h3>
              <p className="text-sm text-gray-600">Expand your customer base</p>
            </div>
          </div>
        </Card>

        {currentAgent.canRecruit && (
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Recruit Agent</h3>
                <p className="text-sm text-gray-600">Build your {currentAgent.nextLevel} team</p>
              </div>
            </div>
          </Card>
        )}

        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Calendar className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Track Renewals</h3>
              <p className="text-sm text-gray-600">Monitor customer policies</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
