---
id: errors
title: Error Handling
sidebar_label: Errors
---

# Error Handling

Our API uses conventional HTTP response codes to indicate the success or failure of requests.

## HTTP Status Codes

- `200 OK` - The request was successful
- `201 Created` - The request was successful and a resource was created
- `400 Bad Request` - The request was malformed or contains invalid parameters
- `401 Unauthorized` - Authentication failed or user doesn't have permissions
- `404 Not Found` - The requested resource doesn't exist
- `429 Too Many Requests` - Rate limit exceeded
- `500 Internal Server Error` - Something went wrong on our end

## Error Response Format

All error responses include a JSON object with the following structure:

```json
{
  "code": 404,
  "message": "The requested resource was not found"
}
```

## Common Error Codes

Here are some common error codes you might encounter:

| Code | Description |
|------|-------------|
| 1001 | Invalid API key |
| 1002 | Expired API key |
| 2001 | Resource not found |
| 3001 | Rate limit exceeded |
| 4001 | Invalid parameters |
| 5001 | Internal server error |
