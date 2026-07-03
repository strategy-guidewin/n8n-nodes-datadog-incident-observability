import type { INodeProperties } from 'n8n-workflow';

export const monitorSelect: INodeProperties = {
	displayName: 'Monitor',
	name: 'monitorId',
	type: 'resourceLocator',
	default: { mode: 'list', value: '' },
	required: true,
	modes: [
		{
			displayName: 'Monitor',
			name: 'list',
			type: 'list',
			placeholder: 'Select a monitor...',
			typeOptions: {
				searchListMethod: 'getMonitors',
				searchable: true,
			},
		},
		{
			displayName: 'By ID',
			name: 'id',
			type: 'string',
			placeholder: 'e.g. 12345678',
			validation: [
				{
					type: 'regex',
					properties: {
						regex: '^[0-9]+$',
						errorMessage: 'Not a valid monitor ID',
					},
				},
			],
		},
	],
};
