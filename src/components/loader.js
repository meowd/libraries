import React from "react";

export default function Loader(props) {
    if (props.display !== true) {
        return null;
    }

    return (
        <div>
            Загрузка...
        </div>
    );
}