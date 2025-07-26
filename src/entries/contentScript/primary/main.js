import renderContent from '../renderContent';
import './style.css';
import { sendMessageToBackground } from '~/spaceship.js';

renderContent(import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS, (appRoot) => {
    sendMessageToBackground(1, { 'foo': 'bar' });

    appRoot.innerHTML = `
      <div class="ytpe-container">
        YTPE
      </div>
    `;
});
