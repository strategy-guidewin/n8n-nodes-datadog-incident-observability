import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEventSend = {
	operation: ['send'],
	resource: ['event'],
};

export const eventSendDescription: INodeProperties[] = [
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForEventSend,
		},
		description: 'The event title',
		routing: {
			send: {
				type: 'body',
				property: 'title',
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForEventSend,
		},
		description: 'The body of the event. Limited to 4000 characters.',
		routing: {
			send: {
				type: 'body',
				property: 'text',
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
			show: showOnlyForEventSend,
		},
		options: [
			{
				displayName: 'Aggregation Key',
				name: 'aggregation_key',
				type: 'string',
				default: '',
				description: 'An arbitrary string to use for aggregation. Events with the same aggregation key are grouped together in the event stream.',
				routing: {
					send: {
						type: 'body',
						property: 'aggregation_key',
					},
				},
			},
			{
				displayName: 'Alert Type',
				name: 'alert_type',
				type: 'options',
				options: [
					{ name: 'Error', value: 'error' },
					{ name: 'Warning', value: 'warning' },
					{ name: 'Info', value: 'info' },
					{ name: 'Success', value: 'success' },
				],
				default: 'info',
				description: 'The type of event',
				routing: {
					send: {
						type: 'body',
						property: 'alert_type',
					},
				},
			},
			{
				displayName: 'Date Happened',
				name: 'date_happened',
				type: 'dateTime',
				default: '',
				description: 'When the event occurred. Defaults to the current time if left empty.',
				routing: {
					send: {
						type: 'body',
						property: 'date_happened',
						value: '={{ Math.floor(new Date($value).getTime() / 1000) }}',
					},
				},
			},
			{
				displayName: 'Host',
				name: 'host',
				type: 'string',
				default: '',
				description: 'The host name to associate with the event',
				routing: {
					send: {
						type: 'body',
						property: 'host',
					},
				},
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				options: [
					{ name: 'Normal', value: 'normal' },
					{ name: 'Low', value: 'low' },
				],
				default: 'normal',
				description: 'The priority of the event',
				routing: {
					send: {
						type: 'body',
						property: 'priority',
					},
				},
			},
			{
				displayName: 'Source Type Name',
				name: 'source_type_name',
				type: 'string',
				default: '',
				description: 'The type of event being posted, e.g. "nagios", "jenkins", "my_apps"',
				routing: {
					send: {
						type: 'body',
						property: 'source_type_name',
					},
				},
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
				placeholder: 'env:prod,team:sre',
				description: 'Comma-separated list of tags to apply to the event',
				routing: {
					send: {
						type: 'body',
						property: 'tags',
						value: '={{ $value ? $value.split(",").map((tag) => tag.trim()) : undefined }}',
					},
				},
			},
		],
	},
];
