# BikeOut

Recreation of https://bikeout.cc in a separate private repository:
`davidsharpe01-create/bikeout`.

## Deployment plan

- `main`: production branch.
- `bikeout`: recreation work and Cloudflare Pages previews.
- Cloudflare Pages project: `bikeout`, connected to this GitHub repository.
- Preserve the existing bikeout.cc hosting and DNS until the recreation is approved.
- Do not attach bikeout.cc as a custom domain during recreation.

No website implementation has been added yet. Inspect the current site before
choosing build settings or implementing pages.

## Setup status

Checked 8 November 2026:

- GitHub API access works; the repository is not accessible at the intended path.
- Repository creation is rejected: `Resource not accessible by integration`.
- The configured Cloudflare token returns an empty accessible account list.
- The current environment blocks access to bikeout.cc through its network policy.
- The previously reported local checkout and commit e9fef5d were absent from this
  environment snapshot. This checkout is a fresh initialization, not that commit.

Once the private GitHub repository exists and access is available:

```sh
git push -u origin main
git push -u origin bikeout
```

Then connect the repository to a new Cloudflare Pages project named `bikeout`,
select `main` for production, and enable previews for `bikeout`.
Determine the build command and output directory from the eventual implementation.

BikeOut work belongs here, not in the separate Out Velo checkout.
