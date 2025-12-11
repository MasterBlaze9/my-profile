import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">Página não encontrada</h2>
      <p>Lamentamos, mas o recurso que procuras não existe.</p>
      
      <Link 
        href="/" 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Voltar à Home
      </Link>
    </div>
  )
}