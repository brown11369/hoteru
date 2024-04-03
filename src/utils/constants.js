const baseURL = import.meta.env.VITE_BACKEND_PUBLIC_URL
// auth
export const POST_DASHBOARD_LOGIN_URL = `${baseURL}/api/v1/admin/auth/system-login`
export const POST_DASHBOARD_REGISTER = `${baseURL}/api/v1/admin/auth/register`

// access-token
export const GET_ACCESS_TOKEN = `${baseURL}/api/v1/admin/auth/access-token`

// log-out
export const GET_LOGOUT = `${baseURL}/api/v1/admin/auth/system-logout`

// Blogs
export const POST_ADD_BLOG = `${baseURL}/api/v1/blogs/add`
export const GET_ALL_BLOGS = `${baseURL}/api/v1/blogs/all`
export const GET_ALLPUBLISHED_BLOGS = `${baseURL}/api/v1/blogs/allpublished`     //for frontend 
export const GET_SINGLE_BLOG = `${baseURL}/api/v1/blogs/single/`      //for frontend 
export const PATCH_BLOG = `${baseURL}/api/v1/blogs/update/`
export const DELETE_BLOG = `${baseURL}/api/v1/blogs/delete/`

// recipes
export const GET_ALL_RECIPES = `${baseURL}/api/v1/recipes/all`

// rooms
export const GET_ALL_ROOMS = `${baseURL}/api/v1/rooms/all`
