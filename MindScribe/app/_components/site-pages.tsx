"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Brain, CalendarDays, Check, Heart, MessageCircle, ShieldCheck, Sparkles, UsersRound } from "lucide-react";

const nav = [
  ["Home", "/"], ["Counseling Services", "/services"], ["Our Psychologists", "/psychologists"], ["Study Notes & Library", "/notes"],
];

export function Header() {
  return <header className="route-nav"><Link href="/" className="route-brand"><img src="/mindscribe-logo.png" alt="MindScribe" /><span>Mind<span>Scribe</span><small>PSYCHOLOGY & COUNSELLING</small></span></Link><nav>{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><Link className="route-button" href="/book">Book a session <ArrowRight size={15}/></Link></header>;
}

export function Footer() {
  return <footer className="route-footer"><div><p className="route-kicker">A small first step</p><h2>Ready when you are.</h2><p>Start with a confidential conversation. You don’t need to arrive with perfect words.</p></div><Link className="route-button route-button-light" href="/book">Book a session <ArrowRight size={15}/></Link></footer>;
}

export function PageIntro({ kicker, title, copy }: { kicker: string; title: React.ReactNode; copy: string }) {
  return <section className="route-intro"><p className="route-kicker">{kicker}</p><h1>{title}</h1><p>{copy}</p></section>;
}

const serviceCards = [
  [Heart, "Individual counselling", "A private, considered space to explore what feels difficult, unresolved, or ready for change."],
  [Brain, "Anxiety & stress support", "Practical, compassionate support for pressure, uncertainty, racing thoughts, and an overfull mind."],
  [UsersRound, "Relationship concerns", "Explore connection, communication, boundaries, and belonging with more clarity."],
  [BookOpen, "Student support", "Support for academic stress, transitions, self-doubt, and growing up."],
  [Sparkles, "Personal growth", "Notice patterns, clarify values, and take manageable steps toward a life that feels like yours."],
  [ShieldCheck, "Emotional well-being", "Build a kinder relationship with your emotions, needs, and inner life."],
] as const;

export function ServicesPage() {
  return <><Header/><main><PageIntro kicker="Ways I can help" title={<>Support that begins with <em>your story.</em></>} copy="You don’t need a perfectly formed reason to start. We can begin with what is present and find a pace that feels manageable."/><section className="route-section service-list">{serviceCards.map(([Icon, title, copy], i) => <article key={title}><span>0{i + 1}</span><Icon size={25}/><h2>{title}</h2><p>{copy}</p><Link href="/book">Book a consultation <ArrowRight size={15}/></Link></article>)}</section><section className="route-banner"><p className="route-kicker">A gentle beginning</p><h2>You don’t have to have all the answers before you begin.</h2><Link className="route-button" href="/book">Start a conversation <ArrowRight size={15}/></Link></section></main><Footer/></>;
}

export function AboutPage() {
  return <><Header/><main><PageIntro kicker="Meet MindScribe" title={<>Understanding you before <em>helping you.</em></>} copy="Psychological support begins with listening carefully—not with assumptions."/><section className="about-panel route-section"><div className="arch-mark"><img src="/mindscribe-logo.png" alt="MindScribe mark"/></div><div><p className="route-kicker">The approach</p><h2>Care, curiosity, and room to be human.</h2><p>MindScribe offers a respectful, non-judgmental setting where we can make room for your experiences, patterns, and hopes. The work is person-centred, evidence-informed, and shaped around the person in front of me.</p><div className="principles">{["Confidential and thoughtful", "Tailored to your pace", "Grounded in care and learning"].map(x => <span key={x}><Check size={16}/>{x}</span>)}</div><Link className="route-button" href="/contact">Get in touch <ArrowRight size={15}/></Link></div></section></main><Footer/></>;
}

export function PsychologistsPage() {
  const clinicians = [["Dr. Elena Vance", "Clinical Psychologist · Anxiety & Trauma", "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85"], ["Dr. Marcus Thorne", "Counselling Psychologist · Relationships", "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85"], ["Dr. Sophia Lin", "Clinical Psychologist · Adult Well-being", "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=85"]];
  return <><Header/><main><PageIntro kicker="The clinical team" title={<>Meet the people who hold <em>space for you.</em></>} copy="Our clinicians bring accredited expertise, careful listening, and evidence-based approaches to every session."/><section className="route-section article-list">{clinicians.map(([name, specialty, image]) => <article key={name}><img className="h-48 w-full rounded-lg object-cover" src={image} alt=""/><p className="route-kicker">{specialty}</p><h2>{name}</h2><Link href="/book">View availability <ArrowRight size={15}/></Link></article>)}</section><section className="route-banner"><p className="route-kicker">Our standard of care</p><h2>Every MindScribe clinician is personally vetted for credentials, clinical experience, and compassionate practice.</h2></section></main><Footer/></>;
}

export function HubPage() {
  const paths = [["Psychology notes", "Clear, structured notes that make complex ideas easier to understand.", "/notes", BookOpen], ["Everyday psychology", "A softer, clearer way to understand ordinary moments.", "/articles", Brain], ["Questions, answered", "A little clarity before you begin.", "/contact", MessageCircle]] as const;
  return <><Header/><main><PageIntro kicker="MindScribe library" title={<>A quieter way to learn about <em>your mind.</em></>} copy="Simple, reliable resources for curious minds and gentler self-understanding."/><section className="route-section hub-grid">{paths.map(([title, copy, href, Icon]) => <Link key={title} href={href}><Icon size={25}/><h2>{title}</h2><p>{copy}</p><span>Explore <ArrowRight size={15}/></span></Link>)}</section></main><Footer/></>;
}

export function NotesPage() {
  const topics = ["Introduction to Psychology", "Cognitive Psychology", "Developmental Psychology", "Social Psychology", "Clinical Psychology", "Personality Psychology", "Counselling Psychology", "Research Methods"];
  return <><Header/><main><PageIntro kicker="Psychology notes" title={<>Learning, in <em>layers.</em></>} copy="Explore psychology through clear, structured notes designed to make complex ideas easier to understand."/><section className="route-section notes-list">{topics.map((topic, i) => <article key={topic}><span>0{i + 1}</span><h2>{topic}</h2><p>{i % 2 ? "Intermediate" : "Beginner"} · {7 + i} topics</p><Link href="/hub">Explore notes <ArrowRight size={15}/></Link></article>)}</section></main><Footer/></>;
}

export function ArticlesPage() {
  const articles = [["Reflection", "Why do we overthink?", "A kinder way to understand the mind’s habit of circling around uncertainty."], ["Well-being", "Understanding emotional burnout", "The quiet signs of depletion and how to begin responding with care."], ["Self-understanding", "The psychology of self-confidence", "Confidence is less about having no doubts and more about trusting your capacity."]];
  return <><Header/><main><PageIntro kicker="From the psychology desk" title={<>Thoughtful reads for <em>everyday life.</em></>} copy="Ideas from psychology can offer a softer, clearer way to understand the ordinary moments we all move through."/><section className="route-section article-list">{articles.map(([tag, title, copy]) => <article key={title}><p className="route-kicker">{tag}</p><h2>{title}</h2><p>{copy}</p><Link href="/hub">Read article <ArrowRight size={15}/></Link></article>)}</section></main><Footer/></>;
}

export function ContactPage({ booking = false }: { booking?: boolean }) {
  return <><Header/><main><PageIntro kicker={booking ? "Book a session" : "Get in touch"} title={booking ? <>Find a time that feels <em>right.</em></> : <>Let’s start a <em>conversation.</em></>} copy="You’re welcome to reach out when it feels right. Share only what feels comfortable."/><section className="contact-layout route-section"><aside><CalendarDays size={28}/><h2>{booking ? "Your first session" : "Contact details"}</h2><p>{booking ? "We’ll confirm a suitable time and answer any questions before you begin." : "Available by appointment. We’ll respond with care and help you understand the next step."}</p><a href="tel:+910000000000">+91 00000 00000</a><a href="https://wa.me/YOUR_PHONE_NUMBER">Chat on WhatsApp</a></aside><form onSubmit={e => e.preventDefault()}><label>Full name<input required placeholder="Your name"/></label><label>Email address<input required type="email" placeholder="you@example.com"/></label>{booking && <label>What would you like support with?<select defaultValue=""><option value="" disabled>Select an option</option><option>Anxiety & stress</option><option>Relationships</option><option>Personal growth</option><option>Something else</option></select></label>}<label>Message<textarea required rows={5} placeholder="Share only what feels comfortable"/></label><button className="route-button">{booking ? "Request a session" : "Send enquiry"} <ArrowRight size={15}/></button></form></section></main><Footer/></>;
}
