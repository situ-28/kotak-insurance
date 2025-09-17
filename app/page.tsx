"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"
import { OwnerDashboard } from "@/components/dashboards/owner-dashboard"
import { TeamDashboard } from "@/components/dashboards/team-dashboard"
import { PartnerDashboard } from "@/components/dashboards/partner-dashboard"
import { DemoLoginPage } from "@/components/demo-login-page"

export type DemoAccount = {
  id: string
  name: string
  role: string
  level?: string
  levelNumber?: number
  username: string
  password: string
  email: string
}

export default function HomePage() {
  const [currentUser, setCurrentUser] = useState<DemoAccount | null>(null)
  const [showLogin, setShowLogin] = useState(false)
  const [users, setUsers] = useState<any[]>([])

  const demoAccounts: DemoAccount[] = [
    {
      id: "owner",
      name: "Rajesh Kumar",
      role: "Owner",
      username: "rajesh.owner",
      password: "owner123",
      email: "rajesh.kumar@kotaklife.com",
    },
    {
      id: "team",
      name: "Priya Sharma",
      role: "Team Member",
      username: "priya.team",
      password: "team123",
      email: "priya.sharma@kotaklife.com",
    },
    {
      id: "direct-partner-inactive",
      name: "Amit Patel",
      role: "Direct Partner",
      level: "Direct Partner (Inactive)",
      levelNumber: 0,
      username: "amit.partner",
      password: "partner123",
      email: "amit.patel@partner.com",
    },
    {
      id: "level1",
      name: "Sunita Singh",
      role: "Level 1 Agent",
      level: "Level 1 Agent",
      levelNumber: 1,
      username: "sunita.l1",
      password: "agent123",
      email: "sunita.singh@agent.com",
    },
    {
      id: "level2",
      name: "Vikram Gupta",
      role: "Level 2 Agent",
      level: "Level 2 Agent",
      levelNumber: 2,
      username: "vikram.l2",
      password: "agent123",
      email: "vikram.gupta@agent.com",
    },
    {
      id: "level3",
      name: "Neha Joshi",
      role: "Level 3 Agent",
      level: "Level 3 Agent",
      levelNumber: 3,
      username: "neha.l3",
      password: "agent123",
      email: "neha.joshi@agent.com",
    },
  ]

  const handleLogin = (username: string, password: string) => {
    const user = demoAccounts.find((account) => account.username === username && account.password === password)
    if (user) {
      setCurrentUser(user)
      setShowLogin(false)
      return true
    }
    return false
  }

  const handleLogout = () => {
    setCurrentUser(null)
    setShowLogin(false)
  }

  const handleAddUser = (userData: any) => {
    const newUser = {
      ...userData,
      id: `user_${Date.now()}`,
      createdAt: new Date().toISOString(),
      createdBy: currentUser?.name || "System",
    }
    setUsers((prev) => [...prev, newUser])
    console.log("[v0] User added to system:", newUser)
  }

  const renderDashboard = () => {
    if (!currentUser) return null

    switch (currentUser.id) {
      case "owner":
        return <OwnerDashboard onAddUser={handleAddUser} />
      case "team":
        return <TeamDashboard />
      case "direct-partner-inactive":
        return <PartnerDashboard partnerLevel={0} partnerName={currentUser.name} onAddUser={handleAddUser} />
      case "level1":
        return <PartnerDashboard partnerLevel={1} partnerName={currentUser.name} onAddUser={handleAddUser} />
      case "level2":
        return <PartnerDashboard partnerLevel={2} partnerName={currentUser.name} onAddUser={handleAddUser} />
      case "level3":
        return <PartnerDashboard partnerLevel={3} partnerName={currentUser.name} onAddUser={handleAddUser} />
      default:
        return null
    }
  }

  if (showLogin) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <DemoLoginPage accounts={demoAccounts} onLogin={handleLogin} onBack={() => setShowLogin(false)} />
        <Footer />
      </div>
    )
  }

  if (currentUser) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header currentUser={currentUser} onLogout={handleLogout} />
        <main>{renderDashboard()}</main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection onDemoLogin={() => setShowLogin(true)} />
        <DashboardPreview />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}
