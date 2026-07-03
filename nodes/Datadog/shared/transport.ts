import type {
	IExecuteFunctions,
	IExecuteSingleFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	ILoadOptionsFunctions,
	IDataObject,
} from 'n8n-workflow';

export async function datadogApiRequest(
	this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	resource: string,
	qs: IDataObject = {},
	body: IDataObject | undefined = undefined,
) {
	const credentials = await this.getCredentials('datadogApi');

	const options: IHttpRequestOptions = {
		method,
		qs,
		body,
		url: `https://api.${credentials.site}${resource}`,
		json: true,
	};

	return this.helpers.httpRequestWithAuthentication.call(this, 'datadogApi', options);
}
