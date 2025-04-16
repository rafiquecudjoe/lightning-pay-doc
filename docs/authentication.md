---
id: authentication
title: Authentication
sidebar_label: Authentication
---

# Authentication

All requests to the Ejara Lightning Pay API must be authenticated. There are multiple authentication methods available depending on the endpoint you're accessing.


## Authentication Methods

The Lightning Pay API supports two main authentication methods:

### 1. Bearer Token Authentication

Used for most partner and application management endpoints after logging in.

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 2. API Key Authentication

Used for invoice creation and other application-specific operations.

**Headers:**
```
X-API-Key: pk_test_12345abcdef
```

## Authentication Flow

1. **Register Partner Account** - create a partner account
3. **Login** - Get bearer token for authenticated requests
4. **Create Application** - Set up an application using bearer token
5. **Generate API Key** - Create an API key for your application with the application reference id
6. **Use API Key** - Use the API key for invoice operations

## Security Best Practices

- Use environment variables for sensitive credentials
- Rotate API keys periodically