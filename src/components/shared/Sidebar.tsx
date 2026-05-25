"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  LayoutDashboard,
  UserSquare,
  LogOut,
  ChevronLeft,
  ChevronRight,
  User,
  MessageSquare,
} from "lucide-react";

import { UserContext } from "@/types";

interface SidebarProps {
  user: UserContext;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({
  user,
  activeTab,
  setActiveTab,
}: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/",
    },
    {
      id: "agent-details",
      label: "Agent Details",
      icon: UserSquare,
      href: "/Agent-Details",
    },
    {
      id: "Internal Chat",
      label: "Internal Chat",
      icon: MessageSquare,
      href: "/InternalChat",
    },
  ];

  return (
    <aside
      className={`bg-slate-200 border-r border-slate-200 flex flex-col h-screen sticky top-0 transition-all duration-300 relative hidden md:flex ${
        isExpanded ? "w-64" : "w-20"
      }`}
    >
      {/* Sleek Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-20 bg-white border border-slate-700 text-slate-500 hover:text-blue-600 h-6 w-6 rounded-full flex items-center justify-center shadow-sm z-50 transition-colors cursor-pointer"
        aria-label="Toggle Sidebar"
      >
        {isExpanded ? (
          <ChevronLeft className="h-3 w-3" />
        ) : (
          <ChevronRight className="h-3 w-3" />
        )}
      </button>

      {/*Header*/}
      <div
        className={`p-3 sm:p-4 bg-slate-200 text-white flex flex-col items-center justify-center text-center relative overflow-hidden transition-all duration-300 ${
          isExpanded ? "h-40 sm:h-44" : "h-20 sm:h-24"
        }`}
      >
        <div
          className={`rounded-full bg-slate-200 border-2 border-blue-400/40 flex items-center justify-center overflow-hidden transition-all duration-300 shadow-md ${
            isExpanded
              ? "h-14 w-14 sm:h-16 sm:w-16 mb-3"
              : "h-9 w-9 sm:h-10 sm:w-10"
          }`}
        >
          <div className="w-full h-full bg-gradient-to-tr from-slate-800 to-slate-700 flex items-center justify-center text-blue-400 font-semibold">
            <User
              className={isExpanded ? "h-6 w-6" : "h-3.5 w-3.5 sm:h-4 sm:w-4"}
            />
          </div>
        </div>

        {isExpanded && (
          <div className="w-full px-2">
            <h3 className="text-xs sm:text-sm font-semibold tracking-wide text-slate-700 truncate">
              {user.name}
            </h3>
            <p className="text-[9px] sm:text-[10px] font-medium tracking-wider text-slate-400 uppercase mt-0.5">
              {user.role}
            </p>
          </div>
        )}
      </div>

      <nav className="flex-1 p-2 sm:p-3 space-y-1 sm:space-y-1.5 mt-3 sm:mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <Link
              href={item.href}
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center rounded-lg sm:rounded-xl text-xs font-semibold tracking-wide transition-all ${
                isExpanded
                  ? "px-3 sm:px-4 py-2 sm:py-2.5 space-x-2 sm:space-x-3.5 justify-start"
                  : "p-2 sm:p-2.5 justify-center"
              } ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20 font-bold"
                  : "text-slate-500 hover:bg-slate-200/60 hover:text-slate-800"
              }`}
              title={!isExpanded ? item.label : undefined}
            >
              <Icon
                className={`h-4 w-4 shrink-0 ${isActive ? "scale-105" : "opacity-80"}`}
              />
              {isExpanded && (
                <span className="truncate text-xs">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/*Footer*/}
      <div className="p-2 sm:p-3 border-t border-slate-200/60 bg-slate-100/40">
        <button
          className={`w-full flex items-center rounded-lg sm:rounded-xl text-xs font-semibold tracking-wide text-rose-500 hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer ${
            isExpanded
              ? "px-3 sm:px-4 py-2 sm:py-2.5 space-x-2 sm:space-x-3"
              : "p-2 sm:p-2.5 justify-center"
          }`}
          title="Logout"
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {isExpanded && <span className="text-xs">Logout</span>}
        </button>
      </div>
    </aside>
  );
}
