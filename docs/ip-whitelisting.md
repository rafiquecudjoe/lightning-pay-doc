---
id: ip-whitelisting
title: IP Whitelisting
sidebar_label: IP Whitelisting
---

# IP Whitelisting

There are many ways a system can be compromised, and one major way is getting access to your API keys and making requests on your behalf. To prevent that, you can whitelist the IP address(es) of the server(s) your services are running on.

To get started, visit the Dashboard Settings

## Adding IP Addresses

To add an IP Address, click on the `Add IP Address` button. Adding an IP address secludes other requests made from other IP addresses, even those belonging to you.

## Benefits of IP Whitelisting

- **Enhanced Security**: Only allows API requests from known, trusted IP addresses
- **Reduced Attack Surface**: Prevents unauthorized access even if API keys are compromised
- **Compliance**: Helps meet security compliance requirements for sensitive operations

## Best Practices

- Maintain an up-to-date list of your server IP addresses
- Use static IPs for your production environments when possible
- Review and audit your whitelisted IPs periodically