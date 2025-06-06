import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    return (
        <>
            <h2>OOPS!!! Something went wrong!!!</h2>
            <p style={{ fontWeight: "bold", fontSize: "27px" }}>{error.status}:{error.statusText}</p>
        </>
    )
}

export default Error;