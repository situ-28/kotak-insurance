"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { X, CheckCircle, FileText, CreditCard } from "lucide-react"

interface PolicyActivationFormProps {
  userId: string
  userName: string
  onClose: () => void
  onSubmit: (policyData: any) => void
}

export function PolicyActivationForm({ userId, userName, onClose, onSubmit }: PolicyActivationFormProps) {
  const [formData, setFormData] = useState({
    policyNumber: "",
    policyType: "",
    premiumAmount: "",
    coverageAmount: "",
    policyTerm: "",
    paymentMode: "",
    startDate: "",
    maturityDate: "",
    applicationRef: "",
    paymentRef: "",
    documentsVerified: false,
    kycCompleted: false,
    medicalCompleted: false,
    notes: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.policyNumber) newErrors.policyNumber = "Policy number is required"
    if (!formData.policyType) newErrors.policyType = "Policy type is required"
    if (!formData.premiumAmount) newErrors.premiumAmount = "Premium amount is required"
    if (!formData.coverageAmount) newErrors.coverageAmount = "Coverage amount is required"
    if (!formData.startDate) newErrors.startDate = "Start date is required"
    if (!formData.applicationRef) newErrors.applicationRef = "Application reference is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit({ ...formData, userId, userName })
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <div>
              <CardTitle className="text-xl">Activate Policy</CardTitle>
              <CardDescription>
                Activate policy for {userName} (ID: {userId})
              </CardDescription>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Policy Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  <FileText className="h-3 w-3 mr-1" />
                  Policy Details
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="policyNumber">Policy Number *</Label>
                  <Input
                    id="policyNumber"
                    value={formData.policyNumber}
                    onChange={(e) => handleInputChange("policyNumber", e.target.value)}
                    placeholder="Enter policy number"
                    className={errors.policyNumber ? "border-red-500" : ""}
                  />
                  {errors.policyNumber && <p className="text-sm text-red-500">{errors.policyNumber}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="policyType">Policy Type *</Label>
                  <Select onValueChange={(value) => handleInputChange("policyType", value)}>
                    <SelectTrigger className={errors.policyType ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select policy type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="term-life">Term Life Insurance</SelectItem>
                      <SelectItem value="whole-life">Whole Life Insurance</SelectItem>
                      <SelectItem value="endowment">Endowment Plan</SelectItem>
                      <SelectItem value="ulip">ULIP</SelectItem>
                      <SelectItem value="pension">Pension Plan</SelectItem>
                      <SelectItem value="child-plan">Child Plan</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.policyType && <p className="text-sm text-red-500">{errors.policyType}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="premiumAmount">Premium Amount (₹) *</Label>
                  <Input
                    id="premiumAmount"
                    type="number"
                    value={formData.premiumAmount}
                    onChange={(e) => handleInputChange("premiumAmount", e.target.value)}
                    placeholder="Enter premium amount"
                    className={errors.premiumAmount ? "border-red-500" : ""}
                  />
                  {errors.premiumAmount && <p className="text-sm text-red-500">{errors.premiumAmount}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverageAmount">Coverage Amount (₹) *</Label>
                  <Input
                    id="coverageAmount"
                    type="number"
                    value={formData.coverageAmount}
                    onChange={(e) => handleInputChange("coverageAmount", e.target.value)}
                    placeholder="Enter coverage amount"
                    className={errors.coverageAmount ? "border-red-500" : ""}
                  />
                  {errors.coverageAmount && <p className="text-sm text-red-500">{errors.coverageAmount}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="policyTerm">Policy Term (Years)</Label>
                  <Select onValueChange={(value) => handleInputChange("policyTerm", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select term" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 Years</SelectItem>
                      <SelectItem value="10">10 Years</SelectItem>
                      <SelectItem value="15">15 Years</SelectItem>
                      <SelectItem value="20">20 Years</SelectItem>
                      <SelectItem value="25">25 Years</SelectItem>
                      <SelectItem value="30">30 Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="paymentMode">Payment Mode</Label>
                  <Select onValueChange={(value) => handleInputChange("paymentMode", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="half-yearly">Half Yearly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Policy Start Date *</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange("startDate", e.target.value)}
                    className={errors.startDate ? "border-red-500" : ""}
                  />
                  {errors.startDate && <p className="text-sm text-red-500">{errors.startDate}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maturityDate">Maturity Date</Label>
                  <Input
                    id="maturityDate"
                    type="date"
                    value={formData.maturityDate}
                    onChange={(e) => handleInputChange("maturityDate", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Application & Payment Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  <CreditCard className="h-3 w-3 mr-1" />
                  Application & Payment
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="applicationRef">Application Reference *</Label>
                  <Input
                    id="applicationRef"
                    value={formData.applicationRef}
                    onChange={(e) => handleInputChange("applicationRef", e.target.value)}
                    placeholder="Enter application reference"
                    className={errors.applicationRef ? "border-red-500" : ""}
                  />
                  {errors.applicationRef && <p className="text-sm text-red-500">{errors.applicationRef}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="paymentRef">Payment Reference</Label>
                  <Input
                    id="paymentRef"
                    value={formData.paymentRef}
                    onChange={(e) => handleInputChange("paymentRef", e.target.value)}
                    placeholder="Enter payment reference"
                  />
                </div>
              </div>
            </div>

            {/* Verification Status */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  Verification Status
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="documentsVerified"
                    checked={formData.documentsVerified}
                    onChange={(e) => handleInputChange("documentsVerified", e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="documentsVerified" className="text-sm">
                    Documents Verified
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="kycCompleted"
                    checked={formData.kycCompleted}
                    onChange={(e) => handleInputChange("kycCompleted", e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="kycCompleted" className="text-sm">
                    KYC Completed
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="medicalCompleted"
                    checked={formData.medicalCompleted}
                    onChange={(e) => handleInputChange("medicalCompleted", e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="medicalCompleted" className="text-sm">
                    Medical Completed
                  </Label>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                placeholder="Enter any additional notes or comments"
                rows={3}
              />
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Activate Policy
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
