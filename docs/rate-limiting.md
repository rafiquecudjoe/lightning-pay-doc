---
id: rate-limiting
title: Rate Limiting
sidebar_label: Rate Limiting
---

# Rate Limiting

To prevent abuse and protect our services and customers, we have placed a maximum rate limit on requests. When the rate limit has been exceeded, a 429 Error will be thrown.

## Understanding Rate Limits

API requests are rate-limited to ensure fair usage. The current rate limit is set to 100 requests per 2 minutes.

You can check the response headers for rate limit information:

- `X-RateLimit-Limit`: The maximum number of requests you're permitted to make per hour
- `X-RateLimit-Remaining`: The number of requests remaining in the current rate limit window
- `X-RateLimit-Reset`: The time at which the current rate limit window resets in UTC epoch seconds

## Best Practices

- Implement exponential backoff or request throttling in your applications
- Cache responses when possible to reduce the number of API calls
- Monitor your API usage regularly to avoid hitting rate limits
- Handle 429 errors gracefully with appropriate retry mechanisms

This will be updated and reflected here when it changes.