import Script from "next/script";

import { about, baseURL, person, resume, social } from "@/app/resources";
import { Button, Column, Flex, Heading, SmartLink, Text } from "@/once-ui/components";
import { Meta, Schema } from "@/once-ui/modules";
import { resumeKeywords } from "./resumeSeoContent";

const resumeFilePath = "/downloads/resume.pdf";
const resumeTextPath = "/downloads/resume.txt";
const resumeViewerParams = "#page=1&zoom=page-fit&pagemode=none&navpanes=0";

const externalProfileLinks = social
    .map((item) => item.link)
    .filter((link): link is string => typeof link === "string" && /^https?:\/\//.test(link));

export async function generateMetadata() {
    return Meta.generate({
        title: resume.title,
        description: resume.description,
        baseURL,
        path: resume.path,
        image: `${baseURL}/og?title=${encodeURIComponent(resume.title)}`,
        keywords: [...new Set([...(resume.keywords || []), ...resumeKeywords])],
        author: {
            name: person.name,
            url: `${baseURL}${about.path}`,
        },
    });
}

export default function ResumePage() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: person.name,
        jobTitle: person.role,
        url: `${baseURL}${resume.path}`,
        image: `${baseURL}${person.avatar}`,
        sameAs: externalProfileLinks,
        alumniOf: [
            {
                "@type": "CollegeOrUniversity",
                name: "Dhirubhai Ambani University",
            },
        ],
        knowsAbout: [
            "TypeScript",
            "JavaScript",
            "Next.js",
            "React.js",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Prisma",
            "Docker",
            "AWS",
        ],
        mainEntityOfPage: `${baseURL}${resume.path}`,
    };

    return (
        <Column maxWidth="m" fillWidth gap="l">
            <Schema
                as="webPage"
                baseURL={baseURL}
                path={resume.path}
                title={resume.title}
                description={resume.description}
                image={`${baseURL}/og?title=${encodeURIComponent(resume.title)}`}
                author={{
                    name: person.name,
                    url: `${baseURL}${about.path}`,
                    image: `${baseURL}${person.avatar}`,
                }}
            />
            <Script
                id="resume-person-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />

            <Column fillWidth gap="12">
                <Heading as="h1" variant="display-strong-s" wrap="balance">
                    Dev Trivedi Resume
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
                    I am Dev Trivedi, a full stack developer who enjoys turning ideas into reliable,
                    user-focused products. In this resume, I share my technical skills, project
                    experience, and key milestones that have shaped my journey across modern web
                    development, backend systems, and problem solving.
                </Text>
            </Column>

            <Flex gap="12" wrap>
                <Button
                    data-border="rounded"
                    variant="secondary"
                    prefixIcon="document"
                    href={resumeFilePath}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open Resume
                </Button>
                <Button data-border="rounded" prefixIcon="download" href={resumeFilePath} download>
                    Download PDF
                </Button>
            </Flex>

            <Column
                hide="s"
                fillWidth
                border="neutral-alpha-medium"
                background="surface"
                radius="l"
                overflow="hidden"
            >
                <iframe
                    title={`${person.name} resume`}
                    src={`${resumeFilePath}${resumeViewerParams}`}
                    style={{ width: "100%", height: "75vh", border: 0 }}
                />
            </Column>

            <Column
                show="s"
                fillWidth
                gap="8"
                border="neutral-alpha-medium"
                background="surface"
                radius="l"
                padding="16"
            >
                <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">
                    Embedded PDF viewers are inconsistent on smaller devices. Use Open Resume or
                    Download PDF for the best experience on mobile.
                </Text>
            </Column>
        </Column>
    );
}
