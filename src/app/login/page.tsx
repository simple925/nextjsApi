'use client'
export default function Login() {
    function onClickEevnt() {
        console.log('안녕하쇼')
        return undefined
    }

    async function getAllUsers() {
        const res = await fetch('http://localhost:9999/aaa',{
            method: 'PUT'
        })
    
        if (!res.ok) throw new Error('failed to fetch data')
    
        return res.json()
    }
  return (
    <>
        <h1>Login Page</h1>
        <form onSubmit={onClickEevnt()}>
            <div>
                <label>ID</label>
                <input type="text" id="userId" name="userId" />
            </div>
            <div>
                <label>PassWD</label>
                <input type="password" id="userPw" name="userPw" />
            </div>
            <button type="submit">버튼인디</button>
        </form>
    </>
  )
}
