import dynamic from 'next/dynamic';
const HCEApp = dynamic(() => import('../modules/hce/App'), { ssr: false });
export default function HCEPage() {
  return <HCEApp />;
}