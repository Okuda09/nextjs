import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>リクルート用LPサイト</title>
                <meta name="description" content="採用に特化したLPサイトです。" />
            </Head>
            <main>
                <h1>私たちのチームに参加しませんか？</h1>
                <p>このサイトでは私たちの魅力を紹介しています。</p>
                <a href="/contact">応募する</a>
            </main>
        </>
    );
}
