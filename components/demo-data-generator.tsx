"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, FileText, DollarSign, TrendingUp, Play, Pause, RotateCcw, Database } from "lucide-react"

interface DemoDataGeneratorProps {
  onDataUpdate?: (data: any) => void
}

export function DemoDataGenerator({ onDataUpdate }: DemoDataGeneratorProps) {
  const [isRunning, setIsRunning] = useState(false)
  const [progress, setProgress] = useState(0)
  const [generatedData, setGeneratedData] = useState<any>(null)

  // Simulate realistic demo data generation
  const generateDemoData = () => {
    setIsRunning(true)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsRunning(false)

          // Generate comprehensive demo data
          const demoData = {
            users: generateUsers(),
            policies: generatePolicies(),
            commissions: generateCommissions(),
            levelProgressions: generateLevelProgressions(),
            renewals: generateRenewals(),
          }

          setGeneratedData(demoData)
          onDataUpdate?.(demoData)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const generateUsers = () => {
    return [
      {
        id: "user_001",
        name: "Rohit Sharma",
        level: 0,
        policies: 0,
        commission: 0,
        recruiter: "amit.partner",
        status: "pending_activation",
      },
      {
        id: "user_002",
        name: "Anita Patel",
        level: 1,
        policies: 3,
        commission: 15000,
        recruiter: "sunita.l1",
        status: "active",
      },
      {
        id: "user_003",
        name: "Suresh Kumar",
        level: 2,
        policies: 8,
        commission: 35000,
        recruiter: "vikram.l2",
        status: "active",
      },
    ]
  }

  const generatePolicies = () => {
    return [
      {
        id: "POL_001",
        customerName: "Rohit Sharma",
        type: "Term Life",
        coverage: "50L",
        premium: 18000,
        status: "pending_activation",
        partner: "Amit Patel",
      },
      {
        id: "POL_002",
        customerName: "Anita Patel",
        type: "ULIP",
        coverage: "25L",
        premium: 12000,
        status: "active",
        partner: "Sunita Singh",
      },
    ]
  }

  const generateCommissions = () => {
    return {
      level1: { total: 45000, thisMonth: 15000, growth: 18 },
      level2: { total: 78000, thisMonth: 28000, growth: 22 },
      level3: { total: 125000, thisMonth: 45000, growth: 15 },
    }
  }

  const generateLevelProgressions = () => {
    return [
      {
        userId: "amit.partner",
        currentLevel: 0,
        progress: 0,
        requirement: "Get first policy activated",
        nextMilestone: "Level 1",
      },
      {
        userId: "sunita.l1",
        currentLevel: 1,
        progress: 40,
        requirement: "Recruit agents with 5+ policies (2/5)",
        nextMilestone: "Level 2",
      },
    ]
  }

  const generateRenewals = () => {
    return [
      {
        customer: "Vikram Gupta",
        policy: "ULIP 40L",
        expiryDate: "2025-03-15",
        daysLeft: 45,
        status: "upcoming",
      },
      {
        customer: "Sunita Singh",
        policy: "Term Life 60L",
        expiryDate: "2025-02-20",
        daysLeft: 20,
        status: "critical",
      },
    ]
  }

  const resetData = () => {
    setGeneratedData(null)
    setProgress(0)
    onDataUpdate?.(null)
  }

  return (
    <Card className="border-2 border-dashed border-blue-200 bg-blue-50">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Database className="h-5 w-5 text-blue-600" />
          <span>Demo Data Generator</span>
          <Badge variant="outline" className="bg-blue-100 text-blue-700">
            Simulation
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Generate Realistic Demo Data</p>
              <p className="text-sm text-gray-600">Creates users, policies, commissions, and level progressions</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button onClick={generateDemoData} disabled={isRunning} className="bg-blue-600 hover:bg-blue-700">
                {isRunning ? (
                  <>
                    <Pause className="h-4 w-4 mr-2" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Generate Data
                  </>
                )}
              </Button>
              <Button onClick={resetData} variant="outline" disabled={isRunning}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>

          {isRunning && (
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-blue-600">Generating demo data... {progress}%</p>
            </div>
          )}

          {generatedData && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t">
              <div className="p-3 bg-white rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-sm font-medium">Users</span>
                </div>
                <p className="text-xl font-bold text-gray-900">{generatedData.users.length}</p>
                <p className="text-xs text-gray-500">Generated</p>
              </div>

              <div className="p-3 bg-white rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <FileText className="h-4 w-4 text-gray-400" />
                  <span className="text-sm font-medium">Policies</span>
                </div>
                <p className="text-xl font-bold text-gray-900">{generatedData.policies.length}</p>
                <p className="text-xs text-gray-500">Created</p>
              </div>

              <div className="p-3 bg-white rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <DollarSign className="h-4 w-4 text-gray-400" />
                  <span className="text-sm font-medium">Commissions</span>
                </div>
                <p className="text-xl font-bold text-gray-900">₹2.4L</p>
                <p className="text-xs text-gray-500">Total</p>
              </div>

              <div className="p-3 bg-white rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <TrendingUp className="h-4 w-4 text-gray-400" />
                  <span className="text-sm font-medium">Progressions</span>
                </div>
                <p className="text-xl font-bold text-gray-900">{generatedData.levelProgressions.length}</p>
                <p className="text-xs text-gray-500">Active</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
