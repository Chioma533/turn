import React from 'react'
import ChecklistItem from './ChecklistItem';

const DeliverablesChecklist = () => {
  const deliverables = [
    { title: 'Create Project Charter', status: 'completed' },
    { title: 'Define User Stories', status: 'completed' },
    { title: 'Build Sprint Backlog', status: 'inProgress' },
    { title: 'Create Risk Assessment', status: 'pending' },
    { title: 'Design Gantt Chart', status: 'pending' },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Deliverables Checklist</h2>
      <div className="space-y-3">
        {deliverables.map((item, index) => (
          <ChecklistItem key={index} item={item.title} status={item.status} />
        ))}
      </div>
    </div>
  );
}

export default DeliverablesChecklist