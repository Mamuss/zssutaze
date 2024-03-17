import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';

createInertiaApp({
  resolve: async name => import(`./components/${name}.page.vue`),
  setup({ el, App, props, plugin }) {
    return createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
  title: title => `${title} - zssutaze.sk`,
});

InertiaProgress.init({ color: 'rgb(27, 52, 227)' });
