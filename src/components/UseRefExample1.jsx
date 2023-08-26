import { useRef, useEffect } from "react";

const UseRefExample1 = () => {
    const inputRef = useRef();
    const paraRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
        inputRef.current.value = "Hello World!";
        inputRef.current.style.backgroundColor = "red";
        paraRef.current.innerText = "GoodBye";
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    ref={inputRef}
                    id="name"
                    className="form-control mb-2"
                />
                <button type="submit" className="btn btn-primary mt-2">
                    Submit
                </button>
                <p onClick={() => inputRef.current.focus()} ref={paraRef}>Hello</p>
            </form>
        </div>
    )
}

export default UseRefExample1