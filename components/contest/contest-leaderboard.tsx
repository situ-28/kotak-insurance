"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Award, TrendingUp, Users, IndianRupee, Calendar, Clock } from "lucide-react"

interface Contest {
  id: string
  title: string
  description: string
  targetAmount: number
  prizeAmount: number
  startDate: string
  endDate: string
  status: "active" | "completed" | "upcoming"
}

interface LevelProgress {
  level: number
  levelName: string
  totalSales: number
  participantCount: number
  progress: number
  isWinner?: boolean
  participants: {
    name: string
    sales: number
    contribution: number
  }[]
}

interface ContestLeaderboardProps {
  contest: Contest
  levelProgress: LevelProgress[]
  onViewHistory: () => void
}

export default function ContestLeaderboard({ contest, levelProgress, onViewHistory }: ContestLeaderboardProps) {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)

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

  const getDaysRemaining = () => {
    const endDate = new Date(contest.endDate)
    const today = new Date()
    const diffTime = endDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? diffDays : 0
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "completed":
        return "bg-blue-500"
      case "upcoming":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="h-6 w-6 text-yellow-500" />
      case 1:
        return <Medal className="h-6 w-6 text-gray-400" />
      case 2:
        return <Award className="h-6 w-6 text-amber-600" />
      default:
        return (
          <div className="h-6 w-6 flex items-center justify-center bg-gray-200 rounded-full text-sm font-bold">
            {index + 1}
          </div>
        )
    }
  }

  const sortedLevels = [...levelProgress].sort((a, b) => b.totalSales - a.totalSales)
  const winner = sortedLevels.find((level) => level.progress >= 100)

  return (
    <div className="space-y-6">
      {/* Contest Header */}
      <Card>
        <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold">{contest.title}</CardTitle>
              <p className="text-red-100 mt-1">{contest.description}</p>
            </div>
            <Badge className={`${getStatusColor(contest.status)} text-white`}>{contest.status.toUpperCase()}</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Target Amount</p>
                <p className="font-bold text-lg">{formatCurrency(contest.targetAmount)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <IndianRupee className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Prize Pool</p>
                <p className="font-bold text-lg">{formatCurrency(contest.prizeAmount)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-bold">
                  {formatDate(contest.startDate)} - {formatDate(contest.endDate)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Days Remaining</p>
                <p className="font-bold text-lg">{getDaysRemaining()} days</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Winner Announcement */}
      {winner && (
        <Card className="border-2 border-yellow-400 bg-gradient-to-r from-yellow-50 to-amber-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Trophy className="h-12 w-12 text-yellow-500" />
              <div>
                <h3 className="text-2xl font-bold text-yellow-800">Contest Winner!</h3>
                <p className="text-yellow-700">
                  <span className="font-bold">{winner.levelName}</span> has achieved the target of{" "}
                  {formatCurrency(contest.targetAmount)}!
                </p>
                <p className="text-sm text-yellow-600 mt-1">
                  Prize of {formatCurrency(contest.prizeAmount)} will be divided among {winner.participantCount}{" "}
                  participants
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-yellow-500" />
              Contest Leaderboard
            </CardTitle>
            <Button variant="outline" onClick={onViewHistory}>
              View History
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {sortedLevels.map((level, index) => (
              <div key={level.level} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    {getRankIcon(index)}
                    <div>
                      <h3 className="font-bold text-lg">{level.levelName}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {level.participantCount} participants
                        </span>
                        <span className="flex items-center gap-1">
                          <IndianRupee className="h-4 w-4" />
                          {formatCurrency(level.totalSales)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">{level.progress.toFixed(1)}%</div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedLevel(selectedLevel === level.level ? null : level.level)}
                    >
                      {selectedLevel === level.level ? "Hide Details" : "View Details"}
                    </Button>
                  </div>
                </div>

                <div className="mb-3">
                  <Progress value={level.progress} className="h-3" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{formatCurrency(level.totalSales)}</span>
                    <span>{formatCurrency(contest.targetAmount)}</span>
                  </div>
                </div>

                {/* Participant Details */}
                {selectedLevel === level.level && (
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-medium mb-3">Participant Breakdown:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {level.participants.map((participant, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                          <div>
                            <p className="font-medium">{participant.name}</p>
                            <p className="text-sm text-gray-600">{participant.contribution}% contribution</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">{formatCurrency(participant.sales)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
