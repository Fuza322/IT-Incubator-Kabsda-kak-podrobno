import React, {useState} from 'react'

export default {
    title: 'React.memo demo'
}

type NewMessagesCounterType = {
    count: number
}

const NewMessagesCounter = (props: NewMessagesCounterType) => {
    return (
        <div>{props.count}</div>
    )
}

type UsersType = {
    users: Array<string>
}

const UsersSecret = (props: UsersType) => {
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

export const Example = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    const addUser = () => {
        const newUsers =  [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return (
        <>
            <button onClick={() => {setCounter(counter + 1)}}>+</button>
            <button onClick={addUser}>Add User</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}