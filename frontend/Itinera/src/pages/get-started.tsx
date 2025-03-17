import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import LoadingScreen from "@/components/loading-screen";
import { useAuthStore } from "@/store/useAuthstore";

export default function GetStarted() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signup, isSigningUp } = useAuthStore();
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await signup({ name, email, password });
    setIsLoading(false);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {isLoading && isSigningUp && <LoadingScreen />}
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="z-10 w-full max-w-md space-y-8 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl"
        >
          <h2 className="text-center text-3xl font-bold">Create an Account</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSigningUp}>
              {isSigningUp ? "Creating account..." : "Create Account"}
            </Button>
          </form>
        </motion.div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}
