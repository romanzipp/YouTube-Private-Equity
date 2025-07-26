import browser from 'webextension-polyfill';
import { parse } from 'csv-parse/browser/esm/sync';
import { createLogger } from '~/log.js';
import { registerListener } from '~/spaceship.js';

const DATA_URL_CHANNELS = 'https://raw.githubusercontent.com/romanzipp/YouTube-Private-Equity/refs/heads/main/data/channels.csv';
const DATA_URL_COMPANIES = 'https://raw.githubusercontent.com/romanzipp/YouTube-Private-Equity/refs/heads/main/data/companies.csv';

const log = createLogger('Background');

const data = {
    channels: [],
    companies: []
};

async function fetchData() {
    fetch(new Request(DATA_URL_CHANNELS))
        .then(async (res) => {
            const body = await res.text();
            const records = parse(body, {
                columns: true,
                skip_empty_lines: true
            });

            log.debug('fetched channels', records);

            data.channels = records;
        })
        .catch(err => log.error('could not fetch channels', err));

    fetch(new Request(DATA_URL_COMPANIES))
        .then(async (res) => {
            const body = await res.text();
            const records = parse(body, {
                columns: true,
                skip_empty_lines: true
            });

            log.debug('fetched companies', records);

            data.companies = records;
        })
        .catch(err => log.error('could not fetch companies', err));
}

browser.runtime.onInstalled.addListener(() => {
    log.debug('Extension installed');

    fetchData();
});

registerListener(() => {
    log.debug(...arguments);
});
