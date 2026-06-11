from agents import function_tool

#Introduction Tool
@function_tool(strict_mode=False)
async def introduction():
    return (
        "Hi, I'm **Aqsa Gull** — a passionate Web Developer and Agentic AI enthusiast. "
        "I specialize in building responsive websites, automation tools, and intelligent agentic systems "
        "using TypeScript, Next.js, Tailwind CSS, and n8n."
    )

# Skills Tool
@function_tool(strict_mode=False)
async def get_skills():
    skills = [
        "HTML", "CSS", "JavaScript", "TypeScript","python",
        "React'js", "Next.js", "Tailwind CSS","agent Kit",
        "Node.js", "n8n Automation", "AI Integration", "Git & GitHub"
    ]
    return "My Core Skills:\n- " + "\n- ".join(skills)



#  Experience Tool
@function_tool(strict_mode=False)
async def get_experience():
    return (
        " Experience:\n"
        "- Working as an **Agentic AI Developer** at Governor House (GIAIC).\n"
        "- Hands-on experience with automation workflows and web development.\n"
        "- Building intelligent systems that combine AI + Frontend + Automation."
    )

# Projects Tool
@function_tool(strict_mode=False)
async def get_projects():
    practice = [
        {"name": "Contact Management System", "desc": "CLI tool built with TypeScript & Inquirer."},
        {"name": "Student Management System", "desc": "Manages student data with TypeScript CLI."},
        {"name": "Responsive Portfolio Website", "desc": "Built using Next.js and Tailwind CSS."},
        {"name": "AI Automation Agent", "desc": "Integrated AI with n8n for smart task handling."}
    ]
    real = [
        {
            "name": "AI-Powered Real Estate Cold Email Automation",
            "role": "Developer",
            "budget": "$800",
            "desc": "Daily scrapes 200+ real estate leads from Google Maps via Apify. AI audits websites for chatbots & social media, generates personalized cold emails via Brevo API. Fully automatic with cron-job + APScheduler (Pakistan timezone). Dashboard with Clerk authentication and auto-refresh.",
            "tech": "Python, FastAPI, PostgreSQL (Neon), Apify, Brevo API, Clerk Auth, APScheduler, Cron Job, Next.js"
        },
        {
            "name": "Tech Force Pakistan — Course Website & LMS",
            "role": "Full Stack Developer",
            "budget": "$5,000 – $15,000",
            "desc": "Full-featured educational platform for Pakistani students with project-based courses in Graphic Design, Web Development, Digital Marketing, Spoken English, Daraz E-commerce, and AI. Includes public marketing site (3D animated hero, course catalog, blog, contact with lead capture), student learning portal (LMS with video lessons, task tracking, progress bars, certificates), and admin dashboard (course/module/lesson CRUD, lead & enrollment management).",
            "tech": "Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, Three.js, Clerk Auth, Prisma, PostgreSQL (Neon), GSAP"
        }
    ]
    response = "📚 Practice Projects:\n"
    for p in practice:
        response += f"- **{p['name']}** → {p['desc']}\n"
    response += "\n💰 Real-World Client Projects:\n"
    for p in real:
        response += f"- **{p['name']}** ({p['budget']}) — {p['role']}\n  {p['desc']}\n  Tech: {p['tech']}\n"
    return response

# 🌐 Social Links Tool
@function_tool(strict_mode=False)
async def get_social_links():
    socials = {
        "LinkedIn":"linkedin.com/in/aqsa-gullofficial99",
        "GitHub": "https://github.com/aqsagull99",
        "FaceBook": "https://www.facebook.com/Aqsagullofficial/.",
        "Twitter (X)": "https://x.com/AqsaGull9889"
    }
    return "My Social Profiles:\n" + "\n".join([f"- {k}: {v}" for k, v in socials.items()])

# 📜 Resume Tool
@function_tool(strict_mode=False)
async def download_resume():
    return "You can download my resume here: https://your-website.com/Aqsa_Resume.pdf"

#  Achievements Tool
@function_tool(strict_mode=False)
async def get_achievements():
    achievements = [
        "Completed Web Development training at Governor House IT Initiative.",
        " Built custom AI portfolio agent using FastAPI + Next.js.",
        "Created multiple CLI tools for learning automation with TypeScript."
    ]
    return "Achievements:\n- " + "\n- ".join(achievements)

# Fun Fact Tool
@function_tool(strict_mode=False)
async def fun_fact():
    return "Fun Fact: I enjoy debugging code while sipping coffee  and love making tech learning fun for others!"


