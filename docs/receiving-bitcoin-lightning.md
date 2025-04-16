---
id: receiving-bitcoin-lightning
title: Receiving Bitcoin (Lightning)
sidebar_label: Receiving Bitcoin (Lightning)
---

# Receiving Bitcoin (Lightning)

## Receiving lightning payments

You might want to build an application that allows people to receive tips via lightning, receive bitcoin payments via lightning or give your users the ability to receive instant payments. The Lightning Pay makes this a very easy integration for you.

In order to receive lightning payments, you need to create a lightning invoice. The invoice follows the BOLT11 protocol and contains a segwit address for receiving on-chain payments.

The payment request comes as request and starts with ln. We recommend that you show this as a QR to your users while giving them the option to copy the invoice.

A sample lightning invoice is
```
lntb1500n1ps3jt1tkpp5qapg7etpg6jzuk930p4n4dw5afrac0mr77qds03htcvvgyheq4dp9zfjkzep0ypd0zumnbyprx
2efq2fhh2arfdnm9cqzpaqar23ssu5pkfufnn9xy2tdeqev68fcdrmk1s0lzndxmu23pz839j0dflssmh3qyysqqlvx2wt
ae3w50fauhahq7tqe30xchclw3fs0m3jey17n6lyg2frjbzwp3akcqtzu032tvtlvnj3fn3qg99q6ysx6n9q29jzva853
qq3txrjr
```

## Invoice Limits

If the amount you set for an invoice is greater than 500,000,000 satoshis(5BTC), we will not return any invoice.

When we detect a payment made for an invoice, we will send you a webhook notification with the event type
```
btc.lightning.received.success
```

## Invoice Expiry

An invoice expires after 7 days