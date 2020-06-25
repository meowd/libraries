import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLibraryById } from "./libraryBusiness";
import { Typography } from "antd";

export default function Library() {
    const { id } = useParams();
    const libraries = useSelector(state => state.app.libraries);
    const library = getLibraryById(libraries, id);

    if(!library) {
        return (
            <Typography.Paragraph>
                Информации о библиотеке не найдено
            </Typography.Paragraph>
        );
    }

    return (
        <>
            <Typography.Title level={1}>Библиотека: {library.fullname}</Typography.Title>
            <Typography.Title level={3}>Информация о библиотеке</Typography.Title>
            <Typography.Paragraph>
                <Typography.Text strong>
                    Область:
                </Typography.Text>
                &nbsp;
                {library.territory || "-"}
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>
                    Адрес:
                </Typography.Text>
                &nbsp;
                {library.address || "-"}
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>
                    Количество компьютеров:
                </Typography.Text>
                &nbsp;
                {library.computers || "-"}
            </Typography.Paragraph>
        </>
    );
}