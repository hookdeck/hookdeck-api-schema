# Hookdeck API

Tagging a release on this repository will:

- Update the [Go SDK](https://github.com/hookdeck/hookdeck-go-sdk)
- _More SDKs to come..._

## What is in this repository?

This repository contains

- Hookdeck's Fern API Definition which lives in the [OpenApi](./fern/openapi/) folder
- Generators (see [generators.yml](./fern/generators.yml))

In order to make sure that the definition is valid, you can use the Fern CLI.

```bash
npm install -g fern-api # Installs CLI
fern check # Checks if the definition is valid
```

## What are Generators?

Generators read in your API Definition and output files or code (i.e. the TypeScript SDK Generator) and are tracked in [generators.yml](./fern/generators.yml).

### Local preview

You can preview the generated code in the `./local/go/generated/hookdeck-go-sdk` directory by running the following command:

```sh
fern generate --group local
```

## Validating your API Definition

To validate your API, run: 
```sh
npm install -g fern-api # only required once
fern check
```

## Updating your SDKs

To update your SDKs, run `fern generate`. 

```sh
npm install -g fern-api # only required once
fern generate --group node-sdk
```

This repository contains Github Actions that will trigger SDK generation. Check them out by navigating
to the `Actions` tab and clicking `Release TypeScript SDK`. 