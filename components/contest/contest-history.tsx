"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trophy, Medal, Award, Calendar, IndianRupee, Users, Search, Filter, TrendingUp } from "lucide-react"

interface HistoricalContest {
  id: string
  title: string
  targetAmount: number
  prizeAmount: number
  startDate: string
  endDate: string
  status: "completed" | "cancelled"
  winner: {
    level: number
    levelName: string
    participantCount: number
    totalSales: number
    prizePerParticipant: number
  } | null
  participants: {
    level: number
    levelName: string
    totalSales: number
    participantCount: number
    progress: number
  }[]
}

interface ContestHistoryProps {
  contests: HistoricalContest[]
  onBack: () => void
}

export default function ContestHistory({ contests, onBack }: ContestHistoryProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedContest, setSelectedContest] = useState<string | null>(null)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "cancelled":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 1:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 2:
        return <Award className="h-5 w-5 text-amber-600" />
      default:
        return (
          <div className="h-5 w-5 flex items-center justify-center bg-gray-200 rounded-full text-xs font-bold">
            {index + 1}
          </div>
        )
    }
  }

  const filteredContests = contests.filter((contest) => {
    const matchesSearch = contest.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || contest.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalPrizesDistributed = contests
    .filter((c) => c.status === "completed" && c.winner)
    .reduce((sum, c) => sum + c.prizeAmount, 0)

  const totalContests = contests.length
  const completedContests = contests.filter((c) => c.status === "completed").length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Contest History</h2>
          <p className="text-gray-600 mt-1">Track all past contests and their results</p>
        </div>
        <Button onClick={onBack} variant="outline">
          Back to Current Contest
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Trophy className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Contests</p>
                <p className="text-2xl font-bold">{totalContests}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold">{completedContests}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <IndianRupee className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Prizes</p>
                <p className="text-2xl font-bold">{formatCurrency(totalPrizesDistributed)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search contests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contest History List */}
      <div className="space-y-4">
        {filteredContests.map((contest) => (
          <Card key={contest.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{contest.title}</h3>
                    <Badge className={`${getStatusColor(contest.status)} text-white`}>
                      {contest.status.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(contest.startDate)} - {formatDate(contest.endDate)}
                    </span>
                    <span className="flex items-center gap-1">
                      <IndianRupee className="h-4 w-4" />
                      Target: {formatCurrency(contest.targetAmount)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Trophy className="h-4 w-4" />
                      Prize: {formatCurrency(contest.prizeAmount)}
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => setSelectedContest(selectedContest === contest.id ? null : contest.id)}
                >
                  {selectedContest === contest.id ? "Hide Details" : "View Details"}
                </Button>
              </div>

              {/* Winner Display */}
              {contest.winner && (
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3">
                    <Trophy className="h-8 w-8 text-yellow-500" />
                    <div>
                      <h4 className="font-bold text-yellow-800">Winner: {contest.winner.levelName}</h4>
                      <div className="flex items-center gap-4 text-sm text-yellow-700">
                        <span>Sales: {formatCurrency(contest.winner.totalSales)}</span>
                        <span>{contest.winner.participantCount} participants</span>
                        <span>Prize per participant: {formatCurrency(contest.winner.prizePerParticipant)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Detailed Results */}
              {selectedContest === contest.id && (
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-medium mb-3">Final Results:</h4>
                  <div className="space-y-3">
                    {contest.participants
                      .sort((a, b) => b.totalSales - a.totalSales)
                      .map((participant, index) => (
                        <div
                          key={participant.level}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            {getRankIcon(index)}
                            <div>
                              <p className="font-medium">{participant.levelName}</p>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                  <Users className="h-3 w-3" />
                                  {participant.participantCount} participants
                                </span>
                                <span>{participant.progress.toFixed(1)}% of target</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">{formatCurrency(participant.totalSales)}</p>
                            {contest.winner && contest.winner.level === participant.level && (
                              <Badge className="bg-yellow-500 text-white text-xs">WINNER</Badge>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredContests.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">No contests found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
