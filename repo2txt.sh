docker run --rm -v ./:/app thr3a/repo2text \
-d src \
-e .ts .tsx .css \
-f README.md package.json postcss.config.cjs \
> repo.md
