import React from "react";
import adsNetflix from "../../../assets/images/example/ads/ads-netflix.jpg";
import adsX from "../../../assets/images/example/ads/ads-x.jpg";

const Sponsors: React.FC = () => {
    const adsList = [
        {
            id: "4b5c5874-f67c-4344-836f-956e63c89d45",
            title: "Unlimited Entertainment Awaits!",
            description: "Stream your favorite movies, shows, and originals anytime, anywhere—only on Netflix.",
            link: "https://www.netflix.com/",
            image: adsNetflix,
            image_alt: "netflix"
        },
        {
            id: "a6e4ba04-655b-4513-97f4-15d2eddea117",
            title: "Your World, Your Voice!",
            description: "Join the conversation, share your moments, and discover what’s happening in real-time on X.",
            link: "https://x.com/",
            image: adsX,
            image_alt: "X"
        }
    ]

    return (
        <div>
            <h3 className="font-semibold">Sponsor</h3>
            <div className="flex flex-col gap-2">
                {adsList.map(ads => (
                    <a className="hover:bg-gray-200 duration-300 p-2" target="_blank"
                       href={`${ads.link}?lmId=${ads.id}`} key={ads.id}>
                        <img src={ads.image} alt={ads.image_alt}
                             className="max-h-96 w-full object-cover object-center"/>
                        <div>
                                <span className="font-semibold">
                                    {ads.title}
                                </span>
                            <p>
                                {ads.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Sponsors
