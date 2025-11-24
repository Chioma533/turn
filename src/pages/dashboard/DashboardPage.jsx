import React, { useState } from 'react'
import Sidebar from '../../components/layouts/Sidebar';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import SimulationLayout from '../../components/layouts/SimulationLayout';

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const handleFABClick = () => {
        setActiveTab("simulation")
    }

    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="flex-1 overflow-y-auto">
                {activeTab === 'dashboard' && <DashboardLayout onFABClick={handleFABClick}/>}
                {activeTab === 'simulation' && <SimulationLayout />}
                {activeTab === 'portfolio' && (
                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-slate-900">Portfolio</h1>
                        <p className="text-slate-600 mt-2">Portfolio content coming soon...</p>
                    </div>
                )}
                {activeTab === 'ai-coach' && (
                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-slate-900">AI Coach</h1>
                        <p className="text-slate-600 mt-2">AI Coach content coming soon...</p>
                    </div>
                )}
                {activeTab === 'profile' && (
                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-slate-900">Profile</h1>
                        <p className="text-slate-600 mt-2">Profile content coming soon...</p>
                    </div>
                )}
                {activeTab === 'pricing' && (
                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-slate-900">Pricing</h1>
                        <p className="text-slate-600 mt-2">Pricing content coming soon...</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default DashboardPage