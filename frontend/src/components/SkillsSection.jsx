import React from 'react'
import CustomHeading from './custom/custom-heading'
import ImageChip from './custom/image-chip'

export default function SkillsSection() {
    const data = [
        ['/skills/react.png', 'React'],
        ['/skills/javascript.png', 'Javascript'],
        ['/skills/python.png', 'Python'],
        ['/skills/tailwind.png', 'Tailwind CSS'],
        ['/skills/nodejs.png', 'Node.js'],
        ['/skills/express.png', 'Express.js'],
        ['/skills/mongodb.png', 'MongoDB'],
        ['/skills/sql.png', 'SQL'],
        ['/skills/mysql.png', 'MySQL'],
        ['/skills/figma.png', 'Figma'],
        ['/skills/html.png', 'HTML'],
        ['/skills/css.png', 'CSS'],
        ['/skills/npm.png', 'NPM'],
        ['/skills/git.png', 'Git'],
        ['/skills/github.png', 'GitHub'],
        ['/skills/resend.png', 'Resend'],
        ['/skills/nodemailer.png', 'Nodemailer'],
        ['/skills/zod.png', 'Zod'],
        ['/skills/zustand.png', 'Zustand'],
        ['/skills/shadcn.png', 'Shad CN'],
        ['/skills/magicui.png', 'Magic UI'],
        ['/skills/lovable.png', 'Lovable'],
        ['/skills/vscode.png', 'VS Code'],
        ['/skills/cursor.png', 'Cursor'],
        ['/skills/v0.png', 'v0'],
    ];
    return (
        <>
            <div className='shadow-[inset_0px_0px_15px_7px_#00000024] dark:shadow-[inset_0px_0px_15px_7px_#00000050] flex flex-col space-y-4 text-start p-12 border-y border-neutral-200 dark:border-neutral-700'>
                {/* Technologies I use  */}
                <CustomHeading className={"text-xl font-medium tracking-wide"} heading_text="Technologies I use" />
                <div className='text-neutral-600 max-w-xl dark:text-neutral-400'>
                    Over the years, I have worked with a variety of technologies.
                    Here are some of the technologies I have experience with.
                </div>
                <div>
                    {data.map((item, index) => (
                        <ImageChip
                            key={index}
                            image_src={item[0]}
                            fallback_src="/favicon.svg"
                            image_alt={item[1]}
                            image_title={item[1]}
                        />
                    ))}
                </div>
                <div className='text-center cursor-pointer hover:scale-105 transition-all text-neutral-600 dark:text-neutral-400'>
                    and many more ...
                </div>
            </div>
        </>
    );
};