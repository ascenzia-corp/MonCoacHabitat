// @ts-check
import { defineConfig } from 'astro/config';

// Static site: no adapter, no server runtime. `site` is used for canonical and
// Open Graph URLs; replace it with the production domain before launch.
export default defineConfig({
  site: 'https://www.moncoachhabitat.fr',
});
