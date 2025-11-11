import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../firebase';

export default function Dashboard(){
  const router = useRouter();
  useEffect(()=> {
    const unsub = auth.onAuthStateChanged(user => {
      if (!user) router.push('/');
    });
    return () => unsub();
  }, [router]);
  return (
    <div>...dashboard content...</div>
  );
}


