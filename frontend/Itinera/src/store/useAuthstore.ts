import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios"


// Define types for authentication user
interface AuthUser {
  id: string;
  name: string;
  email: string;
  token?: string; // Optional token field
}

// Define types for the store state and functions
interface AuthStore {
  authUser: AuthUser | null;
  isSigningUp: boolean;
  isLoggingIn: boolean;
  isCheckingAuth: boolean;

  checkAuth: () => Promise<void>;
  signup: (data: { name: string; email: string; password: string }) => Promise<void>;
  login: (data: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
}


export const useAuthStore = create<AuthStore>((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isCheckingAuth: true,

  // Check if user is authenticated
  checkAuth: async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        set({ authUser: null, isCheckingAuth: false });
        return;
      }

      const res = await axiosInstance.get<AuthUser>("/auth/check-auth");
      set({ authUser: res.data });
    } catch (error: any) {
      localStorage.removeItem("authToken");
      set({ authUser: null });
      console.error("Error in checkAuth:", error.response?.data || error.message);
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  // Signup function
  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post<AuthUser>("/auth/register", data);
      set({ authUser: res.data });
      localStorage.setItem("authToken", res.data.token as string);
      toast.success("Account created successfully!");
    } catch (error: any) {
      toast.error(error.response.data.message || "Register failed");
    } finally {
      set({ isSigningUp: false });
    }
  },

  // Login function
  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post<AuthUser>("/auth/login", data);
      set({ authUser: res.data });
      localStorage.setItem("authToken", res.data.token as string);
      toast.success("Logged in successfully!");
    } catch (error: any) {
      toast.error(error.response.data.message || "Login failed");
    } finally {
      set({ isLoggingIn: false });
    }
  },

  // Logout function
  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      localStorage.removeItem("authToken");
      set({ authUser: null });
      toast.success("Logged out successfully!");
    } catch (error: any) {
      toast.error(error.response.data.message || "Logout failed");
    }
  },
}));
