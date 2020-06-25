import React from "react";
import { Typography } from "antd";

export default function Error(props) {
    if (!props.error) {
        return null;
    }

    return (
        <>
            <Typography.Title level={1}>Ошибка!</Typography.Title>
            <Typography.Paragraph>
                {props.error.message}
            </Typography.Paragraph>
        </>
    );
}