import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

const linkClasses = "font-medium text-primary-600 px-1 py-0.5 rounded transition-all duration-300 ease-in-out hover:bg-primary-100 dark:hover:bg-primary-800/30 hover:scale-105";

const ProfessionalExperience = () => {
    return (
        <Card className="w-full h-full">
            <CardHeader className="flex gap-3">
                <h2 className="text-xl font-bold">Professional Experience</h2>
            </CardHeader>
            <Divider />
            <CardBody>
                <ul className="list-disc pl-5 mb-4">
                    <li>
                        <strong>Visiting Researcher</strong> - 
                        <a 
                            href="https://musedlab.org/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={linkClasses}
                        >
                            Music Experience Design (MusED) Lab
                        </a>at NYU Shanghai (Jun 2024 - Aug 2024)
                    </li>
                    <li>
                        <strong>Software Engineer Intern</strong> - 
                        <a 
                            href="https://www.soundbug.com/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={linkClasses}
                        >
                            SoundBug
                        </a>(May 2023 - Aug 2023)
                    </li>
                    <li>
                        <strong>R&D Intern</strong> - 
                        <a 
                            href="https://microport.com/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={linkClasses}
                        >
                            MicroPort NaviBot
                        </a>(May 2022 - Aug 2022)
                    </li>
                    <li>
                        <strong>Student Researcher</strong> - 
                        <a 
                            href="https://cicabeq.bnu.edu.cn/fzx/index.htm" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={linkClasses}
                        >
                            China Basic Education Quality Monitoring Collaborative Innovation Center
                        </a>(Sep 2020 - Aug 2024)
                    </li>
                    <li>
                        <strong>Composer and Lyricist</strong>
                        <div className="mt-1">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                • <a href="https://www.smph.cn/" target="_blank" rel="noopener noreferrer" className={linkClasses}>
                                    Shanghai Music Publishing House
                                </a>(Sep 2022 - May 2024)
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                • <a href="https://zjeph.com" target="_blank" rel="noopener noreferrer" className={linkClasses}>
                                    Zhejiang Education Publishing House
                                </a>(Sep 2020 - Aug 2024)
                            </p>
                        </div>
                    </li>
                    <li>
                        <strong>Freelance Translator</strong>
                        <div className="mt-1">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                • <a href="http://www.seph.com.cn/" target="_blank" rel="noopener noreferrer" className={linkClasses}>
                                    Shanghai Educational Publishing House
                                </a>(Apr 2023 - Present)
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                • <a href="https://shcmpress.com/" target="_blank" rel="noopener noreferrer" className={linkClasses}>
                                    Shanghai Conservatory of Music Press
                                </a>(Jan 2018 - Jun 2018)
                            </p>
                        </div>
                    </li>
                </ul>
            </CardBody>
        </Card>
    );
};

export default ProfessionalExperience;