function mapList() {
    const fruits = ["🍎", "🍌", "🍊"];
    return (
        <ul>
            {fruits.map((f, i) => (
                <li key={i}>{i + 1}번째 과일은 {f} 입니다(index:{i})</li>
            ))}
        </ul>
    );
}

export default mapList;