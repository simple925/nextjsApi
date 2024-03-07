import getUser from "../../../../lib/getUser"
import getUserPosts from "../../../../lib/getUserPosts"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"
import type { Metadata } from 'next'


export async function generateMetadata({ params: { aaaId } }: AaaParams): Promise<Metadata> {
    const userData: Promise<Aaa> = getUser(aaaId)
    const aaa: Aaa = await userData

    return {
        title: aaa.name,
        description: `This is the page of ${aaa.name}`
    }
}


export default async function UserPage({ params: { aaaId } }: AaaParams) {
    const userData: Promise<Aaa> = getUser(aaaId)
    const userPostsData: Promise<Post[]> = getUserPosts(aaaId)

    const aaa = await userData
    return (
        <>
            <h2>{aaa.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading ...</h2>}>
                <UserPosts promise={userPostsData} />
            </Suspense>
        </>
    )
}