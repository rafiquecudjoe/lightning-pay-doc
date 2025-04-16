---
id: pagination
title: Pagination
sidebar_label: Pagination
---

# Pagination

All GET endpoints that return an object list support cursor-based pagination with pagination information inside a meta object.

## Syntax

| Parameter | Description |
|-----------|-------------|
| `page` | Number of results on the current page. Defaults to 10 items |
| `take` | Number of results on the current page. Defaults to 10 items |
| `itemCount` | Total number of results. |
| `pageCount` | The number of pages based on `take` |
| `hasPreviousPage` | Boolean field. It tells if there is a previous page, based on `take`. |
| `hasNextPage` | Boolean field. It tells if there is a next page, based on `take`. |

This means that to get all objects, you need to paginate through the results by always using the `take`. Default `take` is set to 10, but values up to 100 are permitted. The result list is in descending order by default (newest item first) but can be reversed by supplying `order=ASC` instead.

## Arguments

| Parameter | Description |
|-----------|-------------|
| `page` | (optional) Number of results per request. Accepted values: 1 - 50. Default 10 |
| `order` | (optional) Result order. Accepted values: DESC (default), ASC |
| `page` | (optional) Result page. |