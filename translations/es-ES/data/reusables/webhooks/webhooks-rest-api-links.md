The webhook REST APIs enable you to manage repository{% ifversion ghes < 3.0 %} and organization{% else %}, organization, and app{% endif %} webhooks.{% ifversion fpt or ghes > 3.2 or ghae %} You can use this API to list webhook deliveries for a webhook, or get and redeliver an individual delivery for a webhook, which can be integrated into an external app or service.{% endif %}{% ifversion fpt or ghes > 2.22 or ghae %} You can also use the REST API to change the configuration of the webhook. For example, you can modify the payload URL, content type, SSL verification, and secret.{% endif %} For more information, see:

- [API de REST para los webhooks de los repositorios](/rest/reference/repos#webhooks)
- [API de REST para los Webhooks de las Organizaciones](/rest/reference/orgs#webhooks){% ifversion fpt or ghes > 2.22 or ghae %}
- [{% data variables.product.prodname_github_app %} Webhooks REST API](/rest/reference/apps#webhooks){% endif %}
