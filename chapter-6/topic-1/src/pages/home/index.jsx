import { useState } from "react";
import Button from "react-bootstrap/Button";

const Home = () => {
    const [count, setCount] = useState(0);
    const [fauzan, setFauzan] = useState("Fauzan");

    return (
        <>
            <h1>Home</h1>
            <p>Count: {count}</p>
            <p>Fauzan: {fauzan}</p>

            <Button
                variant="primary"
                onClick={() => {
                    setCount(count + 1);
                    setFauzan("Richard");
                }}
            >
                Add Count
            </Button>
            <Button
                variant="primary"
                onClick={() => {
                    setCount(count - 1);
                    setFauzan("Fauzan");
                }}
            >
                Reduce Count
            </Button>
        </>
    );
};

export default Home;
