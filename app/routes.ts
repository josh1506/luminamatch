import {type RouteConfig, index, route, layout} from "@react-router/dev/routes";

export default [
    layout("routes/private/home.tsx", [
        index("routes/private/newsfeed.tsx"),
        route("messages", "routes/private/messages.tsx"),
        route("profile", "routes/private/userprofile.tsx"),
    ]),

    // Authentication
    layout("routes/public/auth.tsx", [
        route("login", "routes/public/login.tsx"),
        route("signup", "routes/public/signup.tsx"),
        route("forgot/password", "routes/public/forgotPass.tsx"),
    ])
] satisfies RouteConfig;
