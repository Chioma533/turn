import React, { useState } from 'react'
import Logo from '../../assets/images/TurnveLogo2.svg'
import { Check, Sparkles, Briefcase, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FeatureItem from './components/FeatureItem';
import InputField from '../../components/layouts/InputField';
import Buttons from '../../components/layouts/Buttons';


const SignUp = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (field) => (e) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = () => {
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
            alert('Please fill in all fields');
            return;
        }
        console.log('Signup submitted:', formData);
        // Add your signup logic here
    };

    const handleGoogleSignUp = () => {
        console.log('Google sign up clicked');
        // Add Google OAuth logic here
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-800 via-slate-900 to-blue-900 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl flex flex-col lg:flex-row-reverse items-center gap-12">
                {/* Right Side - Branding */}
                <div className="flex-1 text-left max-w-xl">
                    <img src={Logo} alt="Logo" />
                    <h1 className="text-5xl font-bold mb-4">
                        <span className="text-white">Make it </span>
                        <span className="text-cyan-400">Real</span>
                    </h1>
                    <p className="text-slate-300 text-lg mb-8">
                        Master real-world skills through simulations, build your portfolio, and get AI-powered career guidance.
                    </p>

                    <FeatureItem
                        icon={Check}
                        title="Real-World Simulations"
                        description="Practice with AI-generated project scenarios"
                    />
                    <FeatureItem
                        icon={Briefcase}
                        title="Build Your Portfolio"
                        description="Showcase your work with professional artifacts"
                    />
                    <FeatureItem
                        icon={MessageCircle}
                        title="AI Coach"
                        description="Get personalized guidance for your journey"
                    />
                </div>

                {/* Left Side - Signup Form */}
                <div className="w-full max-w-md">
                    <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-white mb-2">Register to TURNVE</h2>
                            <p className="text-slate-400">Make it Real</p>
                        </div>

                        <div className="space-y-4">
                            <InputField
                                type="text"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange('firstName')}
                                required
                            />

                            <InputField
                                type="text"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange('lastName')}
                                required
                            />

                            <InputField
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange('email')}
                                required
                            />

                            <InputField
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange('password')}
                                required
                            />

                            <Buttons onClick={handleSubmit} variant="primary">
                                Sign Up
                            </Buttons>

                            <div className="text-center text-slate-400 text-sm">
                                Or continue with
                            </div>

                            <Buttons variant="google" onClick={handleGoogleSignUp}>
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Sign up with Google
                            </Buttons>
                        </div>

                        <div className="mt-6 text-center">
                            <button
                                onClick={() => navigate('/login')}
                                className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                            >
                                Already have an account? <span className="font-semibold">Sign In</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp