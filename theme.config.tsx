import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Image from 'next/image';
import jlogical from './public/jlogical.png';

const config: DocsThemeConfig = {
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
    docsRepositoryBase: 'https://github.com/JLogical-Apps/flood-docs',
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
                'Flood is a comprehensive Flutter and Dart framework that streamlines app development with a modular architecture, extensive features, and intuitive APIs. The documentation site provides guides, tutorials, and API references to help developers quickly build high-quality, visually appealing, and performant applications.',
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
