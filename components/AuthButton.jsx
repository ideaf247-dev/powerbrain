import { useEffect, useState } from 'react';
import { auth, signInWithGoogle, signOut } from '../firebase';

export default function AuthButton(){
  const [user, setUser] = useState(null);

  useEffect(()=> {
    return auth.onAuthStateChanged(u => setUser(u));
  }, []);

  if (user) {
    return <div className="flex items-center space-x-3">
      <span className="text-sm">{user.displayName}</span>
      <button onClick={()=>signOut()} className="px-2 py-1 border rounded">Sign out</button>
    </div>
  }

  return <button onClick={()=>signInWithGoogle()} className="px-2 py-1 border rounded">Sign in</button>
}
