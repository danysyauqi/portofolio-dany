'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>S1 	Universitas Pendidikan Indonesia 	2021 - Present </li>
                <li>	Mekatronika dan Kecerdasan Buatan - ( 104 SKS )</li>
            </ul>
        ),
    },
    {
        title: "Activity",
        id: "activity",
        content:(
            <ul className='list-disc pl-2'>
                <li>Google Development Student Club UPI Nov (2023 - Present)</li>
                <li>HIMATRONIKA-AI: Staff Interest & Talent (Jan 2023 - Nov 2023)</li>
            </ul>
        ),
    },
    {
        title: "Certification",
        id: "certification",
        content:(
            <ul className='list-disc pl-2'>
                <li>Pandas Python - Kaggle</li>
                <li>Python Data Visualization - Kaggle</li>
                <li>PLC Siemens Simatic S7-1500 TÜV Rheinland Certified Qualification</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("education");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image 
                    src="/images/about me.png"
                    alt='about me' 
                    width={500} 
                    height={500}
                />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I am a college student, majoring in mechatronics and artificial intelligence, 
                        during my time as a college student I was active in organizations and was able 
                        to work together in a team. Looking for an internship opportunity to develop 
                        practical skills in IoT, Machine Learning, Data Engineer.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        {TAB_DATA.map(({ title, id }) => (
                            <TabButton 
                                key={id}
                                selectTab={() => handleTabChange(id)} 
                                active={tab === id}
                            >
                                {title}
                            </TabButton>
                        ))}
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
