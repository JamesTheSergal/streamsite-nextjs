"use client"
import { headers } from "next/dist/client/components/headers";
import React from "react";

async function callApi(){
    const res = await fetch("http://api.snergal.live/makeStreamKey", {
        cache: "no-cache", 
        method: "get",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
    }).catch((err) => {
        console.log(err);
    });
    console.log(res);
}

export default function GetStreamKey() {
    

    const [hasSubmitted, setHasSubmitted] = React.useState(false);

    const handleSubmit = () => {
        setHasSubmitted(true);
    }


    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="card w-96">
                    <h1 className="text-4xl">Get Stream Key</h1>
                    <form className="form-control" action={callApi}>
                        <label className="label">
                            <span className="label-text text-white">Stream Title</span>
                        </label>
                        <input type="text" placeholder="Stream Title" className="input input-bordered" />
                        <label className="label">
                            <span className="label-text text-white">Stream Description</span>
                        </label>
                        <input type="text" placeholder="Stream Description" className="input input-bordered" />
                        <label className="label">
                            <span className="label-text text-white">Streamer Name</span>
                        </label>
                        <input type="text" placeholder="Streamer Name" className="input input-bordered" />
                        <br></br>
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Get Stream Key</button>
                    </form> 
                </div>
            </div>
        </>
    )
}