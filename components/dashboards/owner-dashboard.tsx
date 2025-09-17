"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserRegistrationForm } from "@/components/forms/user-registration-form"
import ContestCreationForm from "@/components/forms/contest-creation-form"
import ContestLeaderboard from "@/components/contest/contest-leaderboard"
import ContestHistory from "@/components/contest/contest-history"
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
  Search,
  Download,
  BarChart3,
  Building2,
  Award,
  ArrowUpRight,
  ArrowDownRight,
  Mail,
  Phone,
  Trophy,
} from "lucide-react"

interface OwnerDashboardProps {
  onAddUser?: (userData: any) => void
}

export function OwnerDashboard({ onAddUser }: OwnerDashboardProps) {
  const [showUserForm, setShowUserForm] = useState(false)
  const [selectedUserType, setSelectedUserType] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [showContestForm, setShowContestForm] = useState(false)
  const [showContestLeaderboard, setShowContestLeaderboard] = useState(false)
  const [showContestHistory, setShowContestHistory] = useState(false)
  const [activeContest, setActiveContest] = useState(null)

  const stats = [
    {
      title: "Total Network",
      value: "1,247",
      change: "+12%",
      icon: Users,
      trend: "up",
      details: "Direct: 45 | Level 1: 234 | Level 2: 567 | Level 3: 401",
    },
    {
      title: "Active Policies",
      value: "8,934",
      change: "+8%",
      icon: FileText,
      trend: "up",
      details: "New: 156 | Renewed: 234 | Pending: 45",
    },
    {
      title: "Monthly Revenue",
      value: "₹45.2L",
      change: "+15%",
      icon: DollarSign,
      trend: "up",
      details: "Premium: ₹38.5L | Commission: ₹6.7L",
    },
    {
      title: "Renewal Alerts",
      value: "156",
      change: "30 days",
      icon: AlertTriangle,
      trend: "neutral",
      details: "Critical: 23 | Warning: 67 | Upcoming: 66",
    },
  ]

  const recentActivities = [
    {
      action: "New Direct Partner registered",
      user: "Amit Patel",
      time: "2 hours ago",
      type: "partner",
      details: "Mumbai Region - Target: 20 policies/month",
    },
    {
      action: "Policy activated",
      user: "Sunita Singh",
      time: "4 hours ago",
      type: "policy",
      details: "Term Life ₹50L - Premium: ₹15,000/year",
    },
    {
      action: "Level 2 Agent promoted",
      user: "Vikram Gupta",
      time: "6 hours ago",
      type: "promotion",
      details: "Achieved 15 policies milestone - Commission upgraded",
    },
    {
      action: "Bulk renewal notifications sent",
      user: "156 customers",
      time: "1 day ago",
      type: "renewal",
      details: "Email + SMS alerts sent to expiring policies",
    },
    {
      action: "Team member added",
      user: "Priya Sharma",
      time: "2 days ago",
      type: "team",
      details: "Backend Operations - Policy verification specialist",
    },
  ]

  const topPerformers = [
    {
      name: "Rajesh Mehta",
      level: "Level 1",
      policies: 45,
      commission: "₹2.3L",
      region: "Mumbai",
      growth: "+23%",
      team: 12,
      renewalRate: "89%",
    },
    {
      name: "Priya Sharma",
      level: "Level 1",
      policies: 38,
      commission: "₹1.9L",
      region: "Delhi",
      growth: "+18%",
      team: 8,
      renewalRate: "92%",
    },
    {
      name: "Amit Kumar",
      level: "Level 2",
      policies: 32,
      commission: "₹1.6L",
      region: "Bangalore",
      growth: "+15%",
      team: 15,
      renewalRate: "85%",
    },
    {
      name: "Neha Gupta",
      level: "Level 1",
      policies: 29,
      commission: "₹1.4L",
      region: "Pune",
      growth: "+12%",
      team: 6,
      renewalRate: "88%",
    },
  ]

  const upcomingRenewals = [
    {
      customer: "Rohit Sharma",
      policy: "Term Life 50L",
      expires: "15 days",
      partner: "Rajesh Mehta",
      premium: "₹18,000",
      phone: "+91 98765 43210",
      email: "rohit.sharma@email.com",
      status: "critical",
    },
    {
      customer: "Anita Patel",
      policy: "ULIP 25L",
      expires: "18 days",
      partner: "Priya Sharma",
      premium: "₹12,000",
      phone: "+91 98765 43211",
      email: "anita.patel@email.com",
      status: "warning",
    },
    {
      customer: "Suresh Kumar",
      policy: "Endowment 30L",
      expires: "22 days",
      partner: "Amit Kumar",
      premium: "₹15,000",
      phone: "+91 98765 43212",
      email: "suresh.kumar@email.com",
      status: "warning",
    },
    {
      customer: "Kavita Singh",
      policy: "Term Life 75L",
      expires: "25 days",
      partner: "Neha Gupta",
      premium: "₹22,000",
      phone: "+91 98765 43213",
      email: "kavita.singh@email.com",
      status: "upcoming",
    },
  ]

  const networkHierarchy = [
    {
      level: "Direct Partners",
      count: 45,
      active: 42,
      avgPolicies: 8.5,
      totalCommission: "₹12.5L",
    },
    {
      level: "Level 1 Agents",
      count: 234,
      active: 198,
      avgPolicies: 5.2,
      totalCommission: "₹18.7L",
    },
    {
      level: "Level 2 Agents",
      count: 567,
      active: 445,
      avgPolicies: 3.1,
      totalCommission: "₹9.8L",
    },
    {
      level: "Level 3 Agents",
      count: 401,
      active: 312,
      avgPolicies: 1.8,
      totalCommission: "₹4.2L",
    },
  ]

  const demoContest = {
    id: "contest-2024-q4",
    title: "Q4 Sales Championship 2024",
    description: "Achieve the highest combined sales target to win the quarterly prize pool",
    targetAmount: 1000000,
    prizeAmount: 50000,
    startDate: "2024-12-01",
    endDate: "2024-12-31",
    status: "active" as const,
  }

  const demoLevelProgress = [
    {
      level: 1,
      levelName: "Level 1 Partners",
      totalSales: 750000,
      participantCount: 45,
      progress: 75.0,
      participants: [
        { name: "Rajesh Mehta", sales: 180000, contribution: 24.0 },
        { name: "Priya Sharma", sales: 150000, contribution: 20.0 },
        { name: "Amit Kumar", sales: 120000, contribution: 16.0 },
        { name: "Others (42)", sales: 300000, contribution: 40.0 },
      ],
    },
    {
      level: 2,
      levelName: "Level 2 Partners",
      totalSales: 680000,
      participantCount: 78,
      progress: 68.0,
      participants: [
        { name: "Neha Gupta", sales: 95000, contribution: 14.0 },
        { name: "Vikram Singh", sales: 85000, contribution: 12.5 },
        { name: "Sunita Patel", sales: 75000, contribution: 11.0 },
        { name: "Others (75)", sales: 425000, contribution: 62.5 },
      ],
    },
    {
      level: 3,
      levelName: "Level 3 Partners",
      totalSales: 420000,
      participantCount: 156,
      progress: 42.0,
      participants: [
        { name: "Rohit Sharma", sales: 45000, contribution: 10.7 },
        { name: "Kavita Singh", sales: 38000, contribution: 9.0 },
        { name: "Suresh Kumar", sales: 32000, contribution: 7.6 },
        { name: "Others (153)", sales: 305000, contribution: 72.7 },
      ],
    },
  ]

  const demoContestHistory = [
    {
      id: "contest-2024-q3",
      title: "Q3 Growth Challenge 2024",
      targetAmount: 800000,
      prizeAmount: 40000,
      startDate: "2024-09-01",
      endDate: "2024-09-30",
      status: "completed" as const,
      winner: {
        level: 2,
        levelName: "Level 2 Partners",
        participantCount: 67,
        totalSales: 850000,
        prizePerParticipant: 597,
      },
      participants: [
        { level: 2, levelName: "Level 2 Partners", totalSales: 850000, participantCount: 67, progress: 106.25 },
        { level: 1, levelName: "Level 1 Partners", totalSales: 720000, participantCount: 38, progress: 90.0 },
        { level: 3, levelName: "Level 3 Partners", totalSales: 380000, participantCount: 145, progress: 47.5 },
      ],
    },
    {
      id: "contest-2024-q2",
      title: "Summer Sales Sprint 2024",
      targetAmount: 600000,
      prizeAmount: 30000,
      startDate: "2024-06-01",
      endDate: "2024-06-30",
      status: "completed" as const,
      winner: {
        level: 1,
        levelName: "Level 1 Partners",
        participantCount: 42,
        totalSales: 680000,
        prizePerParticipant: 714,
      },
      participants: [
        { level: 1, levelName: "Level 1 Partners", totalSales: 680000, participantCount: 42, progress: 113.33 },
        { level: 2, levelName: "Level 2 Partners", totalSales: 520000, participantCount: 58, progress: 86.67 },
        { level: 3, levelName: "Level 3 Partners", totalSales: 290000, participantCount: 134, progress: 48.33 },
      ],
    },
  ]

  const handleAddUser = (userType: string) => {
    setSelectedUserType(userType)
    setShowUserForm(true)
  }

  const handleUserSubmit = (userData: any) => {
    console.log("[v0] New user created:", userData)
    onAddUser?.(userData)
    setShowUserForm(false)
  }

  const handleCreateContest = (contestData: any) => {
    console.log("[v0] New contest created:", contestData)
    setActiveContest({ ...contestData, id: `contest-${Date.now()}`, status: "active" })
    setShowContestForm(false)
    setShowContestLeaderboard(true)
  }

  const handleViewContestHistory = () => {
    setShowContestLeaderboard(false)
    setShowContestHistory(true)
  }

  const handleBackToContest = () => {
    setShowContestHistory(false)
    setShowContestLeaderboard(true)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-red-100 text-red-700 border-red-200"
      case "warning":
        return "bg-orange-100 text-orange-700 border-orange-200"
      case "upcoming":
        return "bg-blue-100 text-blue-700 border-blue-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="p-2 sm:p-3 lg:p-4 xl:p-6 space-y-3 sm:space-y-4 lg:space-y-6">
      {showContestLeaderboard && (
        <div>
          <ContestLeaderboard
            contest={activeContest || demoContest}
            levelProgress={demoLevelProgress}
            onViewHistory={handleViewContestHistory}
          />
        </div>
      )}

      {showContestHistory && (
        <div>
          <ContestHistory contests={demoContestHistory} onBack={handleBackToContest} />
        </div>
      )}

      {!showContestLeaderboard && !showContestHistory && (
        <>
          <div className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="p-1.5 sm:p-2 bg-red-100 rounded-lg">
                <Crown className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-red-600" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Owner Dashboard</h1>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                  Complete system oversight and management
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 lg:gap-3">
              <Button
                onClick={() => setShowContestLeaderboard(true)}
                variant="outline"
                size="sm"
                className="flex items-center justify-center space-x-1 sm:space-x-2 bg-yellow-50 border-yellow-200 text-yellow-700 hover:bg-yellow-100 text-xs sm:text-sm"
              >
                <Trophy className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Contest</span>
              </Button>
              <Button
                onClick={() => setShowContestForm(true)}
                variant="outline"
                size="sm"
                className="flex items-center justify-center space-x-1 sm:space-x-2 bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100 text-xs sm:text-sm"
              >
                <Trophy className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Create</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center justify-center space-x-1 sm:space-x-2 bg-transparent text-xs sm:text-sm"
              >
                <Bell className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Alerts</span>
                <span className="sm:hidden">Alert</span>
              </Button>
              <Button
                onClick={() => handleAddUser("team")}
                variant="outline"
                size="sm"
                className="flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm"
              >
                <Building2 className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Team</span>
                <span className="sm:hidden">Team</span>
              </Button>
              <Button
                onClick={() => handleAddUser("direct-partner")}
                size="sm"
                className="bg-red-600 hover:bg-red-700 flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm col-span-2 sm:col-span-1"
              >
                <UserPlus className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Add Partner</span>
              </Button>
            </div>
          </div>

          {(activeContest || demoContest) && (
            <Card className="border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-amber-50">
              <CardContent className="p-3 sm:p-4 lg:p-6">
                <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                  <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                    <Trophy className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-yellow-500 flex-shrink-0 mt-1" />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-yellow-800 leading-tight">
                        {(activeContest || demoContest).title}
                      </h3>
                      <p className="text-xs sm:text-sm lg:text-base text-yellow-700 mt-1">
                        Target: ₹{((activeContest || demoContest).targetAmount / 100000).toFixed(1)}L | Prize: ₹
                        {((activeContest || demoContest).prizeAmount / 1000).toFixed(0)}K | Level 1 Leading at 75%
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onClick={() => setShowContestLeaderboard(true)}
                      size="sm"
                      className="bg-yellow-600 hover:bg-yellow-700 text-white text-xs sm:text-sm"
                    >
                      View Leaderboard
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xs sm:text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <stat.icon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                    {stat.trend === "up" && <ArrowUpRight className="h-2 w-2 sm:h-3 sm:w-3 text-green-500" />}
                    {stat.trend === "down" && <ArrowDownRight className="h-2 w-2 sm:h-3 sm:w-3 text-red-500" />}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{stat.value}</div>
                  <p
                    className={`text-xs mt-1 ${stat.trend === "up" ? "text-green-600" : stat.trend === "down" ? "text-red-600" : "text-gray-600"}`}
                  >
                    {stat.change} from last month
                  </p>
                  <p className="text-xs text-gray-500 mt-2 hidden sm:block">{stat.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">Network Hierarchy Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {networkHierarchy.map((level, index) => (
                  <div key={index} className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 text-xs sm:text-sm lg:text-base">{level.level}</h4>
                      <Badge variant="outline" className="text-xs">
                        {level.count}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-xs sm:text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Active:</span>
                        <span className="font-medium">{level.active}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Avg Policies:</span>
                        <span className="font-medium">{level.avgPolicies}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Commission:</span>
                        <span className="font-medium text-green-600">{level.totalCommission}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">Recent Activities</span>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
                    <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    View All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-between sm:space-y-0 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-600 font-medium">{activity.user}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.details}</p>
                      </div>
                      <div className="flex items-center justify-between sm:flex-col sm:text-right sm:items-end">
                        <Badge variant="outline" className="text-xs">
                          {activity.type}
                        </Badge>
                        <p className="text-xs text-gray-500 sm:mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">Top Performers</span>
                  </div>
                  <Select defaultValue="month">
                    <SelectTrigger className="w-full sm:w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="quarter">This Quarter</SelectItem>
                    </SelectContent>
                  </Select>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  {topPerformers.map((performer, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                        <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-full flex-shrink-0">
                          <span className="text-xs sm:text-sm font-bold text-red-600">#{index + 1}</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">{performer.name}</p>
                          <p className="text-xs text-gray-600 truncate">
                            {performer.level} • {performer.region}
                          </p>
                          <p className="text-xs text-gray-600 sm:hidden">Team: {performer.team}</p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-xs sm:text-sm font-bold text-green-600">{performer.commission}</p>
                        <p className="text-xs text-gray-500">{performer.policies} policies</p>
                        <p className="text-xs text-green-600">{performer.growth}</p>
                        <p className="text-xs text-gray-500 hidden sm:block">{performer.renewalRate} renewal</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Upcoming Renewals (Next 30 Days)</span>
                </div>
                <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-3">
                  <div className="flex items-center space-x-2">
                    <Search className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                    <Input
                      placeholder="Search customers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="text-xs sm:text-sm"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-full sm:w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                        <SelectItem value="warning">Warning</SelectItem>
                        <SelectItem value="upcoming">Upcoming</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm" className="bg-transparent text-xs sm:text-sm">
                      <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto -mx-3 sm:mx-0">
                <div className="inline-block min-w-full align-middle">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Customer
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Policy
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Premium
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Expires In
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Partner
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {upcomingRenewals.map((renewal, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-3 py-3 whitespace-nowrap">
                            <div>
                              <p className="text-xs sm:text-sm font-medium text-gray-900">{renewal.customer}</p>
                              <p className="text-xs text-gray-500 truncate max-w-32">{renewal.email}</p>
                            </div>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap text-xs sm:text-sm text-gray-600">
                            {renewal.policy}
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap">
                            <span className="text-xs sm:text-sm font-medium text-gray-900">{renewal.premium}</span>
                            <p className="text-xs text-gray-500">per year</p>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap">
                            <Badge className={`${getStatusColor(renewal.status)} text-xs`}>{renewal.expires}</Badge>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap text-xs sm:text-sm text-gray-600">
                            {renewal.partner}
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap">
                            <div className="flex items-center space-x-1">
                              <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                                <Phone className="h-2 w-2 sm:h-3 sm:w-3" />
                              </Button>
                              <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                                <Mail className="h-2 w-2 sm:h-3 sm:w-3" />
                              </Button>
                            </div>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap">
                            <div className="flex items-center space-x-1">
                              <Button variant="outline" size="sm" className="text-xs bg-transparent px-2 py-1">
                                Notify
                              </Button>
                              <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                                <Eye className="h-2 w-2 sm:h-3 sm:w-3" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {showContestForm && (
        <ContestCreationForm onSubmit={handleCreateContest} onCancel={() => setShowContestForm(false)} />
      )}

      {showUserForm && (
        <UserRegistrationForm
          userRole={selectedUserType}
          onClose={() => setShowUserForm(false)}
          onSubmit={handleUserSubmit}
        />
      )}
    </div>
  )
}
