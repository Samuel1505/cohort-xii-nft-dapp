import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAppContext } from "./contexts/appContext";
import NFTCard from "./components/NFTCard";
import useMintToken from "./hooks/useMintToken";
import { Icon } from "@iconify/react/dist/iconify.js";

function App() {
  const { nextTokenId, tokenMetaData, mintPrice } = useAppContext();
  const tokenMetaDataArray = Array.from(tokenMetaData.values());
  const mintToken = useMintToken();

  return (
    <div className="min-h-screen bg-card-bg flex flex-col">
      {/* <Header /> */}
      
      <main className="flex-grow p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">NFT dApp</h1>
          <p className="text-text-secondary font-medium mt-2 max-w-2xl mx-auto">
            Mint and manage your NFTs on the blockchain with our secure and user-friendly platform
          </p>
        </div>
        
        {/* Feature Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-secondary rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="h-2 bg-primary"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Icon icon="ri:add-circle-line" className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-primary">Mint NFT</h2>
              </div>
              <p className="text-text-secondary">
                Create and mint your own NFTs with just a few clicks. Make your digital assets available for sale on our marketplace.
              </p>
              <button className="mt-4 btn btn-primary flex items-center">
                <span>Start Minting</span>
                <Icon icon="ri:arrow-right-line" className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="bg-secondary rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="h-2 bg-tertiary"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-tertiary/10 p-3 rounded-lg mr-4">
                  <Icon icon="ri:gallery-line" className="w-6 h-6 text-tertiary" />
                </div>
                <h2 className="text-xl font-bold text-primary">Manage NFTs</h2>
              </div>
              <p className="text-text-secondary">
                View and manage all your minted NFTs in one place. Track their performance and update their details.
              </p>
              <button className="mt-4 btn btn-secondary flex items-center">
                <span>View Collection</span>
                <Icon icon="ri:arrow-right-line" className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="bg-secondary rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="h-2 bg-accent"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-accent/10 p-3 rounded-lg mr-4">
                  <Icon icon="ri:store-2-line" className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-xl font-bold text-primary">Marketplace</h2>
              </div>
              <p className="text-text-secondary">
                Buy and sell NFTs on our secure marketplace. Discover unique digital assets from creators around the world.
              </p>
              <button className="mt-4 btn btn-secondary flex items-center">
                <span>Explore Market</span>
                <Icon icon="ri:arrow-right-line" className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Collection Title */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">Featured Collection</h2>
          <div className="flex space-x-2">
            <button className="btn btn-secondary">
              <Icon icon="ri:filter-3-line" className="w-5 h-5" />
              <span className="ml-2">Filter</span>
            </button>
            <button className="btn btn-secondary">
              <Icon icon="ri:sort-desc" className="w-5 h-5" />
              <span className="ml-2">Sort</span>
            </button>
          </div>
        </div>
        
        {/* NFT Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tokenMetaDataArray.map((token, i) => (
            <NFTCard
              key={token.name.split(" ").join("")}
              metadata={token}
              mintPrice={mintPrice}
              tokenId={i}
              nextTokenId={nextTokenId}
              mintNFT={mintToken}
            />
          ))}
        </div>
        
        {/* Empty state if no NFTs */}
        {tokenMetaDataArray.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="bg-secondary/50 p-4 rounded-full mb-4">
              <Icon icon="ri:image-2-line" className="w-12 h-12 text-primary/50" />
            </div>
            <h3 className="text-xl font-medium text-primary mb-2">No NFTs Available</h3>
            <p className="text-text-secondary max-w-md">
              There are currently no NFTs in the collection. Connect your wallet and start minting!
            </p>
            <button className="mt-6 btn btn-primary">
              Connect Wallet
            </button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;