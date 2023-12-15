import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "Ronit Yadav",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "The Web Design Agency course was a game-changer for me. The certification and NextSalesman AI trial catapulted my agency's success. Ready to launch hassle-free and earn passive income!"
    },
    {
        id: uuid(),
        title: "Asif Khan",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "This platform's certification opened global doors for my freelancing career. The NextSalesman AI trial is a must-try for freelancers – it added a professional edge to my work"
    },
    {
        id: uuid(),
        title: "Mohit Yadav",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "The course's certification gave my agency the credibility it needed. NextSalesman AI trial streamlined my processes, making my entrepreneurial journey seamless. Highly recommended!"
    },
    {
        id: uuid(),
        title: "Kumari Rita",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Thanks to the NextSalesman AI trial, launching my agency was hassle-free. Now, I'm earning passive income effortlessly. A fantastic platform for those serious about online success"
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    <Icon icon={item.icon} className="mb-4 w-10 h-10 my-2" />
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                    <o className="flex">
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                    </o>
                </div>
            ))}
        </SectionContainer>
    );
};
