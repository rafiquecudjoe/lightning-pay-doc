---
id: rate-limiting
title: Rate Limiting
sidebar_label: Rate Limiting
---

# Rate Limiting

To prevent abuse and protect our services and customers, we have placed a maximum rate limit on requests. When the rate limit has been exceeded, a 429 Error will be thrown.

## Understanding Rate Limits

API requests are rate-limited to ensure fair usage. The current rate limit is set to 100 requests per 2 minutes.


## Best Practices

- Implement exponential backoff or request throttling in your applications
- Cache responses when possible to reduce the number of API calls
- Monitor your API usage regularly to avoid hitting rate limits
- Handle 429 errors gracefully with appropriate retry mechanisms

This will be updated and reflected here when it changes.