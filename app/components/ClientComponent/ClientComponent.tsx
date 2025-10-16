"use client"

import {useState} from "react";

export const ClientComponent = () => {
    const [count, setCount] = useState(0);

    return <div>Клиентская компонента
        <div>Доступ к переменным в клиентском окружении:</div>
        app name: {process.env.APP_NAME}
        <br/>
        my secret: {process.env.SECRET}
        <br/>
        {/* в клиентских компонентах доступны только переменные с префиксом NEXT_PUBLIC_  */}
        public client: {process.env.NEXT_PUBLIC_CLIENT}
        <br/>
        client: {process.env.CLIENT}

        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
    </div>
}