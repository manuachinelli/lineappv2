'use client';

import { useMemo, useState } from 'react';

type Stage = {
  id: string;
  label: string;
  count: number;
};

type Props = {
  initialStages?: Stage[];
};

export default function Funnel({ initialStages }: Props) {
  const [stages, setStages] = useState<Stage[]>(() => initialStages ?? [
    { id: 'lead', label: 'Leads', count: 1000 },
    { id: 'qualified', label: 'Qualified', count: 320 },
    { id: 'proposal', label: 'Proposal', count: 120 },
    { id: 'won', label: 'Won', count: 32 },
  ]);

  const max = useMemo(() => Math.max(...stages.map(s => s.count)), [stages]);
  const convRate = useMemo(() => {
    const first = stages[0]?.count ?? 0;
    const last = stages[stages.length - 1]?.count ?? 0;
    return first > 0 ? (last / first) * 100 : 0;
  }, [stages]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <Card title="Top of Funnel" value={stages[0]?.count ?? 0} />
        <Card title="Bottom of Funnel" value={stages[stages.length-1]?.count ?? 0} />
        <Card title="Overall Conversion" value={`${convRate.toFixed(1)}%`} />
      </div>

      <div className="space-y-3">
        {stages.map((s, i) => (
          <div key={s.id} className="space-y-1">
            <div className="flex items-baseline justify-between">
              <span className="font-medium">{s.label}</span>
              <span className="text-sm text-gray-600">{s.count}</span>
            </div>
            <div className="h-8 rounded-xl bg-gray-100 overflow-hidden">
              <div
                className="h-full rounded-xl bg-gray-900 transition-all"
                style={{ width: `${(s.count / max) * 100}%` }}
                aria-label={`${s.label} ${s.count}`}
              />
            </div>
          </div>
        ))}
      </div>

      <details className="rounded-xl border p-4">
        <summary className="cursor-pointer font-medium">Edit sample data</summary>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {stages.map((s, idx) => (
            <div key={s.id} className="flex items-center gap-2">
              <label className="w-28 text-sm text-gray-600">{s.label}</label>
              <input
                type="number"
                min={0}
                value={s.count}
                onChange={(e) => {
                  const next = [...stages];
                  next[idx] = { ...s, count: Number(e.target.value) };
                  setStages(next);
                }}
                className="w-full rounded-lg border px-3 py-1.5 outline-none focus:ring"
              />
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}

function Card({ title, value }: { title: string; value: number | string }) {
  return (
    <div className="rounded-2xl border p-4">
      <div className="text-sm text-gray-600">{title}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
    </div>
  );
}
