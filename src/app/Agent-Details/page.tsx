"use client";

import React, { useState } from "react";

import { User, Shield, Briefcase, Mail } from "lucide-react";

import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Navbar";
import { UserContext } from "@/types";

export default function AgentDetails() {
  const [currentUser] = useState<UserContext>({
    name: "Maheesha Nethmina",
    role: "WHATSAPP_AGENT",
  });

  const [activeTab, setActiveTab] = useState<string>("agent-details");

  const agentStats = [
    { label: "Added Users Today", value: "03" },
    { label: "Pending for completion", value: "12" },
    { label: "Total Completed cases", value: "35" },
  ];

  return (
    <div className="flex h-screen bg-slate-100 font-sans overflow-hidden flex-col md:flex-row">
      <Sidebar
        user={currentUser}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar user={currentUser} currentView={activeTab} />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50/60">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Profile Overview*/}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-center gap-5 pb-6 border-b border-slate-100">
                <div className="h-20 w-20 bg-blue-50 border-2 border-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl shadow-sm uppercase">
                  {currentUser.name.charAt(0)}
                </div>

                <div className="text-center sm:text-left space-y-1 flex-1">
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                    {currentUser.name}
                  </h1>
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md inline-block">
                    {currentUser.role.replace("_", " ")}
                  </p>
                </div>
              </div>

              {/* Agent System Parameter */}
              <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-3">
                {agentStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-0.5 shadow-sm"
                  >
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <p className="text-xl font-extrabold text-slate-800 tracking-tight">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* System Profile Details Data Row Matrix Layout */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 sm:p-6 space-y-4">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                Account Credentials & Role Parameters
              </h2>

              <div className="grid gap-4 sm:grid-cols-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center space-x-3 bg-slate-50/60 p-3 rounded-xl border border-slate-100">
                  <User className="h-4 w-4 text-slate-400 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase">
                      User Profile Name
                    </p>
                    <p className="text-slate-700 mt-0.5">{currentUser.name}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-slate-50/60 p-3 rounded-xl border border-slate-100">
                  <Shield className="h-4 w-4 text-slate-400 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase">
                      Role in System
                    </p>
                    <p className="text-slate-700 mt-0.5 capitalize">
                      {currentUser.role.toLowerCase().replace("_", " ")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-slate-50/60 p-3 rounded-xl border border-slate-100">
                  <Briefcase className="h-4 w-4 text-slate-400 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase">
                      Department
                    </p>
                    <p className="text-slate-700 mt-0.5">
                      Call center Department
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-slate-50/60 p-3 rounded-xl border border-slate-100">
                  <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase">
                      Corporate Email Address
                    </p>
                    <p className="text-slate-700 mt-0.5 font-mono">
                      maheesha@sisenco.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
