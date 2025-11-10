import dynamic from "next/dynamic";

// Import HCE App dynamically (avoids SSR issues on Vercel)
const HCEApp = dynamic(() => import("../modules/hce/App"), { ssr: false });

export default function HCEPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <HCEApp />
    </div>
  );
}
