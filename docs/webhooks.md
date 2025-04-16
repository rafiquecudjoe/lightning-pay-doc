---
id: webhook
title: Handling Webhooks
sidebar_label: Webhooks
---
# Webhook Reference

Webhooks allow your application to receive real-time notifications about events that occur on your account. This guide explains how to set up and use webhooks.

## Overview

Webhooks are HTTP callbacks that are triggered when specific events occur in our system. When an event happens, we'll send an HTTP POST request to the URL you've configured to receive webhooks.

## Setting Up Webhooks

To set up a webhook:

1. Use the subscribe to webhooks for an application endpoint to add a valid webhook url and webhook secret


## Webhook Events

Our API can send notifications for the following event types:

| Event Type | Description |
|------------|-------------|
| `btc.lightning.received.success` | Triggered when an invoice get paid |
| `btc.lightning.invoice.expired'` | Triggered when a pending invoice get expired |


## Webhook Payload

Each webhook request contains a JSON payload with information about the event that occurred:

```json
{
  "event": "btc.lightning.received.success",
  "data": {
    "invoice":"inv-8484747484494",
    "status": "completed",
    "amount": 1000,
    "reference": "user_reference",
    "createdAt": "2025-10-10T15:00:00Z",
    "paidAt":"2025-10-10T16:00:00Z",
    "description":"test",
    "invoiceHash":"lntb1500n1ps3jt1tkpp5qapg7etpg6jzuk930p4n4dw5afrac0mr77qds03htcvvgyheq4dp9zfjkzep0ypd0zum"
  }
}
```

## Security

For security purposes, all webhook requests are signed with a signature that can used to verify the authenticity of the event..
