# Obsidian Sync Config

This plugin automatically copies your Obsidian configuration directory to `_obsidian` folder in your vault.

## Features

- Automatically copies `.obsidian` config to `_obsidian` on plugin load
- Manual copy command available via Command Palette: "Copy config to _obsidian"

## Usage

1. Install the plugin
2. The plugin will automatically copy your config on startup
3. To manually copy config, open Command Palette (Ctrl/Cmd + P) and run "Copy config to _obsidian"

## Development

This plugin is built with [Deno](https://deno.com)!

- Runtime: **Deno**
- Formatter: **Deno**
- Linter: **Deno** + **ESLint** (with `eslint-plugin-obsidianmd`)
- Type Checker: **Deno**
- Bundler: **esbuild**

See
[obsidianmd/obsidian-sample-plugin](https://github.com/obsidianmd/obsidian-sample-plugin)
for details.

Want to contribute to this repository? Thank you!

Please see [CONTRIBUTING.md](./CONTRIBUTING.md).
