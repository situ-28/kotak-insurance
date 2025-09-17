"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PolicyActivationForm } from "@/components/forms/policy-activation-form"
import {
  FileCheck,
  Clock,
  CheckCircle,
  AlertCircle,
  Search,
  Eye,
  Download,
  Phone,
  FileText,
  Building2,
  Shield,
  AlertTriangle,
  BarChart3,
  PieChart,
  RefreshCw,
  Bell,
} from "lucide-react"

export function TeamDashboard() {
  const [showPolicyForm, setShowPolicyForm] = useState(false)
  const [selectedUser, setSelectedUser] = useState<{ id: string; name: string } | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedTab, setSelectedTab] = useState("pending")

  const stats = [
    {
      title: "Pending Verifications",
      value: "23",
      change: "Today",
      icon: Clock,
      trend: "neutral",
      details: "High Priority: 8 | Normal: 15",
    },
    {
      title: "Processed Today",
      value: "47",
      change: "+18%",
      icon: CheckCircle,
      trend: "up",
      details: "Approved: 42 | Rejected: 5",
    },
    {
      title: "Total Processed",
      value: "1,234",
      change: "This month",
      icon: FileCheck,
      trend: "up",
      details: "Success Rate: 94.2%",
    },
    {
      title: "Rejected Applications",
      value: "8",
      change: "This week",
      icon: AlertCircle,
      trend: "down",
      details: "Incomplete Docs: 5 | Failed KYC: 3",
    },
  ]

  const pendingApplications = [
    {
      id: "APP001",
      customer: "Rohit Sharma",
      partner: "Rajesh Mehta",
      policy: "Term Life 50L",
      premium: "₹18,000",
      submitted: "2 hours ago",
      status: "pending",
      priority: "high",
      documents: ["PAN", "Aadhaar", "Income Proof"],
      phone: "+91 98765 43210",
      email: "rohit.sharma@email.com",
      age: 32,
      occupation: "Software Engineer",
      medicalRequired: true,
      kycStatus: "pending",
    },
    {
      id: "APP002",
      customer: "Anita Patel",
      partner: "Priya Sharma",
      policy: "ULIP 25L",
      premium: "₹12,000",
      submitted: "4 hours ago",
      status: "under-review",
      priority: "medium",
      documents: ["PAN", "Aadhaar", "Medical Report"],
      phone: "+91 98765 43211",
      email: "anita.patel@email.com",
      age: 28,
      occupation: "Marketing Manager",
      medicalRequired: false,
      kycStatus: "completed",
    },
    {
      id: "APP003",
      customer: "Suresh Kumar",
      partner: "Amit Kumar",
      policy: "Endowment 30L",
      premium: "₹15,000",
      submitted: "6 hours ago",
      status: "pending",
      priority: "low",
      documents: ["PAN", "Aadhaar", "Bank Statement"],
      phone: "+91 98765 43212",
      email: "suresh.kumar@email.com",
      age: 45,
      occupation: "Business Owner",
      medicalRequired: true,
      kycStatus: "pending",
    },
    {
      id: "APP004",
      customer: "Kavita Singh",
      partner: "Neha Gupta",
      policy: "Term Life 75L",
      premium: "₹22,000",
      submitted: "8 hours ago",
      status: "documents-required",
      priority: "high",
      documents: ["PAN", "Aadhaar"],
      phone: "+91 98765 43213",
      email: "kavita.singh@email.com",
      age: 35,
      occupation: "Doctor",
      medicalRequired: false,
      kycStatus: "incomplete",
    },
  ]

  const recentlyProcessed = [
    {
      id: "APP005",
      customer: "Vikram Gupta",
      policy: "ULIP 40L",
      action: "Approved",
      time: "1 hour ago",
      partner: "Rajesh Mehta",
      premium: "₹20,000",
      policyNumber: "KL2024001234",
      processedBy: "Priya Sharma",
    },
    {
      id: "APP006",
      customer: "Sunita Singh",
      policy: "Term Life 60L",
      action: "Approved",
      time: "3 hours ago",
      partner: "Priya Sharma",
      premium: "₹25,000",
      policyNumber: "KL2024001235",
      processedBy: "Priya Sharma",
    },
    {
      id: "APP007",
      customer: "Amit Patel",
      policy: "Endowment 20L",
      action: "Rejected",
      time: "5 hours ago",
      partner: "Amit Kumar",
      premium: "₹10,000",
      reason: "Incomplete medical documents",
      processedBy: "Priya Sharma",
    },
    {
      id: "APP008",
      customer: "Neha Joshi",
      policy: "ULIP 35L",
      action: "Approved",
      time: "7 hours ago",
      partner: "Neha Gupta",
      premium: "₹18,000",
      policyNumber: "KL2024001236",
      processedBy: "Priya Sharma",
    },
  ]

  const workloadData = [
    { category: "New Applications", count: 23, percentage: 35 },
    { category: "Document Verification", count: 18, percentage: 28 },
    { category: "KYC Processing", count: 15, percentage: 23 },
    { category: "Policy Activation", count: 9, percentage: 14 },
  ]

  const handleActivatePolicy = (userId: string, userName: string) => {
    setSelectedUser({ id: userId, name: userName })
    setShowPolicyForm(true)
  }

  const handlePolicySubmit = (policyData: any) => {
    console.log("[v0] Policy activated:", policyData)
    setShowPolicyForm(false)
    setSelectedUser(null)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50">
            Pending
          </Badge>
        )
      case "under-review":
        return (
          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
            Under Review
          </Badge>
        )
      case "documents-required":
        return (
          <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50">
            Docs Required
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-700 border-red-200">High</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Medium</Badge>
      case "low":
        return <Badge className="bg-green-100 text-green-700 border-green-200">Low</Badge>
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  const getActionBadge = (action: string) => {
    switch (action) {
      case "Approved":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Approved</Badge>
      case "Rejected":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Rejected</Badge>
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
            <Building2 className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Team Dashboard</h1>
            <p className="text-gray-600">Backend Operations & Policy Processing</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
            <Download className="h-4 w-4" />
            <span>Export Report</span>
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 flex items-center space-x-2">
            <RefreshCw className="h-4 w-4" />
            <span>Refresh Queue</span>
          </Button>
        </div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p
                className={`text-xs mt-1 ${stat.trend === "up" ? "text-green-600" : stat.trend === "down" ? "text-red-600" : "text-gray-600"}`}
              >
                {stat.change}
              </p>
              <p className="text-xs text-gray-500 mt-2">{stat.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Workload Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <PieChart className="h-5 w-5" />
            <span>Current Workload Distribution</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workloadData.map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{item.category}</h4>
                  <Badge variant="outline">{item.count}</Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                </div>
                <p className="text-sm text-gray-600">{item.percentage}% of total</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
        <Button
          variant={selectedTab === "pending" ? "default" : "ghost"}
          size="sm"
          onClick={() => setSelectedTab("pending")}
          className={selectedTab === "pending" ? "bg-white shadow-sm" : ""}
        >
          Pending Applications
        </Button>
        <Button
          variant={selectedTab === "processed" ? "default" : "ghost"}
          size="sm"
          onClick={() => setSelectedTab("processed")}
          className={selectedTab === "processed" ? "bg-white shadow-sm" : ""}
        >
          Recently Processed
        </Button>
      </div>

      {/* Enhanced Pending Applications */}
      {selectedTab === "pending" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Pending Applications ({pendingApplications.length})</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search applications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-48"
                  />
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="under-review">Under Review</SelectItem>
                    <SelectItem value="documents-required">Docs Required</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingApplications.map((app, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="font-semibold text-gray-900">{app.customer}</h3>
                        {getStatusBadge(app.status)}
                        {getPriorityBadge(app.priority)}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Policy Details</p>
                          <p className="font-medium">{app.policy}</p>
                          <p className="text-sm text-green-600">{app.premium}/year</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Customer Info</p>
                          <p className="font-medium">
                            {app.age} years, {app.occupation}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Phone className="h-3 w-3 text-gray-400" />
                            <span className="text-sm text-gray-600">{app.phone}</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Partner & Status</p>
                          <p className="font-medium">{app.partner}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Shield className="h-3 w-3 text-gray-400" />
                            <span className="text-sm text-gray-600">KYC: {app.kycStatus}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">Documents: {app.documents.join(", ")}</span>
                        </div>
                        {app.medicalRequired && (
                          <div className="flex items-center space-x-2">
                            <AlertTriangle className="h-4 w-4 text-orange-500" />
                            <span className="text-sm text-orange-600">Medical Required</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2 ml-4">
                      <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                        <Eye className="h-4 w-4" />
                        <span>Review</span>
                      </Button>
                      <Button
                        onClick={() => handleActivatePolicy(app.id, app.customer)}
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 flex items-center space-x-2"
                      >
                        <CheckCircle className="h-4 w-4" />
                        <span>Activate</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center space-x-2 text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                      >
                        <AlertCircle className="h-4 w-4" />
                        <span>Reject</span>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Enhanced Recently Processed */}
      {selectedTab === "processed" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileCheck className="h-5 w-5" />
              <span>Recently Processed ({recentlyProcessed.length})</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentlyProcessed.map((item, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{item.customer}</h3>
                        {getActionBadge(item.action)}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Policy & Premium</p>
                          <p className="font-medium">{item.policy}</p>
                          <p className="text-sm text-green-600">{item.premium}/year</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Partner</p>
                          <p className="font-medium">{item.partner}</p>
                          <p className="text-sm text-gray-500">Processed by: {item.processedBy}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">
                            {item.action === "Approved" ? "Policy Number" : "Rejection Reason"}
                          </p>
                          <p className="font-medium">{item.action === "Approved" ? item.policyNumber : item.reason}</p>
                          <p className="text-sm text-gray-500">{item.time}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Enhanced Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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

        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <BarChart3 className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Analytics</h3>
              <p className="text-sm text-gray-600">View processing metrics</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Policy Activation Form Modal */}
      {showPolicyForm && selectedUser && (
        <PolicyActivationForm
          userId={selectedUser.id}
          userName={selectedUser.name}
          onClose={() => {
            setShowPolicyForm(false)
            setSelectedUser(null)
          }}
          onSubmit={handlePolicySubmit}
        />
      )}
    </div>
  )
}
