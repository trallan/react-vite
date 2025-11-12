// CSS STYLING

function handleClick(){
  console.log("Button clicked!")
}

export default function Button({ buttonText }: { buttonText: string } ) {
  const defaultStyles = {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return <button onClick={handleClick} style={defaultStyles}>{buttonText}</button>;
}

/*
    function DynamicButton({ isActive }) {
    const buttonStyles = {
        backgroundColor: isActive ? "green" : "red",
        color: "white",
        padding: "10px 15px",
        border: "none",
        cursor: "pointer",
    };

    return <button style={buttonStyles}>Login</button>;
    }
*/