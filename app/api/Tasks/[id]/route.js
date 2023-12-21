import Task from "@/app/(models)/Task";
import { NextResponse } from "next/server";

// GET SINGLE TASK
export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundTask = await Task.findOne({ _id: id });
    return NextResponse.json({ foundTask }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

//   UPDATE TASK
export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const taskData = body.formData;

    const updatedTaskData = await Task.findByIdAndUpdate(id, {
      ...taskData,
    });
    return NextResponse.json({ message: "Ticket Updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

// DELETE TASK
export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Task.findByIdAndDelete(id);
    return NextResponse.json({ message: "Task Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
