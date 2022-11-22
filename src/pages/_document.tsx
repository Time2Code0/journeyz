import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head />
            <body className="text-lg leading-8 tracking-[0.3px] bg-gray-900 text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}