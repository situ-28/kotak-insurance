"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, Shield, Zap, Crown, CheckCircle, XCircle, Trophy, Target, DollarSign, Star } from "lucide-react"

interface LevelProgressionSystemProps {
  currentLevel: number
  onLevelUp?: (newLevel: number) => void
}

export function LevelProgressionSystem({ currentLevel, onLevelUp }: LevelProgressionSystemProps) {
  // Level progression criteria based on requirements
  const levelSystem = {
    0: {
      name: "Direct Partner",
      icon: Users,
      color: "gray",
      description: "Initial status - can add users but no commission eligibility",
      requirements: {
        description: "Get your first policy activated",
        criteria: [
          "Add users to the system",
          "Guide users through policy application",
          "Wait for policy activation by team",
        ],
        nextLevel: "Level 1 Agent",
        commissionEligible: false,
        canRecruit: false,
      },
      benefits: ["Add users to system", "Guide policy applications", "Access to basic dashboard"],
    },
    1: {
      name: "Level 1 Agent",
      icon: Shield,
      color: "blue",
      description: "Activated Direct Partner with commission eligibility",
      requirements: {
        description: "Recruit agents who get 5+ policies activated",
        criteria: [
          "Have at least 1 activated policy",
          "Recruit new agents",
          "Help recruited agents get policies activated",
          "Achieve team milestone of 5+ policies",
        ],
        nextLevel: "Level 2 Agent",
        commissionEligible: true,
        canRecruit: true,
      },
      benefits: [
        "Earn commissions on direct sales",
        "Recruit Level 2 agents",
        "Team management tools",
        "Performance bonuses",
      ],
    },
    2: {
      name: "Level 2 Agent",
      icon: Zap,
      color: "purple",
      description: "Advanced agent with team building capabilities",
      requirements: {
        description: "Recruit agents who get 3+ policies activated",
        criteria: [
          "Maintain active policy portfolio",
          "Build and manage team",
          "Help team achieve 3+ policies milestone",
          "Demonstrate leadership",
        ],
        nextLevel: "Level 3 Agent",
        commissionEligible: true,
        canRecruit: true,
      },
      benefits: ["Higher commission rates", "Recruit Level 3 agents", "Advanced analytics", "Priority support"],
    },
    3: {
      name: "Level 3 Agent",
      icon: Crown,
      color: "gold",
      description: "Maximum level - Elite status with premium benefits",
      requirements: {
        description: "Maximum level achieved!",
        criteria: [
          "Elite status maintained",
          "Focus on direct customer acquisition",
          "Mentor lower level agents",
          "Premium commission rates",
        ],
        nextLevel: "Maximum Level",
        commissionEligible: true,
        canRecruit: false,
      },
      benefits: [
        "Premium commission rates",
        "Elite status recognition",
        "Direct customer focus",
        "Exclusive rewards program",
      ],
    },
  }

  const currentLevelData = levelSystem[currentLevel as keyof typeof levelSystem]
  const nextLevelData = currentLevel < 3 ? levelSystem[(currentLevel + 1) as keyof typeof levelSystem] : null

  const getProgressData = () => {
    switch (currentLevel) {
      case 0:
        return { current: 0, target: 1, progress: 0, description: "Get first policy activated" }
      case 1:
        return { current: 2, target: 5, progress: 40, description: "Team policies activated (2/5)" }
      case 2:
        return { current: 1, target: 3, progress: 33, description: "Team milestone progress (1/3)" }
      case 3:
        return { current: 3, target: 3, progress: 100, description: "Maximum level achieved!" }
      default:
        return { current: 0, target: 1, progress: 0, description: "" }
    }
  }

  const progressData = getProgressData()

  const getLevelIcon = (level: number) => {
    const LevelIcon = levelSystem[level as keyof typeof levelSystem]?.icon || Users
    return <LevelIcon className="h-6 w-6" />
  }

  const getLevelColor = (level: number) => {
    const color = levelSystem[level as keyof typeof levelSystem]?.color || "gray"
    const colorMap = {
      gray: "bg-gray-100 text-gray-700 border-gray-300",
      blue: "bg-blue-100 text-blue-700 border-blue-300",
      purple: "bg-purple-100 text-purple-700 border-purple-300",
      gold: "bg-yellow-100 text-yellow-700 border-yellow-300",
    }
    return colorMap[color as keyof typeof colorMap]
  }

  return (
    <div className="space-y-6">
      {/* Current Level Status */}
      <Card className="border-2 border-dashed border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <div
              className={`p-2 rounded-lg ${currentLevelData.color === "gray" ? "bg-gray-200" : currentLevelData.color === "blue" ? "bg-blue-200" : currentLevelData.color === "purple" ? "bg-purple-200" : "bg-yellow-200"}`}
            >
              {getLevelIcon(currentLevel)}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold">{currentLevelData.name}</span>
                <Badge className={getLevelColor(currentLevel)}>Current Level</Badge>
              </div>
              <p className="text-sm text-gray-600 font-normal">{currentLevelData.description}</p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Commission Status */}
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900 flex items-center space-x-2">
                <DollarSign className="h-4 w-4" />
                <span>Commission Status</span>
              </h4>
              <div className="flex items-center space-x-2">
                {currentLevelData.requirements.commissionEligible ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-600" />
                )}
                <span
                  className={`text-sm ${currentLevelData.requirements.commissionEligible ? "text-green-600" : "text-red-600"}`}
                >
                  {currentLevelData.requirements.commissionEligible ? "Eligible for Commission" : "Not Eligible Yet"}
                </span>
              </div>
            </div>

            {/* Recruitment Status */}
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900 flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Recruitment</span>
              </h4>
              <div className="flex items-center space-x-2">
                {currentLevelData.requirements.canRecruit ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-600" />
                )}
                <span
                  className={`text-sm ${currentLevelData.requirements.canRecruit ? "text-green-600" : "text-red-600"}`}
                >
                  {currentLevelData.requirements.canRecruit ? "Can Recruit Agents" : "Cannot Recruit Yet"}
                </span>
              </div>
            </div>

            {/* Benefits Count */}
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900 flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>Active Benefits</span>
              </h4>
              <div className="flex items-center space-x-2">
                <Trophy className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-blue-600">{currentLevelData.benefits.length} Benefits Active</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Level Progression */}
      {currentLevel < 3 && nextLevelData && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-red-600" />
              <span>Progress to {nextLevelData.name}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{progressData.description}</p>
                  <p className="text-sm text-gray-600">{nextLevelData.requirements.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-600">
                    {progressData.current}/{progressData.target}
                  </p>
                  <p className="text-sm text-gray-500">Requirements</p>
                </div>
              </div>

              <div className="space-y-2">
                <Progress value={progressData.progress} className="h-3" />
                <p className="text-sm text-gray-600">{progressData.progress}% Complete</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Requirements to Advance</h4>
                  <ul className="space-y-1">
                    {nextLevelData.requirements.criteria.map((criterion, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                        <span>{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Next Level Benefits</h4>
                  <ul className="space-y-1">
                    {nextLevelData.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="text-sm text-green-600 flex items-center space-x-2">
                        <Star className="h-3 w-3" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Level Comparison Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Trophy className="h-5 w-5" />
            <span>Level System Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(levelSystem).map(([level, data]) => {
              const levelNum = Number.parseInt(level)
              const isCurrentLevel = levelNum === currentLevel
              const isUnlocked = levelNum <= currentLevel

              return (
                <div
                  key={level}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isCurrentLevel
                      ? "border-red-300 bg-red-50"
                      : isUnlocked
                        ? "border-green-300 bg-green-50"
                        : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <div
                      className={`p-2 rounded-lg ${
                        data.color === "gray"
                          ? "bg-gray-200"
                          : data.color === "blue"
                            ? "bg-blue-200"
                            : data.color === "purple"
                              ? "bg-purple-200"
                              : "bg-yellow-200"
                      }`}
                    >
                      {getLevelIcon(levelNum)}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{data.name}</h4>
                      {isCurrentLevel && <Badge className="bg-red-100 text-red-700 text-xs">Current</Badge>}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      {data.requirements.commissionEligible ? (
                        <CheckCircle className="h-3 w-3 text-green-600" />
                      ) : (
                        <XCircle className="h-3 w-3 text-red-600" />
                      )}
                      <span className="text-gray-600">Commission</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {data.requirements.canRecruit ? (
                        <CheckCircle className="h-3 w-3 text-green-600" />
                      ) : (
                        <XCircle className="h-3 w-3 text-red-600" />
                      )}
                      <span className="text-gray-600">Recruitment</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-2">{data.benefits.length} benefits available</p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
