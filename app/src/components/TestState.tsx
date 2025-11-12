import { useState } from 'react';

export default function TestState(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Start Count</button>
            <button onClick={() => setCount(0)}>Reset Count</button>
        </div>
    );
}