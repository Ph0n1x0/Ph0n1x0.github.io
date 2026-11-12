# Personal portfolio: Luis Miguel Loaiza Zapata

Static website (HTML + CSS + a little JavaScript). No build step, no dependencies.

## Publish on GitHub Pages

1. On GitHub, create a **public** repository named exactly `YOUR-USERNAME.github.io`.
2. Upload every file in this folder to the repository root (`index.html` must be at the top level).
3. Go to **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute or two the site is live at `https://YOUR-USERNAME.github.io`.

## Things to fill in

Search for `YOUR-USERNAME` and `REPO-NAME` in `index.html` and replace them:

- GitHub profile link in the hero section.
- "Code on GitHub" links on the three projects that have repositories (rib segmentation, BEM + multipoles, ROS2 robotic arm). Delete a link if a project has no public code.

Add your files:

- `assets/img/profile.jpg`: your portrait (square, about 600×600 px). Until it exists, the "LM" initials are shown.
- `assets/Luis_Miguel_Loaiza_CV.pdf`: your CV, used by the "Download CV" button.
- `assets/img/projects/<name>.jpg`: one photo per project. The expected file name is in each card's `<img src>`. Until the image exists, the card shows a coloured banner.

## Editing content

Everything lives in `index.html`. To add a project, copy an `<article class="card">…</article>` block, edit the text and set `data-cat` to one or more of: `biomedical computational ml robotics design`. Newest projects go first.

Colours and fonts are CSS variables at the top of `assets/css/style.css`.
