"use client";

import React from "react";

import { Bell } from "lucide-react";

import { UserContext } from "@/types";

interface NavbarProps {
  user: UserContext;
  currentView: string;
}

export default function Navbar({ user, currentView }: NavbarProps) {
  return (
    <header className="h-14 sm:h-16 border-b border-slate-200 bg-white px-3 sm:px-6 flex items-center justify-between sticky top-0 z-40 shadow-sm">
      {/* Left Portion: Empty */}
      <div />

      {/* Right Portion: Notification Icon and User Info */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Notification Icon */}
        <button className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer relative">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-blue-600 rounded-full ring-2 ring-white" />
        </button>

        {/* User Info */}
        <div className="flex items-center space-x-1.5 sm:space-x-2.5">
          <p className="text-xs sm:text-xs font-bold text-slate-800 hidden sm:block">{user.name}</p>

          {/* Avatar */}
          <div className="h-7 w-7 sm:h-8 sm:w-8 bg-blue-50 rounded-full border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs uppercase shadow-sm">
            {user.name.charAt(0)}
          </div>
        </div>
      </div>
    </header>
  );
}
