import Link from 'next/link';
export default function Home() {
  return (
    <div className='min-h-screen bg-blue-50 flex flex-col items-center justify-center p-8'>
      <h1 className='text-4xl font-black text-blue-700 mb-4'>BEE PowerBrain</h1>
      <p className='text-lg text-gray-700 max-w-lg text-center mb-8'>
        Botswana’s new digital economic engine — integrating youth innovation, business transparency, and national progress.
      </p>
      <div className='flex space-x-4'>
        <Link href='/hce' className='bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700'>
          Youth Portal
        </Link>
        <Link href='/admin' className='bg-gray-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-700'>
          Admin Console
        </Link>
      </div>
    </div>
  );
}