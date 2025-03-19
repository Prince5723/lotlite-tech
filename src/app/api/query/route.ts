// src/app/api/query/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Query from '@/models/Query';

export async function GET() {
  try {
    await dbConnect();
    
    // Get all queries, sorted by most recent first
    const queries = await Query.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: queries }, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    // Parse the request body
    const body = await request.json();
    
    // Create a new query
    const query = await Query.create(body);
    
    return NextResponse.json({ success: true, data: query }, { status: 201 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 400 });
  }
}