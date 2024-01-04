import Link from "next/link";
import ContentSection from "@/components/ContentSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Knaughts - Privacy Policy",
    description: "Knaughts Privacy Policy page.",
};

export default function Privacy() {
    return (
        <section id="privacy" className="post">
            <h1>Privacy Policy</h1>
            <p className="mt-2">
                Thank you for using Knaughts! This Privacy Policy transparently outlines how we collect, use, and
                protect your data. By using our Discord bot, you agree to the practices described herein; you should
                also make sure to familiarise yourself with our{" "}
                <Link href="/terms" className="link">
                    Terms of Use
                </Link>
                .
            </p>

            <br />

            <p>Effective date: 1 January 2024</p>
            <em>
                Please be aware that we hold the right to update, change, or otherwise modify this Privacy Policy
                document at any time.
            </em>

            <ContentSection id="sharing" title="Data Sharing">
                <p>
                    We do not share or sell your data or personal information with any third party for advertisement or
                    marketing purposes. We do not share your personally-identifiable data with third parties unless when
                    required by law.
                </p>
            </ContentSection>
            <ContentSection id="collection" title="Data Collection">
                <p>
                    We collect data in order for us to effectively provide our services - both through the Knaughts Bot,
                    and this website. We only collect the data that we need.
                </p>
                <br />
                <p>The following data is collected, processed, and retained by us:</p>
                <ul>
                    <li>
                        <span className="font-bold">
                            The title and content of the notes you provide when using Knaughts Bot
                        </span>{" "}
                        so that you can access them at any time when you need to
                    </li>
                    <li>
                        <span className="font-bold">Your Discord ID</span> so that we can manage what data and notes
                        belongs to you
                    </li>
                    <li>
                        <span className="font-bold">Your Discord Username and Avatar URL</span> so that we can share
                        your notes to you in a styled format
                    </li>
                    <li>
                        <span className="font-bold">Your usage data with the Bot and on this website</span> for
                        analytical purposes
                    </li>
                    <li>
                        <span className="font-bold">Discord Server IDs (aka Guild IDs)</span> for analytical purposes
                    </li>
                </ul>
            </ContentSection>

            <ContentSection id="security" title="Data Security">
                <p>
                    In efforts for us to safely collect and store your data, we have rigorous systems in place to make
                    sure we process it accordingly; we use commercially-acceptable computational methods to do so. This
                    helps prevent unauthorised access, disclosure, or modification of your data.
                </p>
            </ContentSection>

            <ContentSection id="retention" title="Data Retention">
                <p>
                    We implement a data retention policy designed to preserve user information indefinitely, unless
                    users exercise their right (please see Your Rights below) to request complete deletion. We do this
                    in light of legal obligations and to ensure you can always access your data.
                </p>
            </ContentSection>

            <ContentSection id="rights" title="Your Rights">
                <p>
                    All users have the right to request access to, correction of, or deletion of their data at any time.
                    If you wish to exercise these rights, please contact us (see Contact below).
                </p>
            </ContentSection>

            <ContentSection id="compliance" title="Compliance">
                <p>
                    Our Discord bot - Knaughts - is in compliance with the Discord Terms of Service and Community
                    Guidelines.
                </p>
            </ContentSection>

            <ContentSection id="minors" title="Minors">
                <p>
                    Our serivices are not intended for any person under the age of 13. We do not knowingly nor willingly
                    collect data from anyone under 13 years of age.
                </p>
            </ContentSection>

            <ContentSection id="contact" title="Contact">
                <p>
                    If you have a question or request regarding your data, this Privacy Policy, or your rights please
                    contact us via email at{" "}
                    <Link href="mailto:privacy@knaughts.xyz" className="link">
                        privacy@knaughts.xyz
                    </Link>
                    .
                </p>
            </ContentSection>
        </section>
    );
}
