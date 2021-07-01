import ReactDOM from "react-dom";
import { redirectTo } from "./Redux/Slices/globalSlice";
import { toast } from "react-toastify";
import store from "./Redux/Store";

export function formSubmit(event) {
	event.preventDefault();
	// TODO: LOAD
	// openLoad();
	var formEl = ReactDOM.findDOMNode(event.target);
	formEl
		.querySelector("button[type='submit']")
		.setAttribute("disabled", true);
	var url = formEl.getAttribute("action");
	var method = formEl.getAttribute("method");
	var successRedirectUrl = formEl.getAttribute("data-success-redirect-url");
	var formData = new FormData(formEl);
	fetch(url, {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json; charset=utf-8",
		},
		method: method,
		body: JSON.stringify(Object.fromEntries(formData)),
	})
		.then((response) => response.json())
		.then((res) => {
			switch (res.status) {
				case "success":
					runNotify(res.message, "success");
					if (successRedirectUrl) {
						store.dispatch(redirectTo(successRedirectUrl));
					}
					break;
				case "warning":
					runNotify(res.message, "warning");
					break;
				case "error":
					runNotify(res.message, "error");
					break;

				default:
					break;
			}
			formEl
				.querySelector("button[type='submit']")
				.removeAttribute("disabled");
			// TODO: LOAD
			// closeLoad();
		})
		.catch((error) => {
			formEl
				.querySelector("button[type='submit']")
				.removeAttribute("disabled");
			console.error(error);
			// TODO: LOAD
			// closeLoad();
		});
}

export function runNotify(message, status = "info") {
	switch (status) {
		case "success":
			toast.success(message, {
				position: toast.POSITION.TOP_CENTER,
			});
			break;
		case "warning":
			toast.warning(message, {
				position: toast.POSITION.TOP_CENTER,
			});
			break;
		case "error":
			toast.error(message, {
				position: toast.POSITION.TOP_CENTER,
			});
			break;
		case "info":
			toast.info(message, {
				position: toast.POSITION.TOP_CENTER,
			});
			break;

		default:
			break;
	}
}
