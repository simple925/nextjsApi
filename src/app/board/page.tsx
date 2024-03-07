'use client'
import { useEffect, useState } from "react"
export default function Board() {
    const [posts, setPosts ] = useState([])
    useEffect(() => {
        fetch('http://localhost:9990/posts')
        .then(e => {

            e.json()
        }
            )
        .then(data => setPosts(data))
    }, [])
    console.log(posts) 
    // const a = 'sss'
    return (
        <table width={'100%'}>
            <thead>

                <tr key={1}>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>

                <tr key={2}>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr key={3}>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
            </tbody>
        </table>
    )
}
