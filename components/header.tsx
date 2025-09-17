"use client"

import { Button } from "@/components/ui/button"
import { Search, User, HelpCircle, MapPin, LogOut, Menu, X } from "lucide-react"
import type { DemoAccount } from "@/app/page"
import { useState } from "react"

interface HeaderProps {
  currentUser?: DemoAccount | null
  onLogout?: () => void
  currentLevel?: string // Declare currentLevel in the interface
}

export function Header({ currentUser, onLogout, currentLevel }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      {/* Top Navigation Bar */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-10 sm:h-12">
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-6">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold text-xs sm:text-sm">K</span>
                </div>
                <span className="font-semibold text-xs sm:text-sm lg:text-base">Kotak Life BN</span>
              </div>
              <nav className="hidden lg:flex space-x-4 xl:space-x-6 text-sm">
                <a href="#" className="hover:text-red-200 whitespace-nowrap">
                  Personal
                </a>
                <a href="#" className="hover:text-red-200 whitespace-nowrap">
                  Business
                </a>
                <a href="#" className="hover:text-red-200 whitespace-nowrap">
                  Corporate
                </a>
                <a href="#" className="hover:text-red-200 whitespace-nowrap">
                  Insurance
                </a>
                <a href="#" className="hover:text-red-200 whitespace-nowrap">
                  Partners
                </a>
                <a href="#" className="hover:text-red-200 whitespace-nowrap">
                  Agents
                </a>
                <a href="#" className="hover:text-red-200 whitespace-nowrap">
                  Investors
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
              <Search className="hidden xs:block w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 cursor-pointer hover:text-red-200" />
              {currentUser ? (
                <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
                  <div className="flex items-center space-x-1 bg-red-700 px-1 sm:px-2 lg:px-3 py-0.5 sm:py-1 rounded-full">
                    <User className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4" />
                    <span className="text-xs sm:text-sm font-medium max-w-20 sm:max-w-none truncate">
                      <span className="sm:hidden">{currentUser.name.split(" ")[0]}</span>
                      <span className="hidden sm:inline">{currentUser.name}</span>
                    </span>
                    <span className="text-xs bg-red-800 px-1 py-0.5 rounded-full whitespace-nowrap">
                      {currentLevel || currentUser.role}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white text-red-600 border-white hover:bg-red-50 text-xs px-1 sm:px-2 lg:px-3 h-6 sm:h-8"
                    onClick={onLogout}
                  >
                    <LogOut className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 sm:mr-1" />
                    <span className="hidden sm:inline text-xs">Logout</span>
                  </Button>
                </div>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white text-red-600 border-white hover:bg-red-50 text-xs px-1 sm:px-2 lg:px-3 h-6 sm:h-8"
                >
                  <User className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 sm:mr-1" />
                  <span className="hidden sm:inline text-xs">Login</span>
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-white hover:bg-red-700 p-1 h-6 w-6 sm:h-8 sm:w-8"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-3 h-3 sm:w-4 sm:h-4" /> : <Menu className="w-3 h-3 sm:w-4 sm:h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-red-700 text-white border-t border-red-500">
          <div className="px-3 sm:px-4 py-2 space-y-1">
            <a href="#" className="block py-2 px-2 text-sm hover:text-red-200 hover:bg-red-600 rounded">
              Personal
            </a>
            <a href="#" className="block py-2 px-2 text-sm hover:text-red-200 hover:bg-red-600 rounded">
              Business
            </a>
            <a href="#" className="block py-2 px-2 text-sm hover:text-red-200 hover:bg-red-600 rounded">
              Corporate
            </a>
            <a href="#" className="block py-2 px-2 text-sm hover:text-red-200 hover:bg-red-600 rounded">
              Insurance
            </a>
            <a href="#" className="block py-2 px-2 text-sm hover:text-red-200 hover:bg-red-600 rounded">
              Partners
            </a>
            <a href="#" className="block py-2 px-2 text-sm hover:text-red-200 hover:bg-red-600 rounded">
              Agents
            </a>
            <a href="#" className="block py-2 px-2 text-sm hover:text-red-200 hover:bg-red-600 rounded">
              Investors
            </a>
          </div>
        </div>
      )}

      {/* Secondary Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-10 sm:h-12 lg:h-14">
            <nav className="flex space-x-3 sm:space-x-4 lg:space-x-6 xl:space-x-8 text-xs sm:text-sm text-gray-600 overflow-x-auto scrollbar-hide">
              <a href="#" className="whitespace-nowrap hover:text-red-600 py-2">
                Policy Management
              </a>
              <a href="#" className="whitespace-nowrap hover:text-red-600 py-2">
                Partner Network
              </a>
              <a href="#" className="whitespace-nowrap hover:text-red-600 py-2">
                Renewals
              </a>
              <a href="#" className="whitespace-nowrap hover:text-red-600 py-2">
                Commission Tracking
              </a>
              <a href="#" className="whitespace-nowrap hover:text-red-600 py-2">
                Reports
              </a>
              <a href="#" className="whitespace-nowrap hover:text-red-600 py-2">
                Support
              </a>
            </nav>
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4 text-xs sm:text-sm">
              <div className="flex items-center space-x-1 text-blue-600 cursor-pointer hover:text-blue-800">
                <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden lg:inline">Help Center</span>
              </div>
              <div className="flex items-center space-x-1 text-blue-600 cursor-pointer hover:text-blue-800">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden lg:inline">Locate us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
