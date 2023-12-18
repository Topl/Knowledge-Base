import React from "react";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Quick Start",
    Svg: require("../../static/img/rocket-flying.svg").default,
    description: <>Quick start Get up and running with the Topl blockchain.</>,
    link: "Developers/Quickstart Tutorial/quickstart-setup",
  },
  {
    title: "Create a wallet",
    Svg: require("../../static/img/crypto-wallet.svg").default,
    description: (
      <>Create a wallet Spin up a Topl wallet with just a few lines of code.</>
    ),
    link: "Developers/Quickstart Tutorial/quickstart-setup",
  },
  {
    title: "Build a dApp",
    Svg: require("../../static/img/cube-on-phone.svg").default,
    description: <>Start building using our SDKs or Daml for smart contracts.</>,
    link: "Developers/Software Development Kits/brambldart",
  },
  {
    title: "Run a node",
    Svg: require("../../static/img/network.svg").default,
    description: <>Run a node locally or in the cloud.</>,
    link: "Validators/Node Setup/install-bare-metal",
  },
  {
    title: "Run a testnet validator",
    Svg: require("../../static/img/electric-vehicle.svg").default,
    description: <>Earn validator rewards from almost any device.</>,
    link: "",
  },
  {
    title: "View block explorer",
    Svg: require("../../static/img/cube-viewport.svg").default,
    description: <>Monitor all on-chain activity.</>,
    link: "https://explore.topl.co",
  },
  {
    title: "Faucet",
    Svg: require("../../static/img/dash.svg").default,
    description: <>Grab yourself some tokens for the testnet.</>,
    link: "",
  },
  {
    title: "Background concepts",
    Svg: require("../../static/img/blockchain.svg").default,
    description: (
      <> Learn about some fundamental concepts related to the Topl chain.</>
    ),
    link: "Glossary/glossary",
  },
  {
    title: "Be a contributor",
    Svg: require("../../static/img/human-network.svg").default,
    description: (
      <> Join the Topl community and earn bounties for contributing code.</>
    ),
    link: "Bounty_Program/bounty-overview",
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <>
      <Link to={link}>
        <div className={link ? "card" : "card_coming_soon"}>
          <div className="card__header">
            <div>
              <Svg alt={title} viewBox="10 0 65 75" />
            </div>
            <p style={{ fontSize: 18, fontWeight: 700 }}>{title}</p>
          </div>
          <div className="card-body">
            <p>{description}</p>
          </div>
        </div>
      </Link>
      <div className="divider" />
    </>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </>
  );
}
