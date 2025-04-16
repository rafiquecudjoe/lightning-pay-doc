---
id: overview
title: API Overview
sidebar_label: Overview
---

# API Overview

Our API is designed to be RESTful and uses standard HTTP response codes to indicate the success or failure of API requests.

## Base URL

All API requests should be made to:

```
https://api.example.com/v1
```

For development and testing, you can use our staging environment:

```
https://staging-api.example.com/v1
```

## Response Format

All responses are returned in JSON format.

## API Versioning

We version our API to ensure backward compatibility as we evolve. The current version is `v1`.

## Rate Limiting

API requests are rate-limited to ensure fair usage. Please check the response headers for rate limit information.

- `X-RateLimit-Limit`: The maximum number of requests you're permitted to make per hour.
- `X-RateLimit-Remaining`: The number of requests remaining in the current rate limit window.
- `X-RateLimit-Reset`: The time at which the current rate limit window resets in UTC epoch seconds.