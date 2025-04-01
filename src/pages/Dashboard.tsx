import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { Nav } from "@/components/app/nav";
import { Sidebar } from "@/components/app/sidebar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Nav postLogin={true} />

      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-slate-900">
              Welcome to Your Dashboard
            </h1>
            <p className="text-slate-600">
              We've found clinical trials that match your profile.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <h2 className="text-lg font-medium text-slate-900 mb-4">
              Matching Clinical Trials
            </h2>

            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search trials..."
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map((trial) => (
                <div
                  key={trial}
                  className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-slate-900">
                        Clinical Trial #{trial}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        {trial === 1
                          ? "Evaluating new treatments for chronic conditions"
                          : trial === 2
                          ? "Testing innovative therapies for respiratory health"
                          : "Researching advanced care protocols"}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <span className="inline-block px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded-full">
                          {trial === 1
                            ? "Phase II"
                            : trial === 2
                            ? "Phase III"
                            : "Phase I"}
                        </span>
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {trial === 1
                            ? "Remote"
                            : trial === 2
                            ? "In-person"
                            : "Hybrid"}
                        </span>
                      </div>
                    </div>
                    <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                View All Trials
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-medium text-slate-900 mb-4">
                Upcoming Appointments
              </h2>
              <p className="text-slate-600 text-sm">
                No upcoming appointments scheduled.
              </p>
              <button className="mt-4 text-teal-600 hover:text-teal-700 text-sm font-medium">
                Schedule Appointment
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-medium text-slate-900 mb-4">
                Your Care Team
              </h2>
              <p className="text-slate-600 text-sm">
                Connect with healthcare professionals managing your care.
              </p>
              <button className="mt-4 text-teal-600 hover:text-teal-700 text-sm font-medium">
                View Care Team
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
