---
id: webhook
title: Handling Webhooks
sidebar_label: Webhooks
---
# Webhook Reference

Webhooks allow your application to receive real-time notifications about events that occur in your account. This guide explains how to set up and use webhooks.

## Overview

Webhooks are HTTP callbacks that are triggered when specific events occur in our system. When an event happens, we'll send an HTTP POST request to the URL you've configured to receive webhooks.

## Setting Up Webhooks

To set up a webhook:

1. Go to your account settings
2. Navigate to the Webhooks section
3. Enter the URL where you want to receive webhook notifications
4. Select the events you want to subscribe to
5. Save your settings

## Webhook Events

Our API can send notifications for the following event types:

| Event Type | Description |
|------------|-------------|
| `transaction.created` | Triggered when a new transaction is created |
| `transaction.updated` | Triggered when a transaction's status changes |
| `invoice.paid` | Triggered when an invoice is marked as paid |
| `account.updated` | Triggered when account information is updated |

## Webhook Payload

Each webhook request contains a JSON payload with information about the event that occurred:

```json
{
  "id": "evt_123456789",
  "type": "transaction.created",
  "created": "2025-04-16T12:00:00Z",
  "data": {
    "id": "txn_987654321",
    "amount": 1000,
    "currency": "XAF",
    "status": "completed"
  }
}
```

## Security

For security purposes, all webhook requests are signed with a signature that you can use to verify that the request came from our servers.

## Retry Policy

If your endpoint returns a non-2xx response code, we'll retry the webhook delivery using an exponential backoff strategy.