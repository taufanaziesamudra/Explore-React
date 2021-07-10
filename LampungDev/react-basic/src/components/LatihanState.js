import React, { useEffect, useState } from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"

const LatihanState = () => {
    const  [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Haloo ini documuent Title ${count}`
    }, [count])

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route></Route>
                </Switch>
            </BrowserRouter>
            <div>{count}</div>
            <button onClick={() =>setCount((p) => p + 1)}>+</button>
            <button onClick={() => setCount((p) => p -1)}>-</button>
        </div>
    )
}

export default LatihanState
 