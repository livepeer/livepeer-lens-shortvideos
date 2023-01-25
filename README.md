
## Decentralized TikTok Clone w/ Livepeer & Lens



A mobile application built with react native and Expo using Lens API and Livepeer. 

> This is just a demo application. 

## Getting Started

To get this application up and and running on your local machine follow these simple steps.

### Prerequisites

You need to have Node.js, NPM and Expo installed on your computer, before running this project.

> If you would like to run the app on iOS simulator, you would also need to have Xcode installed

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/livepeer/livepeer-lens-shortvideos
   ```
2. Install NPM packages

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```
3. Signup for an account at livepeer.studio, create an API key and replace `LIVEPEER_STUDIO_API_KEY` with your api key in `app.js` . 

4. Run the app
   ```sh
   npm start
   ```


---

[Would you like to join the workshop?](https://livepeer.typeform.com/web3workshops)

Do you have ideas to contribute to this guide? [Let us know](https://livepeer.typeform.com/web3guide)!

---
**What is a short-form video social app?**

The most known short-form video social app is TikTok, other apps add short-form video modules to existing apps like YouTube Shorts, Pinterest Video Pins, and [Lenstube Bytes](https://lenstube.xyz/bytes/0x8b61-0x51). These platforms provide content creators the opportunity to entertain, educate, and inspire. Many engage with their audience solely on the main platform, other creators use short-form video to capture an audience and lead them to content on other platforms.

**Why build a short-form video social app?**

[Over 1 billion minutes of video](https://techjury.net/blog/tiktok-statistics/) are viewed each day on TikTok. Video consumption has become part of everyday life for billions of people, it is only a matter of time before there is a web3 disrupter.
### Content

**What is video streaming?**

To stream video requires that video files are uploaded, transcoded (processed to optimally play for viewers on all bandwidths and device types), and played back (called via a user's device to playback on a screen.) Without these critical components, video buffering leads to a poor user experience and churn.

**What choices are there to consider when building your app?**

- *Type of content*. Many social apps support content of all types ranging from travel, crafting, makeup tutorials, news, documentaries. While we often experience a platform with many types of content surfaced based on algorithms, there is an opportunity in web3 to create community-specific content - like an app for gamers, cooking enthusiasts, or home renovation content.
- *Length of content.* Thereâ€™s no right or wrong amount of time for how long a video can be, it depends on the type of app being created. Over time, [TikTok increased the length of videos](https://techcrunch.com/2022/02/28/tiktok-expands-max-video-length-to-10-minutes-up-from-3-minutes/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAABbqpZDvs3B9H83lajwE2qXnRZTgUOazfucWGOE57H-aU0CdKj21NdExI-qQigJhO5uaSLHm3agse5uGHZyGty9gzEvq06aJsyAeTimEJLzDM4dorMeSnJDzJQkpBPi6kR5jP87SZo2RvSF6NwRKJORwP7ROWpnFGOIgF3mm2_po) from 15 seconds to 10 minutes.
- *Content permanence.* This describes how long the content is available for a viewer. It can disappear after being seen once, be available for a specific amount of time, or be present on the app until the user removes it. If content is deleted from a web3 app, it may still be stored permanently on the decentralized user profile depending on which protocol is used.
- *Editing*. Common in many social apps is the ability to edit videos - trimming, adding filters, overlaying music and animations.
- *Interactive elements*. A fun way to engage audiences in content is to include polls and surveys. These tools help creators and audiences connect.
- *Storage*. For video to be streamed, it needs to be stored. Storage includes the ability to archive, delete, stream, download, and backup data.

### **Tools for Building**

**Video Streaming**

[Livepeer](https://livepeer.org/primer) is a web3 project that was founded in 2017 and transcodes millions of minutes of video each week. Build with the Livepeer SDK or API to access decentralized video transcoding on the Livepeer network, use the Livepeer Player for optimal playback on mobile and desktop.

- [Livepeer SDK](https://docs.livepeer.org/reference/livepeer-js)
- [Livepeer API](https://docs.livepeer.org/reference/api)
- [Livepeer Player](https://docs.livepeer.org/reference/livepeer-js/Player)

**Editing Software**

Content creators generally expect video editing capabilities inside of social apps and there are many available. Here are a few to check out: [ShotStack](https://shotstack.io/docs/guide/), [Banuba](https://www.banuba.com/video-editor-sdk), [Img.ly](https://img.ly/docs/vesdk/).

**Interactive Elements**

Providing the ability to add polls can be a fun element for creators to engage their audience. This can be built, but there are existing tools that can be evaluated like [pollsapi.com](http://pollsapi.com/).

**Storage**

- [Arweave](https://www.arweave.org/) is a decentralized storage protocol focused on permanence. Content is uploaded to the network with a one-time fee and guaranteed to be available for 200 years. The simplest way to upload data into Arweave is to use a service like Bundlr that iss built on top of Arweave and simplifies the developer experience.
    - [Arweave Docs](https://www.arweave.org/build)
    - [Bundlr Docs](https://docs.bundlr.network/)
- [IPFS](https://ipfs.tech/) is a decentralized storage protocol that assigns a unique fingerprint to all data uploaded to the network based on the data's content. Nodes in the network can cache the data, but data is not guaranteed to be available unless it is pinned to a node. Services like Pinara, web3.storage, and Lighthouse abstract away the complexity of managing and pinning data in the IPFS ecosystem.
    - [IPFS Docs](https://docs.ipfs.tech/)
    - [Pinata Docs](https://docs.pinata.cloud/)
    - [web3.storage Docs](https://web3.storage/docs/)
    - [Lighthouse Docs](https://www.lighthouse.storage/documentation)
## Social Primitives

The key to building a great social app is to provide a unique and sticky user experience. What features will make them come back each day? What features support them in connecting with others? Below are some suggestions of different social building blocks for your app.

### **Tools for Building**

- [Lens](https://www.lens.xyz/) is a social protocol that provides many of the social primitives required to build a short-form video app. These include:
    - **Create a profile.** The [Profile NFT](https://docs.lens.xyz/docs/profile) is the main object in the Lens Protocol. What differentiates the Lens Profile NFT from other on-chain identities is the ability to post Publications to it. The Profile NFT contains the history of all profile activity.
    - **Followers.** The [FollowModule](https://docs.lens.xyz/docs/follow) enables profiles to gain followers.
    - **Engagement.** [Publications](https://docs.lens.xyz/docs/publication), [mirrors](https://docs.lens.xyz/docs/mirror), and [comments](https://docs.lens.xyz/docs/comment) fundamental to post and engage with content.
- [XTMP](https://xmtp.org/) is an open protocol that enables DMs between users. Link to [docs](https://xmtp.org/docs/client-sdk/javascript/concepts/intro-to-sdk).
- [Push](https://push.org/) is a protocol enabling cross-chain notifications and messaging for dapps, wallets, and services. Link to [docs](https://docs.push.org/developers).
##  Monetization

In addition to providing great mechanisms for creators to engage with their audiences, building in monetization that supports creators is essential for them to want to share their content in your app. Common monetization models include: subscription, advertising, one-time purchase, sponsorship, and tipping. Here are some web3 options:

### **Tools for Building**

- [Unlock](https://unlock-protocol.com/) is a protocol used for creating and managing ticketing and subscriptions.
- [Superfluid](https://docs.superfluid.finance/superfluid/) is a token-streaming protocol where viewers pay by the minute.
- [Lit](https://litprotocol.com/) is a protocol that supports access control to content. This can be used to provide premium content to paying subscribers.
- [Lens Gated Content](https://docs.lens.xyz/docs/gated) is token-gating that enables the creator to show or hide videos based on an on-chain condition like owning an NFT. This is useful when having different tiers of followers, each accessing different types of content.
- NFT Minting can be added to the app experience for creators to sell their content. A couple options to add NFT minting to your app.
    - [Livepeer](https://docs.livepeer.org/guides/developing/mint-a-video-nft)
    - [thirdweb](https://portal.thirdweb.com/sdk)
## Questions on building?

[Join a workshop](https://livepeer.typeform.com/web3workshops).
Do you have ideas to contribute to this guide? [Let us know](https://livepeer.typeform.com/web3guide)!


##### Collaborators:
- @danielapassos
- @suhailkakar
