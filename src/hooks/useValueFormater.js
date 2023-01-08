export function valueFormater(value) {
	return (value / 100)
		.toLocaleString("pt-br", {
			style: "currency",
			currency: "BRL",
		})
		.substring(3);
}
