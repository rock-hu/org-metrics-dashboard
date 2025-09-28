# backend


# octokit   
```javascript
import { Octokit } from "@octokit/core";
import { paginateGraphQL } from "@octokit/plugin-paginate-graphql";


```


## `GET /orgs/{org}` 404

`GET https://api.github.com/users/{username}/repos`

```
Starting GitHub organization metrics fetcher
🔑  Authenticating with GitHub
📋  Configuration:
{
  "includeForks": false,
  "includeArchived": false,
  "organization": "rock-hu",
  "since": "2023-01-01T00:00:00.000Z",
  "basePath": "/org-metrics-dashboard"
}
🔧  Running fetcher addMetaToResult
✨  Finished addMetaToResult
⚙️  Rate limit: 4979/5000 remaining until 9/27/2025, 3:11:59 AM
🔧  Running fetcher addOrganizationInfoToResult
/home/runner/work/org-metrics-dashboard/org-metrics-dashboard/node_modules/@octokit/request/dist-node/index.js:125
      const error = new import_request_error.RequestError(toErrorMessage(data), status, {
                    ^

RequestError [HttpError]: Not Found - https://docs.github.com/rest/orgs/orgs#get-an-organization
    at /home/runner/work/org-metrics-dashboard/org-metrics-dashboard/node_modules/@octokit/request/dist-node/index.js:125:21
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async requestWithGraphqlErrorHandling (/home/runner/work/org-metrics-dashboard/org-metrics-dashboard/node_modules/@octokit/plugin-retry/dist-node/index.js:71:20)
    at async Job.doExecute (/home/runner/work/org-metrics-dashboard/org-metrics-dashboard/node_modules/bottleneck/light.js:405:18) {
  status: 404,
  response: {
    url: 'https://api.github.com/orgs/rock-hu',
    status: 404,
    headers: {
      'access-control-allow-origin': '*',
      'access-control-expose-headers': 'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
      'content-encoding': 'gzip',
      'content-security-policy': "default-src 'none'",
      'content-type': 'application/json; charset=utf-8',
      date: 'Sat, 27 Sep 2025 02:59:29 GMT',
      'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
      server: 'github.com',
      'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
      'transfer-encoding': 'chunked',
      vary: 'Accept-Encoding, Accept, X-Requested-With',
      'x-accepted-oauth-scopes': 'admin:org, read:org, repo, user, write:org',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'deny',
      'x-github-api-version-selected': '2022-11-28',
      'x-github-media-type': 'github.v3; format=json',
      'x-github-request-id': '1028:34FEB8:603DC23:156F7682:68D75310',
      'x-oauth-scopes': 'public_repo, read:org, read:project',
      'x-ratelimit-limit': '5000',
      'x-ratelimit-remaining': '4978',
      'x-ratelimit-reset': '1758942719',
      'x-ratelimit-resource': 'core',
      'x-ratelimit-used': '22',
      'x-xss-protection': '0'
    },
    data: {
      message: 'Not Found',
      documentation_url: 'https://docs.github.com/rest/orgs/orgs#get-an-organization',
      status: '404'
    }
  },
  request: {
    method: 'GET',
    url: 'https://api.github.com/orgs/rock-hu',
    headers: {
      accept: 'application/vnd.github.v3+json',
      'user-agent': 'octokit-rest.js/20.1.2 octokit-core.js/5.2.2 Node.js/20.19.5 (linux; x64)',
      authorization: 'token [REDACTED]'
    },
    request: { hook: [Function: bound bound register] }
  }
}

```

```
@octokit/graphql-schema           ^14.50.0  →  ^15.26.0
 @octokit/plugin-paginate-graphql    ^4.0.0  →    ^6.0.0
 @octokit/plugin-retry               ^6.0.1  →    ^8.0.1
 @octokit/plugin-throttling          ^8.1.3  →   ^11.0.1
 @octokit/rest                      ^20.0.2  →   ^22.0.0
 @types/node                       ^20.10.7  →   ^24.5.2
 bumpp                               ^9.9.0  →   ^10.2.3
 dotenv                             ^16.4.7  →   ^17.2.2
 eslint                             ^8.56.0  →   ^9.36.0
 fs-extra                           ^11.2.0  →   ^11.3.2
 lint-staged                       ^15.2.10  →   ^16.2.1
 octokit                             ^3.1.2  →    ^5.0.3
 rimraf                              ^5.0.5  →    ^6.0.1
 typescript                          ^5.7.2  →    ^5.9.2
 unbuild                             ^2.0.0  →    ^3.6.1
 vite                               ^5.4.14  →    ^7.1.7
 vitest                              ^1.6.1  →    ^3.2.4
 yaml                                ^2.6.1  →    ^2.8.1
```
