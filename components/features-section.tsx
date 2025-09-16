import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Bell, DollarSign, Shield, BarChart3, RefreshCw, UserCheck, FileText, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "Hierarchical Partner Management",
      description: "Manage multi-level partner networks with clear commission structures and performance tracking.",
      color: "text-red-600",
    },
    {
      icon: Bell,
      title: "Automated Renewal Alerts",
      description: "Never miss a renewal with automated notifications 30 days before policy expiration.",
      color: "text-blue-600",
    },
    {
      icon: DollarSign,
      title: "Commission Tracking",
      description: "Real-time commission calculations and payment tracking across all hierarchy levels.",
      color: "text-green-600",
    },
    {
      icon: Shield,
      title: "Policy Activation System",
      description: "Streamlined policy activation workflow with backend team verification and approval.",
      color: "text-purple-600",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards with performance metrics, renewal rates, and revenue insights.",
      color: "text-orange-600",
    },
    {
      icon: RefreshCw,
      title: "Renewal Management",
      description: "Automated renewal pipeline with customer notifications and partner alerts.",
      color: "text-teal-600",
    },
    {
      icon: UserCheck,
      title: "Multi-Level Authentication",
      description: "Secure login with email, username, or phone number with OTP verification.",
      color: "text-indigo-600",
    },
    {
      icon: FileText,
      title: "Policy Portfolio Management",
      description: "Complete policy lifecycle management from application to activation and renewal.",
      color: "text-pink-600",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Instant synchronization across all users with real-time data updates and notifications.",
      color: "text-yellow-600",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features for Insurance Management</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your insurance business efficiently, from partner networks to policy renewals
            and commission tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  <span className="text-lg">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
