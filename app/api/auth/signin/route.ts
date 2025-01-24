import { NextResponse } from "next/server"

// This is a mock database. In a real application, you'd use a proper database.
const users: { email: string; password: string; name: string }[] = []

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    console.log("Signin attempt:", { email, password }) // Logging for debugging

    // Check if the user exists in our mock database
    const user = users.find((u) => u.email === email && u.password === password)

    if (!user) {
      console.log("User not found or invalid credentials")
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    console.log("Signin successful:", user.name)
    return NextResponse.json({ name: user.name }, { status: 200 })
  } catch (error) {
    console.error("Signin error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

