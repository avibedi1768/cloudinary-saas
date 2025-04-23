import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// for public routes: accessible to everyone
const isPublicRoute = createRouteMatcher(["/sign-up", "/sign-in", "/", "/home"]);

const isPublicApiRoute = createRouteMatcher(["/api/videos"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const currentUrl = new URL(req.url);

  // req is trying to access home or some api
  const isAccessingDashboard = currentUrl.pathname === "/home";
  const isApiRequest = currentUrl.pathname.startsWith("/api");

  // if api, check if public api routes.
  // if dashboard, check for public routes

  // user logged in. and is trying to request public routes like signin. (not dashboard). then send him to '/home'
  if (userId && isPublicRoute(req) && !isAccessingDashboard) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  // not logged in
  if (!userId) {
    // if not logged in and trying to access dashboard (protected route). then send to signin
    if (!isPublicRoute(req) && !isPublicApiRoute(req)) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    // request is for protected api and user not logged in
    // starts with '/api'
    if (isApiRequest && !isPublicApiRoute(req)) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
  }

  // nothing special, just sends to next middleware/step
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
