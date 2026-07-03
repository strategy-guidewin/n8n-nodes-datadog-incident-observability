import type { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { datadogApiRequest } from '../shared/transport';

type Monitor = {
	id: number;
	name: string;
};

export async function getMonitors(
	this: ILoadOptionsFunctions,
	filter?: string,
): Promise<INodeListSearchResult> {
	const monitors: Monitor[] = await datadogApiRequest.call(this, 'GET', '/api/v1/monitor', {
		name: filter,
	});

	const results = monitors.map((monitor) => ({
		name: monitor.name || `Monitor ${monitor.id}`,
		value: monitor.id,
	}));

	return { results };
}
