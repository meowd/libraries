import React from "react";
import RegionLibrary from "./regionLibrary";
import { Card } from "antd";

export default function Region(props) {
    const {name, libraries} = props.region;

    return (
        <Card
            title={name}
            extra={`библиотек: ${libraries.length}`}>
            <ul>
                {libraries.map(library => (
                    <li key={`library_${library.order}`}>
                        <RegionLibrary
                            libraryId={library.order}
                            fullname={library.fullname} />
                    </li>
                ))}
            </ul>
        </Card>
    );
}