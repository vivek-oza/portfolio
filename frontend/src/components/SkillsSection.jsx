import React, { useState } from 'react';
import CustomHeading from './custom/custom-heading';
import ImageChip from './custom/image-chip';

export default function SkillsSection() {
    const [showAll, setShowAll] = useState(false);

    const data = [
        ['/skills/mongodb.png', 'MongoDB'],
        ['/skills/express.png', 'Express.js'],
        ['/skills/react.png', 'React'],
        ['/skills/nodejs.png', 'Node.js'],
        ['/skills/javascript.png', 'Javascript'],
        ['/skills/tailwind.png', 'Tailwind CSS'],
        ['/skills/python.png', 'Python'],
        ['/skills/sql.png', 'SQL'],
        ['/skills/mysql.png', 'MySQL'],
        ['/skills/figma.png', 'Figma'],
        ['/skills/html.png', 'HTML'],
        ['/skills/css.png', 'CSS'],
        ['/skills/npm.png', 'NPM'],
        ['/skills/zod.png', 'Zod'],
        ['/skills/zustand.png', 'Zustand'],
        ['/skills/git.png', 'Git'],
        ['/skills/github.png', 'GitHub'],
        ['/skills/resend.png', 'Resend'],
        ['/skills/nodemailer.png', 'Nodemailer'],
        ['/skills/lovable.png', 'Lovable'],
        ['/skills/cursor.png', 'Cursor'],
        ['/skills/vscode.png', 'VS Code'],
        ['/skills/v0.png', 'v0'],
        ['/skills/shadcn.png', 'Shad CN'],
        ['/skills/magicui.png', 'Magic UI'],
    ];

    const visibleSkills = showAll ? data : data.slice(0, 5);
    const hasMore = data.length > 5;

    return (
        <div className='shadow-[inset_0px_0px_15px_7px_#00000024] dark:shadow-[inset_0px_0px_15px_7px_#00000050] flex flex-col space-y-4 text-start p-12 border-y border-neutral-200 dark:border-neutral-700'>
            <CustomHeading className={"text-xl font-medium tracking-wide"} heading_text="Technologies I use" />
            <div className='text-neutral-600 max-w-xl dark:text-neutral-400'>
                Over the years, I have worked with a variety of technologies.
                Here are some of the technologies I have experience with.
            </div>
            <div className="flex flex-wrap gap-2">
                {visibleSkills.map((item, index) => (
                    <ImageChip
                        key={index}
                        image_src={item[0]}
                        fallback_src="/favicon.svg"
                        image_alt={item[1]}
                        image_title={item[1]}
                    />
                ))}
            </div>
            {hasMore && (
                <div
                    onClick={() => setShowAll(!showAll)}
                    className='text-center cursor-pointer hover:scale-105 transition-all text-neutral-600 dark:text-neutral-400'
                >
                    {showAll ? 'Show Less' : `and ${data.length - 5} more...`}
                </div>
            )}
        </div>
    );
};