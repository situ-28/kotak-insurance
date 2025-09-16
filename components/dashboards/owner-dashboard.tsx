import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  TrendingUp,
  DollarSign,
  AlertTriangle,
  Bell,
  Eye,
  UserPlus,
  FileText,
  Calendar,
  Crown,
} from "lucide-react"

export function OwnerDashboard() {
  const stats = [
    { title: "Total Partners", value: "1,247", change: "+12%", icon: Users },
    { title: "Active Policies", value: "8,934", change: "+8%", icon: FileText },
    { title: "Monthly Revenue", value: "₹45.2L", change: "+15%", icon: DollarSign },
    { title: "Renewal Alerts", value: "156", change: "30 days", icon: AlertTriangle },
  ]

  const recentActivities = [
    { action: "New Direct Partner registered", user: "Amit Patel", time: "2 hours ago", type: "partner" },
    { action: "Policy activated", user: "Sunita Singh", time: "4 hours ago", type: "policy" },
    { action: "Level 2 Agent promoted", user: "Vikram Gupta", time: "6 hours ago", type: "promotion" },
    { action: "Renewal notification sent", user: "156 customers", time: "1 day ago", type: "renewal" },
  ]

  const topPerformers = [
    { name: "Rajesh Mehta", level: "Level 1", policies: 45, commission: "₹2.3L" },
    { name: "Priya Sharma", level: "Level 1", policies: 38, commission: "₹1.9L" },
    { name: "Amit Kumar", level: "Level 2", policies: 32, commission: "₹1.6L" },
    { name: "Neha Gupta", level: "Level 1", policies: 29, commission: "₹1.4L" },
  ]

  const upcomingRenewals = [
    { customer: "Rohit Sharma", policy: "Term Life 50L", expires: "15 days", partner: "Rajesh Mehta" },
    { customer: "Anita Patel", policy: "ULIP 25L", expires: "18 days", partner: "Priya Sharma" },
    { customer: "Suresh Kumar", policy: "Endowment 30L", expires: "22 days", partner: "Amit Kumar" },
    { customer: "Kavita Singh", policy: "Term Life 75L", expires: "25 days", partner: "Neha Gupta" },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-red-100 rounded-lg">
            <Crown className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Owner Dashboard</h1>
            <p className="text-gray-600">Welcome back, Rajesh Kumar</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
            <Bell className="h-4 w-4" />
            <span>Send Renewal Alerts</span>
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 flex items-center space-x-2">
            <UserPlus className="h-4 w-4" />
            <span>Add Direct Partner</span>
          </Button>
        </div>
      </div>

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
              <p className="text-xs text-green-600 mt-1">{stat.change} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Recent Activities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-600">{activity.user}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs">
                      {activity.type}
                    </Badge>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Top Performers</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformers.map((performer, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{performer.name}</p>
                    <p className="text-xs text-gray-600">
                      {performer.level} • {performer.policies} policies
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-green-600">{performer.commission}</p>
                    <p className="text-xs text-gray-500">This month</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Renewals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Upcoming Renewals (Next 30 Days)</span>
            </div>
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
              <Eye className="h-4 w-4" />
              <span>View All</span>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Customer</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Policy</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Expires In</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Partner</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {upcomingRenewals.map((renewal, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 text-sm text-gray-900">{renewal.customer}</td>
                    <td className="py-3 text-sm text-gray-600">{renewal.policy}</td>
                    <td className="py-3">
                      <Badge variant="outline" className="text-orange-600 border-orange-200">
                        {renewal.expires}
                      </Badge>
                    </td>
                    <td className="py-3 text-sm text-gray-600">{renewal.partner}</td>
                    <td className="py-3">
                      <Button variant="outline" size="sm">
                        Notify Partner
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
