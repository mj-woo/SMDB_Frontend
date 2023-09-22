import { queryStringify } from "./convert";

export const METHODS = {
	GET: "GET",
	POST: "POST",
	PUT: "PUT",
	DELETE: "DELETE",
	PATCH: "PATCH",
};

export const request = async (
	pathname: string,
	method = METHODS.GET,
	body: any = null,
	headers = {}
) => {
	headers = {
		...headers,
		"Content-Type": "application/json",
	};

	if (method === METHODS.GET && body) {
		const params = queryStringify(body);
		pathname = `${pathname}?${params}`;
	}

	const url = `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/${pathname}`;

	try {
		if (method === METHODS.GET) {
			const response = await fetch(url, {
				method,
				headers,
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			return data;
		}

		if (method === METHODS.POST) {
			const response = await fetch(url, {
				method,
				headers,
				body: JSON.stringify(body),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			return data;
		}
	} catch (error) {
		console.error("Request error:", error);
		throw error;
	}
};
