import type { INodeProperties } from 'n8n-workflow';
import { monitorSelect } from '../../shared/descriptions';

const showOnlyForMonitorGet = {
	operation: ['get'],
	resource: ['monitor'],
};

export const monitorGetDescription: INodeProperties[] = [
	{
		...monitorSelect,
		displayOptions: {
			show: showOnlyForMonitorGet,
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForMonitorGet,
		},
		options: [
			{
				displayName: 'Group States',
				name: 'group_states',
				type: 'multiOptions',
				options: [
					{ name: 'Alert', value: 'alert' },
					{ name: 'Warn', value: 'warn' },
					{ name: 'No Data', value: 'no data' },
					{ name: 'All', value: 'all' },
				],
				default: [],
				description: 'Only return group states matching these statuses',
				routing: {
					send: {
						type: 'query',
						property: 'group_states',
						value: '={{ $value.join(",") }}',
					},
				},
			},
			{
				displayName: 'With Downtimes',
				name: 'with_downtimes',
				type: 'boolean',
				default: false,
				description: 'Whether to include current downtimes for each monitor',
				routing: {
					send: {
						type: 'query',
						property: 'with_downtimes',
					},
				},
			},
		],
	},
];
