import React, {useCallback, useMemo, useState} from 'react'

export default {
    title: 'UseMemo&UseCallback'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('likeUsers')
    return (
        <div>
            {props.users.map((u, i) => {
                return (
                    <div key={i}>{u}</div>
                )
            })}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            <button onClick={() => {
                addUser()
            }}>Add user
            </button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}

export const LikeUseCallback = () => {
    console.log('likeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const memorizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memorizedAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            {counter}
            <Books addBook={memorizedAddBook2}/>
        </>
    )
}

type BookSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BookSecretPropsType) => {
    console.log('BooksSecret')
    return (
        <div>
            <button onClick={() => {
                props.addBook()
            }}>Add book
            </button>
        </div>
    )
}

const Books = React.memo(BooksSecret)