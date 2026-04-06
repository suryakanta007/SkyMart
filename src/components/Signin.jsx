import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const naviage = useNavigate();
    const { users, setLoginUser } = useContext(AuthContext);

    const onLogin = (data) => {
        const user = users.find((user) => user.email === data.email);
        if (!user) {
            toast.error("User is Not Found , please Register");
            return;
        }
        if (user.password === data.password) {
            setLoginUser(user);
            localStorage.setItem("loginUser", JSON.stringify(user));
            toast.success("Login Success");
            naviage("/");
        }
    }

    return (
        <div className="bg-card-bg/50 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-2">Sign in</h2>
            <p className="text-gray-500 mb-8">Enter your credentials to continue</p>

            <form onSubmit={handleSubmit(onLogin)} className="space-y-4">
                <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand transition-colors">
                        <Mail className="w-5 h-5" />
                    </div>
                    <input
                        {...register("email", { required: "Email is required", })}
                        type="email"
                        placeholder="suryademo@gmail.com"
                        className="w-full bg-input-bg text-black py-4 pl-12 pr-4 rounded-2xl outline-none border-2 border-transparent focus:border-brand/50 transition-all placeholder:text-gray-400 font-medium"
                    />
                    {errors.email && toast.error(errors.email.message)}
                </div>

                <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand transition-colors">
                        <Lock className="w-5 h-5" />
                    </div>
                    <input
                        {...register("password", { required: "Password is required" })}
                        type={showPassword ? "text" : "password"}
                        placeholder=".........."
                        className="w-full bg-input-bg text-black py-4 pl-12 pr-12 rounded-2xl outline-none border-2 border-transparent focus:border-brand/50 transition-all placeholder:text-gray-400 font-medium"
                    />
                    {errors.password && toast.error(errors.password.message)}
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                    >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                </div>

                <button className="w-full bg-brand hover:bg-brand/90 text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98] mt-4">
                    Sign in <ArrowRight className="w-5 h-5" />
                </button>
            </form>

            <p className="text-center mt-8 text-gray-500">
                Don't have an account? <span onClick={() => { naviage("/auth/register") }} className="text-brand font-bold hover:underline">Create one</span>
            </p>
        </div>
    )
}

export default Signin