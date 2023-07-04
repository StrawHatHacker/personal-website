export type Project = {
    name: string;
    type: string;
    description: string;
    longDescription: string;
    icon: string;
    technologies: string[];
    url: string | null;
    color: string;
    roundIcon: boolean;
    dateCreated: string;
}

export const projects: Project[] = [
    {
        name: "OtakuGIFs",
        type: 'REST API & Website',
        description: "Free REST API that serves animated GIFs, WEBPs & AVIFs as reactions. Used mainly by Discord bot creators.",
        longDescription: `OtakuGIFs was my first full stack project.
        On its first release, there was an integration with Stripe and Zoho mail for registering and receipt emails.
        Files were served by a CDN for optimal delivery speed and the API has as little overhead as possible for snappy responses.<br/><br/>
        Users could buy API Keys to use the REST API, and there were montly to yearly plans. 
        On the dashboard, users could reset their keys and see when they expire, as well as access their transaction history.<br/><br/>
        I made it free-to-use because, although it was top search on Google when searching "anime gif api" (which was one of my goals), there were not as many sales as I would like.
        So, it being free, makes it easier for me to support and I can better contribute to the Bot dev community, while the cost to run is minimal.<br/><br/>
        The goal was to learn React and its quirks but also be able to connect all those pieces together;
        authentication, payments, webhooks, content delivery and build a solid understanding of web standards.`,
        icon: "/otakugifsLogo.svg",
        technologies: ["React.js", 'TypeScript', 'SCSS', 'MongoDB', 'Fastify.js',],
        url: 'https://otakugifs.xyz',
        color: '#1761e1',
        roundIcon: false,
        dateCreated: '2020 - now',
    },
    {
        name: "Kouhai",
        type: 'Website & API',
        description: "Utilities for every day use. Includes 5 easy to use features that make life easier. Why use 5 different websites when Kouhai has a URL Shortener, file upload and editing and can take screenshots of websites for you?",
        longDescription: `Kouhai is a website that provides 5 utilities in 1 landing page. Utilities that I needed as a developer but I didn't want to go to 5 websites
        to find them. Those are a URL shortener, an audio recorder, file storage, simple image editor, website screenshoter.<br/><br/>
        All the utilies return a URL with which the user can access their resource and\\or share it online. The audio recorder uses the native MediaRecorder API, with a custom audio player.
        The image editor uses "sharp" on the backend to edit and convert image files. The utility that allows users take snapshots of any website uses "puppeteer" to emulate a browser.
        All the files are stored in and served from BunnyCDN.<br/><br/>
        The goal of this project was to get familiar with SvetelKit, and in the process I fell in love with it.
        I experimented with a lot of technologies and expanded my knowledge of the backend while also struggling
        with SvelteKit's needed, but breaking changes before v1.`,
        icon: "/kouhaiLogo.svg",
        technologies: ["SvelteKit", 'TypeScript', 'SCSS', 'MongoDB', 'BunnyCDN', 'sharp', 'puppeteer'],
        url: 'https://kouh.ai',
        color: '#a63dcf',
        roundIcon: false,
        dateCreated: '2022 - now',
    },
    {
        name: "Shiro",
        type: 'Chatbot',
        description: "Multipurpose chatbot for Discord. Full moderation and auto-moderation, fun text-based games and guild logging. Currently in 4000+ guilds.",
        longDescription: `Shiro was my first completed project that made it to the public. After countless re-writes because of Discord's biannual breaking changes,
        I still support it, because it is integrated in a lot of Discord guilds and I don't want to ruin it for them <3<br/><br/>
        As a chatbot, Shiro has text-based commands for moderation, entertainment, little games and image fetching by integrating OtakuGIFs.
        It also has logging for anything that happens in the guild, and auto-moderation to keep the chats clean!<br/><br/>
        This project started because I needed a bot with those features in my Discord server, and by having an invite link in its embeds, other guilds started using it too.`,
        icon: "/shiroLogo.png",
        technologies: ["Node.js", 'Discord.js', 'MongoDB'],
        url: null,
        color: '#e05477',
        roundIcon: true,
        dateCreated: '2018 - now',
    },
    {
        name: "Nyx",
        type: 'Chatbot',
        description: "Nyx is a Discord bot, made for, and used by the \"DayDream\" Discord guild.",
        longDescription: `Nyx is a chatbot I created as freelance project for a Discord guild. It's a private bot that takes care of the \"DayDream\" guild and it's users.<br/><br/>
        It has XP and Currency features depending on activities withing the server. Users can collect virtual currency and by spending it, they can customize their profile, 
        which is generated with canvas and sent as an image. Has gambling games such as coinflip, slots and crash, with which users can bet money and get rewards. It also has 
        a full fledged achievement system, with achievements that can be completed with actions around the guild and by using Nyx.`,
        icon: "/nyxLogo.png",
        technologies: ["Node.js", 'Discord.js', 'MongoDB', 'canvas'],
        url: null,
        color: '#6f6f6f',
        roundIcon: true,
        dateCreated: '2021 - now',
    },
    {
        name: "Kuwai",
        type: 'Chatbot',
        description: "AI Chatbot using openAI's API. Remembers conversations and has its own personality.",
        longDescription: `Kuwai was made for the Twilight Discord guild for user engagement and a way for me to get involved with AI during the hype.<br/><br/>
        It allows users to conversate with it, while it keeps conversation context for more targeted responses.
        It has a "personality" and it responds in a fun and enganging way, asking questions back to user.`,
        icon: "/kuwaiLogo.png",
        technologies: ["Node.js", 'Discord.js', 'MongoDB'],
        url: null,
        color: '#dddafe',
        roundIcon: true,
        dateCreated: '2023',
    },
    {
        name: "UsefulScripts",
        type: 'Bash Scripts',
        description: "Scripts that take care of installing and configuring basic utilities for Linux distributions such as \"oh-my-zsh\", \"MongoDB\" and monitoring tools.",
        longDescription: ``,
        icon: "/bashscriptsLogo.jpg",
        technologies: ["Bash"],
        url: null,
        color: '#f4c224',
        roundIcon: true,
        dateCreated: '2020 - 2022',
    },
];