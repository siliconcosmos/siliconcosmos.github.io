# How to Manage Update Files

This document describes the management of update files for QuickRef.

## Gotchas
- The `update.json` file should ***NOT be motified*** recklessly
    - This file is referenced by QuickRef versions 0.8.8 and earlier. These versions are based on Tauri 1.x and as such, require special handling to migrate them to a Tauri 2.x based app version.
    - The content of this update file should be configured such that a compatible migration version will be downloaded. This migration version should follow the new route scheme and enable the user to update into any newer Tauri 2.x based app versions. ***The first verson released publicly after 0.8.8 was 0.8.12, use this version as the migration version.***
    - Do not ***delete*** this file unless it has been decided that abandoning users on versions older than 0.8.8 is acceptable. This may happen in the future, but please make this decision with care.


## Basic Update Configuration
Since updating QuickRef to Tauri 2.x, the preferred update delivery method is to update the content of the `updates.json` file to reflect the newest available version. The json content should follow the pattern [defined in the Tauri 2.x docs](https://v2.tauri.app/plugin/updater/#static-json-file).

## Update Overrides by Installed Version
Since the update to Tauri 2.x, it is possible to create a special update override file on a per-version basis, using the version string of the installed app. This is possible because of these endpoints in the tauri updater config for QuickRef:
```
"https://updates.domain.web/releases/quickref/update_from_version/{{current_version}}/update",
"https://updates.domain.web/releases/quickref/update_from_version/{{current_version}}_update.json",
```
This option may be useful in the event that an incompatability is discovered that breaks the update process or if a faulty update is pushed and needs to be hotfixed/reverted. 

### Making an Override
To utilize this option with a static json update config file, create a file under the "update_from_version" path with a name in the form: `{{installed_version}}_update.json`, with the `{{installed_version}}` token replaced with the version string you want to target. The updater will prioritize this file above the generic shared `updates.json` file.

### Override via Update Service
If an update API service is being created, use this route path to serve update configurations to an explicit version of the app:
```
/releases/quickref/update_from_version/{{current_version}}/update
```
QuickRef will prioritize this route over the static override file described above. Be sure to follow the output format described by the [Tauri Docs](https://v2.tauri.app/plugin/updater/#dynamic-update-server). Return non-2xx http status code if there is no override update config (404 would be acceptable).
