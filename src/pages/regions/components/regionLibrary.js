import React from "react";
import { useHistory } from "react-router-dom";
import { Typography } from "antd";

export default React.memo(function RegionLibrary(props) {
    const history = useHistory();
    const {libraryId, fullname} = props;


    const libraryLink = `/libraries/${libraryId}`;
    const gotoLibrary = (e) => {
        e.preventDefault();
        history.push(libraryLink);
    };

    return (
        <Typography.Paragraph>
            {fullname}
            &nbsp;
            <a
                href={libraryLink}
                onClick={gotoLibrary}>
                Подробнее
            </a>
        </Typography.Paragraph>
    );
});