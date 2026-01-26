import React from 'react';
import BlogPost from './BlogPost';
import image from '../assets/blog_blueprint.png';

const BlogAgenticBlueprint = () => {
    const content = (
        <>
            <p className="lead">
                This insight explores the agent as the core primitive of agentic AI, systems designed not merely to automate tasks, but to operate with intent, context, and accountability.
            </p>

            <h2>Agentic AI Defined</h2>
            <blockquote>
                "In the simplest terms, an 'agent' within the realm of Artificial Intelligence (AI) is an autonomous entity designed to perceive its environment, make decisions, and act upon those decisions to achieve specific goals."
            </blockquote>

            <p>
                Unlike traditional software programs that follow predetermined instructions, agents exhibit a certain level of autonomy; they can sense changes in their surroundings, adapt their strategies based on new information, and proactively pursue objectives rather than waiting for explicit commands. This concept underpins much of today’s AI advancements, enabling systems that learn, negotiate, and collaborate in dynamic contexts.
            </p>

            <p>
                When we talk about “Agentic AI,” it’s important to understand how it differs from traditional Robotic Process Automation (RPA). RPA bots are often used to handle repetitive, routine tasks by following a strict set of pre-defined rules. They don’t “think” in the way Agentic AI does; they simply execute the same sequence of actions every time, without considering changes in the environment or learning from past results.
            </p>

            <p>
                In contrast, Agentic AI systems are designed to be more dynamic and adaptable. Instead of relying on a fixed script, these agents can sense what’s happening around them, make informed decisions, and adjust their strategies as conditions evolve.
            </p>

            <h2>Characteristics of an Agent: The Three As</h2>
            <p>
                When characterising agent-based AI systems, three foundational principles often emerge as key differentiators: <strong>Autonomy, Adaptation, and Action.</strong>
            </p>

            <ul>
                <li><strong>Autonomy:</strong> Enables an agent to operate without continuous human oversight, allowing it to make decisions and execute tasks independently.</li>
                <li><strong>Adaptation:</strong> The agent’s capacity to learn, evolve, and refine its strategies over time by processing feedback from its environment.</li>
                <li><strong>Action:</strong> The agent’s ability to translate insights into meaningful, goal-oriented steps, influencing its environment to deliver tangible value.</li>
            </ul>

            <h2>Agent Decomposition: Components of an Agent</h2>
            <p>An agentic AI consists of three key components:</p>
            <ol>
                <li><strong>Perception Modalities (Input Channels):</strong> Sensory channels (visual, linguistic, auditory, etc.) through which an agent interprets its environment.</li>
                <li><strong>Cognitive Skillset (Internal Capabilities):</strong> The "brain" that combines thinking abilities to understand information, make choices, and learn from experience.</li>
                <li><strong>Action Toolkit (Output Mechanisms):</strong> The ability to execute decisions through digital (content, API calls) or physical (device control) channels.</li>
            </ol>

            <h3>The Action Toolkit Detail</h3>
            <ul>
                <li><strong>Information Sharing Actions:</strong> Writing reports, sending alerts, and creating content.</li>
                <li><strong>System Interaction Actions:</strong> Clicking buttons, filling forms, and communicating with other programs.</li>
                <li><strong>Data-Oriented Actions:</strong> Sorting, filtering, managing records, and extracting insights.</li>
                <li><strong>Environment Control Actions:</strong> Adjusting settings (like temperature or file structure) and managing resources.</li>
            </ul>

            <h2>Conclusion: The Path Ahead</h2>
            <p>
                Key takeaways:
            </p>
            <ul>
                <li><strong>Definition:</strong> A self-directed, goal-oriented system.</li>
                <li><strong>Difference from RPA:</strong> Dynamic and thoughtful versus repetitive.</li>
                <li><strong>MAS:</strong> Scalable potential through collaboration in Multi-Agent Systems.</li>
            </ul>
        </>
    );

    return (
        <BlogPost
            category="ENGINEERING"
            date="JUNE 12, 2024"
            title="The Agentic AI Blueprint"
            subtitle="The agent as the core primitive of systems designed to operate with intent and context."
            author={{
                name: "Pradeep Ganesan",
                title: "Co-Founder, Chartered Vectorial"
            }}
            content={content}
            image={image}
            prevPost={{
                title: "From Intelligence to Execution: The Rise of Agentic AI",
                slug: "/blog/rise-of-agentic-ai"
            }}
            nextPost={{
                title: "Founder's Note: Why This Firm Exists",
                slug: "/blog/founders-note"
            }}
        />
    );
};

export default BlogAgenticBlueprint;
