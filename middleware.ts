import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { Logger } from "./lib/logging";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    Logger.info(JSON.stringify({
        time: new Date().toLocaleTimeString(),
        pathname: request.nextUrl.pathname,
        search: request.nextUrl.search,
        resolution: request.cookies.get("resolution")?.value,
        host: request.headers.get("host"),
        userAgent: request.headers.get("user-agent"),
        geo: request.geo,
    }))


    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/',
}