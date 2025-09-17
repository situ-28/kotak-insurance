"use client"

// Demo conte```tsx file="components/demo-contest-data.tsx"
"use client"

// Demo contest data generator for realistic contest scenarios
export const generateDemoContestData = () => {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  // Active Contest
  const activeContest = {
    id: "contest-2024-q4",
    title: "Q4 Sales Championship 2024",
    description:
      "Achieve the highest combined sales target to win the quarterly prize pool. First level to reach ₹10L wins!",
    targetAmount: 1000000, // ₹10L
    prizeAmount: 50000, // ₹50K
    startDate: "2024-12-01",
    endDate: "2024-12-31",
    status: "active" as const,
    contestType: "quarterly",
    createdBy: "Owner",
    createdAt: "2024-11-28",
  }

  // Current contest progress for all levels
  const currentContestProgress = [
    {
      level: 1,
      levelName: "Level 1 Partners",
      totalSales: 750000, // 75% of target
      participantCount: 45,
      progress: 75.0,
      isWinner: false,
      participants: [
        { name: "Rajesh Mehta", sales: 180000, contribution: 24.0 },
        { name: "Priya Sharma", sales: 150000, contribution: 20.0 },
        { name: "Amit Kumar", sales: 120000, contribution: 16.0 },
        { name: "Neha Gupta", sales: 90000, contribution: 12.0 },
        { name: "Vikram Singh", sales: 75000, contribution: 10.0 },
        { name: "Others (40)", sales: 135000, contribution: 18.0 },
      ],
    },
    {
      level: 2,
      levelName: "Level 2 Partners",
      totalSales: 680000, // 68% of target
      participantCount: 78,
      progress: 68.0,
      isWinner: false,
      participants: [
        { name: "Sunita Patel", sales: 95000, contribution: 14.0 },
        { name: "Rohit Sharma", sales: 85000, contribution: 12.5 },
        { name: "Kavita Singh", sales: 75000, contribution: 11.0 },
        { name: "Suresh Kumar", sales: 68000, contribution: 10.0 },
        { name: "Anita Verma", sales: 60000, contribution: 8.8 },
        { name: "Others (73)", sales: 297000, contribution: 43.7 },
      ],
    },
    {
      level: 3,
      levelName: "Level 3 Partners",
      totalSales: 420000, // 42% of target
      participantCount: 156,
      progress: 42.0,
      isWinner: false,
      participants: [
        { name: "Deepak Joshi", sales: 45000, contribution: 10.7 },
        { name: "Meera Agarwal", sales: 38000, contribution: 9.0 },
        { name: "Ravi Gupta", sales: 32000, contribution: 7.6 },
        { name: "Pooja Sharma", sales: 28000, contribution: 6.7 },
        { name: "Arjun Patel", sales: 25000, contribution: 6.0 },
        { name: "Others (151)", sales: 252000, contribution: 60.0 },
      ],
    },
  ]

  // Historical contests with realistic data
  const contestHistory = [
    {
      id: "contest-2024-q3",
      title: "Q3 Growth Challenge 2024",
      targetAmount: 800000,
      prizeAmount: 40000,
      startDate: "2024-09-01",
      endDate: "2024-09-30",
      status: "completed" as const,
      contestType: "quarterly",
      winner: {
        level: 2,
        levelName: "Level 2 Partners",
        participantCount: 67,
        totalSales: 850000,
        prizePerParticipant: 597, // 40000/67
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
      contestType: "monthly",
      winner: {
        level: 1,
        levelName: "Level 1 Partners",
        participantCount: 42,
        totalSales: 680000,
        prizePerParticipant: 714, // 30000/42
      },
      participants: [
        { level: 1, levelName: "Level 1 Partners", totalSales: 680000, participantCount: 42, progress: 113.33 },
        { level: 2, levelName: "Level 2 Partners", totalSales: 520000, participantCount: 58, progress: 86.67 },
        { level: 3, levelName: "Level 3 Partners", totalSales: 290000, participantCount: 134, progress: 48.33 },
      ],
    },
    {
      id: "contest-2024-q1",
      title: "New Year Kickoff Contest 2024",
      targetAmount: 500000,
      prizeAmount: 25000,
      startDate: "2024-03-01",
      endDate: "2024-03-31",
      status: "completed" as const,
      contestType: "monthly",
      winner: {
        level: 1,
        levelName: "Level 1 Partners",
        participantCount: 35,
        totalSales: 520000,
        prizePerParticipant: 714, // 25000/35
      },
      participants: [
        { level: 1, levelName: "Level 1 Partners", totalSales: 520000, participantCount: 35, progress: 104.0 },
        { level: 2, levelName: "Level 2 Partners", totalSales: 480000, participantCount: 52, progress: 96.0 },
        { level: 3, levelName: "Level 3 Partners", totalSales: 250000, participantCount: 128, progress: 50.0 },
      ],
    },
    {
      id: "contest-2023-q4",
      title: "Year End Championship 2023",
      targetAmount: 750000,
      prizeAmount: 35000,
      startDate: "2023-12-01",
      endDate: "2023-12-31",
      status: "completed" as const,
      contestType: "quarterly",
      winner: {
        level: 2,
        levelName: "Level 2 Partners",
        participantCount: 61,
        totalSales: 780000,
        prizePerParticipant: 574, // 35000/61
      },
      participants: [
        { level: 2, levelName: "Level 2 Partners", totalSales: 780000, participantCount: 61, progress: 104.0 },
        { level: 1, levelName: "Level 1 Partners", totalSales: 650000, participantCount: 32, progress: 86.67 },
        { level: 3, levelName: "Level 3 Partners", totalSales: 320000, participantCount: 118, progress: 42.67 },
      ],
    },
    {
      id: "contest-2023-diwali",
      title: "Diwali Special Contest 2023",
      targetAmount: 400000,
      prizeAmount: 20000,
      startDate: "2023-10-15",
      endDate: "2023-11-15",
      status: "completed" as const,
      contestType: "monthly",
      winner: {
        level: 3,
        levelName: "Level 3 Partners",
        participantCount: 112,
        totalSales: 420000,
        prizePerParticipant: 179, // 20000/112
      },
      participants: [
        { level: 3, levelName: "Level 3 Partners", totalSales: 420000, participantCount: 112, progress: 105.0 },
        { level: 1, levelName: "Level 1 Partners", totalSales: 380000, participantCount: 28, progress: 95.0 },
        { level: 2, levelName: "Level 2 Partners", totalSales: 360000, participantCount: 48, progress: 90.0 },
      ],
    },
  ]

  // Contest statistics
  const contestStats = {
    totalContests: contestHistory.length + 1, // +1 for active contest
    completedContests: contestHistory.length,
    totalPrizesDistributed: contestHistory.reduce((sum, contest) => sum + contest.prizeAmount, 0),
    averagePrizeAmount: contestHistory.reduce((sum, contest) => sum + contest.prizeAmount, 0) / contestHistory.length,
    winsByLevel: {
      level1: contestHistory.filter((c) => c.winner?.level === 1).length,
      level2: contestHistory.filter((c) => c.winner?.level === 2).length,
      level3: contestHistory.filter((c) => c.winner?.level === 3).length,
    },
    totalParticipants: {
      level1: 45,
      level2: 78,
      level3: 156,
    },
  }

  // Recent contest activities for dashboard
  const recentContestActivities = [
    {
      action: "Level 1 Partners took the lead",
      details: "Reached 75% of target with ₹7.5L in sales",
      time: "2 hours ago",
      type: "milestone",
      level: 1,
    },
    {
      action: "Rajesh Mehta achieved personal milestone",
      details: "Contributed ₹1.8L to Level 1 team total",
      time: "4 hours ago",
      type: "achievement",
      level: 1,
    },
    {
      action: "Level 2 Partners reached 68% target",
      details: "Strong performance with ₹6.8L in combined sales",
      time: "6 hours ago",
      type: "milestone",
      level: 2,
    },
    {
      action: "Contest reminder sent",
      details: "18 days remaining - push for the final stretch!",
      time: "1 day ago",
      type: "notification",
      level: null,
    },
    {
      action: "Level 3 Partners gaining momentum",
      details: "42% target achieved, accelerating sales pace",
      time: "2 days ago",
      type: "milestone",
      level: 3,
    },
  ]

  return {
    activeContest,
    currentContestProgress,
    contestHistory,
    contestStats,
    recentContestActivities,
  }
}

// Helper functions for contest data
export const getContestProgressForLevel = (level: number) => {
  const data = generateDemoContestData()
  return data.currentContestProgress.find((p) => p.level === level)
}

export const getPersonalContestStats = (level: number, partnerName: string) => {
  const levelProgress = getContestProgressForLevel(level)
  if (!levelProgress) return null

  // Find partner's contribution (simplified - in real app would be from database)
  const personalContribution =
    levelProgress.participants.find((p) => p.name.includes(partnerName.split(" ")[0])) || levelProgress.participants[0] // Fallback to first participant

  return {
    personalSales: personalContribution.sales,
    personalContribution: personalContribution.contribution,
    levelRank: level === 1 ? 1 : level === 2 ? 2 : 3,
    potentialPrize: Math.floor(generateDemoContestData().activeContest.prizeAmount / levelProgress.participantCount),
    daysRemaining: Math.ceil((new Date("2024-12-31").getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)),
  }
}

export const formatContestCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export const getContestTimeRemaining = (endDate: string) => {
  const end = new Date(endDate)
  const now = new Date()
  const diffTime = end.getTime() - now.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays <= 0) return "Contest Ended"
  if (diffDays === 1) return "1 day left"
  if (diffDays <= 7) return `${diffDays} days left`
  if (diffDays <= 30) return `${diffDays} days left`

  const weeks = Math.ceil(diffDays / 7)
  return `${weeks} weeks left`
}

// Contest validation helpers
export const validateContestData = (contestData: any) => {
  const errors: string[] = []

  if (!contestData.title || contestData.title.trim().length < 3) {
    errors.push("Contest title must be at least 3 characters long")
  }

  if (!contestData.targetAmount || contestData.targetAmount <= 0) {
    errors.push("Target amount must be greater than 0")
  }

  if (!contestData.prizeAmount || contestData.prizeAmount <= 0) {
    errors.push("Prize amount must be greater than 0")
  }

  if (!contestData.startDate || !contestData.endDate) {
    errors.push("Both start and end dates are required")
  }

  if (contestData.startDate && contestData.endDate) {
    const start = new Date(contestData.startDate)
    const end = new Date(contestData.endDate)

    if (start >= end) {
      errors.push("End date must be after start date")
    }

    if (start < new Date()) {
      errors.push("Start date cannot be in the past")
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

// Generate realistic contest scenarios for different levels
export const generateContestScenarios = () => {
  return {
    closeRace: {
      description: "All levels within 10% of each other",
      level1Progress: 72,
      level2Progress: 68,
      level3Progress: 65,
    },
    clearLeader: {
      description: "One level significantly ahead",
      level1Progress: 85,
      level2Progress: 45,
      level3Progress: 38,
    },
    finalSprint: {
      description: "Contest ending soon, tight competition",
      level1Progress: 95,
      level2Progress: 92,
      level3Progress: 88,
      daysRemaining: 3,
    },
    earlyStage: {
      description: "Contest just started",
      level1Progress: 15,
      level2Progress: 12,
      level3Progress: 8,
      daysRemaining: 25,
    },
  }
}
