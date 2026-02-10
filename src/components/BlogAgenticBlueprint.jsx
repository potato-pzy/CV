import React from 'react';
import BlogPost from './BlogPost';
import image from '../assets/blog/blog_blueprint.png';
import image1 from '../assets/blog/S1.png';
import image2 from '../assets/blog/S2.png';
import image3 from '../assets/blog/S3.png';
import image4 from '../assets/blog/S4.png';
import image5 from '../assets/blog/S5.png';
import image6 from '../assets/blog/S6.png';

const BlogAgenticBlueprint = () => {
    const content = (
        <>
            <p className="lead">
                This insight explores the <strong>agent</strong> as the core primitive of agentic AI, systems designed not merely to automate tasks, but to operate with intent, context, and accountability. It outlines how agents achieve autonomy through perception, reasoning, and action, and why adaptability is essential for intelligence to remain effective in dynamic business environments. By examining the architectural foundations of agentic systems and introducing the role of <strong>Multi-Agent Systems (MAS)</strong>, this perspective frames agentic AI as a scalable approach to building resilient, distributed intelligence, capable of supporting complex decision-making, operational execution, and long-term enterprise transformation.
            </p>

            <h1><strong>Agentic AI Defined</strong></h1>

            <blockquote>
                In the simplest terms, an "agent" within the realm of Artificial Intelligence (AI) is an autonomous entity designed to perceive its environment, make decisions, and act upon those decisions to achieve specific goals.
            </blockquote>

            <p>
                Unlike traditional software programs that follow predetermined instructions, agents exhibit a certain level of autonomy, they can sense changes in their surroundings, adapt their strategies based on new information, and proactively pursue objectives rather than waiting for explicit commands. This concept underpins much of today’s AI advancements, enabling systems that learn, negotiate, and collaborate in dynamic contexts.
            </p>

            <p>
                When we talk about “Agentic AI,” it’s important to understand how it differs from traditional Robotic Process Automation (RPA).
            </p>

            <div className="blog-content-image-wrapper">
                <img src={image1} alt="RPA vs Agentic AI" className="blog-content-image transform-image" />
            </div>

            <p>
                RPA bots are often used to handle repetitive, routine tasks by following a strict set of pre-defined rules. They don’t “think” in the way Agentic AI does, they simply execute the same sequence of actions every time, without considering changes in the environment or learning from past results.
            </p>

            <p>
                In contrast, Agentic AI systems are designed to be more dynamic and adaptable. Instead of relying on a fixed script, these agents can sense what’s happening around them, make informed decisions, and adjust their strategies as conditions evolve. Imagine having a digital assistant that not only follows your instructions, but can also spot new opportunities, respond to unexpected challenges, and learn from mistakes over time. That’s the key difference: unlike RPA, Agentic AI is not just about doing a task; it’s about understanding the task and finding smarter ways to do it.
            </p>

            <h1><strong>Characteristics of an agent: The Three As</strong></h1>

            <p>
                When characterising agent-based AI systems, three foundational principles often emerge as key differentiators:
            </p>

            <blockquote>
                Autonomy, Adaptation, and Action.
            </blockquote>

            <div className="blog-content-image-wrapper">
                <img src={image2} alt="Autonomy, Adaptation, and Action" className="blog-content-image transform-image" />
            </div>

            <p>
                These attributes define what it means for an agent to be truly “agentic” rather than merely responsive or rules-bound. Each of these characteristics- Autonomy, Adaptation, and Action, plays a distinct yet complementary role in shaping an agent’s behaviour, decision-making capabilities, and ultimate effectiveness.
            </p>

            <p>
                By understanding how these three principles interlock, organisations and individuals can more clearly see how agentic AI transcends traditional automation and sets the stage for more dynamic, intelligent, and impactful solutions. Let us have a deeper understanding of these “Three As”:
            </p>

            <ul>
                <li><strong>Autonomy:</strong> Autonomy enables an agent to operate without continuous human oversight, allowing it to make decisions and execute tasks independently. Instead of relying solely on predefined instructions, an autonomous agent can navigate complex, changing environments by drawing on its own internal logic and learned experiences. This capability allows organisations to reduce manual intervention, increase operational efficiency, and respond more swiftly to emerging opportunities or challenges.</li>
                <li><strong>Adaptation:</strong> Adaptation is the agent’s capacity to learn, evolve, and refine its strategies over time. By processing feedback from its environment, such as new data inputs or shifting conditions, an adaptive agent can dynamically adjust its behaviour to improve outcomes. Whether it is recognising patterns in user preferences, adjusting workflows to accommodate supply chain disruptions, or refining predictive models as market conditions fluctuate, adaptation ensures the agent remains effective and relevant in the face of change.</li>
                <li><strong>Action:</strong> Action refers to the agent’s ability to translate insights into meaningful, goal-oriented steps. Beyond gathering information or generating forecasts, an agent must be capable of influencing its environment. By taking well-informed, deliberate actions, such as adjusting resource allocations, initiating maintenance operations, or communicating recommendations to stakeholders, the agent delivers tangible value. This direct engagement in the operational landscape distinguishes agentic AI from passive analytic tools and underscores its potential to drive strategic, real-world impact.</li>
            </ul>

            <h1><strong>Agent Decomposition: What are the components of an Agent?</strong></h1>

            <p>Now, let us discuss about components of an Agentic AI.</p>

            <blockquote>
                A component is a fundamental building block of an agent that handles a specific aspect of functionality.
            </blockquote>

            <div className="blog-content-image-wrapper">
                <img src={image3} alt="Agent Components" className="blog-content-image transform-image" />
            </div>

            <p>As shown in the diagram, there are three key components of an agentic AI:</p>

            <ol>
                <li><strong>Perception Modalities (Input Channels):</strong> Perception modalities are the sensory channels through which an AI agent perceives and interprets different types of information from its environment, including visual, linguistic, auditory, sensor-based, and system data.</li>
                <li><strong>Cognitive Skillset (Internal Capabilities):</strong> Think of the cognitive skillset as the brain of an AI agent. It combines different thinking abilities to help the agent understand information, make choices, and learn from experience. This is what makes the agent intelligent and capable of making sound decisions.</li>
                <li><strong>Action Toolkit (Output Mechanisms):</strong> The action toolkit represents the agent’s ability to execute decisions through various output channels, whether digital (such as generating content or making API calls) or physical (such as controlling devices or systems).</li>
            </ol>

            <p>Let us now deep dive into each of these components.</p>

            <h3><strong>Component 1: Perception Modalities (Input Channels)</strong></h3>

            <div className="blog-content-image-wrapper">
                <img src={image4} alt="Perception Modalities" className="blog-content-image transform-image" />
            </div>

            <p>
                Imagine you're a person walking down the street. How do you understand what's happening around you? You use your eyes to see, your ears to hear, your nose to smell, and maybe even your hands to feel things. Well, an AI agent is similar - it needs ways to "sense" its environment to understand what's going on.
            </p>

            <p>
                Think of perception modalities as the "senses" of an AI agent. Just like how we humans have different ways of taking in information about the world around us, an AI agent has different channels through which it can understand its environment.
            </p>

            <p>
                Here's a fun way to think about it: imagine you're building a robot helper for your home. For this robot to be useful, it needs to:
            </p>

            <ul>
                <li>See things (like spotting a spill on the floor) - that's visual input</li>
                <li>Understand when you talk to it (like when you ask it to clean the spill) - that's linguistic input</li>
                <li>Hear important sounds (like a fire alarm) - that's auditory input</li>
                <li>Feel changes in its environment (like detecting temperature) - that's sensor-based input</li>
                <li>Know what's happening in the computer systems it's connected to (like knowing when your smart fridge needs restocking) - that's system input</li>
            </ul>

            <p>
                Each of these "senses" helps the AI agent build a complete picture of what's happening around it. Without these perception modalities, an AI agent would be like a person trying to navigate the world with their eyes closed and ears plugged - not very effective!
            </p>

            <h3><strong>Component 2: Cognitive Skillset (Internal Capabilities)</strong></h3>

            <p>
                Let's talk about the "brain" of an AI agent - its Cognitive Skillset. Just like how humans need different mental abilities to solve problems (like remembering things, making decisions, or planning ahead), AI agents also need various thinking capabilities to function effectively.
            </p>

            <p>
                Imagine you're a chef in a busy restaurant kitchen. To do your job well, you need multiple skills: remembering recipes, deciding what to cook first, coordinating with other kitchen staff, and adapting when you run out of ingredients. An AI agent's cognitive skillset works similarly - it's a collection of mental tools that help it think and make decisions.
            </p>

            <p>Here's how we can break down these mental capabilities in simple terms:</p>

            <div className="blog-content-image-wrapper">
                <img src={image5} alt="Cognitive Skillset" className="blog-content-image transform-image" />
            </div>

            <ol>
                <li><strong>Memory and Understanding (Knowledge Processing):</strong> Think of this as the agent's ability to remember and understand information, just like how you remember your friend's phone number or recognise your favourite song. The agent needs to: Store information neatly (like organising files in cabinets) Find and use information when needed (like quickly finding that recipe you need) Spot patterns and connections (like noticing that it usually rains after dark clouds appear)</li>
                <li><strong>Making Smart Choices (Decision-Making):</strong> This is like having a wise friend who thinks carefully before acting. The agent needs to: Think logically about problems (like solving a puzzle) Choose the best option when there are trade-offs (like deciding whether to take a shorter but busier route) Consider what might go wrong (like checking the weather before planning an outdoor event)  </li>
                <li><strong>Getting Things Done (Task Management): </strong>Just like how you plan your day, the agent needs to organise its work efficiently: Break big jobs into smaller steps (like planning a party step by step) Keep track of multiple tasks (like juggling homework assignments) Use resources wisely (like managing your time and energy)</li>
                <li><strong>Talking and Understanding (Communication):</strong> Like being a good conversation partner, the agent needs to: Understand what others are saying or asking Keep track of conversations (like remembering what was discussed earlier) Work well with others (like being a good team player)</li>
                <li><strong>Getting Better Over Time (Learning & Adaptation):</strong> Just like how humans learn from experience, the agent needs to: Learn from mistakes and successes Stay up-to-date with new information Change its approach when something isn't working.</li>
            </ol>
            <p> 
            All these capabilities work together, just like how different parts of your brain work together when you're solving a problem. For example, when you're cooking a new recipe, you're using your memory (to recall ingredients), decision-making (to adjust cooking time), task management (to coordinate different steps), and learning ability (to remember what works for next time).
            </p>

            <h3><strong>Component 3: Action Toolkit (Output Mechanisms)</strong></h3>

            <p>
                Let's talk about how an AI agent actually operates in the real world through its Action Toolkit. Think of this as the agent's hands and voice, the ways it can affect its environment. Just like how you use your hands to type on a keyboard or your voice to communicate important messages, an AI agent needs methods to transform its decisions into concrete actions. The Action Toolkit enables the agent to interact with and influence its surroundings, turning its decisions into meaningful, real-world outcomes.
            </p>

            <p>
                Here's how an AI agent can act in different ways. Each category of action mirrors a human-like capability, making the agent's work seamless and efficient.
            </p>

            <div className="blog-content-image-wrapper">
                <img src={image6} alt="Action Toolkit" className="blog-content-image transform-image" />
            </div>

            <p>Let’s break these actions down further:</p>

            <h4>Information Sharing Actions</h4>
            <p>
                Think of this as the agent's voice, it communicates insights and shares information in a way that's actionable and helpful. These actions include:
            </p>
            <ul>
                <li><strong>Writing Messages or Reports:</strong> Like composing an email or drafting a project update for a team.</li>
                <li><strong>Sending Alerts:</strong> Similar to a phone notification reminding you of an upcoming meeting or deadline.</li>
                <li><strong>Creating New Content:</strong> For example, summarising a long research paper into a brief, clear report or creating a visual presentation.</li>
            </ul>
            <p>
                The agent's ability to share information ensures seamless communication between humans, systems, and other agents.
            </p>

            <h4>System Interaction Actions</h4>
            <p>
                This is the agent's equivalent of having "hands on a keyboard," directly interacting with computer systems to accomplish tasks. These actions include:
            </p>
            <ul>
                <li><strong>Clicking Buttons and Filling Forms:</strong> Like navigating a website to submit data or perform routine tasks.</li>
                <li><strong>Communicating with Other Programs:</strong> For instance, querying a weather app for the forecast or extracting data from a CRM tool.</li>
            </ul>
            <p>
                System interactions allow agents to automate workflows, bridge gaps between applications, and keep systems interconnected.
            </p>

            <h4>Data-Oriented Actions</h4>
            <p>
                Think of this as the agent's ability to manage and optimize information, much like how you organise your workspace. Examples include:
            </p>
            <ul>
                <li><strong>Sorting and Filtering Data:</strong> Like curating your photo library to find the best shots or organising a folder of documents.</li>
                <li><strong>Updating and Managing Records:</strong> For instance, keeping contact lists current or updating customer databases.</li>
                <li><strong>Extracting Insights:</strong> Finding and highlighting critical details within large datasets, similar to identifying key points in meeting notes.</li>
            </ul>
            <p>
                Data actions enable agents to derive value from raw information, ensuring accuracy and relevance for decision-making.
            </p>

            <h4>Environment Control Actions</h4>
            <p>
                This category equips agents to adjust and influence their digital or physical workspace, much like tuning settings in your home or office. Key examples include:
            </p>
            <ul>
                <li><strong>Adjusting Room Temperature:</strong> Like setting a thermostat to optimize comfort and energy usage.</li>
                <li><strong>Organising Files:</strong> Ensuring digital folders are structured for easy access and reducing clutter.</li>
                <li><strong>Managing Resources:</strong> Controlling memory or power consumption to optimize system performance.</li>
            </ul>
            <p>
                Through environment control, agents can create more efficient, streamlined workspaces that align with evolving needs.
            </p>

            <p>
                Imagine you're playing with a robot toy. The robot has a brain (like the AI's internal processing) and needs ways to interact with the real world (that's the Action Toolkit). Just as you need hands to pick up toys and a voice to talk to friends, an AI needs tools to interact with its environment. The Action Toolkit is like a Swiss Army knife, it has different tools for different jobs. The AI might need to organise information (like sorting baseball cards), control things (like turning on lights), or communicate (like sending messages to friends). Without these tools, the AI would be like someone who can think brilliantly but can't move or speak, not very helpful!
            </p>

            <p>
                This is what makes an AI agent truly special - it's not just a smart calculator that sits there thinking. Because it has these tools to act, it can actually help us get things done in the real world. That's what we mean when we say it's "agentic" - it can think AND do.
            </p>

            <h2>Conclusion: The Path Ahead</h2>
            <p>
                Agentic AI represents a groundbreaking evolution in artificial intelligence, transitioning systems from passive tools to dynamic, proactive entities. By embracing autonomy, adaptability, and action, Agentic AI redefines how systems interact with the world around them. From its ability to operate independently to its capacity for continuous learning and decision-making, this paradigm offers transformative potential across industries.
            </p>
            <p>Key takeaways from this blog include:</p>
            <ul>
                <li><strong>The Definition of Agentic AI:</strong> A self-directed, goal-oriented system capable of adapting dynamically.</li>
                <li><strong>The Difference from RPA:</strong> Unlike repetitive RPA systems, Agentic AI is dynamic, thoughtful, and continuously improving.</li>
                <li><strong>Core Characteristics and Components:</strong> The Three A’s- Autonomy, Adaptation, and Action combined with perception, cognition, and action mechanisms, form the foundation of Agentic AI.</li>
            </ul>
            <p>
                The true potential of agentic AI is realised within <strong>Multi-Agent Systems (MAS)</strong>, where agents collaborate through structured interaction rather than isolated execution. By enabling coordination, negotiation, and shared context across specialized agents, MAS architectures allow complex problems to be decomposed and resolved dynamically. This approach forms the foundation for scalable, distributed intelligence capable of operating across domains, workflows, and organisational boundaries.
            </p>
        </>
    );

    return (
        <BlogPost
            category="AI ENGINEERING"
            date="FEBRUARY, 2026"
            title="The Agentic AI Blueprint"
            subtitle="The agent as the core primitive of systems designed to operate with intent and context."
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

