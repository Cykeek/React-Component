import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const columns = ['ID', 'Name', 'Email', 'Role', 'Status']

const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active' },
  { id: 3, name: 'Carol Williams', email: 'carol@example.com', role: 'Viewer', status: 'Inactive' },
  { id: 4, name: 'David Brown', email: 'david@example.com', role: 'Editor', status: 'Active' },
  { id: 5, name: 'Eva Davis', email: 'eva@example.com', role: 'Viewer', status: 'Active' },
]

function UsersTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team members</CardTitle>
        <CardDescription>A quick overview of everyone in your workspace.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="max-h-[200px] overflow-auto rounded-lg border [&>div]:overflow-visible">
          <Table>
            <TableHeader className="[&_th]:sticky [&_th]:top-0 [&_th]:z-10 [&_th]:border-b [&_th]:bg-muted [&_tr]:border-0">
              <TableRow className="hover:bg-transparent">
                {columns.map((column) => (
                  <TableHead key={column} className="px-3">
                    {column}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="px-3 py-3">{user.id}</TableCell>
                  <TableCell className="px-3 py-3 font-medium">{user.name}</TableCell>
                  <TableCell className="px-3 py-3 text-muted-foreground">{user.email}</TableCell>
                  <TableCell className="px-3 py-3">{user.role}</TableCell>
                  <TableCell className="px-3 py-3">
                    <span
                      className={
                        user.status === 'Active'
                          ? 'inline-flex items-center gap-1.5 text-foreground'
                          : 'inline-flex items-center gap-1.5 text-muted-foreground'
                      }
                    >
                      <span
                        className={
                          user.status === 'Active'
                            ? 'size-1.5 rounded-full bg-emerald-500'
                            : 'size-1.5 rounded-full bg-muted-foreground/50'
                        }
                      />
                      {user.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

export { UsersTable }
