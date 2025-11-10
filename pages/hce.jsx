import App from '../modules/hce';
const HCEApp = dynamic(() => import('../modules/hce/App'), { ssr: false });
export default function HCEPage() {
  return <HCEApp />;
}