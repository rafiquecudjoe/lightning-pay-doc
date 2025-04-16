---
id: postman-collection
title: Postman Collection
sidebar_label: Postman Collection
---

# Postman Collection

Lightning Pay provides a Postman Collection that allows you to easily test and explore our API endpoints. This collection includes all the necessary requests to work with our APIs, including authentication, API key management, invoices, and more.

## What's Included

The Postman collection includes the following request categories:

- **Authentication**: Partner registration and login endpoints
- **API Key Management**: Create, retrieve, and regenerate API keys
- **Invoices**: Create and manage Lightning Network invoices
- **Applications**: Create and manage applications
- **Partner Operations**: Access balance and invoice information

## Download the Collection

You can download our Postman Collection using the link below:

<a href="/postman/postman.json" className="button button--primary button--lg" download>Download Postman Collection</a>

## Using the Postman Collection

After downloading the collection:

1. **Import the Collection**: Open Postman and click "Import" to add the collection to your workspace

2. **Configure Environment Variables**: Create an environment in Postman with the following variables:
   - `base_url`: Your Lightning Pay API base URL (e.g., `https://api.lightning-pay.com/v1` or `http://localhost:3000` for local testing)
   - `api_key`: Your API key (generated after creating an application)
   - `auth_token`: Your authentication token (received after login)

3. **Execute Requests**: Start exploring the API by sending requests. Remember to authenticate first before using endpoints that require authorization.

## Example Usage

Here's a quick guide to get started:

1. Register a new partner account using the partner registration endpoint
2. A defaut application is created for you when you sign up.
4. Generate an API key with the Create API key endpoint with the Bearer token from signup or login page and also use the applicationReferenceId from the signup endpoint
5. Create a Lightning invoice using the Create invoice endpoint by passing the API key in your request headers

For more detailed information about our API endpoints, refer to the [API Reference](/api) section.