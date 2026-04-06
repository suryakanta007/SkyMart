import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, Zap } from 'lucide-react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { users, setUsers, setLoginUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const onRegister = (data) => {
        const allUsers = JSON.parse(localStorage.getItem("users")) || [];
        const { name, email, password, confirmPassword } = data;
        if (password !== confirmPassword) {
            toast.error("Password and Confirm Password do not match");
            return;
        }
        const userExists = allUsers.find((user) => user.email === email);
        if (userExists) {
            toast.error("User already exists");
            return;
        }
        const newUser = {
            id: Date.now(),
            name,
            email,
            password
        }

        localStorage.setItem("users", JSON.stringify([...allUsers, newUser]));
        setUsers([...allUsers, newUser]);
        toast.success("User registered successfully");
        setLoginUser(newUser);
        localStorage.setItem("loginUser", JSON.stringify(newUser));
        navigate("/");
    }
    return (
        <div className="flex flex-col items-center">

            <div className="flex items-center gap-2 mb-12">
                <div className="bg-brand p-2 rounded-full">
                    <Zap className="w-6 h-6 text-black fill-current" />
                </div>
                <span className="text-2xl font-bold">SkyMart</span>
            </div>

            <div className="w-full bg-card-bg/50 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
                <h2 className="text-3xl font-bold mb-2">Create account</h2>
                <p className="text-gray-500 mb-8">Join SkyMart and start shopping</p>

                <form className="space-y-4" onSubmit={handleSubmit(onRegister)}>
                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand transition-colors">
                            <User className="w-5 h-5" />
                        </div>
                        <input
                            {...register("name", { required: "Name is required" })}
                            type="text"
                            placeholder="Full name"
                            className="w-full bg-input-bg/10 text-white py-4 pl-12 pr-4 rounded-2xl outline-none border-2 border-transparent focus:border-brand/50 transition-all placeholder:text-gray-500 font-medium bg-[#1a1a1a]"
                        />
                        {errors.name && toast.error(errors.name.message)}
                    </div>

                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand transition-colors">
                            <Mail className="w-5 h-5" />
                        </div>
                        <input
                            {...register("email", { required: "Email is required" })}
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
                            {...register("password", { required: "password is required", min: { value: 6, message: "Password must be at least 6 characters" }, max: { value: 12, message: "Password must be at most 12 characters" } })}
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


                    <div className="space-y-2 px-1">
                        <div className="flex gap-2">
                            <div className="h-1.5 flex-1 rounded-full bg-brand"></div>
                            <div className="h-1.5 flex-1 rounded-full bg-brand"></div>
                            <div className="h-1.5 flex-1 rounded-full bg-brand"></div>
                        </div>
                        <p className="text-[10px] text-right text-brand font-bold uppercase tracking-wider">Strong</p>
                    </div>

                    <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand transition-colors">
                            <Lock className="w-5 h-5" />
                        </div>
                        <input
                            {...register("confirmPassword", { required: "confirm password is required" })}
                            type="password"
                            placeholder="Confirm password"
                            className="w-full bg-input-bg/10 text-white py-4 pl-12 pr-4 rounded-2xl outline-none border-2 border-transparent focus:border-brand/50 transition-all placeholder:text-gray-500 font-medium bg-[#1a1a1a]"
                        />
                        {errors.password && toast.error(errors.password.message)}
                    </div>

                    <button className="w-full bg-brand hover:bg-brand/90 text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98] mt-6">
                        Create Account <ArrowRight className="w-5 h-5" />
                    </button>
                </form>

                <p className="text-center mt-8 text-gray-500 text-sm">
                    Already have an account? <span onClick={() => navigate("/auth")} className="text-brand font-bold hover:underline">Sign in</span>
                </p>
            </div>
        </div>
    )
}

export default Signup