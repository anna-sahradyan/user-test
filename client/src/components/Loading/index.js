import React from 'react';
import * as Loader from "react-loader-spinner";

const Loading = () => {
    return (
        <>
            <div>
                <Loader.Watch
                    height={50}
                    width={50}
                />
            </div>
        </>
    );
};

export default Loading;