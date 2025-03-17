import { Icon } from "@iconify/react/dist/iconify.js";
import { formatEther } from "ethers";
import React, { useState } from "react";
import { truncateString } from "../../utils";

const NFTCard = ({ metadata, mintPrice, tokenId, nextTokenId, mintNFT }) => {
    const [isHovering, setIsHovering] = useState(false);
    const isOwned = Number(nextTokenId) !== tokenId;

    return (
        <div 
            className="w-full rounded-xl bg-secondary shadow-md hover:shadow-xl transition-all duration-300 border border-tertiary overflow-hidden transform hover:-translate-y-1"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Image container with hover effect */}
            <div className="relative overflow-hidden">
                <img
                    src={metadata.image}
                    alt={`${metadata.name} image`}
                    className="w-full h-64 object-cover transition-transform duration-700 ease-in-out"
                    style={{ transform: isHovering ? 'scale(1.05)' : 'scale(1)' }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent transition-opacity duration-300 flex items-end justify-center p-4 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
                    {!isOwned && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                mintNFT();
                            }}
                            className="mb-4 px-6 py-2 bg-accent text-primary font-bold rounded-md hover:bg-accent/90 transition-colors duration-200"
                        >
                            Quick Mint
                        </button>
                    )}
                </div>
            </div>

            {/* Content container */}
            <div className="p-4 space-y-3">
                {/* Title and description */}
                <div>
                    <h1 className="font-bold text-lg text-text-primary">{metadata.name}</h1>
                    <p className="text-sm text-text-secondary mt-1">
                        {truncateString(metadata.description, 100)}
                    </p>
                </div>

                {/* NFT details */}
                <div className="flex justify-between items-center pt-2 border-t border-tertiary/30">
                    <div className="flex gap-2 items-center text-text-secondary">
                        <Icon icon="ri:file-list-3-line" className="w-5 h-5" />
                        <span className="text-sm">{metadata.attributes.length} Attributes</span>
                    </div>

                    <div className="flex gap-2 items-center text-accent font-medium">
                        <Icon icon="ri:eth-line" className="w-5 h-5" />
                        <span>{`${formatEther(mintPrice)} ETH`}</span>
                    </div>
                </div>

                {/* Action button */}
                {/* <button
                    disabled={isOwned}
                    onClick={mintNFT}
                    className={`w-full p-3 rounded-md text-secondary font-bold transition-all duration-200 ${
                        isOwned 
                            ? "bg-gray-500 cursor-not-allowed" 
                            : "bg-primary hover:bg-primary-light shadow-sm hover:shadow-md"
                    }`}
                >
                    {isOwned ? "Owned" : "Mint NFT"}
                </button> */}

                <button
                disabled={Number(nextTokenId) !== tokenId}
                onClick={mintNFT}
                className="w-full p-4 bg-primary/80 rounded-md text-secondary font-bold disabled:bg-gray-500"
            >
                {Number(nextTokenId) <= tokenId ? "Mint NFT" : "Owned"}
            </button>
            </div>
        </div>
    );
};

export default NFTCard;