import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

export default function Login() {
  const navigate = useNavigate();

  /* ---------------- FORM STATES ---------------- */
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [step, setStep] = useState("login"); // login | email | otp | reset
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpInfo] = useState("");
const [resetUsername, setResetUsername] = useState("");
  const isAdmin = form.username === "WebxAdmin";

  /* ---------------- CUSTOM TOAST ---------------- */
  const [toastMsg, setToastMsg] = useState(null);
  const toastTimerRef = useRef(null);

  const showToast = (msg, duration = 3000) => {
    setToastMsg(null);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);

    setTimeout(() => {
      setToastMsg(msg);
      toastTimerRef.current = setTimeout(() => {
        setToastMsg(null);
      }, duration);
    }, 40);
  };

  /* ---------------- EFFECTS ---------------- */
 useEffect(() => {
  setShowPassword(false);
}, [step]);

  /* ---------------- LOGIN ---------------- */
  const handleLogin = async () => {
    if (!form.username || !form.password) {
      showToast("Enter username and password");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        showToast(data.message || "Invalid username or password");
        return;
      }

      sessionStorage.setItem("user", JSON.stringify(data));
      showToast("Login successful");

      setTimeout(() => navigate("/dashboard"), 800);
    } catch {
      showToast("Login failed");
    } finally {
      setLoading(false);
    }
  };

/* ================= SEND OTP ================= */
const sendOtp = async () => {
  if (!resetUsername) {
    showToast("Username is required");
    return;
  }

  try {
    setLoading(true);

    const res = await fetch(
      `${API_BASE}/api/users/forgot-password/send-otp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: resetUsername,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      showToast(data.message || "Failed to send OTP");
      return;
    }

    setEmail(data.email);
    showToast("OTP sent successfully");
    setStep("otp");

  } catch (error) {
    console.error("SEND OTP ERROR:", error);
    showToast("Failed to send OTP");
  } finally {
    setLoading(false);
  }
};

  /* ---------------- VERIFY OTP ---------------- */
  const verifyOtp = async () => {
    if (!otp) {
      showToast("Enter OTP");
      return;
    }

    try {
      const res = await fetch(
        `${API_BASE}/api/users/forgot-password/verify-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ otp }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        showToast(data.message || "Invalid OTP");
        return;
      }

      showToast("OTP verified");
      setStep("reset");
    } catch {
      showToast("OTP verification failed");
    }
  };

  /* ---------------- RESET PASSWORD ---------------- */
  const resetPassword = async () => {
    if (!newPass || !confirmPass) {
      showToast("Fill all fields");
      return;
    }

    if (newPass !== confirmPass) {
      showToast("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(
        `${API_BASE}/api/users/forgot-password/reset`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ newPassword: newPass }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        showToast(data.message || "Reset failed");
        return;
      }

      showToast("Password updated successfully");
      setStep("login");
    } catch {
      showToast("Password reset failed");
    }
  };

  /* ---------------- RENDER ---------------- */
  return (
    <>
      {/* 🔔 TOAST */}
      {toastMsg && (
        <div className="fixed top-4 right-4 z-[9999] w-[320px]">
          <div className="bg-white text-black border rounded-lg shadow-lg overflow-hidden">
            <div className="px-4 py-3 text-sm">{toastMsg}</div>
            <div className="h-1 bg-white">
              <div className="h-1 bg-[#345261] toast-progress" />
            </div>
          </div>
        </div>
      )}

      {/* PAGE */}
      <div
        className="min-h-screen w-full flex items-center justify-center bg-[#345261]"
        style={{
          backgroundImage: "url('/login-pattern.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "1600px 790px",
        }}
      >
        <div className="bg-white w-[360px] p-8 rounded-[28px] shadow-xl">
          <h2 className="text-center text-[22px] font-semibold mb-4">
            LOG IN
          </h2>

          {/* LOGIN */}
          {step === "login" && (
            <>
              <input
                value={form.username}
                onChange={(e) =>
                  setForm({ ...form, username: e.target.value })
                }
                className="w-full mb-4 px-4 py-2 bg-[#EFF6FF] rounded-lg"
                placeholder="Username"
              />

              <div className="relative mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className="w-full px-4 py-2 pr-10 bg-[#EFF6FF] rounded-lg"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {isAdmin && (
                <div
                  onClick={() => {
      setResetUsername(form.username);
      setStep("email");
    }}
                  className="text-xs text-right text-[#345261] cursor-pointer mb-4"
                >
                  Forgot password?
                </div>
              )}

              <button
                disabled={loading}
                onClick={handleLogin}
                className="w-full py-2 bg-[#345261] text-white rounded-lg"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </>
          )}

          {/* EMAIL */}
          {/* SEND OTP */}
          {step === "email" && (
            <>
              <p className="text-sm text-gray-600 text-center mb-4">
                We will send an OTP to your registered email address.
              </p>

              <button
                disabled={loading}
                onClick={sendOtp}
                className="w-full mt-4 py-2 bg-[#345261] text-white rounded-lg disabled:opacity-50"
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>
            </>
          )}

          {/* OTP */}
          {/* OTP */}
          {step === "otp" && (
            <>
              <p className="text-sm text-gray-600 text-center mb-4">
                OTP has been sent to
              </p>

              <p className="text-sm font-semibold text-[#345261] text-center mb-4">
                {email}
              </p>

              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                className="w-full px-4 py-2 bg-[#EFF6FF] rounded-lg text-center tracking-[8px]"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, ""))
                }
              />

              <button
                onClick={verifyOtp}
                disabled={otp.length !== 6}
                className="w-full mt-4 py-2 bg-[#345261] text-white rounded-lg disabled:opacity-50"
              >
                Verify OTP
              </button>
            </>
          )}

          {/* RESET */}
          {step === "reset" && (
            <>
              <input
                type="password"
                className="w-full px-4 py-2 bg-[#EFF6FF] rounded-lg mb-3"
                placeholder="New Password"
                onChange={(e) => setNewPass(e.target.value)}
              />
              <input
                type="password"
                className="w-full px-4 py-2 bg-[#EFF6FF] rounded-lg"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPass(e.target.value)}
              />
              <button
                onClick={resetPassword}
                className="w-full mt-4 py-2 bg-[#345261] text-white rounded-lg"
              >
                Update Password
              </button>
            </>
          )}
        </div>
      </div>

      {/* TOAST STYLE */}
      <style>{`
        @keyframes toast-progress {
          from { transform: scaleX(1); }
          to { transform: scaleX(0); }
        }
        .toast-progress {
          transform-origin: left;
          animation: toast-progress 3s linear forwards;
        }
      `}</style>
    </>
  );
}
