import type React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { userData } from "@/mockData";
import { useUserContext } from "@/context/UserContextProvider";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { setUser } = useUserContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", email, password);
    // For demo purposes, just close the modal
    setTimeout(() => {
      const user = userData.find((data) => data.email === email);
      if (user) {
        setUser(() => user);
        onClose();
        navigate("/onboarding");
      } else {
        setError("User not found");
      }
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light text-teal-900">
            Welcome
          </DialogTitle>
          <DialogDescription className="text-slate-600">
            Sign in using your Epic MyChart account to continue!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-slate-300"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-slate-700"
              >
                Password
              </Label>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-slate-300"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white"
          >
            Sign in with Epic MyChart
          </Button>
        </form>

        <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-2">
          {error ? <p className="text-red-400 text-xs">{error}</p> : <></>}
          <div className="w-full text-xs text-slate-500 text-center">
            By signing in, you agree to our{" "}
            <Link to="#" className="text-teal-600 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="#" className="text-teal-600 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
