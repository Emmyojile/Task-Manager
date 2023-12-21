import Task from "../../(models)/Task";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("Task Route Hit!!");
  try {
    const body = await req.json();
    const taskData = body.formData;
    await Task.create(taskData);

    return NextResponse.json({ message: "Task Created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating Task:", error);
    return NextResponse.json(
      { message: "Error creating Task", error: error.message },
      { status: 500 }
    );
  }
}