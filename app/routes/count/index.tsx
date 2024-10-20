// app/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/count/')({
  component: Count,
})

function Count() {
  return <button>Add 1 to ?</button>
}
