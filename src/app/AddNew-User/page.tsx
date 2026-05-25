"use client";

import React, { useState } from "react";

import { Save } from "lucide-react";

import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Navbar";
import { UserContext } from "@/types";

export default function AddNewUser() {
  const [currentUser] = useState<UserContext>({
    name: "Maheesha Nethmina",
    role: "WHATSAPP_AGENT",
  });

  const [activeTab, setActiveTab] = useState<string>("add-new-user");
  const [course, setCourse] = useState<string>("Data Sciences");
  const [platform, setPlatform] = useState<string>("Facebook");
  const [classMode, setClassMode] = useState<string>("online");
  const [objection, setObjection] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [budget, setBudget] = useState<string>("");

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
          <div className="max-w-7xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-slate-100 pb-5">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
                    Add New User
                  </h1>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500">
                    Input student inquiry profiles.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center space-x-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-700 transition-colors cursor-pointer shadow-sm shadow-blue-600/10"
                >
                  <Save className="h-3.5 w-3.5" />
                  <span>Save Changes</span>
                </button>
              </div>

              <div className="mt-6 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
                {/*Student Core Identification Attributes */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-4">
                  <h2 className="text-[10px] font-bold text-slate-700 uppercase tracking-wider border-b border-slate-200/60 pb-1.5">
                    Identity & Demographics
                  </h2>

                  <label className="block text-xs font-semibold text-slate-700">
                    Name
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Student full name"
                      className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </label>

                  <label className="block text-xs font-semibold text-slate-700">
                    Contact Number
                    <input
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="Phone number"
                      className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </label>

                  <label className="block text-xs font-semibold text-slate-700">
                    Geographic Location
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="City / Region"
                      className="w-full mt-1.5 rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </label>

                  <label className="block text-xs font-semibold text-slate-700">
                    Allocated Budget
                    <input
                      type="text"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="Budget parameters"
                      className="w-full mt-1.5 rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </label>
                </div>

                {/* Operational Intake details */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-4">
                  <h2 className="text-[10px] font-bold text-slate-700 uppercase tracking-wider border-b border-slate-200/60 pb-1.5">
                    Channel Parameters
                  </h2>

                  <label className="block text-xs font-semibold text-slate-700">
                    Lead Acquisition Platform
                    <select
                      value={platform}
                      onChange={(e) => setPlatform(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-700 outline-none focus:border-blue-500 cursor-pointer"
                    >
                      <option value="Facebook">Facebook</option>
                      <option value="Instagram">Instagram</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="LinkedIn">LinkedIn</option>
                    </select>
                  </label>

                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold text-slate-700">
                      Preferred Class Mode
                    </p>
                    <div className="flex gap-4 pt-1">
                      <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 cursor-pointer">
                        <input
                          type="radio"
                          name="classMode"
                          value="online"
                          checked={classMode === "online"}
                          onChange={() => setClassMode("online")}
                          className="h-4 w-4 text-blue-600 accent-blue-600"
                        />
                        <span>Online</span>
                      </label>
                      <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 cursor-pointer">
                        <input
                          type="radio"
                          name="classMode"
                          value="physical"
                          checked={classMode === "physical"}
                          onChange={() => setClassMode("physical")}
                          className="h-4 w-4 text-blue-600 accent-blue-600"
                        />
                        <span>Physical</span>
                      </label>
                    </div>
                  </div>

                  <label className="block text-xs font-semibold text-slate-700 pt-1">
                    Target Course Offering
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-700 outline-none focus:border-blue-500 cursor-pointer"
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
                    </select>
                  </label>
                </div>

                {/*Objections & Live Verification */}
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm space-y-3">
                    <div className="space-y-0.5">
                      <p className="text-xs font-semibold text-slate-700">
                        Objection / Operational Notes
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Log specific constraints before routing to the calling
                        queue.
                      </p>
                    </div>
                    <textarea
                      value={objection}
                      onChange={(e) => setObjection(e.target.value)}
                      rows={3}
                      placeholder="Type a short objection note here..."
                      className="w-full resize-none rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>

                  {/* Live Selection */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 p-4 shadow-sm text-xs space-y-2 font-medium">
                    <p className="font-bold text-slate-700 border-b border-slate-800 pb-1 text-[11px] uppercase tracking-wider">
                      Live Selection Snapshot
                    </p>
                    <div className="grid grid-cols-2 gap-y-1.5 text-[11px] pt-1">
                      <p className="text-slate-700 font-semibold">Name:</p>{" "}
                      <p className="text-slate-700 font-bold truncate">
                        {name || "—"}
                      </p>
                      <p className="text-slate-7 font-semibold">Contact:</p>{" "}
                      <p className="text-slate-700 font-mono">
                        {contact || "—"}
                      </p>
                      <p className="text-slate-700 font-semibold">Location:</p>{" "}
                      <p className="text-slate-700 truncate">
                        {location || "—"}
                      </p>
                      <p className="text-slate-700 font-semibold">Budget:</p>{" "}
                      <p className="text-slate-700 font-bold">
                        {budget || "—"}
                      </p>
                      <p className="text-slate-700 font-semibold">Platform:</p>{" "}
                      <p className="text-slate-700 font-bold">{platform}</p>
                      <p className="text-slate-700 font-semibold">Mode:</p>{" "}
                      <p className="text-slate-700 font-bold">
                        {classMode === "online" ? "Online" : "Physical"}
                      </p>
                      <p className="text-slate-700 font-semibold">Course:</p>{" "}
                      <p className="text-slate-700 font-bold truncate">
                        {course}
                      </p>
                    </div>
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
