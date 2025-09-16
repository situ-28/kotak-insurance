"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Crown, Users, UserCheck, TrendingUp } from "lucide-react"
import type { DemoAccount } from "@/app/page"

interface DemoAccountSwitcherProps {
  accounts: DemoAccount[]
  currentDemo: string | null
  onDemoChange: (demoId: string | null) => void
}

const getRoleIcon = (role: string) => {
  switch (role) {
    case "Owner":
      return <Crown className="h-4 w-4" />
    case "Team Member":
      return <Users className="h-4 w-4" />
    case "Direct Partner":
      return <UserCheck className="h-4 w-4" />
    default:
      return <TrendingUp className="h-4 w-4" />
  }
}

export function DemoAccountSwitcher({ accounts, currentDemo, onDemoChange }: DemoAccountSwitcherProps) {
  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Demo Accounts</h2>
          {currentDemo && (
            <Button variant="outline" onClick={() => onDemoChange(null)} className="text-sm">
              Back to Home
            </Button>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {accounts.map((account) => (
            <Card
              key={account.id}
              className={`p-3 cursor-pointer transition-all hover:shadow-md ${
                currentDemo === account.id ? "ring-2 ring-red-500 bg-red-50" : "hover:bg-gray-50"
              }`}
              onClick={() => onDemoChange(account.id)}
            >
              <div className="flex items-center space-x-2 mb-2">
                {getRoleIcon(account.role)}
                <span className="text-xs font-medium text-gray-600">{account.level || account.role}</span>
              </div>
              <div className="text-sm font-semibold text-gray-900 truncate">{account.name}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
