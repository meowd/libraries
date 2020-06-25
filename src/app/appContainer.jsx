import React, { useEffect, useCallback } from "react";
import {renderRoutes} from "react-router-config";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import * as appActions from "./appActions";
import {Loader, Error} from "../components";

import { Layout, PageHeader, Row, Col } from "antd";
const { Header, Footer, Content } = Layout;

export default function AppContainer(props) {
	const dispatch = useCallback(useDispatch(), [])
	const location = useLocation();
	const history = useHistory();

    const isLoading = useSelector(state => state.app.isLoading);
	const error = useSelector(state => state.app.error);
	const gotoMain = () => (history.push("/"));

	useEffect(() => {
		dispatch(appActions.initialize());
	}, [dispatch]);

	return (
		<Layout>
			<Header className="header">
				<PageHeader
					onBack={location.pathname !== "/" ? gotoMain : undefined}
					title="Библиотеки России"
					subTitle="Тестовое задание" />
  			</Header>
			<Content className="page-content">
				<Row>
					<Col span={22} offset={1}>
						{renderRoutes(props.route.routes)}
					</Col>
				</Row>
				<Loader display={isLoading} />
				<Error error={error} />
			</Content>
			<Footer>Дмитрий Волков</Footer>
		</Layout>
	);
}