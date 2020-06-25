import React from "react";
import { Form, Input, Checkbox } from "antd";

export default function RegionsFilter(props) {
    const {filter, sorting} = props;
    const region = filter && filter.region
        ? filter.region
        : "";
    const isManyLibrariesFirst = sorting && sorting.isManyLibrariesFirst;

	return (
        <Form
            layout="horizontal"
            name="basic">
            <Form.Item
                label="Область"
                name="region">
                <Input
                    value={region}
                    onChange={props.onChangeRegion} />
            </Form.Item>
            <Form.Item name="isManyLibrariesFirst">
                <Checkbox
                    checked={isManyLibrariesFirst}
                    onChange={props.onChangeSortingIsManyLibrariesFirst}>
                    Сначала много библиотек
                </Checkbox>
            </Form.Item>
        </Form>
	);
}