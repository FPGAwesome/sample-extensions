# Sample IDE extensions

Example extensions for an unnamed work-in-progress desktop IDE. This repository exists to exercise Git-source discovery, package selection, installation, and update behavior while the host project and extension API are still experimental.

Packages live below `extensions/`; each package owns its manifest, contribution files, source, build configuration, and compiled runtime output.

- Rust Language Support
- Program Analysis Lab

Validate every package:

```bash
npm run validate
```

Point the IDE's Git extension-source flow at this repository. It will inspect the checkout and let the user choose either package before installing it.
