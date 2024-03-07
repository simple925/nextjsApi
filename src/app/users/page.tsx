import type { Metadata } from 'next'
import getAllUsers from '../../../lib/getAllUsers'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Users',
}

export default async function UsersPage() {
  const aaaData: Promise<Aaa[]> = getAllUsers()

  const aaa =  aaaData.then(res=> {
    
  })
  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {aaa.map(e => {
        return (
          <>
            <p key={e.id}>
              <Link href={`/users/${e.id}`}>{e.name}</Link>
            </p>
            <br />
          </>
        )
      })}
    </section>
  )
  return content
}