export default function Fruits() {
    const fruits = ['Banana', 'Apple', 'Orange', 'Watermelon']

    return (
        <div>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={`${fruit}-${index}`}>{fruit}</li>
                ))}
            </ul>
        </div>
    )
}