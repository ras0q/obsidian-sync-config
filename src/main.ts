import { Notice, Plugin } from "obsidian";

interface SyncConfigSettings {
  mySetting: string;
}

const DEFAULT_SETTINGS: SyncConfigSettings = {
  mySetting: "default",
};

export default class SyncConfigPlugin extends Plugin {
  settings: SyncConfigSettings = DEFAULT_SETTINGS;

  override async onload() {
    await this.loadSettings();

    // Copy config directory on startup
    await this.copyConfigToObsidian();

    // Register command to copy config manually
    this.addCommand({
      id: "copy-config",
      name: "Copy config to _obsidian",
      callback: async () => {
        await this.copyConfigToObsidian();
      },
    });
  }

  override onunload() {
  }

  async copyConfigToObsidian() {
    try {
      await this.app.vault.adapter.copy(
        this.app.vault.configDir,
        "_obsidian",
      );
      new Notice("Config copied to _obsidian successfully!");
    } catch (error) {
      console.error("Failed to copy config:", error);
      const message = error instanceof Error ? error.message : String(error);
      new Notice(`Failed to copy config: ${message}`);
    }
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
