import { monitor } from "@ashgw/monitor";

// Only export Sentry's request-error hook here. We let Next auto-init Sentry
// via sentry.server.config.ts and sentry.client.config.ts to avoid double init.
export const onRequestError = monitor.next.SentryLib.captureRequestError;
