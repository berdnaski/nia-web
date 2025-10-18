import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#131313] text-white">
      <h1 className="text-3xl font-bold mb-6">Bem-vindo</h1>
      <div className="space-x-4">
        <Link href="/login" className="px-4 py-2 bg-neutral-800 rounded">Entrar</Link>
        <Link href="/register" className="px-4 py-2 bg-orange-500 rounded">Criar conta</Link>
      </div>
    </div>
  );
}
