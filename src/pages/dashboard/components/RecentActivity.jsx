import React from 'react'
import ActivityItem from './ActivityItem';

const RecentActivity = () => {
    const activities = [
        { title: 'E-commerce Platform', status: 'Agile', progress: 75 },
        { title: 'Mobile App Design', status: 'Draft', progress: 67 },
        { title: 'Marketing Campaign', status: 'Fair', progress: 27 }
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Recent Activity</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activities.map((activity, index) => (
                    <ActivityItem key={index} {...activity} />
                ))}
            </div>
        </div>
    );
}

export default RecentActivity