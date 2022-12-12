import { useEffect, useState } from "react";

export default function () {
    const [landscape, setLandscape] = useState({});

    useEffect(() => {
        fetch(`http://127.0.0.1:4000/landscape`)
            .then((response) => response.json())
            .then((data) => setLandscape(data));
    }, []);

    const clickHandler = () => {
        fetch(`http://127.0.0.1:4000/landscape`, {
            method: "DELETE",
        }).then((response) => {
            if (response.status === 202) {
                navigate("/landscape");
            }
        });
    };

    return (
        <>
            <div>
                <img src={landscape.url} />
            </div>
        </>
    );
}
