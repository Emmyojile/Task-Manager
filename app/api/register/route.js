import User from "../../(models)/User"
// import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { email, password } = await request.json();

  // await connect();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("user is registered", { status: 200 });
  } catch (err) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};

// import User from "../../(models)/User"; // Import the User model
// import bcrypt from "bcrypt"; // Import bcrypt for password hashing
// import jwt from "jsonwebtoken"; // Import jsonwebtoken for generating JWTs
// import { NextResponse } from "next/server";


// // export async function POST(req) {
// //   try {
// //     const body = await req.json();
// //     console.log(body.formData)
// //     const userData = body.formData;
// //     const newUser = await User.create(userData);
// //     console.log(newUser); // Check if `newUser` has expected properties
// //     return NextResponse.json({ message: "User created" }, { status: 201 });
// //   } catch (error) {
// //     console.error("Error creating user:", error);
// //     return NextResponse.json({ error: "Failed to create user" }, { status: 400 });
// //   }
// // }

// export async function POST(req) {
//   console.log("Registration Route Hit!!");
//   try {
//     const body = await req.json();
//     const userData = body.formData;
//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(userData.password, 10);
//     userData.password = hashedPassword;

//     const newUser = await User.create(userData);

//     // Generate a JWT for the new user
//     const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h", // Customize expiration time as needed
//     });

//     return NextResponse.json(
//       { message: "User Registered", token, user: newUser },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error registering user:", error);
//     return NextResponse.json(
//       { message: "Error registering user", error: error.message },
//       { status: 500 }
//     );
//   }
// }


/*
import User from "../../(models)/User"; // Import the User model
import bcrypt from "bcrypt"; // Import bcrypt for password hashing
import jwt from "jsonwebtoken"; // Import jsonwebtoken for generating JWTs
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    const body = await req.json();
    console.log(req.body) 
    console.log("Received email:", body.formData.email);
    console.log("Received password:", body.formData.password);
    const { email, password } = body;

    const user = await User.findOne({ email });
    console.log("Found user:", user);

    // Temporarily remove password hashing for testing:
    if (!user || password !== user.password) { // Simplified password check
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
    }

    // Placeholder for token generation (remove for now):
    const token = "temporary-token";

    return NextResponse.json({ message: "Login Successful", token }, { status: 200 });
  } catch (error) {
    console.error("Error logging in user:", error);
    return NextResponse.json(
      { message: "Error logging in user", error: error.message },
      { status: 500 }
    );
  }
}

// export async function POST(req) {
//   console.log("Login Route Hit!!");
//   try {
//     const body = await req.json();
//     const { email, password } = body.formData;

//     const user = await User.findOne({ email });

//     if (!user) {
//       return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
//     }

//     // Generate a JWT for the authenticated user
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h", // Customize expiration time as needed
//     });

//     return NextResponse.json({ message: "Login Successful", token }, { status: 200 });
//   } catch (error) {
//     console.error("Error logging in user:", error);
//     return NextResponse.json(
//       { message: "Error logging in user", error: error.message },
//       { status: 500 }
//     );
//   }
// }

*/
