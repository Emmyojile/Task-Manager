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

// export async function GET(req) {
//   console.log("All Tasks route!!");
//   try {
//     const { status } = req.query;
//     const tasks = await Task.find({ status }); // Filter based on status

//     return NextResponse.json({ tasks }, { status: 200 })
//   } catch (error) {
//     console.error("Error getting Tasks:", error);
//     return NextResponse.json(
//       { message: "Error getting Tasks", error: error.message },
//       { status: 500 }
//     );
//   }
// }
export async function GET(req) {
  console.log("All Tasks route!!");
  try {
    const tasks = await Task.find();

    return NextResponse.json({ tasks }, { status: 200 });
  } catch (error) {
    console.error("Error getting Tasks:", error);
    return NextResponse.json(
      { message: "Error getting Tasks", error: error.message },
      { status: 500 }
    );
  }
}