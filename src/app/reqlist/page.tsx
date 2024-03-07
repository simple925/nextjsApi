import commonApi from "../../../lib/commonApi"

export default async function Reqlist() {
    const a: object = commonApi('http://localhost:9999/aaa')
    // const res = await fetch('http://localhost:9999/aaa')
    //                     .then(res=>res.json())
    //                     .then(result=>result)
    console.log(a)
    return (
        <>
            <ol>
                {
                    // res.map(e => {
                    //     return <li key={e.id}>{e.name}</li>
                    // })
                }
            </ol>
        </>
    )
}