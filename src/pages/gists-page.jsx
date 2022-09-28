import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { API_URL_PUBLIC } from "../constants";

export const GistsList = () => {
    const [gists, setGists] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const requestGists = async () => {
        setLoading(true);

        try {
            const response = await fetch (API_URL_PUBLIC);

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const result = await response.json();
            
            setGists(result);
        } catch (err) {
            setError(true);
            console.warn(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        requestGists();
    }, []);
    
    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description}</li>,
        []
    );

    if (error) {
        return (
            <div className="error">
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>
            </div>
        );
    }
    
    if (loading) {
        return <CircularProgress className="gistsloader"/>;
    }

    return <ul className="gists">{ gists.map(renderGist) }</ul>
}
