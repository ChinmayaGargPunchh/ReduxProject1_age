import store from "../store/store";

export const _ageUp = () => {
	store.dispatch({
		type: "AGE_UP",
		payload: 1,
	});
};

export const _ageDown = () => {
	store.dispatch({
		type: "AGE_DOWN",
		payload: 1,
	});
};
