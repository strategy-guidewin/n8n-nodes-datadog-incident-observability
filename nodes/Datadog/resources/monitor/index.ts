import type { INodeProperties } from 'n8n-workflow';
import { monitorGetDescription } from './get';

const showOnlyForMonitors = {
	resource: ['monitor'],
};

export const monitorDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForMonitors,
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get a monitor',
				description: 'Get the definition, status, and tags of a monitor',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/monitor/{{$parameter.monitorId}}',
					},
				},
			},
		],
		default: 'get',
	},
	...monitorGetDescription,
];
