"use client"

import Image from "next/image"
import Link from "next/link"
import { LogOut, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const trips = [
  {
    id: 1,
    name: "Kuala Lumpur",
    flag: "🇲🇾",
    duration: "5 Days",
    date: "24 Dec 2024",
  },
  {
    id: 2,
    name: "Tokyo",
    flag: "🇯🇵",
    duration: "14 Days",
    date: "1 Jan 2025",
  },
  {
    id: 3,
    name: "Bangkok",
    flag: "🇹🇭",
    duration: "8 Days",
    date: "4 Mar 2025",
  },
  {
    id: 4,
    name: "Hanoi",
    flag: "🇻🇳",
    duration: "8 Days",
    date: "19 Jul 2025",
  },
]

export function Sidebar() {
  return (
    <div className="flex w-[280px] flex-col border-r bg-white">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-959bf4923913ea0755838eac45cfa534-hqEEYQwS6Ki69wKJWhjX4HgNGgsdBo.webp"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h2 className="text-sm font-semibold">Cecillia Puni</h2>
            <p className="text-xs text-muted-foreground">Part-time Traveller</p>
          </div>
        </div>
        <Button className="mt-6 w-full bg-[#FF7757] hover:bg-[#FF7757]/90">
          <Plus className="mr-2 h-4 w-4" /> New Trip
        </Button>
      </div>
      <Separator />
      <ScrollArea className="flex-1">
        <div className="p-6">
          <h3 className="mb-4 text-xs font-semibold uppercase text-muted-foreground">TRIPS</h3>
          <div className="space-y-2">
            {trips.map((trip) => (
              <Link key={trip.id} href="#" className="flex items-center gap-3 rounded-lg p-2 hover:bg-muted">
                <span className="text-xl">{trip.flag}</span>
                <div>
                  <h4 className="text-sm font-medium">{trip.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {trip.duration}, {trip.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <h3 className="mb-4 mt-8 text-xs font-semibold uppercase text-muted-foreground">GENERAL</h3>
          <div className="space-y-2">
            <Link href="#" className="flex items-center gap-3 rounded-lg bg-muted p-2">
              <div className="rounded-md bg-background p-1">
                <svg
                  className=" h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect height="18" rx="2" width="18" x="3" y="3" />
                  <line x1="9" x2="15" y1="15" y2="15" />
                </svg>
              </div>
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 rounded-lg p-2 hover:bg-muted">
              <div className="rounded-md bg-background p-1">
                <svg
                  className=" h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                </svg>
              </div>
              <div className="flex items-center justify-between flex-1">
                <span className="text-sm font-medium">Itinerary</span>
                <span className="rounded bg-primary px-1.5 py-0.5 text-[10px] font-semibold text-primary-foreground">
                  NEW!
                </span>
              </div>
            </Link>
          </div>
          <h3 className="mb-4 mt-8 text-xs font-semibold uppercase text-muted-foreground">DISCOVER</h3>
          <div className="space-y-2">
            <Link href="#" className="flex items-center gap-3 rounded-lg p-2 hover:bg-muted">
              <div className="rounded-md bg-background p-1">
                <svg
                  className=" h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <span className="text-sm font-medium">Explore</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 rounded-lg p-2 hover:bg-muted">
              <div className="rounded-md bg-background p-1">
                <svg
                  className=" h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>
              <span className="text-sm font-medium">Guide</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 rounded-lg p-2 hover:bg-muted">
              <div className="rounded-md bg-background p-1">
                <svg
                  className=" h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span className="text-sm font-medium">Friends</span>
            </Link>
          </div>
        </div>
      </ScrollArea>
      <Separator />
      <div className="p-4">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}

