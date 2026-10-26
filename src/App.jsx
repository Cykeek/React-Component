import { UsersTable } from '@/components/users-table'

function App() {
  return (
    <main className="flex min-h-svh items-start justify-center bg-background p-6 md:p-10">
      <div className="w-full max-w-3xl">
        <UsersTable />
      </div>
    </main>
  )
}

export default App
