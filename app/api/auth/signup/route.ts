import { NextResponse } from "next/server"

// This is a mock database. In a real application, you'd use a proper database.
const users: { email: string; password: string; name: string }[] = []

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json()

    console.log("Signup attempt:", { email, name }) // Logging for debugging

    // Check if user already exists
    if (users.find((user) => user.email === email)) {
      console.log("User already exists:", email)
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // In a real application, you would hash the password before storing it
    users.push({ email, password, name })

    console.log("User created successfully:", name)
    console.log("Current users:", users) // Logging the current users for debugging

    return NextResponse.json({ message: "User created successfully" }, { status: 201 })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

