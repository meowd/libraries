import AppContainer from "./appContainer";
import {Regions} from "../pages/regions";
import {Library} from "../pages/library";

const routes = [{
	component: AppContainer,
	routes: [{
		path: "/",
		exact: true,
		component: Regions
	}, {
		path: "/libraries/:id",
		exact: true,
		component: Library
	}]
}
];

export default routes;