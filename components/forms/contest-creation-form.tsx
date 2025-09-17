"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Trophy, Target, IndianRupee, Clock } from "lucide-react"

interface ContestFormData {
  title: string
  description: string
  targetAmount: string
  prizeAmount: string
  startDate: string
  endDate: string
  contestType: string
}

interface ContestCreationFormProps {
  onSubmit: (contest: ContestFormData) => void
  onCancel: () => void
}

export default function ContestCreationForm({ onSubmit, onCancel }: ContestCreationFormProps) {
  const [formData, setFormData] = useState<ContestFormData>({
    title: "",
    description: "",
    targetAmount: "",
    prizeAmount: "",
    startDate: "",
    endDate: "",
    contestType: "monthly",
  })

  const [errors, setErrors] = useState<Partial<ContestFormData>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    const newErrors: Partial<ContestFormData> = {}
    if (!formData.title) newErrors.title = "Contest title is required"
    if (!formData.targetAmount) newErrors.targetAmount = "Target amount is required"
    if (!formData.prizeAmount) newErrors.prizeAmount = "Prize amount is required"
    if (!formData.startDate) newErrors.startDate = "Start date is required"
    if (!formData.endDate) newErrors.endDate = "End date is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onSubmit(formData)
  }

  const handleInputChange = (field: keyof ContestFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="bg-red-600 text-white">
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-6 w-6" />
            Create New Contest
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contest Basic Info */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-sm font-medium">
                  Contest Title *
                </Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="e.g., Q4 Sales Championship"
                  className={errors.title ? "border-red-500" : ""}
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
              </div>

              <div>
                <Label htmlFor="description" className="text-sm font-medium">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Describe the contest rules and objectives..."
                  rows={3}
                />
              </div>
            </div>

            {/* Contest Targets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="targetAmount" className="text-sm font-medium flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Target Amount (₹) *
                </Label>
                <Input
                  id="targetAmount"
                  type="number"
                  value={formData.targetAmount}
                  onChange={(e) => handleInputChange("targetAmount", e.target.value)}
                  placeholder="1000000"
                  className={errors.targetAmount ? "border-red-500" : ""}
                />
                {errors.targetAmount && <p className="text-red-500 text-sm mt-1">{errors.targetAmount}</p>}
              </div>

              <div>
                <Label htmlFor="prizeAmount" className="text-sm font-medium flex items-center gap-2">
                  <IndianRupee className="h-4 w-4" />
                  Prize Pool (₹) *
                </Label>
                <Input
                  id="prizeAmount"
                  type="number"
                  value={formData.prizeAmount}
                  onChange={(e) => handleInputChange("prizeAmount", e.target.value)}
                  placeholder="50000"
                  className={errors.prizeAmount ? "border-red-500" : ""}
                />
                {errors.prizeAmount && <p className="text-red-500 text-sm mt-1">{errors.prizeAmount}</p>}
              </div>
            </div>

            {/* Contest Duration */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="contestType" className="text-sm font-medium flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Contest Type
                </Label>
                <Select value={formData.contestType} onValueChange={(value) => handleInputChange("contestType", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly Contest</SelectItem>
                    <SelectItem value="monthly">Monthly Contest</SelectItem>
                    <SelectItem value="quarterly">Quarterly Contest</SelectItem>
                    <SelectItem value="custom">Custom Duration</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="startDate" className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Start Date *
                </Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange("startDate", e.target.value)}
                  className={errors.startDate ? "border-red-500" : ""}
                />
                {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
              </div>

              <div>
                <Label htmlFor="endDate" className="text-sm font-medium">
                  End Date *
                </Label>
                <Input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange("endDate", e.target.value)}
                  className={errors.endDate ? "border-red-500" : ""}
                />
                {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>}
              </div>
            </div>

            {/* Contest Rules Info */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Contest Rules:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Only Level 1, Level 2, and Level 3 partners can participate</li>
                <li>• Combined sales of all partners in each level will be counted</li>
                <li>• First level to reach the target amount wins the contest</li>
                <li>• Prize money will be equally divided among all partners in the winning level</li>
                <li>• Contest progress is updated in real-time</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-red-600 hover:bg-red-700">
                Create Contest
              </Button>
              <Button type="button" variant="outline" onClick={onCancel} className="flex-1 bg-transparent">
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
