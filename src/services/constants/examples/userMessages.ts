export interface ChatMessage {
    id: string; // Unique identifier for the message
    isOwner: boolean; // True if the message belongs to the current user
    content: string; // The message text or content
    timestamp: Date; // Timestamp for when the message was sent
}

export const chatMessages: ChatMessage[] = [
    {
        id: "1",
        isOwner: true,
        content: "Hey, how have you been? It's been a while since we last caught up. Hope everything is going well on your end.",
        timestamp: new Date("2025-01-04T15:12:00"),
    },
    {
        id: "2",
        isOwner: false,
        content: "Hey! Yeah, it has been a while. I've been doing alright, just busy with work and a few personal projects. How about you?",
        timestamp: new Date("2025-01-04T15:15:00"),
    },
    {
        id: "3",
        isOwner: true,
        content: "I've been good, thanks! Actually, I've been working on a social media app. It's something I've wanted to build for years.",
        timestamp: new Date("2025-01-04T15:17:00"),
    },
    {
        id: "4",
        isOwner: true,
        content: "The app is focused on connecting people based on shared hobbies and interests, and I think it could really bring people closer together.",
        timestamp: new Date("2025-01-04T15:18:00"),
    },
    {
        id: "5",
        isOwner: false,
        content: "That sounds incredible! Social media these days could use more genuine connections. What's been the most challenging part so far?",
        timestamp: new Date("2025-01-04T15:20:00"),
    },
    {
        id: "6",
        isOwner: true,
        content: "Honestly, balancing the UI design with the backend logic has been tough. I want it to look sleek but also handle large user data efficiently.",
        timestamp: new Date("2025-01-04T15:23:00"),
    },
    {
        id: "7",
        isOwner: true,
        content: "I'm also trying to make it scalable so it can support a lot of users if it grows as I hope it will.",
        timestamp: new Date("2025-01-04T15:24:00"),
    },
    {
        id: "8",
        isOwner: false,
        content: "Scalability is definitely important. Have you considered using cloud services for hosting and scaling?",
        timestamp: new Date("2025-01-04T15:26:00"),
    },
    {
        id: "9",
        isOwner: false,
        content: "Platforms like AWS or Azure could make your life a lot easier when it comes to managing growth and ensuring uptime.",
        timestamp: new Date("2025-01-04T15:27:00"),
    },
    {
        id: "10",
        isOwner: true,
        content: "Yes, I'm leaning towards AWS. Their services seem comprehensive, and I like the flexibility they offer. I’m still exploring the options, though.",
        timestamp: new Date("2025-01-04T15:30:00"),
    },
    {
        id: "11",
        isOwner: false,
        content: "Makes sense. If you ever need help figuring out the setup or optimizing the infrastructure, let me know. I’ve worked on a few cloud-based projects.",
        timestamp: new Date("2025-01-04T15:32:00"),
    },
    {
        id: "12",
        isOwner: true,
        content: "Thanks, I might take you up on that offer! By the way, do you have any tips for getting user feedback during the early stages?",
        timestamp: new Date("2025-01-04T15:35:00"),
    },
    {
        id: "13",
        isOwner: false,
        content: "Absolutely. You could start by sharing it with close friends or a small community that fits your target audience. Gather their thoughts and iterate based on that.",
        timestamp: new Date("2025-01-04T15:37:00"),
    },
    {
        id: "14",
        isOwner: false,
        content: "If you're open to it, launching a beta version for a limited group can also give you valuable insights. Just make sure to have a way to track their feedback efficiently.",
        timestamp: new Date("2025-01-04T15:39:00"),
    },
    {
        id: "15",
        isOwner: true,
        content: "That’s a great idea. A beta launch sounds manageable, and I could use a feedback form or integrate an in-app feedback feature.",
        timestamp: new Date("2025-01-04T15:42:00"),
    },
    {
        id: "16",
        isOwner: false,
        content: "Exactly. Plus, involving users early can create a sense of ownership for them, which might lead to better retention down the line.",
        timestamp: new Date("2025-01-04T15:45:00"),
    },
    {
        id: "17",
        isOwner: true,
        content: "Good point. I hadn’t thought about the retention angle. By the way, what’s new with you? Any exciting projects or updates?",
        timestamp: new Date("2025-01-04T15:47:00"),
    },
    {
        id: "18",
        isOwner: false,
        content: "Nothing too big at the moment, but I’ve been dabbling in game development as a hobby. It’s been a fun way to explore storytelling and design.",
        timestamp: new Date("2025-01-04T15:50:00"),
    },
    {
        id: "19",
        isOwner: false,
        content: "It’s challenging but super rewarding when you see things come together. Maybe one day I’ll share it with the world!",
        timestamp: new Date("2025-01-04T15:52:00"),
    },
    {
        id: "20",
        isOwner: true,
        content: "That’s amazing! I’d love to check it out when you’re ready to share. Game development sounds like a fascinating field to explore.",
        timestamp: new Date("2025-01-04T15:55:00"),
    }
];
