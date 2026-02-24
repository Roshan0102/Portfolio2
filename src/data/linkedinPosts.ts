export interface LinkedInPost {
    id: string;
    text: string;
    images?: string[];
    url: string;
}

export const linkedinPostsData: LinkedInPost[] = [
    {
        id: "1",
        text: "✨Had a fantastic experience collaborating with Joshua Cecil at the Airtribe AI Agents Hackathon powered by Lyzr AI !\n\nWe built a Manager Agent that orchestrates multiple AI agents to help Product Managers perform Root Cause Analysis efficiently. Grateful for the opportunity to innovate, learn, and contribute alongside some of the brightest minds!\n\nSpecial thanks to Jithin George , Vidur Rajpal , and the Airtribe team for the amazing event.\n\n#AI #RootCauseAnalysis #AgentOrchestration #HackathonExperience #Grateful",
        images: ["/assets/Airtribe3.jpeg"],
        url: "https://www.linkedin.com/posts/roshan-j-628672203_airtribe-lyzrai-agentorchestration-activity-7343273351202709505-qf8B?utm_source=share&utm_medium=member_desktop&rcm=ACoAADPjwAABQ1ar0IOnht9rVLNNzFX47TGEVaw"
    },
    {
        id: "2",
        text: "Just had an amazing experience at the Harnessing DevOps event in Bengaluru! 🚀 Got to dive into Avyka's Harness Cloud Cost Management tool and learn how it simplifies multi-cloud management for DevOps and cloud engineers. ☁️⚙️ Plus, I even managed to snag third place in the quiz! 🥉🏆 Big shoutout to the team for an awesome event and for all the insights shared. 🙌.",
        images: ["/assets/Avyka.jpeg"],
        url: "https://www.linkedin.com/posts/roshan-j-628672203_just-had-an-amazing-experience-at-the-harnessing-activity-7400013089024438274-8M3t?utm_source=share&utm_medium=member_desktop&rcm=ACoAADPjwAABQ1ar0IOnht9rVLNNzFX47TGEVaw"
    },
    {
        id: "3",
        text: "Had an awesome time at \"StartupParty Day\" hosted by StartupParty. Got to connect with some amazing startup founders like Shyam Sundar (Founder of Root Node India (P) Ltd), Praseeth K M (Founder of Locan.app) and left with a bunch of fresh insights and inspiration. Grateful for spaces like these where ideas and energy flow freely!.",
        images: ["/assets/Startupparty.png"],
        url: "https://www.linkedin.com/posts/roshan-j-628672203_startupparty-day-29th-june-25-bengaluru-activity-7346868997327343616-9NfI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADPjwAABQ1ar0IOnht9rVLNNzFX47TGEVaw"
    }
];
