// (1) Creating a React Component
// PascalCasing must capitalize every word letter
function Message() {
    // JSX --> Javascript XML (this is not HTML code)
    const name = "Lenar";
    // compile into Javascript
    if (name)
        return <h1>Hello, {name}!</h1>
    return <h1>Hello, World!</h1>

    // We can change this word dynamically (the one "{name}" or "{getName})
}

export default Message;