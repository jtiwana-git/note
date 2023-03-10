import React from 'react';
import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

export default createGlobalStyle`
    ${normalize}

    *, *::before, *::after {
        box-sizing: border-box;
            }

    body, html {
        margin: 0;
        height: 100%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #fff;
        line-height: 1.4;
    }

    a:link,
    a:visited {
        color: #0077cc;
    }

    a:hover,
    a:focus {
        color: 004499;
    }

    code,
    pre {
        max-width: 100%
        }
`;
