#!/usr/bin/env bash

podman run --rm -w /project -v .:/project:rw -p 1111:1111 ghcr.io/getzola/zola:v0.22.1 serve -i 0.0.0.0 -u 127.0.0.1
