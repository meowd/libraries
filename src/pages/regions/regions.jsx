import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "antd";
import {RegionsList, RegionsFilter} from "./components";
import * as regionsActions from "./regionsActions";
import * as regionsBusiness from "./regionsBusiness";

export default function Regions() {
    const dispatch = useDispatch();
    const libraries = useSelector(state => state.app.libraries);
    const filter = useSelector(state => state.regions.filter);
    const sorting = useSelector(state => state.regions.sorting);

    const onChangeFilterRegion = (e) => {
        const region = e.target.value;
        dispatch(regionsActions.changeFilterRegion(region));
    };

    const onChangeSortingIsManyLibrariesFirst = () => {
        dispatch(regionsActions.changeSortingIsManyLibrariesFirst());
    };

    const regions = regionsBusiness.getRegions(libraries, filter, sorting);

    return (
        <>
            <Typography.Title level={1}>Регионы</Typography.Title>
            <RegionsFilter
                filter={filter}
                sorting={sorting}
                onChangeRegion={onChangeFilterRegion}
                onChangeSortingIsManyLibrariesFirst={onChangeSortingIsManyLibrariesFirst} />
            <RegionsList regions={regions} />
        </>
    );
}