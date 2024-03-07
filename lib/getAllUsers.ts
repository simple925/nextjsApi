export default async function getAllUsers() {
    const res = await fetch('http://localhost:9999/aaa')

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}