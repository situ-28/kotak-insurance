import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, Calendar, DollarSign, Users, FileText, AlertCircle } from "lucide-react"

export function DashboardPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Insurance Management Dashboard</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of our comprehensive platform with real-time insights, automated workflows, and
            intuitive management tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Owner Dashboard */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-red-600" />
                  <span>Revenue Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">₹12.5L</div>
                    <div className="text-sm text-gray-500">This Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">₹145L</div>
                    <div className="text-sm text-gray-500">This Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+18%</div>
                    <div className="text-sm text-gray-500">Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">342</div>
                    <div className="text-sm text-gray-500">Active Policies</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-red-600" />
                  <span>Partner Network</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-medium">AK</span>
                      </div>
                      <div>
                        <div className="font-medium">Amit Kumar</div>
                        <div className="text-sm text-gray-500">Direct Partner • Level 1</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900">₹45,000</div>
                      <div className="text-sm text-gray-500">15 customers</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-medium">SG</span>
                      </div>
                      <div>
                        <div className="font-medium">Sunita Gupta</div>
                        <div className="text-sm text-gray-500">Direct Partner • Level 1</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900">₹38,500</div>
                      <div className="text-sm text-gray-500">12 customers</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notifications & Alerts */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-5 h-5 text-red-600" />
                  <span>Renewal Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-orange-900">Policy Expiring</div>
                      <div className="text-sm text-orange-700">Rajesh Patel - 5 days</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-red-900">Urgent Renewal</div>
                      <div className="text-sm text-red-700">Maya Singh - 2 days</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <Calendar className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-yellow-900">Upcoming</div>
                      <div className="text-sm text-yellow-700">15 renewals this month</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">Send Renewal Reminders</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-red-600" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="text-sm">
                      <span className="font-medium">New policy activated</span>
                      <div className="text-gray-500">Vikram Joshi • 2 hours ago</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="text-sm">
                      <span className="font-medium">Partner added customer</span>
                      <div className="text-gray-500">Amit Kumar • 4 hours ago</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="text-sm">
                      <span className="font-medium">Commission processed</span>
                      <div className="text-gray-500">₹25,000 • 6 hours ago</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
