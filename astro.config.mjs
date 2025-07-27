// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki'

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Ech0 文档',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/lin-snow/Ech0' }],
        sidebar: [
            {
                label: '开始使用',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: '介绍', slug: 'start/introduction' },
                    { label: '安装', slug: 'start/install' },
                    { label: '更新', slug: 'start/update' },
                    { label: '其他', slug: 'start/other' },
                    { label: '常见问题', slug: 'start/question' },
                ],
            },
            {
                label: '功能',
                items: [
                    { label: '评论', slug: 'function/comment' },
                    { label: 'Ech0 Connect', slug: 'function/connect' },
                    { label: 'Meting API', slug: 'function/metingapi' },
                ],
            },
            {
                label: '开发',
                items: [
                    { label: '开发指南', slug: 'dev/guide' },
                    { label: 'API 文档', slug: 'dev/api' },
                ]
            }
        ],
        plugins: [starlightThemeFlexoki()],
		}),
	],
});