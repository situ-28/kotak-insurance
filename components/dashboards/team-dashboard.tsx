import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, FileCheck, Clock, CheckCircle, AlertCircle, Search, Filter, Eye } from "lucide-react"

export function TeamDashboard() {
  const stats = [
    { title: "Pending Verifications", value: "23", change: "Today", icon: Clock },
    { title: "Processed Today", value: "47", change: "+18%", icon: CheckCircle },
    { title: "Total Processed", value: "1,234", change: "This month", icon: FileCheck },
    { title: "Rejected Applications", value: "8", change: "This week", icon: AlertCircle },
  ]

  const pendingApplications = [
    {
      id: "APP001",
      customer: "Rohit Sharma",
      partner: "Rajesh Mehta",
      policy: "Term Life 50L",
      submitted: "2 hours ago",
      status: "pending",
      documents: ["PAN", "Aadhaar", "Income Proof"],
    },
    {
      id: "APP002",
      customer: "Anita Patel",
      partner: "Priya Sharma",
      policy: "ULIP 25L",
      submitted: "4 hours ago",
      status: "under-review",
      documents: ["PAN", "Aadhaar", "Medical Report"],
    },
    {
      id: "APP003",
      customer: "Suresh Kumar",
      partner: "Amit Kumar",
      policy: "Endowment 30L",
      submitted: "6 hours ago",
      status: "pending",
      documents: ["PAN", "Aadhaar", "Bank Statement"],
    },
    {
      id: "APP004",
      customer: "Kavita Singh",
      partner: "Neha Gupta",
      policy: "Term Life 75L",
      submitted: "8 hours ago",
      status: "documents-required",
      documents: ["PAN", "Aadhaar"],
    },
  ]

  const recentlyProcessed = [
    { customer: "Vikram Gupta", policy: "ULIP 40L", action: "Approved", time: "1 hour ago", partner: "Rajesh Mehta" },
    {
      customer: "Sunita Singh",
      policy: "Term Life 60L",
      action: "Approved",
      time: "3 hours ago",
      partner: "Priya Sharma",
    },
    { customer: "Amit Patel", policy: "Endowment 20L", action: "Rejected", time: "5 hours ago", partner: "Amit Kumar" },
    { customer: "Neha Joshi", policy: "ULIP 35L", action: "Approved", time: "7 hours ago", partner: "Neha Gupta" },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="text-orange-600 border-orange-200">
            Pending
          </Badge>
        )
      case "under-review":
        return (
          <Badge variant="outline" className="text-blue-600 border-blue-200">
            Under Review
          </Badge>
        )
      case "documents-required":
        return (
          <Badge variant="outline" className="text-red-600 border-red-200">
            Docs Required
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getActionBadge = (action: string) => {
    switch (action) {
      case "Approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>
      case "Rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
      default:
        return <Badge variant="outline">{action}</Badge>
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Team Dashboard</h1>
            <p className="text-gray-600">Welcome back, Priya Sharma</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
            <Search className="h-4 w-4" />
            <span>Search Applications</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
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
              <p className="text-xs text-gray-600 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pending Applications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Pending Applications</span>
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
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Application ID</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Customer</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Policy</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Partner</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Status</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Submitted</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {pendingApplications.map((app, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 text-sm font-medium text-gray-900">{app.id}</td>
                    <td className="py-3 text-sm text-gray-900">{app.customer}</td>
                    <td className="py-3 text-sm text-gray-600">{app.policy}</td>
                    <td className="py-3 text-sm text-gray-600">{app.partner}</td>
                    <td className="py-3">{getStatusBadge(app.status)}</td>
                    <td className="py-3 text-sm text-gray-500">{app.submitted}</td>
                    <td className="py-3">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Approve
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Recently Processed */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileCheck className="h-5 w-5" />
            <span>Recently Processed</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentlyProcessed.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.customer}</p>
                  <p className="text-xs text-gray-600">
                    {item.policy} • Partner: {item.partner}
                  </p>
                </div>
                <div className="text-right flex items-center space-x-3">
                  {getActionBadge(item.action)}
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileCheck className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Bulk Process</h3>
              <p className="text-sm text-gray-600">Process multiple applications</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Quick Approve</h3>
              <p className="text-sm text-gray-600">Fast-track approvals</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <AlertCircle className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Flag Issues</h3>
              <p className="text-sm text-gray-600">Report problematic cases</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
