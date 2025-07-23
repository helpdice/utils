// import Currencies from './currencies.json';
import { Countries as countries } from "./countries+states+cities.js";

export function fetchCountryAPI(
	country?: string | null,
	state?: string | null,
) {
	const Countries: any[] = countries as any[];
	if (country) {
		const _country = Countries.find(
			(cnty: { name: any }) => cnty.name === country,
		);
		const states = _country?.states ?? [];
		if (state) {
			const _state = states.find((sate: { name: any }) => sate.name === state);
			const cities = _state?.cities ?? [];
			return cities;
		}
		return states;
	}
	return Countries.map(
		(cnty: { name: any; iso3: any; currency: any; phone_code: any }) => ({
			name: cnty.name,
			iso: cnty.iso3,
			currency: cnty.currency,
			code: cnty.phone_code,
		}),
	);
}
