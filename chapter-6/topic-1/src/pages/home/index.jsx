import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

const Home = () => {
    const { token } = useSelector((state) => state.auth);

    const [count, setCount] = useState(0);
    const [fauzan, setFauzan] = useState("Fauzan");

    return (
        <>
            <h1>Home</h1>
            <p>Count: {count}</p>
            <p>Fauzan: {fauzan}</p>
            <p>Token: {token}</p>

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
