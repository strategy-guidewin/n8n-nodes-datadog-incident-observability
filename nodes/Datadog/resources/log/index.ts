import type { INodeProperties } from 'n8n-workflow';
import { logSendDescription } from './send';

const showOnlyForLogs = {
	resource: ['log'],
};

export const logDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForLogs,
		},
		options: [
			{
				name: 'Send',
				value: 'send',
				action: 'Send a log',
				description: 'Send a log entry to Datadog log management',
				routing: {
					request: {
						method: 'POST',
						url: '=https://http-intake.logs.{{$credentials.site}}/api/v2/logs',
					},
				},
			},
		],
		default: 'send',
	},
	...logSendDescription,
];
