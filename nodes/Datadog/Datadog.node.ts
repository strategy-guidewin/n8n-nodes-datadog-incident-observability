import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { eventDescription } from './resources/event';
import { logDescription } from './resources/log';
import { monitorDescription } from './resources/monitor';
import { getMonitors } from './listSearch/getMonitors';

export class Datadog implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Datadog',
		name: 'datadog',
		icon: { light: 'file:../../icons/datadog.svg', dark: 'file:../../icons/datadog.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Send events and logs to Datadog, and query monitors and events',
		defaults: {
			name: 'Datadog',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'datadogApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '=https://api.{{$credentials.site}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Event',
						value: 'event',
					},
					{
						name: 'Log',
						value: 'log',
					},
					{
						name: 'Monitor',
						value: 'monitor',
					},
				],
				default: 'event',
			},
			...eventDescription,
			...logDescription,
			...monitorDescription,
		],
	};

	methods = {
		listSearch: {
			getMonitors,
		},
	};
}
