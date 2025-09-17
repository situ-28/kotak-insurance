"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react"

interface HeroSectionProps {
  onDemoLogin?: () => void
}

export function HeroSection({ onDemoLogin }: HeroSectionProps) {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-6 sm:py-8 lg:py-12 xl:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight text-balance">
                Manage your insurance network with <span className="text-red-600">Kotak Life BN</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed text-pretty">
                Comprehensive insurance management platform with hierarchical partner system, automated renewals, and
                commission tracking.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto text-sm sm:text-base"
                onClick={onDemoLogin}
              >
                Start Demo Login
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent w-full sm:w-auto text-sm sm:text-base"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 lg:pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-1 sm:mb-2">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-red-600" />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Active Policies</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-1 sm:mb-2">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-red-600" />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">150+</div>
                <div className="text-xs sm:text-sm text-gray-600">Partners</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-1 sm:mb-2">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-red-600" />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">98%</div>
                <div className="text-xs sm:text-sm text-gray-600">Renewal Rate</div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-200">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Partner Dashboard</h3>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-red-600">₹2.4L</div>
                    <div className="text-xs sm:text-sm text-gray-600">Monthly Commission</div>
                  </div>
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600">24</div>
                    <div className="text-xs sm:text-sm text-gray-600">Active Customers</div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 text-xs sm:text-sm font-medium">RK</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-xs sm:text-sm">Rahul Kumar</div>
                        <div className="text-xs text-gray-500">Level 2 Agent</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-medium text-xs sm:text-sm">₹15,000</div>
                  </div>

                  <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-xs sm:text-sm font-medium">PS</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-xs sm:text-sm">Priya Sharma</div>
                        <div className="text-xs text-gray-500">Level 1 Agent</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-medium text-xs sm:text-sm">₹22,500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
