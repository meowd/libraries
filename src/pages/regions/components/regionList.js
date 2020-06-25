import React from "react";
import Region from "./region";
import { Typography } from "antd";

export default function RegionsList(props) {
    const {regions} = props;

    if (!regions || !Object.keys(regions)) {
        return (
            <Typography.Paragraph>
                Регионов нет
            </Typography.Paragraph>
        );
    }

    return (
        <>
            {regions.map(region => (
                <Region
                    key={`region_${region.name}`}
                    region={region} />
            ))}
        </>
    );
}