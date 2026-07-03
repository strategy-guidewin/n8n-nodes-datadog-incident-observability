# n8n-nodes-datadog-incident-observability

This is an n8n community node. It lets you use [Datadog](https://www.datadoghq.com/) in your n8n workflows.

Datadog is an observability and security platform for cloud infrastructure, applications, logs, and incidents. This node turns Datadog monitors, events, and logs into first-class building blocks for n8n automations, so SRE and platform teams can trigger, investigate, and audit workflows without hand-rolling HTTP requests.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This is phase 1 of a larger Datadog Incident & Observability node. It currently supports:

- **Event**
  - **Send** — post an event to the Datadog event stream
  - **Search** — query the event stream over a time window (deploys, config changes, monitor events, Watchdog findings, third-party events, etc.)
- **Log**
  - **Send** — send a log entry to Datadog log management
- **Monitor**
  - **Get** — fetch a monitor's definition, status, and tags

Planned in later phases: monitor alert / incident triggers, incident CRUD and timeline items, log search, metric queries, and AI-assisted incident helpers (see the project's build-order spec).

## Credentials

This node authenticates with the [Datadog API](https://docs.datadoghq.com/api/latest/) using:

- **API Key** — Organization Settings > API Keys
- **Application Key** — Organization Settings > Application Keys
- **Site** — the Datadog site your organization is on (US1, US3, US5, EU1, AP1, or US1-FED)

Both keys are sent as `DD-API-KEY` / `DD-APPLICATION-KEY` headers on every request.

## Compatibility

Requires n8n's declarative node API version 1. Built and tested against `n8n-workflow` 2.x.

## Usage

Log sends are posted to the site's dedicated log-intake domain (`http-intake.logs.<site>`) rather than the standard API domain — this is handled automatically based on the Site selected in your credentials.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Datadog API documentation](https://docs.datadoghq.com/api/latest/)

## Version history

- **0.1.0** — Initial release (Phase 1): credentials, Send Event, Search Events, Send Log, Get Monitor.
