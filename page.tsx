import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid place-items-center py-24">
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-semibold">Welcome to Lineapp</h2>
        <p className="text-gray-600">This is a minimal starter. Head to the sales funnel.</p>
        <Link href="/sales" className="inline-block rounded-xl border px-4 py-2 hover:bg-gray-50">
          Go to /sales
        </Link>
      </div>
    </div>
  );
}
