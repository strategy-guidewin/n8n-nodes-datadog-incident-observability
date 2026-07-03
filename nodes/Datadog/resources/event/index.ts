import type { INodeProperties } from 'n8n-workflow';
import { eventSendDescription } from './send';
import { eventSearchDescription } from './search';

const showOnlyForEvents = {
	resource: ['event'],
};

export const eventDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForEvents,
		},
		options: [
			{
				name: 'Send',
				value: 'send',
				action: 'Send an event',
				description: 'Post an event to the Datadog event stream',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v1/events',
					},
				},
			},
			{
				name: 'Search',
				value: 'search',
				action: 'Search events',
				description: 'Query the Datadog event stream for a time window',
				routing: {
					request: {
						method: 'GET',
						url: '/api/v1/events',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'events',
								},
							},
						],
					},
				},
			},
		],
		default: 'send',
	},
	...eventSendDescription,
	...eventSearchDescription,
];
