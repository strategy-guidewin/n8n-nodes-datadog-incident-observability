import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEventSearch = {
	operation: ['search'],
	resource: ['event'],
};

export const eventSearchDescription: INodeProperties[] = [
	{
		displayName: 'Start',
		name: 'start',
		type: 'dateTime',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForEventSearch,
		},
		description: 'Start of the time window to search for events',
		routing: {
			send: {
				type: 'query',
				property: 'start',
				value: '={{ Math.floor(new Date($value).getTime() / 1000) }}',
			},
		},
	},
	{
		displayName: 'End',
		name: 'end',
		type: 'dateTime',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForEventSearch,
		},
		description: 'End of the time window to search for events',
		routing: {
			send: {
				type: 'query',
				property: 'end',
				value: '={{ Math.floor(new Date($value).getTime() / 1000) }}',
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
			show: showOnlyForEventSearch,
		},
		options: [
			{
				displayName: 'Exclude Aggregate',
				name: 'exclude_aggregate',
				type: 'boolean',
				default: false,
				description: 'Whether to exclude aggregated events (event groups) from the response',
				routing: {
					send: {
						type: 'query',
						property: 'exclude_aggregate',
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
				description: 'Filter events by priority',
				routing: {
					send: {
						type: 'query',
						property: 'priority',
					},
				},
			},
			{
				displayName: 'Sources',
				name: 'sources',
				type: 'string',
				default: '',
				placeholder: 'nagios,jenkins',
				description: 'Comma-separated list of sources to filter by',
				routing: {
					send: {
						type: 'query',
						property: 'sources',
					},
				},
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
				placeholder: 'env:prod,team:sre',
				description: 'Comma-separated list of tags to filter by',
				routing: {
					send: {
						type: 'query',
						property: 'tags',
					},
				},
			},
			{
				displayName: 'Unaggregated',
				name: 'unaggregated',
				type: 'boolean',
				default: false,
				description: 'Whether to return unaggregated events',
				routing: {
					send: {
						type: 'query',
						property: 'unaggregated',
					},
				},
			},
		],
	},
];
