# BikeOut

Recreation of https://bikeout.cc in the public GitHub repository
`davidsharpe01-create/bikeout`.

## Publishing

Work directly on `main`. Pushes to `main` automatically deploy to the separate
Cloudflare Pages project `bikeout`, at `bikeout.pages.dev`.
Branch preview deployments are disabled.

Cloudflare account: `4216a52a7c968beaccdb6a8e57569e2d`.
The project currently uses static files at the repository root, with no build command.
The homepage and `/policies/` are static recreations of the owner-supplied saved pages.
Images, styles and Poppins fonts are hosted locally; FAQs use a small local script.
The Hathersage section uses an owner-supplied cycling photograph. The hero uses BikeOut-Gathering.jpg, selected by the owner.

The existing bikeout.cc hosting and DNS remain unchanged. Do not attach the
custom domain or switch DNS until the recreation is ready.

BikeOut work belongs in this checkout, not in the separate Out Velo repository.
