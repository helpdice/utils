export function formatCurrency(
	amount: number,
	currencySymbol: string,
	currencyCode: string,
) {
	// console.log(amount);
	// Check if the amount is null, undefined, or NaN
	if (amount == null || Number.isNaN(amount)) {
		if (currencySymbol) {
			if (typeof amount === "string") {
				const regex = new RegExp(`[${currencySymbol.trim()},]+`, "g");
				return Number(String(amount).replace(regex, ""));
			}
			return `${currencySymbol} 0.00`;
		}
		return "0.00";
	}

	// If a currency symbol is provided, use it directly
	if (currencySymbol) {
		return (
			currencySymbol +
			Number(amount)
				.toFixed(2)
				.replace(/\d(?=(\d{3})+\.)/g, "$&,")
		);
	}

	// If no symbol is provided, use the currencyCode to format the currency
	if (currencyCode) {
		const amtStr = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: currencyCode,
		})
			.format(amount)
			.split("");
		amtStr.splice(1, 0, " ");
		return amtStr.join("");
	}

	// Return default message if no symbol or currencyCode is provided
	return "Invalid currency parameters";
}

/*
@params 
*/

export function currencyToNumber(currencyString: string) {
	// Remove currency symbols, commas, and whitespace, then convert to number
	const numericValue = Number.parseFloat(
		currencyString.replace(/[^0-9.]/g, ""),
	);
	return numericValue;
}
