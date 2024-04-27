import React, {useState} from "react";
import PacmanLoader from "react-spinners/PacmanLoader";


const Spinner = () => {
    let [color, setColor] = useState("#ffffff");
    let [loading, setLoading] = useState(true);
    return (
        <>
            <PacmanLoader
                color={color}
                loading={loading}
                cssOverride={{
                    display: "block",
                    margin: "0 auto",
                    borderColor: "red",
                    marginTop: "100px",
                  }}
                size={150}
        
            />
        </>
    )
}

export default Spinner;