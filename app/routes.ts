import {type RouteConfig, index, route, layout} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    // Authentication
    layout("routes/public/auth.tsx", [
        route("login", "routes/public/login.tsx"),
        route("signup", "routes/public/signup.tsx"),
        route("forgot/password", "routes/public/forgotPass.tsx"),
    ])
] satisfies RouteConfig;
