import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET must be defined in environment variables');
}

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/api/courses' && request.method === 'POST') {
    const token = request.headers.get('authorization')?.split(' ')[1];

    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    try {
      const secret = new TextEncoder().encode(JWT_SECRET); // Convert secret to Uint8Array
      const { payload } = await jwtVerify(token, secret); // Verify token
      console.log("Decoded Token:", payload);

      return NextResponse.next();
    } catch (error: any) {
      console.error("JWT Verification Error:", error.message);
      return NextResponse.json(
        { error: 'Invalid token', details: error.message },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}
