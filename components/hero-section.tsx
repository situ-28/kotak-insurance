"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react"

interface HeroSectionProps {
  onDemoLogin?: () => void
}

export function HeroSection({ onDemoLogin }: HeroSectionProps) {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Manage your insurance network with <span className="text-red-600">Kotak Life BN</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive insurance management platform with hierarchical partner system, automated renewals, and
                commission tracking.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" onClick={onDemoLogin}>
                Start Demo Login
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Active Policies</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Partners</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Renewal Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Partner Dashboard</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">₹2.4L</div>
                    <div className="text-sm text-gray-600">Monthly Commission</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">24</div>
                    <div className="text-sm text-gray-600">Active Customers</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 text-sm font-medium">RK</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Rahul Kumar</div>
                        <div className="text-sm text-gray-500">Level 2 Agent</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-medium">₹15,000</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">PS</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Priya Sharma</div>
                        <div className="text-sm text-gray-500">Level 1 Agent</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-medium">₹22,500</div>
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
