import React from "react";
import Image from "next/image";
import "../globals.css"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Snergal.live',
    description: 'Snergal.live is a project that aims to provide an underdog streaming platform that is not controlled by big tech, and uses Ethereum.',
  }

export default function About() {
    return (
        <>
        <div className="container mx-auto bg-base-300 rounded-lg shadow-lg">
            <div style={{textAlign: "center"}}>
                <article className="prose">
                    <h1>About Me</h1>
                    <br></br>
                </article>
            </div>
            <article className="prose" >
                <h4>Snergal.live is a project made by <a style={{color: "#7289da"}}>James the Sergal#9369 (On Discord)</a></h4>
                <Image className="rounded border-solid border-4 border-[#7289da] shadow-lg" src="/sergal.png" alt="Snergal" width={128} height={128} />
                <p>Yes, I am one person developing this project. It has been on my mind for quite a while, and I wanted to give it a shot.</p>
                <p>My ultimate goal is to make a streaming platform that is modern, easy to use, and integrated with Etherum to provide a true for the people, by the people streaming service that is not controlled by either Amazon or Google.</p>
                <p>Plus, it strays away from big banks and payment processors, meaning that the whole service is resiliant to censorship and deplatforming all while providing oppertunities for content creators to make a living doing what they love.</p>
                <h2>Technology behind the site</h2>
                <p>I am currently using <b>Next.js</b> to serve this webpage, and am using several open source packages to make this site a reality.</p>
                <p>Other technologies include:</p>
                <ul>
                    <li><b>React</b> - For the frontend</li>
                    <li><b>Node.js</b> - For the backend</li>
                    <li><b>react-player</b> - Player library</li>
                    <li><b>Tailwindcss/DaisyUI</b> - Styling and CSS helper</li>
                </ul>
                <p>You can find the frontend and backend (Also written by me) on my <a href="https://github.com/JamesTheSergal">GitHub</a>. </p>
                <h2>Cloud-Hosting</h2>
                <p>I am currently using <b>Hetzner Online GmbH</b> to host the front end, and backend. They offer extremely affordable, high-performance servers as well as a world class network so that I have plenty of bandwidth.</p>
                <p>The main thing I am concerned about is bandwidth to compete with the likes of Amazon. Hetzner has 10Gbe links to each of their VPS services, so there&#39;s no problem there.</p>
                <p>I also feel a bit more secure with this company since they aren&#39;t US based, though have data-centers in the US.</p>
                <h4>Architecture</h4>
                <p>Currently, the platform relies on <b>Nginx</b>, and their HLS stream module with <b>FFmpeg</b> transcoding each stream to provide video resolutions to as many devices as possible. This also helps me regulate outboud traffic, since Hetzner does charge per TB.</p>
                <p>Each stream is transcoded to 1080p, 720p, and 480p. This is to ensure that the stream is viewable on as many devices as possible, and as many data rates as possible.</p>
                <p>With these different qualities I have to support, I have split the class of servers up as well:</p>
                <ul>
                    <li><b>Frontend</b> - These servers are scaled infreqently with load, as they don&#39;t transfer too much data. They can be scaled easily once a Hetzner load balancer is applied.</li>
                    <li><b>Transcoding</b> - These servers are scaled with load, as they are the ones that are doing the transcoding. They are also the ones that are doing the most work, so they are scaled with load. Lower quality video streams need the least servers, and there will always be a large amount of servers running to process HD video. It will be the main cost of this service.</li>
                    <li><b>Database</b> - These servers will not scale often, and I don&#39;t have a solid grasp on what the work load will look like quite yet. They use MySQL, and a Python based API.</li>
                </ul>
                <h2>Future Plans</h2>
                <p>As of right now, I am working on the frontend and backend. I am also working on the transcoding servers, and the database.</p>
                <p>I have yet to finalize all of the plans for the site, including how to handle Etherum transfers/purchases. However, I suppose later on it will be integrated into the Python based API.</p>
                <p>The main thing that I want for this site, is for the user to keep control of their wallet. Hashed private keys will be stored in our database, only to be unhashed when the user inputs their password so that the user remains in complete control of their funds.</p>
                <p>Here are the main ideas of the implementations of this system:</p>
                <ul>
                    <li>Users can deposit Etherum into their site generated wallet, and can withdraw it at any time.</li>
                    <li>Only upon password authentication, Users can purchase in-site plans and subscriptions.</li>
                    <li>A main subscription directly to the website. This subscription is pay as you go. Not only does it fund the site, it funds streamers as you watch them.</li>
                    <li>Direct streamer subscriptions/tipping. Shared between the site, and the streamer. I will always make sure the share is less than any other stream site.</li>
                    <li>Direct tipping to the site. This is to help fund the site, and keep it running.</li>
                    <li>Stream betting. Like twitch, bet Ether on polls. The winners take back their money, and win the losers pot. Whoever bet the most, will win the highest ratio of the loser pot.</li>
                    <li>More ideas in the future.</li>
                </ul>
                <h2>Read this far?</h2>
                <p>Thank you for reading this far. I hope you are as excited as I am to see this project come to life.</p>
                <p>If you would like to contibute in any way, please feel free to message me.</p>
            </article>
        </div>
        </>
    )
}