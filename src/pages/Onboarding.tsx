import type React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Nav } from "@/components/app/nav";

export const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "Jane A. Smith",
    medicalRecordNumber: "MRN78901234",
    dateOfBirth: "1985-06-15",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit this data to your backend
    // Move to next step or redirect
    setStep(2);
    // Simulate a delay before redirecting to dashboard
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Nav postLogin={true} />
      <main className="container mx-auto py-8 px-4 md:py-16">
        {/* Progress indicator */}

        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {step === 1 ? (
            <div className="p-6 md:p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-teal-900 mb-2">
                  You're almost there!
                </h1>
                <p className="text-slate-600">
                  Please confirm your information below to help us match you
                  with relevant clinical trials.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-slate-700">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="medicalRecordNumber"
                    className="text-slate-700"
                  >
                    Medical Record Number
                  </Label>
                  <Input
                    id="medicalRecordNumber"
                    name="medicalRecordNumber"
                    value={formData.medicalRecordNumber}
                    onChange={handleChange}
                    placeholder="e.g. MRN12345678"
                    required
                    className="w-full"
                  />
                  <p className="text-xs text-slate-500">
                    Your medical record number can be found on your hospital ID
                    card or patient portal.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth" className="text-slate-700">
                    Date of Birth
                  </Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                  <h3 className="text-teal-800 font-medium mb-2">
                    How we match you to clinical trials
                  </h3>
                  <p className="text-sm text-teal-700">
                    We use your basic information to identify potential clinical
                    trials that match your profile. Your data is securely
                    processed and only used for matching purposes.
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md flex items-center justify-center gap-2"
                >
                  Continue to Matching
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>
          ) : (
            <div className="p-6 md:p-8 text-center">
              <div className="flex flex-col items-center justify-center py-8">
                <CheckCircle2 className="h-16 w-16 text-teal-600 mb-4" />
                <h2 className="text-2xl font-bold text-teal-900 mb-2">
                  Information Received!
                </h2>
                <p className="text-slate-600 mb-4">
                  We're matching you with clinical trials based on your profile.
                </p>
                <div className="w-16 h-1 bg-slate-200 rounded-full mb-4 relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-teal-600 animate-[progress_2s_ease-in-out]"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <p className="text-sm text-slate-500">
                  Redirecting to your dashboard...
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="max-w-xl mx-auto mt-6 text-center">
          <p className="text-sm text-slate-500">
            Need help?{" "}
            <Link to="#" className="text-teal-600 hover:underline">
              Contact support
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};
