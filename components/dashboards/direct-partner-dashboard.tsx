import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  UserPlus,
  Users,
  FileText,
  DollarSign,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Calendar,
} from "lucide-react"

export function DirectPartnerDashboard() {
  const stats = [
    { title: "Users Added", value: "34", change: "This month", icon: UserPlus },
    { title: "Active Policies", value: "28", change: "82% conversion", icon: FileText },
    { title: "Pending Activations", value: "6", change: "Awaiting team", icon: Clock },
    { title: "Commission Earned", value: "₹0", change: "Not Level 1 yet", icon: DollarSign },
  ]

  const addedUsers = [
    {
      name: "Rohit Sharma",
      email: "rohit.sharma@email.com",
      phone: "+91 98765 43210",
      addedDate: "2024-01-15",
      status: "pending-policy",
      policyType: "Term Life 50L",
    },
    {
      name: "Anita Patel",
      email: "anita.patel@email.com",
      phone: "+91 98765 43211",
      addedDate: "2024-01-14",
      status: "policy-active",
      policyType: "ULIP 25L",
    },
    {
      name: "Suresh Kumar",
      email: "suresh.kumar@email.com",
      phone: "+91 98765 43212",
      addedDate: "2024-01-13",
      status: "policy-active",
      policyType: "Endowment 30L",
    },
    {
      name: "Kavita Singh",
      email: "kavita.singh@email.com",
      phone: "+91 98765 43213",
      addedDate: "2024-01-12",
      status: "pending-documents",
      policyType: "Term Life 75L",
    },
  ]

  const recentActivities = [
    { action: "User added to system", user: "Rohit Sharma", time: "2 hours ago", type: "user-add" },
    { action: "Policy activated", user: "Anita Patel", time: "1 day ago", type: "policy-active" },
    { action: "Documents submitted", user: "Suresh Kumar", time: "2 days ago", type: "documents" },
    { action: "User registered", user: "Kavita Singh", time: "3 days ago", type: "registration" },
  ]

  const levelProgress = {
    current: "Direct Partner",
    next: "Level 1 Agent",
    requirement: "Get 1 policy activated",
    progress: 0,
    total: 1,
    description: "You need at least 1 activated policy to become Level 1 and start earning commissions",
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "policy-active":
        return <Badge className="bg-green-100 text-green-800">Policy Active</Badge>
      case "pending-policy":
        return (
          <Badge variant="outline" className="text-orange-600 border-orange-200">
            Pending Policy
          </Badge>
        )
      case "pending-documents":
        return (
          <Badge variant="outline" className="text-red-600 border-red-200">
            Pending Docs
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "user-add":
        return <UserPlus className="h-4 w-4 text-blue-600" />
      case "policy-active":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "documents":
        return <FileText className="h-4 w-4 text-orange-600" />
      case "registration":
        return <Users className="h-4 w-4 text-purple-600" />
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Users className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Direct Partner Dashboard</h1>
            <p className="text-gray-600">Welcome back, Amit Patel</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button className="bg-red-600 hover:bg-red-700 flex items-center space-x-2">
            <UserPlus className="h-4 w-4" />
            <span>Add New User</span>
          </Button>
        </div>
      </div>

      {/* Level Progress Card */}
      <Card className="border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-purple-800">
            <TrendingUp className="h-5 w-5" />
            <span>Level Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-900">Current: {levelProgress.current}</p>
                <p className="text-sm text-purple-700">Next: {levelProgress.next}</p>
              </div>
              <Badge variant="outline" className="text-purple-700 border-purple-300">
                {levelProgress.progress}/{levelProgress.total} completed
              </Badge>
            </div>
            <div className="w-full bg-purple-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(levelProgress.progress / levelProgress.total) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-purple-700">{levelProgress.description}</p>
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
        {/* Added Users */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>My Added Users</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {addedUsers.map((user, index) => (
                <div key={index} className="p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{user.name}</h4>
                    {getStatusBadge(user.status)}
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Policy: {user.policyType}</p>
                    <p>Added: {user.addedDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Recent Activities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="p-1 bg-white rounded">{getActivityIcon(activity.type)}</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-600">{activity.user}</p>
                  </div>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Commission Notice */}
      <Card className="border-orange-200 bg-orange-50">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <div>
              <h3 className="font-medium text-orange-900">Commission Eligibility</h3>
              <p className="text-sm text-orange-700 mt-1">
                You are currently a Direct Partner. To start earning commissions and become a Level 1 Agent, you need at
                least 1 user with an activated policy. Guide your added users through the policy application process on
                the official Kotak Life website.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <UserPlus className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Add New User</h3>
              <p className="text-sm text-gray-600">Register a new customer</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <FileText className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Policy Guide</h3>
              <p className="text-sm text-gray-600">Help users apply for policies</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Track Progress</h3>
              <p className="text-sm text-gray-600">Monitor user applications</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
