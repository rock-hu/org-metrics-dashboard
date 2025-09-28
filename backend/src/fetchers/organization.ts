// Fetchers for organization data and metrics

import { Fetcher } from '..';

export const addOrganizationInfoToResult: Fetcher = async (
  result,
  octokit,
  config,
) => {
  // const organization = await octokit.orgs.get({ org: config.organization });
  // https://github.com/octokit - Official clients for the GitHub API
  // https://api.github.com/users/rock-hu/repos
  // https://github.com/octokit/octokit.js
    // owner: components["parameters"]["owner"];
    // repo: components["parameters"]["repo"];
  const organization = await octokit.orgs.get({ org: config.organization });
  // const organization = await octokit.repos.get({ owner: config.organization });

  console.log('organization:', organization);

  return {
    ...result,
    orgInfo: {
      login: organization.data.login,
      name: organization.data.name ?? organization.data.login,
      description: organization.data.description,
      createdAt: organization.data.created_at,
      repositoriesCount: organization.data.public_repos,
    },
  };
};
