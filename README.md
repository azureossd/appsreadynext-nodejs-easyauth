# NodeJS - Authentication/Authorization Middleware

>**The purpose of this repository is intended just for training material and it is not recommended to take this as a reference for production scenarios.**

1. Request **/** to reproduce a http 431 status code, to fix this add this app setting **WEBSITE_AUTH_DISABLE_IDENTITY_FLOW=true**.
2. Request **/user** to reproduce "Failed to forward request to application. Encountered a System.Net.Http.HttpRequestException exception after 7.878ms with message: The HTTP response headers length exceeded the set limit of 65536 bytes.. Check application logs to verify the application is properly handling HTTP traffic." Review for dotnet core limits "https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.server.kestrel.core.kestrelserverlimits?view=aspnetcore-3.1"

