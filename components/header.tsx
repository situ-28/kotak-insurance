"use client"

import { Button } from "@/components/ui/button"
import { Search, User, HelpCircle, MapPin, LogOut } from "lucide-react"
import type { DemoAccount } from "@/app/page"

interface HeaderProps {
  currentUser?: DemoAccount | null
  onLogout?: () => void
}

export function Header({ currentUser, onLogout }: HeaderProps) {
  return (
    <div>
      {/* Top Navigation Bar */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">K</span>
                </div>
                <span className="font-semibold">Kotak Life BN</span>
              </div>
              <nav className="hidden md:flex space-x-6 text-sm">
                <a href="#" className="hover:text-red-200">
                  Personal
                </a>
                <a href="#" className="hover:text-red-200">
                  Business
                </a>
                <a href="#" className="hover:text-red-200">
                  Corporate
                </a>
                <a href="#" className="hover:text-red-200">
                  Insurance
                </a>
                <a href="#" className="hover:text-red-200">
                  Partners
                </a>
                <a href="#" className="hover:text-red-200">
                  Agents
                </a>
                <a href="#" className="hover:text-red-200">
                  Investors
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 cursor-pointer hover:text-red-200" />
              {currentUser ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 bg-red-700 px-3 py-1 rounded-full">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-medium">{currentUser.name}</span>
                    <span className="text-xs bg-red-800 px-2 py-0.5 rounded-full">
                      {currentUser.level || currentUser.role}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white text-red-600 border-white hover:bg-red-50"
                    onClick={onLogout}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button variant="outline" size="sm" className="bg-white text-red-600 border-white hover:bg-red-50">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <nav className="flex space-x-8 text-sm text-gray-600">
              <a href="#" className="hover:text-red-600">
                Policy Management
              </a>
              <a href="#" className="hover:text-red-600">
                Partner Network
              </a>
              <a href="#" className="hover:text-red-600">
                Renewals
              </a>
              <a href="#" className="hover:text-red-600">
                Commission Tracking
              </a>
              <a href="#" className="hover:text-red-600">
                Reports
              </a>
              <a href="#" className="hover:text-red-600">
                Support
              </a>
            </nav>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-blue-600 cursor-pointer hover:text-blue-800">
                <HelpCircle className="w-4 h-4" />
                <span>Help Center</span>
              </div>
              <div className="flex items-center space-x-1 text-blue-600 cursor-pointer hover:text-blue-800">
                <MapPin className="w-4 h-4" />
                <span>Locate us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
