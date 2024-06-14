import { marketingConfigType } from "@/types";

export const marketingConfig : marketingConfigType = {
    mainNav:[

        {
            title:"features",
            href:"#features",
            disabled:false
        },

        {
            title:"blog",
            href:"/blog",
            disabled:false
        },

        {
            title:"documentation",
            href:"/documentation",
            disabled:true
        }
    ]
}


export type CardConfigItem = {
    logo: string;
    title: string;
    description: string;
};

export const cardConfig:CardConfigItem[] = [
    {
        logo: "/nextjs.svg",
        title:"Next.js 14",
        description:"App dir, Routing, Layouts, Loading UI and API routes."
    },
    {
        logo: "/react.svg",
        title:"React js ^18",
        description:"Server and Client Components. Use hooks."
    },
    {
        logo: "/mongodb.svg",
        title:"Mongodb",
        description:"Using Mongoose and deployed on mongodb atlas"
    },
    {
        logo: "/tailwind.svg",
        title:"Components",
        description:"UI components built using Shadcn UI and styled with Tailwind CSS."
    },
    {
        logo: "/shield.svg",
        title:"Authentication",
        description:"Authentication using NextAuth.js and middlewares."
    },
    {
        logo: "/Subscriptions.svg",
        title:"Stripe",
        description:"Free and paid subscriptions using Stripe."
    }
]