import { CheckCircle, Circle, Clock, Download } from 'lucide-react';
import React from 'react'

const ChecklistItem = ({item, status}) => {
    const statusConfig = {
        completed: {
            icon: CheckCircle,
            iconColor: 'text-green-500',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200',
        },
        inProgress: {
            icon: Clock,
            iconColor: 'text-blue-500',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
        },
        pending: {
            icon: Circle,
            iconColor: 'text-slate-300',
            bgColor: 'bg-white',
            borderColor: 'border-slate-200',
        },
    };

    const config = statusConfig[status];
    const Icon = config.icon;
    const showDownload = status === 'completed';

    return (
        <div className={`flex items-center justify-between p-4 rounded-lg border ${config.borderColor} ${config.bgColor} transition-all hover:shadow-sm`}>
            <div className="flex items-center gap-3">
                <Icon className={config.iconColor} size={20} />
                <span className={`font-medium ${status === 'pending' ? 'text-slate-500' : 'text-slate-900'}`}>
                    {item}
                </span>
            </div>

            {showDownload && (
                <button className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm">
                    <span>Download</span>
                    <Download size={16} />
                </button>
            )}
        </div>
    );
}

export default ChecklistItem