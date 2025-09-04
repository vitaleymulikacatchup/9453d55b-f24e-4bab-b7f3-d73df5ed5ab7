"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarLayoutFloatingInline
        logoSrc="/images/logo.svg"
        navItems={[
          { name: "Hero", id: "hero" },
          { name: "About", id: "about" },
          { name: "How to Buy", id: "how-to-buy" },
          { name: "Tokenomics", id: "tokenomics" },
          { name: "Footer", id: "footer" }
        ]}
        buttonText="Buy MemeCoin"
        onButtonClick={() => { /* handle button click */ }}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to GiggleCoin"
          subtitle="Your playful memecoin journey starts here!"
          contractAddress="0x1234567890"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="Join the GiggleCoin Community"
          descriptions={["Follow us on Twitter!", "Join our Discord!", "Get updates on Telegram!"]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="simple"/>
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics Explained"
          description="Understanding our token mechanics will help you on your journey."
          cardItems={[
            { id: 1, title: "Market Cap", description: "Growing rapidly!" },
            { id: 2, title: "Supply", description: "Limited supply for a valuable future!" },
            { id: 3, title: "Liquidity", description: "Easily buy and trade!" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoText="GiggleCoin"
          columns={[
            { items: [
              { label: "Privacy Policy", onClick: () => { /* handle click */ } },
              { label: "Terms of Service", onClick: () => { /* handle click */ } }
            ] },
            { items: [
              { label: "Contact Us", onClick: () => { /* handle click */ } }
            ] },
            { items: [
              { label: "Help Center", onClick: () => { /* handle click */ } }
            ] }
          ]}
          copyrightText="© 2023 GiggleCoin. All rights reserved."
          onPrivacyClick={() => { /* handle click */ }}
        />
      </div>
    </SiteThemeProvider>
  );
}