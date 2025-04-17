---
id: pagination
title: Pagination
sidebar_label: Pagination
---

# Pagination

All GET endpoints that return an object list comes with a meta object with pagination information.


## Syntax

| Parameter | Description |
|-----------|-------------|
| `total` | Total number of records available|
| `totalPages` | Total number of pages based on size |
| `page` | The current page|
| `totalPages` | Total pages available |




## Arguments

| Parameter | Description |
|-----------|-------------|
| `page` | (optional) Represent the current page being requested . Defualt is 1|
| `size` | (optional) Number of items per page being requested. Default 10 |


