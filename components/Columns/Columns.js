import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "Ronit Yadav",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Unboxx Business community rocks! It's my go-to for support, ideas, and motivation. Being part of this network has elevated my business journey."
    },
    {
        id: uuid(),
        title: "Asif Khan",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Unboxx Business is more than a community; it's a family of entrepreneurs. The shared wisdom and encouragement here are priceless. Joining was the best decision for my business."
    },
    {
        id: uuid(),
        title: "Mohit Yadav",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Unboxx Business community is my daily dose of inspiration. The quick tips and friendly vibes make it a must for any entrepreneur. Grateful to be a part of it!"
    },
    {
        id: uuid(),
        title: "Kumari Rita",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Unboxx Business community is a gem. It's where I find solutions, share successes,and feel understood.here is unmatched, making my business path much brighter"
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
