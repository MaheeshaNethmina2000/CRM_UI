"use client";

import React, { useState } from "react";

import { Send, User } from "lucide-react";

import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Navbar";
import { UserContext } from "@/types";

export default function PrivateInternalChatPage() {
  const [currentUser] = useState<UserContext>({
    name: "Maheesha Nethmina",
    role: "WHATSAPP_AGENT",
  });

  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [selectedRecipient, setSelectedRecipient] =
    useState<string>("Amal Perera");
  const [typedMessage, setTypedMessage] = useState<string>("");

  // Sample messages
  const [chatThreads, setChatThreads] = useState([
    {
      id: 1,
      recipient: "Amal Perera",
      role: "Manager",
      text: "Hi Maheesha,",
      time: "01:15 PM",
      isMe: false,
    },
    {
      id: 2,
      recipient: "Amal Perera",
      role: "Manager",
      text: "Hello Hello.",
      time: "01:22 PM",
      isMe: true,
    },
    {
      id: 3,
      recipient: "Kamal Fernando",
      role: "Call Center Agent",
      text: "Hii Hiii",
      time: "11:40 AM",
      isMe: false,
    },
    {
      id: 4,
      recipient: "Nimal Silva",
      role: "Payment Verifier",
      text: "Hiiiiiiii",
      time: "10:05 AM",
      isMe: false,
    },
  ]);

  //filter messages based in person
  const activeConversation = chatThreads.filter(
    (msg) => msg.recipient === selectedRecipient,
  );

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedMessage.trim()) return;

    const newPrivateMsg = {
      id: Date.now(),
      recipient: selectedRecipient,
      role:
        selectedRecipient === "Amal Perera"
          ? "Manager"
          : selectedRecipient === "Kamal Fernando"
            ? "Call Center Agent"
            : "Payment Verifier",
      text: typedMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isMe: true,
    };

    setChatThreads((prev) => [...prev, newPrivateMsg]);
    setTypedMessage("");
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans overflow-hidden flex-col md:flex-row">
      <Sidebar
        user={currentUser}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar user={currentUser} currentView="Internal Private Chat" />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50/60">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl shadow-sm flex items-center justify-between">
              <div className="space-y-0.5">
                <h1 className="text-base font-bold text-slate-800">
                  Private Agent Messaging
                </h1>
                <p className="text-xs text-slate-500">
                  Secure one-to-one communication between team members.
                </p>
              </div>
            </div>

            {/* Main Interactive Private 2-Column Split Interface Layer Container */}
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 items-start">
              {/* COLUMN 1: Recipient Selection Wheel */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-100 bg-slate-50/50 px-5 flex items-center space-x-2">
                  <User className="h-4 w-4 text-slate-400" />
                  <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Select Recipient
                  </h2>
                </div>

                <div className="p-5 space-y-4 text-xs font-semibold text-slate-700">
                  <div className="space-y-1.5">
                    <label className="text-slate-600 font-bold">
                      Active Team Members
                    </label>
                    <select
                      value={selectedRecipient}
                      onChange={(e) => setSelectedRecipient(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 outline-none focus:border-blue-500 cursor-pointer text-xs"
                    >
                      <option value="Amal Perera">Amal Perera (Manager)</option>
                      <option value="Kamal Fernando">
                        Kamal Fernando (Call Center)
                      </option>
                      <option value="Nimal Silva">
                        Nimal Silva (Payment Dept)
                      </option>
                    </select>
                  </div>

                  {/* Recipient Profile */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-2">
                    <div className="h-12 w-12 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center text-blue-600 font-extrabold text-sm mx-auto shadow-sm uppercase">
                      {selectedRecipient.charAt(0)}
                    </div>
                    <div>
                      <p className="text-slate-800 font-extrabold text-sm">
                        {selectedRecipient}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Private Conversation History */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col h-[460px]">
                <div className="p-4 border-b border-slate-100 bg-slate-50/50 px-5 flex items-center justify-between shrink-0">
                  <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
                    <h2 className="text-xs font-bold text-slate-700">
                      Chat history with {selectedRecipient}
                    </h2>
                  </div>
                </div>

                {/* Vertical Scroll Chat  */}
                <div className="flex-1 overflow-y-auto p-5 space-y-3.5 bg-slate-50/30">
                  {activeConversation.length === 0 ? (
                    <div className="text-center py-16 text-slate-400 font-medium border-2 border-dashed border-slate-200 rounded-xl p-6">
                      No private messages logged with this recipient yet.
                    </div>
                  ) : (
                    activeConversation.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex flex-col space-y-1 max-w-[85%] p-3.5 rounded-2xl shadow-sm border ${
                          msg.isMe
                            ? "bg-blue-600 text-white border-blue-700/40 ml-auto rounded-tr-none"
                            : "bg-white text-slate-700 border-slate-100 mr-auto rounded-tl-none"
                        }`}
                      >
                        {!msg.isMe && (
                          <span className="text-[9px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-md border border-blue-100/50 self-start mb-1">
                            {msg.role}
                          </span>
                        )}
                        <p className="text-xs leading-relaxed font-medium">
                          {msg.text}
                        </p>
                        <span
                          className={`text-[9px] font-bold text-right pt-1 block font-mono ${msg.isMe ? "text-blue-200" : "text-slate-400"}`}
                        >
                          {msg.time}
                        </span>
                      </div>
                    ))
                  )}
                </div>

                {/* form input */}
                <div className="p-4 border-t border-slate-100 bg-white shrink-0">
                  <form
                    onSubmit={handleSendMessage}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="text"
                      value={typedMessage}
                      onChange={(e) => setTypedMessage(e.target.value)}
                      placeholder={`Send a private message to ${selectedRecipient}...`}
                      className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all"
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs p-2.5 rounded-xl shadow-md shadow-blue-600/15 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                      title="Send Message"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
