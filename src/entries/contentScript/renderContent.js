import browser from "webextension-polyfill";
import { createLogger } from '~/log.js';

const log = createLogger('renderContent');

export default async function renderContent(
  cssPaths,
  render = (_appRoot) => {}
) {

  log.debug('Starting', {hot:import.meta.hot})

  const appContainer = document.createElement("div");

  const shadowRoot = appContainer.attachShadow({
    mode: import.meta.env.MODE === "development" ? "open" : "closed",
  });

  const appRoot = document.createElement("div");

  if (import.meta.hot) {
    const { addViteStyleTarget } = await import(
      "@samrum/vite-plugin-web-extension/client"
    );

    await addViteStyleTarget(shadowRoot);
  } else {
    cssPaths.forEach((cssPath) => {
      const styleEl = document.createElement("link");
      styleEl.setAttribute("rel", "stylesheet");
      styleEl.setAttribute("href", browser.runtime.getURL(cssPath));
      shadowRoot.appendChild(styleEl);
    });
  }

  shadowRoot.appendChild(appRoot);

  render(appRoot);

  mountContainer(appContainer)

  setInterval(() => {
    mountContainer(appContainer)
  }, 2000);
}

function mountContainer(appContainer){
  const videoPageChannelInfo = document.querySelector('#owner.ytd-watch-metadata');

  // not on video page or elmement not loaded yet
  if (!videoPageChannelInfo) {
    return;
  }

  // already mounted
  if (videoPageChannelInfo.dataset.ytpe_mounted) {
    return;
  }

  // mount container
  videoPageChannelInfo.appendChild(appContainer);
  videoPageChannelInfo.dataset.ytpe_mounted = 'true';

  log.debug('parent', videoPageChannelInfo)
}
