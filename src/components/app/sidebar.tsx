import { Calendar, FileText, Home, Settings, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 bg-white border-r border-slate-200 h-[calc(100vh-64px)] p-4">
      <nav className="space-y-1">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 text-teal-900 bg-teal-50 px-3 py-2 rounded-md"
        >
          <Home className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          to="#"
          className="flex items-center gap-2 text-slate-600 hover:bg-slate-50 px-3 py-2 rounded-md"
        >
          <Calendar className="h-5 w-5" />
          <span>Appointments</span>
        </Link>
        <Link
          to="#"
          className="flex items-center gap-2 text-slate-600 hover:bg-slate-50 px-3 py-2 rounded-md"
        >
          <FileText className="h-5 w-5" />
          <span>Clinical Trials</span>
        </Link>
        <Link
          to="#"
          className="flex items-center gap-2 text-slate-600 hover:bg-slate-50 px-3 py-2 rounded-md"
        >
          <Users className="h-5 w-5" />
          <span>Care Team</span>
        </Link>
        <Link
          to="#"
          className="flex items-center gap-2 text-slate-600 hover:bg-slate-50 px-3 py-2 rounded-md"
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
};
