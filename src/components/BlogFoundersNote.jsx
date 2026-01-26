import React from 'react';
import BlogPost from './BlogPost';
import image from '../assets/blog_founders.png';

const BlogFoundersNote = () => {
    const content = (
        <>
            <p className="lead">
                We are an AI-native consulting and engineering firm. Not AI-assisted. Not AI-enabled. AI-native means that intelligence is woven into how we think, how we build, how we operate.
            </p>

            <p>
                Our own agents work alongside our engineers, not as tools to be prompted, but as participants in the work itself. Consulting and engineering are not separate disciplines here. The same team that shapes strategy is the team that ships it. There are no handoffs. No translation layers. No 'implementation partners.' Intent travels directly into production.
            </p>

            <p>
                Governance is not an afterthought here, it is how we build. Every system we design carries audit trails, accountability, and explainability from the beginning. Not because regulation demands it, but because intelligence without governance is fragile. Whether the work is in financial services, insurance, or any industry where decisions carry consequence, the discipline remains the same: if it cannot be explained, it should not be deployed.
            </p>

            <p>
                And we move fast. Not recklessly, but deliberately. Production in 60 to 90 days, not 6 to 12 months. Because strategy that doesn't ship isn't strategy. It's theatre.
            </p>

            <p>
                This is not a manifesto. It is an observation made operational.
            </p>

            <p>
                The world has shifted. Intelligence is no longer scarce. Value no longer forms at the end of a long sequence of handoffs. The organisations that thrive will be those that understand this and re-organise around it, not by adding AI on top, but by rethinking how insight, execution, and accountability come together.
            </p>

            <p>
                Our goal is to use intelligence to build intelligent systems and processes. To leverage AI not as a feature, but as the foundation. To invent new ways of working rather than digitising old ones.
            </p>

            <p>
                That is the lens through which we work.
            </p>

            <p>
                And these notes, what I'll share here over time, are reflections from inside that work. Not prescriptions. Not predictions. Just observations from the practice of building something that I believe needed to exist.
            </p>

            <p>
                The work has already begun.
            </p>
        </>
    );

    return (
        <BlogPost
            category="PHILOSOPHY"
            date="JULY 05, 2024"
            title="Founder's Note: Why This Firm Exists"
            subtitle="Reflections from inside the work of building an AI-native future."
            author={{
                name: "Pradeep Ganesan",
                title: "Co-Founder, Chartered Vectorial"
            }}
            content={content}
            image={image}
            prevPost={{
                title: "The Agentic AI Blueprint",
                slug: "/blog/agentic-ai-blueprint"
            }}
        />
    );
};

export default BlogFoundersNote;
