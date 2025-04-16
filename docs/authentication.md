---
id: authentication
title: Authentication
sidebar_label: Authentication
---

# Authentication

All requests to the Ejara Lightning Pay API must be authenticated. There are multiple authentication methods available depending on the endpoint you're accessing.

## API Client Creation

Before you can use the Lightning Pay API, you need to create an API client to obtain your client key and secret.

**Endpoint:** `POST /api/v1/api-clients`

**Authorization Required:** None

### Request Body

```json
{
  "name": "My Lightning Pay Client",
  "acceptedIps": ["192.168.1.1", "10.0.0.1"]
}
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | Name of your API client |
| acceptedIps | array | No | List of IP addresses allowed to use this client |

### Response

```json
{
  "data": {
    "clientKey": "ej_client_key_abc123",
    "clientSecret": "ej_client_secret_xyz789"
  },
  "message": "API client created successfully"
}
```

## Authentication Methods

The Lightning Pay API supports three main authentication methods:

### 1. Client Key/Secret Authentication

Used primarily for partner registration and login endpoints.

**Headers:**
```
client-key: ej_client_key_abc123
client-secret: ej_client_secret_xyz789
```

### 2. Bearer Token Authentication

Used for most partner and application management endpoints after logging in.

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 3. API Key Authentication

Used for invoice creation and other application-specific operations.

**Headers:**
```
X-API-Key: pk_test_12345abcdef
```

## Authentication Flow

1. **Create API Client** - Get your client key and secret
2. **Register Partner Account** - Use client key/secret to create a partner account
3. **Login** - Get bearer token for authenticated requests
4. **Create Application** - Set up an application using bearer token
5. **Generate API Key** - Create an API key for your application
6. **Use API Key** - Use the API key for invoice operations

## Security Best Practices

- Store client secrets and API keys securely
- Use environment variables for sensitive credentials
- Rotate API keys periodically
- Use IP whitelisting when possible
- Implement proper error handling for authentication failures
- Never expose your credentials in client-side code