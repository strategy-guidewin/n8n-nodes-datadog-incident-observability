import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class DatadogApi implements ICredentialType {
	name = 'datadogApi';

	displayName = 'Datadog API';

	icon: Icon = { light: 'file:../icons/datadog.svg', dark: 'file:../icons/datadog.dark.svg' };

	documentationUrl = 'https://docs.datadoghq.com/api/latest/';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Datadog API key. Found under Organization Settings > API Keys.',
		},
		{
			displayName: 'Application Key',
			name: 'applicationKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Datadog application key. Found under Organization Settings > Application Keys.',
		},
		{
			displayName: 'Site',
			name: 'site',
			type: 'options',
			options: [
				{ name: 'US1 (datadoghq.com)', value: 'datadoghq.com' },
				{ name: 'US3 (us3.datadoghq.com)', value: 'us3.datadoghq.com' },
				{ name: 'US5 (us5.datadoghq.com)', value: 'us5.datadoghq.com' },
				{ name: 'EU1 (datadoghq.eu)', value: 'datadoghq.eu' },
				{ name: 'AP1 (ap1.datadoghq.com)', value: 'ap1.datadoghq.com' },
				{ name: 'US1-FED (ddog-gov.com)', value: 'ddog-gov.com' },
			],
			default: 'datadoghq.com',
			description: 'The Datadog site your organization uses',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'DD-API-KEY': '={{$credentials.apiKey}}',
				'DD-APPLICATION-KEY': '={{$credentials.applicationKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '=https://api.{{$credentials.site}}',
			url: '/api/v1/validate',
			method: 'GET',
		},
	};
}
