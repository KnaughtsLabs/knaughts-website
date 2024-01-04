/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import ContentSection from "@/components/ContentSection";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Knaughts - Guide",
    description: "Knaughts Discord bot guide page.",
};

export default function Guide() {
    return (
        <section id="guide" className="post">
            <Head>
                <title>Knaughts - Guide</title>
                <meta property="og:title" content="Knaughts - Guide" key="title" />
            </Head>

            <h1>Knaughts bot guide</h1>
            <div className="subtitle">A quick overview of how to use the Knaughts Discord bot.</div>

            <ContentSection
                id="getting-started"
                title="Getting started"
                subtitle="Here are the steps you need to start using Knaughts:"
            >
                <ol>
                    <li>
                        <Link href="/invite" className="link">
                            Invite
                        </Link>{" "}
                        Knaughts bot to your Discord server.
                    </li>
                    <li>
                        Start using the bot - there is no setup needed! All messages are ephemeral so they won't disturb
                        the rest of your server.
                    </li>
                    <li>
                        Keep an eye out for updates. Once we have the web app ready to go, check back here to use it.
                        Make sure to follow our{" "}
                        <Link href="/twitter" className="link">
                            Twitter/X
                        </Link>{" "}
                        page to be the first to know!
                    </li>
                </ol>
            </ContentSection>

            <ContentSection
                id="commands"
                title="Commands"
                subtitle="Knaughts strictly uses slash commands because they are generally easier to use. Currently, there are 4 commands you can use:"
            >
                <ul>
                    <li>
                        <code>/note</code> - create a new note. This will open a modal where you can give your note a
                        title and write its contents.
                    </li>
                    <li>
                        <code>/notes [id]</code> - retrieve your notes. This will open an embed with all your notes. You
                        can then select individual notes and edit them using the blue <code>edit</code> button, or
                        delete them with the red <code>delete</code> button. If an <code>id</code> is provided, this
                        will retrieve the specific note with the given id.
                    </li>
                    <li>
                        <code>/about</code> - show an embed which has information about Knaughts.
                    </li>
                    <li>
                        <code>/ping</code> - get the bot's response latency.
                    </li>
                </ul>
            </ContentSection>

            <ContentSection id="help" title="Help" subtitle="If you require further assistance:">
                <ul>
                    <li>
                        <span className="font-bold">General Inquiries - </span>ask for support on our{" "}
                        <Link href="/discord" className="link">
                            Discord server
                        </Link>
                        .
                    </li>
                    <li>
                        <span className="font-bold">Bugs & Feature Requests - </span>open an issue on the{" "}
                        <Link href="https://github.com/knaughtslabs/knaughts-bot/issues" className="link">
                            GitHub repository
                        </Link>
                        .
                    </li>
                </ul>
            </ContentSection>
        </section>
    );
}
