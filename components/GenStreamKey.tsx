"use client"

export default function GetStreamKey() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="container mx-auto border-8 border-b-slate-400 rounded-md bg-slate-300">
                    <h1 className="text-4xl">Get Stream Key</h1>
                    <form className="form-control">
                        <label className="label">
                            <span className="label-text">Stream Key</span>
                        </label>
                        <input type="text" placeholder="Stream Key" className="input input-bordered" />
                        <label className="label">
                            <span className="label-text">Stream Title</span>
                        </label>
                        <input type="text" placeholder="Stream Title" className="input input-bordered" />
                        <label className="label">
                            <span className="label-text">Stream Description</span>
                        </label>
                        <input type="text" placeholder="Stream Description" className="input input-bordered" />
                        <label className="label">
                            <span className="label-text">Stream Category</span>
                        </label>
                        <input type="text" placeholder="Stream Category" className="input input-bordered" />
                        <label className="label">
                            <span className="label-text">Stream Tags</span>
                        </label>
                        <input type="text" placeholder="Stream Tags" className="input input-bordered" />
                    </form>
                </div>
            </div>
        </>
    )
}