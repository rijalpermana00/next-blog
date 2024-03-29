import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AppConfig } from '../../utils/AppConfig';
import { useEffect } from 'react';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  imageUrl?:string;
  imageName?: string;
  imgHeight?:number;
  imgWidth?:number;
  author?:string;
  keywords?:string;
};

const Meta = (props: IMetaProps) => {
  
  const basePath = 'sani-blog.vercel.app'

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <meta
          name="author"
          content={props?.author ?? AppConfig.owner.name}
        />
        <meta
          name="keywords"
          content={props?.keywords}
        />
        {/* <link
          rel="apple-touch-icon"
          href={`${basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${basePath}/favicon-16x16.png`}
          key="icon16"
        /> */}
        <link
          rel="icon"
          href={`${basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.title ?? AppConfig.title}
        description={props.description}
        canonical={props.canonical}
        
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          type:'article',
          article:{
            authors:[
              'Sani Asmi Ramdani Lestari'
            ],
          },
          images: [
            {
              url: props?.imageUrl ?? '',
              width: 1200,
              height: 630,
              alt: props.imageName,
              type: 'image',
            },
          ]
        }}
        twitter={{
          cardType:'summary_large_image',
          handle: '@handle',
          site: '@site',
        }}
      />
    </>
  );
};

export { Meta };
