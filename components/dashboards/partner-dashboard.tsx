"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { UserRegistrationForm } from "@/components/forms/user-registration-form"
import {
  Users,
  TrendingUp,
  DollarSign,
  Target,
  UserPlus,
  Award,
  Eye,
  Phone,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  Crown,
  Shield,
  Zap,
  Trophy,
  CheckCircle,
  Plus,
  Search,
  Medal,
} from "lucide-react"

interface PartnerDashboardProps {
  partnerLevel: number
  partnerName: string
  onAddUser?: (userData: any) => void
}

export function PartnerDashboard({ partnerLevel, partnerName, onAddUser }: PartnerDashboardProps) {
  const [showUserForm, setShowUserForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [showContestDetails, setShowContestDetails] = useState(false)

  // Dynamic level progression criteria based on requirements
  const levelCriteria = {
    0: {
      // Direct Partner (not yet Level 1)
      name: "Direct Partner",
      icon: Users,
      color: "gray",
      nextLevel: "Level 1",
      requirements: "Get your first policy activated to become Level 1",
      commissionEligible: false,
      canRecruit: false,
      benefits: ["Add users to system", "Guide policy applications"],
    },
    1: {
      // Level 1 (Activated Direct Partner)
      name: "Level 1 Agent",
      icon: Shield,
      color: "blue",
      nextLevel: "Level 2",
      requirements: "Recruit agents who get 5+ policies activated",
      commissionEligible: true,
      canRecruit: true,
      benefits: ["Earn commissions", "Recruit Level 2 agents", "Team management"],
    },
    2: {
      // Level 2 Agent
      name: "Level 2 Agent",
      icon: Zap,
      color: "purple",
      nextLevel: "Level 3",
      requirements: "Recruit agents who get 3+ policies activated",
      commissionEligible: true,
      canRecruit: true,
      benefits: ["Higher commission rates", "Recruit Level 3 agents", "Advanced tools"],
    },
    3: {
      // Level 3 Agent (Maximum)
      name: "Level 3 Agent",
      icon: Crown,
      color: "gold",
      nextLevel: "Maximum Level",
      requirements: "Maximum level achieved!",
      commissionEligible: true,
      canRecruit: false,
      benefits: ["Premium commission rates", "Direct customer focus", "Elite status"],
    },
  }

  const currentLevel = levelCriteria[partnerLevel as keyof typeof levelCriteria]

  // Dynamic stats based on level
  const getStatsForLevel = () => {
    const baseStats = [
      {
        title: "My Customers",
        value: partnerLevel === 0 ? "8" : "23",
        change: partnerLevel === 0 ? "Pending activation" : "+15%",
        icon: Users,
        trend: partnerLevel === 0 ? "neutral" : "up",
      },
      {
        title: "Active Policies",
        value: partnerLevel === 0 ? "0" : "18",
        change: partnerLevel === 0 ? "None yet" : "+12%",
        icon: CheckCircle,
        trend: partnerLevel === 0 ? "neutral" : "up",
      },
      {
        title: "Monthly Commission",
        value: partnerLevel === 0 ? "₹0" : "₹45,000",
        change: partnerLevel === 0 ? "Not eligible" : "+18%",
        icon: DollarSign,
        trend: partnerLevel === 0 ? "neutral" : "up",
      },
      {
        title: "Team Size",
        value: partnerLevel <= 1 ? "0" : partnerLevel === 2 ? "5" : "12",
        change: partnerLevel <= 1 ? "Can't recruit yet" : "+2 this month",
        icon: Target,
        trend: partnerLevel <= 1 ? "neutral" : "up",
      },
    ]

    if (partnerLevel >= 1) {
      baseStats.push({
        title: "Renewal Rate",
        value: "89%",
        change: "+3% this month",
        icon: TrendingUp,
        trend: "up",
      })
    }

    return baseStats
  }

  // Dynamic team data based on level
  const getTeamData = () => {
    if (partnerLevel <= 1) return []

    const teamMembers = [
      {
        name: "Amit Sharma",
        level: partnerLevel === 2 ? "Level 3" : "Level 2",
        policies: 12,
        commission: "₹18,000",
        joinDate: "2 months ago",
        status: "active",
        phone: "+91 98765 43210",
        region: "Mumbai Central",
      },
      {
        name: "Priya Patel",
        level: partnerLevel === 2 ? "Level 3" : "Level 2",
        policies: 8,
        commission: "₹12,000",
        joinDate: "1 month ago",
        status: "active",
        phone: "+91 98765 43211",
        region: "Mumbai West",
      },
    ]

    if (partnerLevel === 3) {
      teamMembers.push(
        {
          name: "Rajesh Kumar",
          level: "Level 3",
          policies: 15,
          commission: "₹22,000",
          joinDate: "3 months ago",
          status: "active",
          phone: "+91 98765 43212",
          region: "Mumbai East",
        },
        {
          name: "Sunita Singh",
          level: "Level 3",
          policies: 6,
          commission: "₹9,000",
          joinDate: "3 weeks ago",
          status: "new",
          phone: "+91 98765 43213",
          region: "Mumbai South",
        },
      )
    }

    return teamMembers
  }

  // Dynamic customer data
  const getCustomerData = () => {
    const customers = [
      {
        name: "Rohit Sharma",
        policy: "Term Life 50L",
        premium: "₹18,000",
        status: partnerLevel === 0 ? "pending" : "active",
        joinDate: "2 weeks ago",
        phone: "+91 98765 43220",
        renewalDate: "2025-03-15",
      },
      {
        name: "Anita Patel",
        policy: "ULIP 25L",
        premium: "₹12,000",
        status: partnerLevel === 0 ? "pending" : "active",
        joinDate: "1 month ago",
        phone: "+91 98765 43221",
        renewalDate: "2025-02-20",
      },
      {
        name: "Suresh Kumar",
        policy: "Endowment 30L",
        premium: "₹15,000",
        status: partnerLevel === 0 ? "pending" : "active",
        joinDate: "3 weeks ago",
        phone: "+91 98765 43222",
        renewalDate: "2025-04-10",
      },
    ]

    if (partnerLevel >= 1) {
      customers.push(
        {
          name: "Kavita Singh",
          policy: "Term Life 75L",
          premium: "₹22,000",
          status: "active",
          joinDate: "1 week ago",
          phone: "+91 98765 43223",
          renewalDate: "2025-05-05",
        },
        {
          name: "Vikram Gupta",
          policy: "ULIP 40L",
          premium: "₹20,000",
          status: "active",
          joinDate: "2 months ago",
          phone: "+91 98765 43224",
          renewalDate: "2025-01-30",
        },
      )
    }

    return customers
  }

  const stats = getStatsForLevel()
  const teamMembers = getTeamData()
  const customers = getCustomerData()

  // Level progression calculation
  const getProgressToNextLevel = () => {
    switch (partnerLevel) {
      case 0:
        return {
          current: 0,
          target: 1,
          progress: 0,
          description: "Get your first policy activated",
        }
      case 1:
        return {
          current: 2,
          target: 5,
          progress: 40,
          description: "Recruit agents with activated policies (2/5)",
        }
      case 2:
        return {
          current: 1,
          target: 3,
          progress: 33,
          description: "Recruit more active agents (1/3)",
        }
      case 3:
        return {
          current: 3,
          target: 3,
          progress: 100,
          description: "Maximum level achieved!",
        }
      default:
        return { current: 0, target: 1, progress: 0, description: "" }
    }
  }

  const progressData = getProgressToNextLevel()

  const handleAddUser = () => {
    setShowUserForm(true)
  }

  const handleUserSubmit = (userData: any) => {
    console.log("[v0] New user added by partner:", userData)
    onAddUser?.(userData)
    setShowUserForm(false)
  }

  const getLevelIcon = (level: number) => {
    const LevelIcon = levelCriteria[level as keyof typeof levelCriteria]?.icon || Users
    return <LevelIcon className="h-5 w-5" />
  }

  const getLevelColor = (level: number) => {
    const color = levelCriteria[level as keyof typeof levelCriteria]?.color || "gray"
    const colorMap = {
      gray: "bg-gray-100 text-gray-700 border-gray-200",
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      gold: "bg-yellow-100 text-yellow-700 border-yellow-200",
    }
    return colorMap[color as keyof typeof colorMap]
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-700 border-green-200">Active</Badge>
      case "pending":
        return <Badge className="bg-orange-100 text-orange-700 border-orange-200">Pending</Badge>
      case "new":
        return <Badge className="bg-blue-100 text-blue-700 border-blue-200">New</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  // Contest data for partner participation
  const activeContest = {
    id: "contest-2024-q4",
    title: "Q4 Sales Championship 2024",
    description: "Achieve the highest combined sales target to win the quarterly prize pool",
    targetAmount: 1000000,
    prizeAmount: 50000,
    startDate: "2024-12-01",
    endDate: "2024-12-31",
    status: "active" as const,
    daysRemaining: 18,
  }

  const contestProgress = {
    myLevel: partnerLevel,
    myLevelName: partnerLevel === 1 ? "Level 1 Partners" : partnerLevel === 2 ? "Level 2 Partners" : "Level 3 Partners",
    myLevelSales: partnerLevel === 1 ? 750000 : partnerLevel === 2 ? 680000 : 420000,
    myLevelProgress: partnerLevel === 1 ? 75.0 : partnerLevel === 2 ? 68.0 : 42.0,
    myLevelRank: partnerLevel === 1 ? 1 : partnerLevel === 2 ? 2 : 3,
    myContribution: partnerLevel === 1 ? 180000 : partnerLevel === 2 ? 95000 : 45000,
    myContributionPercent: partnerLevel === 1 ? 24.0 : partnerLevel === 2 ? 14.0 : 10.7,
    potentialPrize: Math.floor(activeContest.prizeAmount / (partnerLevel === 1 ? 45 : partnerLevel === 2 ? 78 : 156)),
  }

  const allLevelsProgress = [
    { level: 1, name: "Level 1 Partners", sales: 750000, progress: 75.0, participants: 45, rank: 1 },
    { level: 2, name: "Level 2 Partners", sales: 680000, progress: 68.0, participants: 78, rank: 2 },
    { level: 3, name: "Level 3 Partners", sales: 420000, progress: 42.0, participants: 156, rank: 3 },
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />
      default:
        return (
          <div className="h-5 w-5 flex items-center justify-center bg-gray-200 rounded-full text-xs font-bold">
            {rank}
          </div>
        )
    }
  }

  return (
    <div className="p-2 sm:p-3 lg:p-4 xl:p-6 space-y-3 sm:space-y-4 lg:space-y-6">
      <div className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div
            className={`p-1.5 sm:p-2 rounded-lg ${currentLevel.color === "gray" ? "bg-gray-100" : currentLevel.color === "blue" ? "bg-blue-100" : currentLevel.color === "purple" ? "bg-purple-100" : "bg-yellow-100"}`}
          >
            {getLevelIcon(partnerLevel)}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{currentLevel.name}</h1>
              <Badge className={`${getLevelColor(partnerLevel)} text-xs sm:text-sm w-fit`}>{currentLevel.name}</Badge>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600">Welcome back, {partnerName}</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          {currentLevel.canRecruit && (
            <Button
              onClick={handleAddUser}
              className="bg-red-600 hover:bg-red-700 flex items-center justify-center space-x-2 text-xs sm:text-sm"
            >
              <UserPlus className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Add New Agent</span>
            </Button>
          )}
          <Button
            onClick={handleAddUser}
            variant="outline"
            className="flex items-center justify-center space-x-2 bg-transparent text-xs sm:text-sm"
          >
            <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Add Customer</span>
          </Button>
        </div>
      </div>

      {partnerLevel >= 1 && (
        <Card className="border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-amber-50">
          <CardHeader>
            <CardTitle className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
              <div className="flex items-start gap-2 sm:gap-3">
                <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-yellow-800 leading-tight">
                    {activeContest.title}
                  </h3>
                  <p className="text-yellow-700 text-xs sm:text-sm mt-1">
                    Target: {formatCurrency(activeContest.targetAmount)} | Prize Pool:{" "}
                    {formatCurrency(activeContest.prizeAmount)}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <Badge className="bg-yellow-600 text-white text-xs sm:text-sm text-center">
                  {activeContest.daysRemaining} days left
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowContestDetails(!showContestDetails)}
                  className="bg-white border-yellow-300 text-yellow-700 hover:bg-yellow-50 text-xs sm:text-sm"
                >
                  {showContestDetails ? "Hide Details" : "View Details"}
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                {getRankIcon(contestProgress.myLevelRank)}
                <div>
                  <p className="font-bold text-yellow-800 text-sm sm:text-base">
                    #{contestProgress.myLevelRank} Position
                  </p>
                  <p className="text-xs sm:text-sm text-yellow-700">{contestProgress.myLevelName}</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-yellow-800 text-sm sm:text-base">
                  {formatCurrency(contestProgress.myLevelSales)}
                </p>
                <p className="text-xs sm:text-sm text-yellow-700">Team Total Sales</p>
              </div>
              <div>
                <p className="font-bold text-yellow-800 text-sm sm:text-base">
                  {formatCurrency(contestProgress.potentialPrize)}
                </p>
                <p className="text-xs sm:text-sm text-yellow-700">Potential Prize (if we win)</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs sm:text-sm font-medium text-yellow-800">Progress to Target</span>
                <span className="text-xs sm:text-sm font-bold text-yellow-800">
                  {contestProgress.myLevelProgress.toFixed(1)}%
                </span>
              </div>
              <Progress value={contestProgress.myLevelProgress} className="h-2 sm:h-3" />
            </div>

            <div className="bg-white/50 rounded-lg p-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-yellow-800">My Contribution</p>
                  <p className="text-base sm:text-lg font-bold text-yellow-900">
                    {formatCurrency(contestProgress.myContribution)}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-xs sm:text-sm text-yellow-700">
                    {contestProgress.myContributionPercent}% of team total
                  </p>
                  <p className="text-xs text-yellow-600">Keep selling to help your level win!</p>
                </div>
              </div>
            </div>

            {showContestDetails && (
              <div className="mt-4 pt-4 border-t border-yellow-200">
                <h4 className="font-medium text-yellow-800 mb-3">All Levels Leaderboard</h4>
                <div className="space-y-3">
                  {allLevelsProgress.map((level) => (
                    <div
                      key={level.level}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        level.level === partnerLevel ? "bg-yellow-200/50 border border-yellow-300" : "bg-white/30"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {getRankIcon(level.rank)}
                        <div>
                          <p className="font-medium text-yellow-800">{level.name}</p>
                          <p className="text-sm text-yellow-700">{level.participants} participants</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-yellow-800">{formatCurrency(level.sales)}</p>
                        <p className="text-sm text-yellow-700">{level.progress.toFixed(1)}% of target</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 className="font-medium text-blue-800 mb-2">Contest Rules:</h5>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• First level to reach {formatCurrency(activeContest.targetAmount)} wins</li>
                    <li>• Prize money divided equally among all participants in winning level</li>
                    <li>• Contest ends on {new Date(activeContest.endDate).toLocaleDateString("en-IN")}</li>
                    <li>• Only activated policies count towards the target</li>
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <Card className="border-2 border-dashed border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
            <span className="text-sm sm:text-base">Level Progression</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div className="flex-1">
                <p className="font-medium text-gray-900 text-sm sm:text-base">
                  {partnerLevel === 3 ? "Maximum Level Achieved!" : `Progress to ${currentLevel.nextLevel}`}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">{progressData.description}</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-xl sm:text-2xl font-bold text-red-600">
                  {progressData.current}/{progressData.target}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {partnerLevel === 3 ? "Elite Status" : "Requirements"}
                </p>
              </div>
            </div>

            {partnerLevel < 3 && (
              <div className="space-y-2">
                <Progress value={progressData.progress} className="h-2 sm:h-3" />
                <p className="text-xs sm:text-sm text-gray-600">{progressData.progress}% Complete</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-900">Commission Status</p>
                <p
                  className={`text-xs sm:text-sm ${currentLevel.commissionEligible ? "text-green-600" : "text-red-600"}`}
                >
                  {currentLevel.commissionEligible ? "✓ Eligible" : "✗ Not Eligible"}
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-900">Recruitment</p>
                <p className={`text-xs sm:text-sm ${currentLevel.canRecruit ? "text-green-600" : "text-red-600"}`}>
                  {currentLevel.canRecruit ? "✓ Can Recruit" : "✗ Cannot Recruit"}
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-900">Contest Participation</p>
                <p className={`text-xs sm:text-sm ${partnerLevel >= 1 ? "text-green-600" : "text-red-600"}`}>
                  {partnerLevel >= 1 ? "✓ Can Participate" : "✗ Level 1+ Required"}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
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
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* My Customers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">My Customers ({customers.length})</span>
              </div>
              <div className="flex items-center space-x-2">
                <Search className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                <Input
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="text-xs sm:text-sm"
                />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {customers.map((customer, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors space-y-2 sm:space-y-0"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-1">
                      <p className="text-xs sm:text-sm font-medium text-gray-900">{customer.name}</p>
                      {getStatusBadge(customer.status)}
                    </div>
                    <p className="text-xs text-gray-600">{customer.policy}</p>
                    <p className="text-xs text-green-600 font-medium">{customer.premium}/year</p>
                  </div>
                  <div className="flex items-center justify-between sm:flex-col sm:text-right sm:items-end">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">{customer.joinDate}</p>
                      {customer.status === "active" && (
                        <p className="text-xs text-orange-600">Renews: {customer.renewalDate}</p>
                      )}
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                        <Phone className="h-2 w-2 sm:h-3 sm:w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                        <Eye className="h-2 w-2 sm:h-3 sm:w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* My Team or Level Benefits */}
        {currentLevel.canRecruit && teamMembers.length > 0 ? (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">My Team ({teamMembers.length})</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors space-y-2 sm:space-y-0"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-1">
                        <p className="text-xs sm:text-sm font-medium text-gray-900">{member.name}</p>
                        <Badge className={`${getLevelColor(partnerLevel + 1)} text-xs w-fit`}>{member.level}</Badge>
                        {getStatusBadge(member.status)}
                      </div>
                      <p className="text-xs text-gray-600">{member.region}</p>
                      <p className="text-xs text-gray-500">Joined: {member.joinDate}</p>
                    </div>
                    <div className="flex items-center justify-between sm:flex-col sm:text-right sm:items-end">
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-green-600">{member.commission}</p>
                        <p className="text-xs text-gray-500">{member.policies} policies</p>
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                          <Phone className="h-2 w-2 sm:h-3 sm:w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                          <Eye className="h-2 w-2 sm:h-3 sm:w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">Level Benefits</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Current Benefits</h4>
                  <ul className="space-y-1">
                    {currentLevel.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm sm:text-sm text-blue-700 flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {partnerLevel < 3 && (
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">Next Level Benefits</h4>
                    <p className="text-sm sm:text-sm text-green-700">{currentLevel.requirements}</p>
                    <ul className="space-y-1 mt-2">
                      {levelCriteria[(partnerLevel + 1) as keyof typeof levelCriteria]?.benefits.map(
                        (benefit, index) => (
                          <li key={index} className="text-sm sm:text-sm text-green-600 flex items-center space-x-2">
                            <Star className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{benefit}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {currentLevel.commissionEligible && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">Commission Tracking</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-green-50 rounded-lg">
                <p className="text-xs sm:text-sm text-green-600">This Month</p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-green-700">₹45,000</p>
                <p className="text-xs text-green-600">+18% from last month</p>
              </div>
              <div className="p-3 sm:p-4 bg-blue-50 rounded-lg">
                <p className="text-xs sm:text-sm text-blue-600">Direct Sales</p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700">₹28,000</p>
                <p className="text-xs text-blue-600">From 18 policies</p>
              </div>
              <div className="p-3 sm:p-4 bg-purple-50 rounded-lg">
                <p className="text-xs sm:text-sm text-purple-600">Team Commission</p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-700">₹17,000</p>
                <p className="text-xs text-purple-600">From {teamMembers.length} agents</p>
              </div>
              <div className="p-3 sm:p-4 bg-orange-50 rounded-lg">
                <p className="text-xs sm:text-sm text-orange-600">Pending</p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-700">₹8,500</p>
                <p className="text-xs text-orange-600">Processing</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* User Registration Form Modal */}
      {showUserForm && (
        <UserRegistrationForm userRole="agent" onClose={() => setShowUserForm(false)} onSubmit={handleUserSubmit} />
      )}
    </div>
  )
}
