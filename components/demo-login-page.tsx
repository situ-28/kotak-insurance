"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Eye, EyeOff, Crown, Users, UserCheck, TrendingUp } from "lucide-react"
import type { DemoAccount } from "@/app/page"

interface DemoLoginPageProps {
  accounts: DemoAccount[]
  onLogin: (username: string, password: string) => boolean
  onBack: () => void
}

const getRoleIcon = (role: string) => {
  switch (role) {
    case "Owner":
      return <Crown className="h-4 w-4 text-yellow-600" />
    case "Team Member":
      return <Users className="h-4 w-4 text-blue-600" />
    case "Direct Partner":
      return <UserCheck className="h-4 w-4 text-green-600" />
    default:
      return <TrendingUp className="h-4 w-4 text-purple-600" />
  }
}

export function DemoLoginPage({ accounts, onLogin, onBack }: DemoLoginPageProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [selectedAccount, setSelectedAccount] = useState<DemoAccount | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const success = onLogin(username, password)
    if (!success) {
      setError("Invalid username or password. Please try the demo credentials below.")
    }
  }

  const handleQuickLogin = (account: DemoAccount) => {
    setUsername(account.username)
    setPassword(account.password)
    setSelectedAccount(account)
  }

  const handleQuickLoginSubmit = (account: DemoAccount) => {
    onLogin(account.username, account.password)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="mb-6 sm:mb-8">
          <Button variant="ghost" onClick={onBack} className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">
            <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Login Form */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Demo Login</h1>
              <p className="text-sm sm:text-base text-gray-600">
                Access different role-based dashboards with demo credentials
              </p>
            </div>

            <Card className="w-full max-w-md mx-auto lg:mx-0">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl">Sign In</CardTitle>
                <CardDescription className="text-sm">
                  Enter your demo credentials or use quick login below
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-sm">
                      Username
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter username"
                      className="text-sm"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className="text-sm pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription className="text-sm">{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-sm sm:text-base">
                    Sign In
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Demo Accounts */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Demo Accounts</h2>
              <p className="text-sm sm:text-base text-gray-600">
                Click on any account below for quick login or copy the credentials
              </p>
            </div>

            <div className="grid gap-3 sm:gap-4">
              {accounts.map((account) => (
                <Card
                  key={account.id}
                  className={`cursor-pointer transition-all hover:shadow-md border-l-4 ${
                    account.role === "Owner"
                      ? "border-l-yellow-500"
                      : account.role === "Team Member"
                        ? "border-l-blue-500"
                        : account.role === "Direct Partner"
                          ? "border-l-green-500"
                          : "border-l-purple-500"
                  } ${selectedAccount?.id === account.id ? "ring-2 ring-red-500 bg-red-50" : "hover:bg-gray-50"}`}
                >
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        {getRoleIcon(account.role)}
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{account.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-600">{account.level || account.role}</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuickLogin(account)}
                          className="text-xs sm:text-sm w-full sm:w-auto"
                        >
                          Fill Form
                        </Button>
                        <Button
                          size="sm"
                          className="bg-red-600 hover:bg-red-700 text-xs sm:text-sm w-full sm:w-auto"
                          onClick={() => handleQuickLoginSubmit(account)}
                        >
                          Quick Login
                        </Button>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs">
                        <div>
                          <span className="font-medium text-gray-500">Username:</span>
                          <p className="font-mono text-gray-900 break-all">{account.username}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-500">Password:</span>
                          <p className="font-mono text-gray-900">{account.password}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
