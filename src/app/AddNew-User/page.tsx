"use client";

import React, { useState } from "react";
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
  const [platform, setPlatform] = useState<string>("Course");
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
        <main className="flex-1 overflow-y-auto p-6 bg-slate-50/60">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold">Add New User</h1>
                  <p className="mt-2 text-sm text-slate-500">
                    Fill the course, platform, class mode and objection details.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
                <div className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-4">
                      <label className="block text-sm font-semibold text-slate-700">
                        Name
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                      </label>

                      <label className="block text-sm font-semibold text-slate-700">
                        Contact
                        <input
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                      </label>

                      <label className="block text-sm font-semibold text-slate-700">
                        Location
                        <input
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                      </label>

                      <label className="block text-sm font-semibold text-slate-700">
                        Budget
                        <input
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                      </label>
                    </div>

                    <label className="block text-sm font-semibold text-slate-700">
                      Platform
                      <select
                        value={platform}
                        onChange={(event) => setPlatform(event.target.value)}
                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      >
                        <option>Course</option>
                        <option>Facebook</option>
                        <option>Instagram</option>
                        <option>WhatsApp</option>
                        <option>LinkedIn</option>
                      </select>
                    </label>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm font-semibold text-slate-700">
                        Class Mode
                      </p>
                      <div className="mt-3 flex gap-3">
                        <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                          <input
                            type="radio"
                            name="classMode"
                            value="online"
                            checked={classMode === "online"}
                            onChange={() => setClassMode("online")}
                            className="h-4 w-4 text-blue-600 accent-blue-600"
                          />
                          Online
                        </label>
                        <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                          <input
                            type="radio"
                            name="classMode"
                            value="physical"
                            checked={classMode === "physical"}
                            onChange={() => setClassMode("physical")}
                            className="h-4 w-4 text-blue-600 accent-blue-600"
                          />
                          Physical
                        </label>
                      </div>
                    </div>
                    <label className="block text-sm font-semibold text-slate-700">
                      Course
                      <select
                        value={course}
                        onChange={(event) => setCourse(event.target.value)}
                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      >
                        <option>Data Sciences</option>
                        <option>Computer Sciences</option>
                        <option>Information Technology</option>
                        <option>Engineering Mathematics</option>
                        <option>MBBS</option>
                      </select>
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2"></div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-700">
                        Objection / Notes
                      </p>
                      <p className="text-sm text-slate-400">
                        Add any small note or objection before sending to
                        follow-up.
                      </p>
                    </div>
                  </div>
                  <textarea
                    value={objection}
                    onChange={(event) => setObjection(event.target.value)}
                    rows={8}
                    placeholder="Type a short objection note here..."
                    className="w-full resize-none rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                  <div className="mt-4 rounded-2xl bg-slate-100 p-4 text-sm text-slate-600">
                    <p className="font-semibold text-slate-700">
                      Current selection
                    </p>
                    <div className="mt-3 space-y-2 text-sm">
                      <p>
                        <span className="font-semibold text-slate-800">
                          Course:
                        </span>{" "}
                        {course}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-800">
                          Platform:
                        </span>{" "}
                        {platform}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-800">
                          Class Mode:
                        </span>{" "}
                        {classMode === "online" ? "Online" : "Physical"}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-800">
                          Name:
                        </span>{" "}
                        {name}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-800">
                          Contact:
                        </span>{" "}
                        {contact}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-800">
                          Location:
                        </span>{" "}
                        {location}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-800">
                          Budget:
                        </span>{" "}
                        {budget}
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
