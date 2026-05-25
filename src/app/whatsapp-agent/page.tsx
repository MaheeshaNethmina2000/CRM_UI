"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  Users,
  CheckCircle2,
  UserPlus,
  Search,
  RefreshCw,
  Download,
  ChevronLeft,
  ChevronRight,
  Check,
  AlertCircle,
  Archive,
  ArchiveX,
} from "lucide-react";

import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Navbar";
import { UserContext } from "@/types";

export default function WhatsAppAgentDashboard() {
  const [currentUser] = useState<UserContext>({
    name: "Maheesha Nethmina",
    role: "WHATSAPP_AGENT",
  });

  const [activeTab, setActiveTab] = useState<string>("dashboard");

  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "Saman Perera",
      phone: "0770123456",
      location: "Matara, Sri Lanka",
      course: "Data Sciences",
      platform: "WhatsApp",
      classMode: "Online",
      budget: "Rs 5,200",
      objection: "",
      isCompleted: false,
      isClosed: false,
    },
    {
      id: 2,
      name: "Kamal Perera",
      phone: "0712345678",
      location: "Wattala, Sri Lanka",
      course: "Computer Sciences",
      platform: "Facebook",
      classMode: "Physical",
      budget: "Rs 3,500",
      objection: "Fee too high",
      isCompleted: true,
      isClosed: false,
    },
    {
      id: 3,
      name: "Arjun Ranathunga",
      phone: "0776543210",
      location: "Kaluthara, Sri Lanka",
      course: "Information Technology",
      platform: "Instagram",
      classMode: "Online",
      budget: "Rs 2,800",
      objection: "",
      isCompleted: false,
      isClosed: true,
    },
    {
      id: 4,
      name: "Supun Perera",
      phone: "0773851000",
      location: "Galle, Sri Lanka",
      course: "Cyber Security",
      platform: "LinkedIn",
      classMode: "Physical",
      budget: "Rs 4,100",
      objection: "Wants night batch",
      isCompleted: false,
      isClosed: false,
    },
  ]);

  // for cell data grid updates
  const handleLeadFieldUpdate = (
    id: number,
    field: string,
    value: string | boolean,
  ) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === id ? { ...lead, [field]: value } : lead,
      ),
    );
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans overflow-hidden flex-col md:flex-row">
      <Sidebar
        user={currentUser}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar user={currentUser} currentView={activeTab} />

        <main className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 bg-slate-50/60">
          <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
            {/* KPI Banner Metrics Row */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 flex-1">
                {[
                  {
                    label: "Total Users",
                    value: "1,248",
                    meta: "+12%",
                    trendUp: true,
                    icon: Users,
                    color: "text-blue-600 bg-blue-50",
                  },
                  {
                    label: "Completed",
                    value: "780",
                    meta: "+5",
                    trendUp: true,
                    icon: CheckCircle2,
                    color: "text-emerald-600 bg-emerald-50",
                  },
                ].map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={i}
                      className="bg-white border border-slate-100 rounded-lg sm:rounded-2xl p-3 sm:p-4 flex items-center justify-between shadow-sm"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3.5 min-w-0">
                        <div
                          className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl shrink-0 ${card.color}`}
                        >
                          <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                        </div>
                        <div className="space-y-0.5 min-w-0">
                          <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            {card.label}
                          </p>
                          <h3 className="text-base sm:text-lg font-extrabold text-slate-800 tracking-tight">
                            {card.value}
                          </h3>
                        </div>
                      </div>
                      <div className="pl-2 shrink-0">
                        {card.trendUp && (
                          <span className="text-[9px] sm:text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md whitespace-nowrap">
                            {card.meta}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link
                href="/AddNew-User"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg sm:rounded-xl shadow-md shadow-blue-600/15 flex items-center justify-center space-x-2 shrink-0 transition-colors w-full lg:w-auto cursor-pointer"
              >
                <UserPlus className="h-4 w-4" />
                <span>Add New User</span>
              </Link>
            </div>

            {/*  Filters*/}
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white border border-slate-100 rounded-lg sm:rounded-2xl p-3 flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between shadow-sm">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold text-slate-600 overflow-x-auto">
                  <span className="text-slate-400 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider pl-1 shrink-0">
                    Quick Filters:
                  </span>
                  <select className="bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 font-medium text-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer text-xs">
                    <option>Added Date (All)</option>
                  </select>
                  <select className="bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 font-medium text-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer text-xs">
                    <option>Completed Cases (All)</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2 shrink-0">
                  <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg sm:rounded-xl border border-slate-200 transition-colors cursor-pointer">
                    <RefreshCw className="h-3.5 w-3.5" />
                  </button>
                  <button className="flex items-center space-x-1.5 px-3 py-1.5 border border-slate-200 rounded-lg sm:rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer">
                    <Download className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Export</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <div className="relative flex-1 w-full sm:w-auto">
                  <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search users, courses..."
                    className="w-full bg-white border border-slate-300 shadow-sm rounded-lg sm:rounded-2xl pl-9 sm:pl-11 pr-3 sm:pr-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500"
                  />
                </div>
                <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl flex items-center space-x-2 shrink-0 transition-colors cursor-pointer border border-slate-300 w-full sm:w-auto">
                  <span>Search</span>
                </button>
              </div>
            </div>

            {/* main content */}
            <div className="bg-white border border-slate-200 rounded-lg sm:rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-full">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50/50 text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <th className="px-3 md:px-6 py-4">Name</th>
                      <th className="px-3 md:px-6 py-4">Contact</th>
                      <th className="px-3 md:px-6 py-4 hidden sm:table-cell">
                        Location
                      </th>
                      <th className="px-3 md:px-6 py-4">Course</th>
                      <th className="px-3 md:px-6 py-4">Platform</th>
                      <th className="px-3 md:px-6 py-4">Budget</th>
                      <th className="px-3 md:px-6 py-4">Class Mode</th>
                      <th className="px-3 md:px-6 py-4">Objections</th>
                      <th className="px-3 md:px-6 py-4 text-center">
                        Mark For Call
                      </th>
                      <th className="px-3 md:px-6 py-4 text-center">
                        Mark For Close
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs text-slate-600 font-medium">
                    {leads.map((lead) => (
                      <tr
                        key={lead.id}
                        className="hover:bg-slate-50/40 transition-colors"
                      >
                        <td className="px-3 md:px-6 py-4 text-slate-800 font-bold whitespace-nowrap">
                          {lead.name}
                        </td>
                        <td className="px-3 md:px-6 py-4 text-slate-500 font-mono tracking-tight">
                          {lead.phone}
                        </td>
                        <td className="px-3 md:px-6 py-4 hidden sm:table-cell text-slate-400 font-medium whitespace-nowrap">
                          {lead.location}
                        </td>

                        {/* course selection */}
                        <td className="px-3 md:px-6 py-4">
                          <select
                            value={lead.course}
                            onChange={(e) =>
                              handleLeadFieldUpdate(
                                lead.id,
                                "course",
                                e.target.value,
                              )
                            }
                            className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 font-bold text-slate-700 cursor-pointer text-[11px] focus:outline-none focus:border-blue-500 min-w-[130px]"
                          >
                            <option value="Data Sciences">Data Sciences</option>
                            <option value="Computer Sciences">
                              Computer Sciences
                            </option>
                            <option value="Information Technology">
                              Information Technology
                            </option>
                            <option value="Engineering Mathematics">
                              Engineering Mathematics
                            </option>
                            <option value="MBBS">MBBS</option>
                            <option value="Cyber Security">
                              Cyber Security
                            </option>
                            <option value="Cloud Computing">
                              Cloud Computing
                            </option>
                            <option value="Full Stack Web Dev">
                              Full Stack Web Dev
                            </option>
                          </select>
                        </td>

                        {/* paltform */}
                        <td className="px-3 md:px-6 py-4">
                          <select
                            value={lead.platform}
                            onChange={(e) =>
                              handleLeadFieldUpdate(
                                lead.id,
                                "platform",
                                e.target.value,
                              )
                            }
                            className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 font-bold text-slate-700 cursor-pointer text-[11px] focus:outline-none focus:border-blue-500 min-w-[110px]"
                          >
                            <option value="Facebook">Facebook</option>
                            <option value="Instagram">Instagram</option>
                            <option value="WhatsApp">WhatsApp</option>
                            <option value="LinkedIn">LinkedIn</option>
                          </select>
                        </td>

                        <td className="px-3 md:px-6 py-4 text-slate-900 font-extrabold whitespace-nowrap">
                          {lead.budget}
                        </td>

                        {/* class mode */}
                        <td className="px-3 md:px-6 py-4">
                          <select
                            value={lead.classMode}
                            onChange={(e) =>
                              handleLeadFieldUpdate(
                                lead.id,
                                "classMode",
                                e.target.value,
                              )
                            }
                            className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 font-bold text-slate-700 cursor-pointer text-[11px] focus:outline-none focus:border-blue-500"
                          >
                            <option value="Online">Online</option>
                            <option value="Physical">Physical</option>
                          </select>
                        </td>

                        {/* objections */}
                        <td className="px-3 md:px-6 py-4">
                          <input
                            type="text"
                            value={lead.objection}
                            onChange={(e) =>
                              handleLeadFieldUpdate(
                                lead.id,
                                "objection",
                                e.target.value,
                              )
                            }
                            placeholder="Add note..."
                            className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 font-medium text-slate-700 text-[11px] focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 w-full min-w-[120px]"
                          />
                        </td>

                        {/* mark for calles */}
                        <td className="px-3 md:px-6 py-4 text-center">
                          <button
                            onClick={() =>
                              handleLeadFieldUpdate(
                                lead.id,
                                "isCompleted",
                                !lead.isCompleted,
                              )
                            }
                            className={`mx-auto h-7 px-3 flex items-center justify-center space-x-1 rounded-xl text-[10px] font-bold border transition-all cursor-pointer ${
                              lead.isCompleted
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200 shadow-sm shadow-emerald-500/5"
                                : "bg-slate-50 text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-600"
                            }`}
                            title={
                              lead.isCompleted
                                ? "Completed"
                                : "Mark as completed"
                            }
                          >
                            {lead.isCompleted ? (
                              <Check className="h-3 w-3 shrink-0" />
                            ) : (
                              <AlertCircle className="h-3 w-3 shrink-0" />
                            )}
                            <span>
                              {lead.isCompleted ? "Completed" : "Pending"}
                            </span>
                          </button>
                        </td>

                        {/*mark for closed */}
                        <td className="px-3 md:px-6 py-4 text-center">
                          <button
                            onClick={() =>
                              handleLeadFieldUpdate(
                                lead.id,
                                "isClosed",
                                !lead.isClosed,
                              )
                            }
                            className={`mx-auto h-7 px-3 flex items-center justify-center space-x-1 rounded-xl text-[10px] font-bold border transition-all cursor-pointer ${
                              lead.isClosed
                                ? "bg-rose-50 text-rose-700 border-rose-200 shadow-sm shadow-rose-500/5"
                                : "bg-slate-50 text-slate-500 border-slate-200 hover:border-rose-300 hover:text-rose-600"
                            }`}
                            title={lead.isClosed ? "Closed" : "Mark as closed"}
                          >
                            {lead.isClosed ? (
                              <Archive className="h-3 w-3 shrink-0" />
                            ) : (
                              <ArchiveX className="h-3 w-3 shrink-0" />
                            )}
                            <span>{lead.isClosed ? "Closed" : "Active"}</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Data Pagination */}
              <div className="p-3 sm:p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between bg-white text-xs font-semibold text-slate-500 gap-3 sm:gap-0">
                <span className="text-[11px] sm:text-xs">
                  Showing 1-4 of 1,248 users
                </span>
                <div className="flex items-center space-x-1">
                  <button className="p-1.5 sm:p-2 border border-slate-200 text-slate-400 hover:text-slate-600 rounded-lg sm:rounded-xl hover:bg-slate-50 cursor-pointer">
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </button>
                  <button className="h-7 w-7 sm:h-8 sm:w-8 bg-blue-600 text-white rounded-lg sm:rounded-xl font-bold flex items-center justify-center shadow-sm shadow-blue-600/10 cursor-pointer text-xs">
                    1
                  </button>
                  <button className="h-7 w-7 sm:h-8 sm:w-8 border border-slate-200 text-slate-600 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-slate-50 cursor-pointer text-xs hidden sm:flex">
                    2
                  </button>
                  <button className="h-7 w-7 sm:h-8 sm:w-8 border border-slate-200 text-slate-600 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-slate-50 cursor-pointer text-xs hidden sm:flex">
                    3
                  </button>
                  <button className="p-1.5 sm:p-2 border border-slate-200 text-slate-400 hover:text-slate-600 rounded-lg sm:rounded-xl hover:bg-slate-50 cursor-pointer">
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
