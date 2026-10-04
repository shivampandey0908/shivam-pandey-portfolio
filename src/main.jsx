import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {motion, AnimatePresence, useScroll} from 'framer-motion';
import {ArrowDown, ArrowUpRight, Mail, MapPin, Menu, X, ExternalLink, Code2, BrainCircuit, Database, Sparkles, Trophy, Download, ChevronRight, ArrowUp} from 'lucide-react';
import './styles.css';

// Lucide no longer ships trademarked social logos. Keep these two small marks
// local so the production bundle does not depend on removed package exports.
function GithubMark(){return <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.14 3.7 1.5.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>}
function LinkedinMark(){return <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M5.2 3.4a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.4h3.8v11.3H3.3V9.4Zm6.2 0h3.6V11h.1a4 4 0 0 1 3.6-2c3.9 0 4.6 2.6 4.6 6v5.7h-3.8v-5c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7v5.1H9.5V9.4Z"/></svg>}

const socials = {
  linkedin:'https://linkedin.com/in/shivam-pandey-9875b0313',
  github:'https://github.com/shivampandey0908',
  leetcode:'https://leetcode.com/u/Shivam_9452/'
};

const projects = [
  {
    n:'01', title:'EduInsight AI', kicker:'AI-Powered Student Result Analysis',
    description:'An AI-powered web application that extracts academic data from uploaded result PDFs and turns it into personalized performance insights.',
    bullets:['Google Gemini API for strengths, weaknesses, study plans and career recommendations','Responsive React.js interface','Deployed publicly on Vercel'],
    tags:['React.js','Google Gemini API','PDF Analysis','Vercel'], link:'https://edu-insight-ai-amber.vercel.app/'
  },
  {
    n:'02', title:'Yatra-Verse', kicker:'Local Travel Guide Marketplace',
    description:'A travel marketplace connecting travelers with local guides for personalized experiences, smarter planning and better safety awareness.',
    bullets:['Guide discovery, booking, ratings and price comparison','Local alerts for natural calamities and travel risks','Marketplace-style travel experience'],
    tags:['React','Node.js','MongoDB','Marketplace'], link:null
  },
  {
    n:'03', title:'InterviewVerse', kicker:'AI-Powered Interview Practice Platform',
    description:'A voice-first AI interview platform built to simulate realistic technical and behavioral interviews and help candidates improve both knowledge and communication.',
    bullets:['Adaptive AI interviewer with contextual follow-up questions','Technical and behavioral interview practice','Post-interview feedback with actionable improvement guidance'],
    tags:['AI','Voice Interviews','Technical Assessment','Feedback'], link:'https://interview-verse-three.vercel.app/'
  }
];

const skills = [
  ['C / C++','Languages'],['JavaScript','Languages'],['Python','Languages'],['Java','Languages'],['HTML5 / CSS3','Frontend'],['React.js','Frontend'],['FastAPI','Backend'],['MongoDB Atlas','Database'],['MySQL','Database'],['REST APIs','Backend'],['Google Gemini API','AI'],['Git / GitHub','Tools'],['Docker','Tools'],['Vercel / Render','Deployment'],['Prompt Engineering','AI']
];

const fadeUp={hidden:{opacity:0,y:40},show:{opacity:1,y:0,transition:{duration:.7,ease:[.22,1,.36,1]}}};
const stagger={hidden:{},show:{transition:{staggerChildren:.08}}};

function Section({id,eyebrow,title,children,className=''}){
 return <section id={id} className={`section ${className}`}><div className="container"><motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true,amount:.18}}><div className="eyebrow">{eyebrow}</div><h2>{title}</h2></motion.div>{children}</div></section>
}

function App(){
 const [menu,setMenu]=useState(false); const [active,setActive]=useState('home'); const [cert,setCert]=useState(false);
 const {scrollYProgress}=useScroll();
 useEffect(()=>{const ids=['home','about','skills','projects','achievements','contact']; const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)setActive(e.target.id)})},{rootMargin:'-35% 0px -55%'}); ids.forEach(id=>{const el=document.getElementById(id); if(el)obs.observe(el)}); return()=>obs.disconnect()},[]);
 const go=id=>{setMenu(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth'})};
 return <div className="app">
  <motion.div className="scrollProgress" style={{scaleX:scrollYProgress}} aria-hidden="true"/>
  <div className="noise"/><div className="orb orb1"/><div className="orb orb2"/>
  <header className="nav"><div className="container navin"><button className="brand" onClick={()=>go('home')}><span>SP</span><b>Shivam Pandey</b></button><nav className={menu?'open':''}>{['home','about','skills','projects','achievements','contact'].map(x=><button className={active===x?'active':''} onClick={()=>go(x)} key={x}>{x}</button>)}</nav><button className="menubtn" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></header>

  <main>
   <section id="home" className="hero"><div className="container heroGrid">
    <motion.div initial={{opacity:0,x:-45}} animate={{opacity:1,x:0}} transition={{duration:.8}} className="heroCopy">
      <div className="status"><span/> Available for opportunities</div>
      <p className="mini">ASPIRING SOFTWARE ENGINEER & AI DEVELOPER</p>
      <h1>Building ideas into <span>intelligent</span> digital experiences.</h1>
      <p className="lead">Computer Science undergraduate focused on AI-powered and full-stack web applications, real-world problem solving, and modern software development.</p>
      <div className="actions"><button className="primary" onClick={()=>go('projects')}>Explore my work <ArrowUpRight size={18}/></button><a className="ghost" href="/assets/Shivam_Pandey_Resume.pdf" download>Download Resume <Download size={17}/></a></div>
      <div className="socials"><a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubMark/></a><a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinMark/></a><a href={socials.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2/></a><a href="mailto:pandeysp8080@gmail.com" aria-label="Email"><Mail/></a></div>
    </motion.div>
    <motion.div initial={{opacity:0,scale:.85,rotate:3}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:1,delay:.15,ease:[.16,1,.3,1]}} className="portraitWrap"><div className="portraitGlow"/><div className="portrait"><img src="/assets/shivam.jpg" alt="Shivam Pandey"/></div><div className="floatingCard cardA"><Sparkles size={16}/> AI Developer</div><div className="floatingCard cardB"><Code2 size={16}/> Full Stack</div></motion.div>
   </div><button className="scrollHint" onClick={()=>go('about')}>Scroll to explore <ArrowDown size={16}/></button></section>

   <Section id="about" eyebrow="01 / ABOUT" title="A builder who likes turning problems into products."><div className="aboutGrid"><motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="aboutText"><p>I’m a Computer Science undergraduate at Dronacharya Group of Institutions (AKTU), with hands-on experience building AI-powered and full-stack web applications.</p><p>My work sits at the intersection of practical software engineering and AI — from analyzing academic results to creating an adaptive interview practice experience.</p><div className="location"><MapPin size={17}/> Greater Noida, India</div></motion.div><motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true}} className="stats"><motion.div variants={fadeUp}><strong>8.02</strong><span>CGPA</span></motion.div><motion.div variants={fadeUp}><strong>3</strong><span>Featured Projects</span></motion.div><motion.div variants={fadeUp}><strong>550+</strong><span>CodeBuild submissions</span></motion.div></motion.div></div></Section>

   <Section id="skills" eyebrow="02 / TOOLKIT" title="Technologies I use to build." className="darkSection"><motion.div className="skillGrid" variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,amount:.12}}>{skills.map(([name,cat],i)=><motion.div variants={fadeUp} className="skill" key={name}><div className="skillIcon">{cat==='AI'?<BrainCircuit size={18}/>:cat==='Database'?<Database size={18}/>:cat==='Frontend'?<Sparkles size={18}/>:<Code2 size={18}/>}</div><div><b>{name}</b><small>{cat}</small></div></motion.div>)}</motion.div></Section>

   <Section id="projects" eyebrow="03 / SELECTED WORK" title="Projects with a purpose."><div className="projects">{projects.map((p,i)=><motion.article key={p.title} className="project" initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.65,delay:i*.1}} whileHover={{y:-8}}><div className="projectTop"><span>{p.n}</span><div>{p.tags.map(t=><em key={t}>{t}</em>)}</div></div><div className="projectBody"><div><p className="projectKicker">{p.kicker}</p><h3>{p.title}</h3><p>{p.description}</p><ul>{p.bullets.map(b=><li key={b}>{b}</li>)}</ul></div>{p.link?<a className="projectLink" href={p.link} target="_blank" rel="noreferrer">Live project <ExternalLink size={16}/></a>:<span className="projectLink muted">In development</span>}</div></motion.article>)}</div></Section>

   <Section id="achievements" eyebrow="04 / RECOGNITION" title="Milestones worth remembering."><div className="achGrid"><motion.div className="achievementList" variants={stagger} initial="hidden" whileInView="show" viewport={{once:true}}>{[['02','Second Runner-Up','National Bidding War Competition — Delhi University'],['35+','Top 35 Teams','CodeBuild 1.0 Hackathon — 550+ team submissions'],['AMB','Campus Ambassador','Internshala Student Campus Ambassador']].map(([num,title,desc])=><motion.div variants={fadeUp} className="achievement" key={title}><strong>{num}</strong><div><h3>{title}</h3><p>{desc}</p></div><ChevronRight/></motion.div>)}</motion.div><motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} className="certificate" onClick={()=>setCert(true)}><div className="certImage"><img src="/assets/codebuild-certificate.jpeg" alt="CodeBuild 1.0 certificate"/></div><div className="certCaption"><span><Trophy size={16}/> Featured certificate</span><b>CodeBuild 1.0 — Top 35 Teams</b><small>Click to view certificate</small></div></motion.div></div></Section>

   <Section id="contact" eyebrow="05 / LET'S CONNECT" title="Have an idea? Let’s build it." className="contactSection"><div className="contactBox"><div><p>I'm open to internships, collaborations, hackathons, and interesting software projects.</p><div className="contactEmail"><Mail size={18}/><a href="mailto:pandeysp8080@gmail.com">pandeysp8080@gmail.com</a></div></div><div className="contactActions"><a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16}/></a><a href={socials.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16}/></a><a href={socials.leetcode} target="_blank" rel="noreferrer">LeetCode <ArrowUpRight size={16}/></a></div></div></Section>
  </main>
  <footer><div className="container foot"><span>© {new Date().getFullYear()} Shivam Pandey</span><span>Designed & built with curiosity.</span></div></footer>
  <AnimatePresence>{cert&&<motion.div className="modal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setCert(false)}><motion.div className="modalCard" initial={{scale:.88,y:20}} animate={{scale:1,y:0}} exit={{scale:.88,y:20}} onClick={e=>e.stopPropagation()}><button onClick={()=>setCert(false)}><X/></button><img src="/assets/codebuild-certificate.jpeg" alt="CodeBuild certificate enlarged"/></motion.div></motion.div>}</AnimatePresence>
  <button className="toTop" onClick={()=>go('home')} aria-label="Back to top"><ArrowUp size={18}/></button>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
