import React from 'react';

import globalPlugin from 'jss-global';
import Document from 'next/document';
import { createGenerateId, jss, JssProvider, SheetsRegistry } from 'react-jss';

// eslint-disable-next-line import/no-default-export
export default class JssDocument extends Document {
  static async getInitialProps(ctx) {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    jss.use(globalPlugin());
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line
        enhanceApp: (App) => (props) =>
          (
            <JssProvider registry={registry} generateId={generateId}>
              <App {...props} />
            </JssProvider>
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500&display=swap"
            rel="stylesheet"
          />
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GGOGLE_MAP_API_KEY}&libraries=places`}
            async
          ></script>
        </React.Fragment>
      ),
    };
  }
}
