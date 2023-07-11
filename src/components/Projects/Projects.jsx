import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabItem from '../TabItem/TabItem';
import "./Projects.css"
import classNames from 'classnames';


const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/projects.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    const mern = projects.filter(project => project.category === "MERN");
    const react = projects.filter(project => project.category === "REACT");
    const html = projects.filter(project => project.category === "HTML/CSS");

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='max-w-7xl mx-auto px-2 lg:px-0'>
            <SectionTitle
                title={"Portfolio"}
                subTitle={"My Work"}
            ></SectionTitle>
            <div className='mt-20'>
                <Tabs selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
                    <TabList className="tab-list">
                        <div className='text-center'>
                            <Tab
                                className={classNames("tab", { 'tab-active': activeTab === 0 })}>  ALL
                            </Tab>
                            <Tab
                                className={classNames("tab", { 'tab-active': activeTab === 1 })}>MERN
                            </Tab>
                            <Tab
                                className={classNames("tab", { 'tab-active': activeTab === 2 })}>REACT
                            </Tab>
                            <Tab
                                className={classNames("tab", { 'tab-active': activeTab === 3 })}
                            >HTML/CSS
                            </Tab>
                        </div>
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
                            {
                                projects.map(project => <TabItem
                                    key={project._id}
                                    project={project}
                                ></TabItem>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
                            {
                                mern.map(project => <TabItem
                                    key={project._id}
                                    project={project}
                                ></TabItem>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
                            {
                                react.map(project => <TabItem
                                    key={project._id}
                                    project={project}
                                ></TabItem>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
                            {
                                html.map(project => <TabItem
                                    key={project._id}
                                    project={project}
                                ></TabItem>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Projects;
