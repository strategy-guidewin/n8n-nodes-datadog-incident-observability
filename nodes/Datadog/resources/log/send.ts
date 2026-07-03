import type { INodeProperties } from 'n8n-workflow';

const showOnlyForLogSend = {
	operation: ['send'],
	resource: ['log'],
};

export const logSendDescription: INodeProperties[] = [
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForLogSend,
		},
		description: 'The log message body',
		routing: {
			send: {
				type: 'body',
				property: 'message',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForLogSend,
		},
		options: [
			{
				displayName: 'Hostname',
				name: 'hostname',
				type: 'string',
				default: '',
				description: 'The name of the originating host of the log',
				routing: {
					send: {
						type: 'body',
						property: 'hostname',
					},
				},
			},
			{
				displayName: 'Service',
				name: 'service',
				type: 'string',
				default: '',
				description: 'The name of the application or service generating the log events',
				routing: {
					send: {
						type: 'body',
						property: 'service',
					},
				},
			},
			{
				displayName: 'Source',
				name: 'ddsource',
				type: 'string',
				default: 'n8n',
				description: 'A human-readable name for the underlying technology of the log, used for Datadog log pipelines',
				routing: {
					send: {
						type: 'body',
						property: 'ddsource',
					},
				},
			},
			{
				displayName: 'Tags',
				name: 'ddtags',
				type: 'string',
				default: '',
				placeholder: 'env:prod,team:sre',
				description: 'Comma-separated list of tags to apply to the log',
				routing: {
					send: {
						type: 'body',
						property: 'ddtags',
					},
				},
			},
		],
	},
];
