import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

const ADMIN_EMAIL = '57prince23@gmail.com';    // Replace with your email
const ADMIN_PASSWORD = 'Prince@123';          // Replace with your password

export async function POST() {
  try {
    await connectDB();
    
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: ADMIN_EMAIL });
    if (existingAdmin) {
      return NextResponse.json(
        { message: 'Admin already exists' },
        { status: 400 }
      );
    }

    // Create admin
    const admin = await Admin.create({
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD
    });

    return NextResponse.json(
      { message: 'Admin created successfully' },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
} 