
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const response = await fetch("https://www.saveform.io/api/submit/83019326-119d-42af-91bd-f0bb134660ac", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer sf_live_7f0d6bfe4734da38007b7a29c5c4f123ae4173cd3a00a881",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 });
    } else {
      const errorData = await response.text();
      console.error("Saveform error:", errorData);
      return NextResponse.json({ message: "Failed to submit form" }, { status: response.status });
    }
  } catch (error) {
    console.error("Internal API error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
