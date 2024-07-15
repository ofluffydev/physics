// noinspection JSUnusedGlobalSymbols
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    plugins: [
        async function myPlugin(context, options) {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
    ],


    title: 'Fluffy Physics', tagline: 'A website for learning physics for free', favicon: 'img/favicon.ico',

    url: 'https://physics.kadenfrisk.com', baseUrl: '/',

    onBrokenLinks: 'throw', onBrokenMarkdownLinks: 'throw', i18n: {
        defaultLocale: 'en', locales: ['en'],
    }, presets: [['classic', {
        docs: {
            sidebarPath: './sidebars.ts',
        }, theme: {
            customCss: './src/css/custom.css',
        },
    } satisfies Preset.Options,],],

    themeConfig: {
        image: 'img/social-card.jpg', navbar: {
            title: 'Fluffy Physics', logo: {
                alt: 'Fluffy Physics Logo', src: 'img/logo.svg',
            }, items: [{
                type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Get Started',
            }, {
                href: 'https://github.com/ofluffydev/physics', label: 'GitHub', position: 'right',
            },],
        }, footer: {
            style: 'dark', links: [{
                title: 'Docs', items: [{
                    label: 'Intro', to: '/docs/intro',
                },],
            }, {
                title: 'More', items: [{
                    label: 'GitHub', href: 'https://github.com/ofluffydev/physics',
                },],
            },], copyright: `Copyright © ${new Date().getFullYear()} Kaden Frisk. Built with Docusaurus.`,
        }, prism: {
            theme: prismThemes.github, darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
