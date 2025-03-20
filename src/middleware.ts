import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET must be defined in environment variables');
}

export async function middleware(request: NextRequest) {
  // Check for POST requests to /api/courses
  if (request.nextUrl.pathname === '/api/courses' && request.method === 'POST') {
    return checkAuth(request);
  }
  
  // Check for GET requests to /api/query
  if (request.nextUrl.pathname === '/api/query' && request.method === 'GET') {
    return checkAuth(request);
  }
  
  // For all other requests, continue
  return NextResponse.next();
}

// Helper function to check authentication
async function checkAuth(request: NextRequest) {
  const token = request.headers.get('authorization')?.split(' ')[1];
  
  if (!token) {
    return NextResponse.json(
      { error: 'Authentication required' },
      { status: 401 }
    );
  }
  
  try {
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    // console.log("Decoded Token:", payload);
    
    return NextResponse.next();
  } catch (error: any) {
    console.error("JWT Verification Error:", error.message);
    return NextResponse.json(
      { error: 'Invalid token', details: error.message },
      { status: 401 }
    );
  }
}

// Specify which routes this middleware should run on
export const config = {
  matcher: ['/api/courses', '/api/query']
};