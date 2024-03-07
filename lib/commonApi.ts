export default async function commonApi(url:string) {
    const res = await fetch(url)
    if (!res.ok) throw new Error('failed to fetch data')
    const result = await res.json()
    return result
}
