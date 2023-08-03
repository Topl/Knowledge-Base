import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import HomepageFeatures from "../components/HomepageFeatures";

function Home() {
  return (
    <Layout title="Home" description="Topl Dev Docs" noFooter={true}>
      <main
        style={{
          margin: 0,
          background:
            "linear-gradient(90deg, rgba(34,8,98,1) 0%, rgba(131,93,234,1) 99%, rgba(132,94,234,1) 100%)",
          minHeight: "100vh",
        }}
      >
        <br />
        <div className="text-wrapper">
          <h1 align="center" style={{ fontWeight: "350" }}>
            <p>
              <span style={{ color: "#0DC8D4" }}>#BuildGood </span>
              <span style={{ color: "#ffffff" }}>With Topl</span>
            </p>
          </h1>
        </div>
        <div className="discord-link">
          <p className="text-header">
            Check out the resources below to learn more about developing on the
            Topl blockchain.
            <br />
            Once you’re up & running, come
            <Link to="https://discord.gg/topl">say hello on Discord.</Link>
          </p>
        </div>
        <section>
          <div className="container-wrapper">
            <HomepageFeatures />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
