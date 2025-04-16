"use strict";(self.webpackChunkapi_doc=self.webpackChunkapi_doc||[]).push([[102],{4027:e=>{e.exports=JSON.parse('{"url":"redocusaurus/example-api.yaml","isSpecFile":true,"normalizeUrl":true,"spec":{"openapi":"3.0.0","paths":{"/api/v1/authentication/partner/register":{"post":{"operationId":"AuthenticationController_signUp","parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SignUpDto"}}}},"responses":{"201":{"description":"Successful","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthRegisterPartnerSuccessResponse"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponseWithoutData"}}}}},"summary":"Used to create a new partner account","tags":["Authentication"]}},"/api/v1/authentication/login":{"post":{"operationId":"AuthenticationController_login","parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/LoginDto"}}}},"responses":{"200":{"description":"Successful","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthLoginPartnerSuccessResponse"}}}},"201":{"description":""},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponseWithoutData"}}}}},"summary":"Used to log into an account","tags":["Authentication"]}},"/api/v1/api-keys":{"post":{"operationId":"ApiKeyController_createApiKey","parameters":[{"name":"Authorization","in":"header","description":"Bearer token from signup or login endpoint","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CreateApiKeyDto"}}}},"responses":{"201":{"description":"API key created successfully","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ApiKeyResponse"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponseWithoutData"}}}}},"summary":"Create a new API key for an application","tags":["Api-keys"]},"get":{"operationId":"ApiKeyController_getApiKey","parameters":[{"name":"applicationReferenceId","required":true,"in":"query","description":"The unique reference ID of the application","schema":{"example":"app_1a2b3c4d5e6f","type":"string"}},{"name":"Authorization","in":"header","description":"Bearer token from signup or login endpoint","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"List of API keys","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ApiKeyResponse"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponseWithoutData"}}}}},"summary":"Retrieve api key","tags":["Api-keys"]}},"/api/v1/api-keys/re-generate":{"post":{"operationId":"ApiKeyController_updateApiKey","parameters":[{"name":"Authorization","in":"header","description":"Bearer token from signup or login endpoint","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RegenerateApiKeyDto"}}}},"responses":{"201":{"description":"API key updated successfully","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ApiKeyResponse"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponseWithoutData"}}}}},"summary":"Update an existing API key","tags":["Api-keys"]}},"/api/v1/invoices":{"post":{"description":"Creates a new lightning network invoice that can be paid with Bitcoin. The invoice will be valid for 7 days by default, or until the specified expiration time.","operationId":"InvoiceController_createInvoice","parameters":[{"name":"X-API-Key","in":"header","description":"API key for application identification","required":true,"schema":{"type":"string","example":"pk_test_123abc456def"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CreateInvoiceDto"}}}},"responses":{"201":{"description":"Invoice created successfully","schema":{"properties":{"statusCode":{"type":"number","example":201},"message":{"type":"string","example":"Invoice created successfully"},"data":{"$ref":"#/components/schemas/InvoiceResponse"}}},"content":{"application/json":{"schema":{"$ref":"#/components/schemas/InvoiceResponse"}}}},"400":{"description":"Bad Request: Invalid input data","content":{"application/json":{"schema":{"properties":{"statusCode":{"type":"number","example":400},"message":{"type":"string","example":"satoshiAmount must be greater than or equal to 1000"}}}}}},"401":{"description":"Unauthorized: Invalid or missing API key","content":{"application/json":{"schema":{"properties":{"statusCode":{"type":"number","example":401},"message":{"type":"string","example":"Invalid API key"}}}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"properties":{"statusCode":{"type":"number","example":500},"message":{"type":"string","example":"An unexpected error occurred"}}}}}}},"security":[{"x-api-key":[]},{"bearer":[]}],"summary":"Create a new Lightning Network invoice","tags":["Invoices"]}},"/api/v1/partners/invoices":{"get":{"operationId":"PartnerController_getInvoices","parameters":[{"name":"offset","required":false,"in":"query","description":"Items to skip","schema":{"default":"0","example":"0","type":"number"}},{"name":"limit","required":false,"in":"query","description":"Number of records to take","schema":{"default":"10","example":"10","type":"number"}},{"name":"status","required":false,"in":"query","description":"Filter invoices by status","schema":{"example":"PENDING","type":"string","enum":["pending","completed","failed","cancelled","expired"]}},{"name":"startDate","required":false,"in":"query","description":"Filter invoices created after this date (ISO format)","schema":{"format":"date-time","example":"2025-01-01T00:00:00Z","type":"string"}},{"name":"endDate","required":false,"in":"query","description":"Filter invoices created before this date (ISO format)","schema":{"format":"date-time","example":"2025-04-15T23:59:59Z","type":"string"}},{"name":"applicationRefenceId","required":false,"in":"query","description":"Filter invoices by application reference ID","schema":{"example":"app_1a2b3c4d5e6f","type":"string"}}],"responses":{"200":{"description":"List of invoices retrieved successfully","content":{"application/json":{"schema":{"$ref":"#/components/schemas/InvoiceListResponse"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponseWithoutData"}}}}},"summary":"Retrieve all invoices for a partner","tags":["Partner"]}},"/api/v1/partners/invoices/{invoiceReferenceId}":{"get":{"operationId":"PartnerController_getInvoiceStatus","parameters":[{"name":"invoiceReferenceId","required":true,"in":"path","schema":{"type":"string"}}],"responses":{"200":{"description":"Invoice status retrieved successfully","content":{"application/json":{"schema":{"$ref":"#/components/schemas/InvoiceStatusResponse"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponseWithoutData"}}}}},"summary":"Get the status of a specific invoice","tags":["Partner"]}},"/api/v1/partners/balance":{"get":{"operationId":"PartnerController_getBalance","parameters":[],"responses":{"200":{"description":"Balance retrieved successfully","content":{"application/json":{"schema":{"$ref":"#/components/schemas/BalanceResponse"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponseWithoutData"}}}}},"summary":"Get the current balance for the partner application","tags":["Partner"]}},"/api/v1/applications":{"post":{"operationId":"ApplicationController_createApplication","parameters":[{"name":"Authorization","in":"header","description":"Bearer token from signup or login endpoint","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CreateApplicationDto"}}}},"responses":{"201":{"description":"Application created successfully","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ApplicationResponse"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponseWithoutData"}}}}},"summary":"Create a new application","tags":["Applications"]},"get":{"operationId":"ApplicationController_getApplications","parameters":[{"name":"status","required":false,"in":"query","description":"Filter applications by status","schema":{"example":"active","type":"string","enum":["active","inactive","deleted"]}},{"name":"Authorization","in":"header","description":"Bearer token from signup or login endpoint","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"List of applications","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ApplicationResponse"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponseWithoutData"}}}}},"summary":"Retrieve applications","tags":["Applications"]}},"/api/v1/applications/{applicationReferenceId}":{"get":{"operationId":"ApplicationController_getApplicationById","parameters":[{"name":"applicationReferenceId","required":true,"in":"path","description":"Application reference id","schema":{"type":"string"}},{"name":"Authorization","in":"header","description":"Bearer token from signup or login endpoint","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Application details","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ApplicationResponse"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponseWithoutData"}}}}},"summary":"Retrieve application by reference id","tags":["Applications"]},"put":{"operationId":"ApplicationController_updateApplication","parameters":[{"name":"applicationReferenceId","required":true,"in":"path","description":"Application reference id","schema":{"type":"string"}},{"name":"Authorization","in":"header","description":"Bearer token from signup or login endpoint","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/UpdateApplicationDto"}}}},"responses":{"200":{"description":"Application updated successfully","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ApplicationResponse"}}}},"404":{"description":"Application not found"},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponseWithoutData"}}}}},"summary":"Update an existing application","tags":["Applications"]}},"/api/v1/applications/webhooks":{"post":{"operationId":"ApplicationController_subscribeWebhook","parameters":[{"name":"Authorization","in":"header","description":"Bearer token from signup or login endpoint","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/WebhookSubscriptionDto"}}}},"responses":{"201":{"description":"Webhook subscription created successfully","content":{"application/json":{"schema":{"$ref":"#/components/schemas/WebhookResponseData"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponseWithoutData"}}}}},"summary":"Subscribe to webhooks for an application","tags":["Applications"]}}},"info":{"title":"Lightning Pay API","description":"Complete API documentation for the Lightning Pay service","version":"1.0","contact":{"name":"Lightning Pay Support","url":"https://lightning-pay.com/support","email":"support@lightning-pay.com"}},"tags":[{"name":"Authentication","description":"Authentication endpoints"},{"name":"Api-keys","description":"API key management"},{"name":"Applications","description":"Application management"},{"name":"Invoices","description":"Invoice operations"},{"name":"Partner","description":"Partner-related operations"}],"servers":[{"url":"","description":"Production"},{"url":"","description":"Sandbox"}],"components":{"securitySchemes":{"bearer":{"scheme":"bearer","bearerFormat":"JWT","type":"http","name":"Authorization","description":"Enter your bearer token","in":"header"},"x-api-key":{"type":"apiKey","in":"header","name":"x-api-key","description":"API key for application authorization"}},"schemas":{"SignUpDto":{"type":"object","properties":{"email":{"type":"string","format":"email","description":"User email address","example":"user@example.com"},"password":{"type":"string","description":"User password (8+ chars, including uppercase, lowercase, number, symbol)","example":"StrongP@ss123","minLength":8},"phoneNumber":{"type":"string","pattern":"/^[0-9]+$/","description":"User phone number (digits only)","example":"1234567890"},"phoneNumberCountryCode":{"type":"string","pattern":"/^\\\\+[0-9]+$/","description":"Country code for phone number","example":"+1"}},"required":["email","password","phoneNumber","phoneNumberCountryCode"]},"AuthRegisterPartnerUserDetails":{"type":"object","properties":{"email":{"type":"string"},"phoneNumber":{"type":"string"},"phoneNumberCountryCode":{"type":"string"},"partnerReferenceId":{"type":"string"},"role":{"type":"string"},"applicationReferenceId":{"type":"string"}},"required":["email","phoneNumber","phoneNumberCountryCode","partnerReferenceId","role","applicationReferenceId"]},"AuthRegisterPartnerSuccessResponse":{"type":"object","properties":{"statusCode":{"type":"number"},"message":{"type":"string"},"data":{"$ref":"#/components/schemas/AuthRegisterPartnerUserDetails"}},"required":["statusCode","message","data"]},"ErrorResponseWithoutData":{"type":"object","properties":{"message":{"type":"string","description":"Response message","example":"An error occurred,Contact an admin for asistance"}},"required":["message"]},"LoginDto":{"type":"object","properties":{"email":{"type":"string","format":"email","description":"User email address","example":"user@example.com"},"password":{"type":"string","description":"User password","example":"StrongP@ss123"}},"required":["email","password"]},"AuthLoginPartnerSuccessResponse":{"type":"object","properties":{"email":{"type":"string"},"phoneNumber":{"type":"string"},"phoneNumberCountryCode":{"type":"string"},"partnerReferenceId":{"type":"string"},"role":{"type":"string"},"applicationReferenceId":{"type":"string"}},"required":["email","phoneNumber","phoneNumberCountryCode","partnerReferenceId","role","applicationReferenceId"]},"CreateApiKeyDto":{"type":"object","properties":{"applicationReferenceId":{"type":"string","description":"The unique reference ID of the application to associate with this API key","example":"app_1a2b3c4d5e6f"},"description":{"type":"string","description":"A description to help identify the purpose of this API key","example":"Production payment processing key","maxLength":200},"whitelistedIpAddresses":{"description":"List of IP addresses allowed to use this API key","example":["192.168.1.1","10.0.0.1"],"type":"array","items":{"type":"string"}}},"required":["applicationReferenceId"]},"ApiKeyResponse":{"type":"object","properties":{"message":{"type":"string","description":"Response message","example":"Successful"},"data":{"type":"object","properties":{"key":{"type":"string"},"description":{"type":"string"},"status":{"type":"string"},"whitelistedIpAddresses":{"type":"array","items":{"type":"string"}},"applicationReferenceId":{"type":"string"},"createdAt":{"format":"date-time","type":"string"}},"required":["key","status","applicationReferenceId","createdAt"]}},"required":["message","data"]},"RegenerateApiKeyDto":{"type":"object","properties":{"applicationReferenceId":{"type":"string","description":"The unique reference ID of the application","example":"app_1a2b3c4d5e6f"}},"required":["applicationReferenceId"]},"CreateInvoiceDto":{"type":"object","properties":{"satoshiAmount":{"type":"number","minimum":1000,"description":"Amount to be paid in satoshis","example":50000,"format":"int64"},"description":{"type":"string","description":"Description of the invoice that will be shown to the payer","example":"Payment for order #12345","maxLength":500},"reference":{"type":"string","description":"Custom reference ID for your system to track this invoice","example":"ORD-12345-ABC","maxLength":50},"expiresAt":{"type":"string","description":"Expiration time for this invoice in ISO8601 format. Defaults to 7 days if not provided","example":"2025-04-20T23:59:59Z","format":"date-time"}},"required":["satoshiAmount","description"]},"InvoiceData":{"type":"object","properties":{"invoiceHash":{"type":"string","description":"Unique invoice hash for blockchain reference","example":"273b1f8e082811f69f2fe2adbe8d42561e9cc3df6c063c9c21e8033ba586019a"},"description":{"type":"string","description":"Description of the invoice that will be shown to the payer","example":"Payment for order #12345"},"status":{"type":"string","description":"Current status of the invoice","example":"pending","enum":["pending","paid","expired","cancelled"]},"amount":{"type":"number","description":"Invoice amount in satoshi","example":50000},"expiryDate":{"format":"date-time","type":"string","description":"Expiration date of the invoice","example":"2025-04-22T14:30:00Z"},"createdAt":{"format":"date-time","type":"string","description":"Creation timestamp","example":"2025-04-15T14:30:00Z"}},"required":["invoiceHash","description","status","amount","expiryDate","createdAt"]},"InvoiceResponse":{"type":"object","properties":{"message":{"type":"string","description":"Response message","example":"Successful"},"data":{"description":"Invoice data object","allOf":[{"$ref":"#/components/schemas/InvoiceData"}]}},"required":["message","data"]},"InvoiceListResponse":{"type":"object","properties":{"message":{"type":"string","description":"Response message","example":"Successful"},"data":{"type":"object","description":"Response data","example":{},"nullable":true}},"required":["message"]},"InvoiceStatusResponse":{"type":"object","properties":{"message":{"type":"string","description":"Response message","example":"Successful"},"data":{"type":"object","description":"Response data","example":{},"nullable":true}},"required":["message"]},"BalanceResponse":{"type":"object","properties":{"message":{"type":"string","description":"Response message","example":"Successful"},"data":{"type":"object","description":"Response data","example":{},"nullable":true}},"required":["message"]},"CreateApplicationDto":{"type":"object","properties":{"name":{"type":"string","description":"Name of the application","example":"Payment Gateway Integration","maxLength":100},"description":{"type":"string","description":"Detailed description of the application","example":"Integration with our e-commerce platform to process Bitcoin payments","maxLength":500},"environment":{"type":"string","description":"Application environment","example":"sandbox","enum":["sandbox","production"]}},"required":["name","environment"]},"CreateApplicationResponseData":{"type":"object","properties":{"applicationReferenceId":{"type":"string","description":"Application reference ID used for external references","example":"app_1a2b3c4d5e6f"},"name":{"type":"string","description":"Name of the application","example":"Payment Gateway Integration"},"description":{"type":"string","description":"Detailed description of the application","example":"Integration with our e-commerce platform to process Bitcoin payments"},"environment":{"type":"string","description":"Application environment","example":"sandbox"},"status":{"type":"string","description":"Current status of the application","example":"active","enum":["active","inactive","deleted"]},"createdAt":{"format":"date-time","type":"string","description":"When the application was created","example":"2025-04-15T10:30:00Z"}},"required":["applicationReferenceId","name","description","environment","status","createdAt"]},"ApplicationResponse":{"type":"object","properties":{"message":{"type":"string","description":"Response message","example":"Successful"},"data":{"description":"Response data containing application details","allOf":[{"$ref":"#/components/schemas/CreateApplicationResponseData"}]}},"required":["message","data"]},"UpdateApplicationDto":{"type":"object","properties":{"name":{"type":"string","description":"Updated name of the application","example":"Updated Payment Gateway","maxLength":100},"description":{"type":"string","description":"Updated description of the application","example":"Updated integration with enhanced features","maxLength":500},"status":{"type":"string","description":"Updated status of the application","example":"active","enum":["active","inactive","deleted"]},"environment":{"type":"string","description":"Updated environment of the application","example":"production","enum":["sandbox","production"]}}},"WebhookSubscriptionDto":{"type":"object","properties":{"applicationReferenceId":{"type":"string","description":"The unique reference ID of the application","example":"app_1a2b3c4d5e6f"},"webhookUrl":{"type":"string","description":"The URL where webhook events will be sent","example":"https://your-domain.com/webhook/bitcoin-payments"},"subscribedEvents":{"description":"List of event types to subscribe to","example":["btc.lightning.received.success","btc.lightning.received.failed"],"type":"array","items":{"type":"string"}}},"required":["applicationReferenceId","webhookUrl"]},"WebhookResponseData":{"type":"object","properties":{"applicationReferenceId":{"type":"string","description":"The unique reference ID of the application","example":"app_1a2b3c4d5e6f"},"webhookUrl":{"type":"string","description":"The URL where webhook events will be sent","example":"https://your-domain.com/webhook/bitcoin-payments"},"webhookSecret":{"type":"string","description":"Webhookm secret used for authentication","example":"777e7e7e7yhu7kk"},"subscribedEvents":{"description":"List of event types to subscribe to","example":["btc.lightning.received.success","btc.lightning.received.failed"],"type":"array","items":{"type":"string"}},"createdAt":{"format":"date-time","type":"string","description":"When the application was created","example":"2025-04-15T10:30:00Z"}},"required":["applicationReferenceId","webhookUrl","webhookSecret","createdAt"]}}},"externalDocs":{"description":"Additional Documentation","url":"https://docs.lightning-pay.com"}}}')}}]);