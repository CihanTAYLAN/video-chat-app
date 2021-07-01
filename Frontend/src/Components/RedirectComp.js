import React from "react";
import { Redirect } from "react-router";
import { clearRedirect } from "../Redux/Slices/globalSlice";
import store from "../Redux/Store";

class RedirectComp extends React.Component {
	constructor() {
		super();
		this.state = {
			redirect: store.getState().global.redirect,
		};
		store.subscribe(() => {
			this.setState({ redirect: store.getState().global.redirect });
		});
		this.clcRedirect = this.clcRedirect.bind(this);
	}
	clcRedirect() {
		setTimeout(() => {
			store.dispatch(clearRedirect());
		}, 1);
	}
	componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount() {
		this._isMounted = false;
	}
	render() {
		return (
			<div>
				{this.state.redirect != null && (
					<Redirect to={this.state.redirect} push={true} />
				)}
				{this.state.redirect != null && this.clcRedirect()}
			</div>
		);
	}
}
export default RedirectComp;
