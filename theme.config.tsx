import React from 'react';
import {DocsThemeConfig} from 'nextra-theme-docs';
import Image from 'next/image';

const config: DocsThemeConfig = {
    logo: <>
        <Image style={{display: 'inline'}} src="/flood.png"
               alt="Flood Logo"
               width={40} height={40}/>
        {' '}Flood
    </>,
    docsRepositoryBase: 'https://github.com/JLogical-Apps/flood-docs',
    footer: {
        text: <span>
            MIT {new Date().getFullYear()} ©{' '}
            <a href="https://www.jlogical.com" target="_blank">
              JLogical
            </a>
            .
          </span>,
    },
    useNextSeoProps() {
        return {
            titleTemplate: '%s - Flood',
        };
    }
};

export default config;
