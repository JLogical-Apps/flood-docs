import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Image from 'next/image';
import jlogical from './public/jlogical.png';
import ComingSoonChip from '@/components/coming-soon-chip';
import NewChip from '@/components/new-chip';

const comingSoonPages = [
    'I18n',
    'Backend',
    'Appwrite',
    'Supabase',
    'Advanced Guides',
];
const newPages = ['Guides', 'Asset'];

const config: DocsThemeConfig = {
    editLink: {
        text: 'Edit this page on Github',
    },
    head: (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </>
    ),
    logo: (
        <>
            <Image
                style={{ display: 'inline' }}
                src="/flood.png"
                alt="Flood Logo"
                width={40}
                height={40}
            />{' '}
            <b>Flood</b>
        </>
    ),
    docsRepositoryBase:
        'https://github.com/JLogical-Apps/flood-docs/tree/main/',
    sidebar: {
        defaultMenuCollapseLevel: 1,
        titleComponent: (props) => {
            return (
                <>
                    {props.title}
                    {comingSoonPages.indexOf(props.title) >= 0 && (
                        <ComingSoonChip />
                    )}
                    {newPages.indexOf(props.title) >= 0 && <NewChip />}
                </>
            );
        },
    },
    footer: {
        text: (
            <div className="flex flex-col gap-4 items-center">
                <span>
                    MIT {new Date().getFullYear()} ©{' '}
                    <a href="https://www.jlogical.com" target="_blank">
                        JLogical
                    </a>
                    .
                </span>
                <a href="https://www.jlogical.com">
                    <Image
                        className="grayscale hover:grayscale-0"
                        src={jlogical}
                        alt="JLogical Logo"
                        height={40}
                    />
                </a>
            </div>
        ),
    },
    useNextSeoProps() {
        return {
            titleTemplate: '%s - Flood',
            description:
                'Flood is a comprehensive Flutter and Dart toolkit that streamlines app development with a modular architecture, extensive features, and intuitive APIs. The documentation site provides guides, tutorials, and API references to help developers quickly build high-quality, visually appealing, and performant applications.',
            openGraph: {
                images: [
                    {
                        url: '/opengraph.png',
                        width: 1200,
                        height: 630,
                        alt: 'Flood Logo',
                    },
                ],
            },
        };
    },
};

export default config;
