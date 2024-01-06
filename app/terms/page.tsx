/* eslint-disable react/no-unescaped-entities */
import ContentSection from "@/components/ContentSection";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Knaughts - Terms of Use",
    description: "Knaughts Terms of Use page.",
};

export default function Terms() {
    return (
        <section id="terms" className="post">
            <h1>Terms of Use</h1>

            <ContentSection id="acceptance" title="Acceptance of Terms">
                <p>By using Knaughts, you agree to comply with and be bound by these Terms of Use.</p>
                <br />
                <p>Effective date: 6 January 2024</p>
                <em>
                    Please be aware that we hold the right to update, change, or otherwise modify this Privacy Policy
                    document at any time.
                </em>
            </ContentSection>

            <ContentSection id="license" title="License">
                <p>
                    Knaughts bot is under the{" "}
                    <Link href="https://github.com/KnaughtsLabs/knaughts-bot/blob/main/LICENSE" className="link">
                        MIT license
                    </Link>
                    .
                </p>
            </ContentSection>

            <ContentSection id="conduct" title="User Conduct">
                <p>Users of Knaughts are expected to adhere to the following rules:</p>
                <ul>
                    <li>No engaging in unlawful or harmful activities;</li>
                    <li>No exploiting bugs or glitches for unfair advantages or gains;</li>
                    <li>Respect the privacy and rights of other users;</li>
                    <li>Do not use Knaughts to disseminate spam, malware, or harmful content;</li>
                    <li>Comply with all applicable UK laws and regulations.</li>
                </ul>
            </ContentSection>

            <ContentSection id="disclaimer" title="Disclaimer">
                <p>
                    The materials on Knaughts are provided on an 'as is' basis. Knaughts makes no warranties, expressed
                    or implied, and hereby disclaims and negates all other warranties including, without limitation,
                    implied warranties or conditions of merchantability, fitness for a particular purpose, or
                    non-infringement of intellectual property or other violation of rights.
                </p>
            </ContentSection>

            <ContentSection id="limitations" title="Limitations">
                <p>
                    In no event shall Knaughts or its suppliers be liable for any damages (including, without
                    limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                    use or inability to use Knaughts, even if Knaughts or a Knaughts-authorised representative has been
                    notified of the possibility of such damage.
                </p>
            </ContentSection>

            <ContentSection id="modifications" title="Modifications to Terms of Use">
                <p>
                    We may revise these Terms of Use at any time without notice. By using this bot, you are agreeing to
                    be bound by the then-current version of these Terms of Use.
                </p>
            </ContentSection>
        </section>
    );
}
