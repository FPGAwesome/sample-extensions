# Rust Language Support

Sample Rust language extension for an unnamed work-in-progress IDE, providing file detection, editor metadata, syntax highlighting, and rust-analyzer language intelligence.

This package is experimental and intended only for testing the host IDE's extension lifecycle.

Install rust-analyzer before enabling semantic features:

```bash
rustup component add rust-analyzer
```

When available on `PATH`, rust-analyzer supplies diagnostics, hover documentation, completion, and go-to-definition through the IDE's language-server bridge.
