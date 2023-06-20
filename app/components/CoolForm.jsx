const React = require("react")

function CoolForm({ placeholder }) {
    const clicked = React.useRef(false);
    const [buttonText, setButtonText] = React.useState("Отправить");
    const textRef = React.useRef(null);
    function onClick() {
        clicked.current = true;
        if (clicked.current) {
            textRef.current.value = "";
            setButtonText("Отправлено...");
            setTimeout(() => {
                clicked.current = false;
                setButtonText("Отправить");
            }, 5000);
        }
    }
    return (
        <form>
            <input ref={textRef} placeholder={placeholder} type="text" />
            <input className="button" type="button" value={buttonText} onClick={onClick} />
        </form>
    );
}

module.exports = CoolForm;
