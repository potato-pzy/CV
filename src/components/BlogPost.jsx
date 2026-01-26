import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './BlogPost.css';
import featuredImage from '../assets/featured.png'; // Placeholder fallback

const BlogPost = ({
    category = "AI STRATEGY",
    date = "JAN 31, 2026",
    title = "The Agentic AI Blueprint: From Intelligence to Execution",
    subtitle = "In a world of static automation, agentic AI marks a fundamental shift from systems that follow instructions to systems that achieve objectives.",
    author = {
        name: "Pradeep Ganesan",
        title: "Co-Founder, Chartered Vectorial"
    },
    content = null,
    image = featuredImage,
    prevPost = null,
    nextPost = null
}) => {
    // Animation variants
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-post-page">
            <Navbar />

            <main>
                {/* Blog Hero */}
                <section className="blog-hero">
                    <div className="blog-hero-container">
                        <motion.div
                            className="blog-meta"
                            {...fadeInUp}
                            transition={{ ...fadeInUp.transition, delay: 0.1 }}
                        >
                            <span>{category}</span>
                            <span style={{ height: '1px', width: '30px', background: 'rgba(255,255,255,0.2)' }}></span>
                            <span>{date}</span>
                        </motion.div>

                        <motion.h1
                            className="blog-title"
                            {...fadeInUp}
                            transition={{ ...fadeInUp.transition, delay: 0.2 }}
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            className="blog-subtitle"
                            {...fadeInUp}
                            transition={{ ...fadeInUp.transition, delay: 0.3 }}
                        >
                            {subtitle}
                        </motion.p>
                    </div>
                </section>

                {/* Featured Image */}
                <motion.section
                    className="blog-image-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                >
                    <img src={image} alt={title} className="blog-featured-image" />
                </motion.section>

                {/* Main Content Layout */}
                <section className="blog-content-layout">
                    <aside className="blog-sidebar">
                        <div className="author-card">
                            <p className="author-label">Written by</p>
                            <h4 className="author-name">{author.name}</h4>
                            <p className="author-title">{author.title}</p>
                        </div>

                        <div className="share-links">
                            <p className="author-label">Share</p>
                            <button className="share-btn">Twitter</button>
                            <button className="share-btn">LinkedIn</button>
                            <button className="share-btn">Copy Link</button>
                        </div>
                    </aside>

                    <article className="blog-post-body">
                        {content ? content : (
                            <>
                                <p className="lead">
                                    Modern enterprises are built on a foundation of process. For decades, those processes have been codified into static workflows—reliable, but rigid. The arrival of Agentic AI represents the end of that rigidity.
                                </p>

                                <p>
                                    At Chartered Vectorial, we define Agentic AI as software that doesn't just process data, but autonomously navigates complexity to achieve a high-level goal. It is the difference between a tool and a teammate.
                                </p>

                                <h2>The Three Pillars of Agency</h2>
                                <p>
                                    To transition from simple automation to true agency, a system must exhibit three core characteristics: Reasoning, Tool-Use, and Autonomy within Guardrails.
                                </p>

                                <blockquote>
                                    "The goal isn't to replace the human, but to provide the human with an army of experts who can handle the cognitive load of execution."
                                </blockquote>

                                <p>
                                    When we build agentic systems for our clients, we start by mapping the "Cognitive Path"—the series of decisions a human expert currently makes. We then architect a multi-agent swarm where each agent is a specialist in one segment of that path.
                                </p>

                                <h2>Scaling the Unscalable</h2>
                                <p>
                                    The true power of this approach lies in its scalability. Whether it is reviewing 50,000 legal amendments or monitoring real-time global supply chain signals, agentic AI provides the same level of focus at 2 AM as it does at 10 AM.
                                </p>

                                <p>
                                    As we move deeper into 2026, the question is no longer whether you are using AI, but how much agency you are willing to give it. The future belongs to those who build for intelligence, not just instructions.
                                </p>
                            </>
                        )}
                    </article>
                </section>

                {/* Bottom Navigation */}
                <section className="blog-footer-nav">
                    {prevPost ? (
                        <div className="blog-nav-item">
                            <p className="nav-label">Previous Insight</p>
                            <Link to={prevPost.slug} className="nav-item-link">
                                <h3 className="nav-title">{prevPost.title}</h3>
                            </Link>
                        </div>
                    ) : <div className="blog-nav-item"></div>}

                    {nextPost ? (
                        <div className="blog-nav-item" style={{ textAlign: 'right' }}>
                            <p className="nav-label">Next Insight</p>
                            <Link to={nextPost.slug} className="nav-item-link">
                                <h3 className="nav-title">{nextPost.title}</h3>
                            </Link>
                        </div>
                    ) : <div className="blog-nav-item"></div>}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPost;
