import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../components/AppContextFolder/AppContext';
import ScreenSizeDetector from '../components/CustomComponents/ScreenSizeDetector';
import ThreeBackground from '../components/CustomComponents/ThreeBackground';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Startup from '../components/Header/StartupLogo/Startup';
import AboutMe from '../components/Home/AboutMe/AboutMe';
import GetInTouch from '../components/Home/GetInTouch/GetInTouch';
import Maintenance from '../components/Home/Maintenance/Maintenance';
import MyName from '../components/Home/MyName/MyName';
import SocialMediaArround from '../components/Home/SocialMediaArround/SocialMediaArround';
import SomethingIveBuilt from '../components/Home/SomethingIveBuilt/SomethingIveBuilt';
import WhereIHaveWorked from '../components/Home/WhereIHaveWorked/WhereIHaveWorked';

export default function Home() {
  const [ShowElement, setShowElement] = useState(true);
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(false);
  const [ShowMe, setShowMe] = useState(false);
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const [userData, setUserData] = useState(null);
  const [isBlackListed, setIsBlackListed] = useState(false);
  const [IsBlackListEmpty, setIsBlackListEmpty] = useState(
    process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES === '' ? true : false,
  );

  useEffect(() => {
    if (!IsBlackListEmpty) {
      const fetchData = async () => {
        try {
          const IP_Address = async () => {
            return fetch('https://api.ipify.org/?format=json')
              .then((res) => res.json())
              .then((data) => data.ip);
          };

          const response = await fetch(
            '/api/userInfoByIP/' + (await IP_Address()),
          );
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error('Error fetching data location and ip address:', error);
        }
      };

      fetchData();
    }
  }, [IsBlackListEmpty]);

  useEffect(() => {
    if (!IsBlackListEmpty) {
      if (userData) {
        if (
          process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES?.includes(
            userData.country,
          )
        ) {
          setIsBlackListed(true);
        }
      }
    }
  }, [IsBlackListEmpty, userData]);

  useEffect(() => {
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== 'undefined') {
      window.removeEventListener(
        'resize',
        context.sharedState.userdata.windowSizeTracker.current,
      );
      window.removeEventListener(
        'mousemove',
        context.sharedState.userdata.mousePositionTracker.current,
        false,
      );
      window.removeEventListener(
        'resize',
        context.sharedState.typing.eventInputLostFocus,
      );
      document.removeEventListener(
        'keydown',
        context.sharedState.typing.keyboardEvent,
      );
    }
    setTimeout(() => {
      setShowElement(false);
    }, 2500);

    setTimeout(() => {
      setShowThisCantBeReached(false);
    }, 2800);

    setTimeout(() => {
      setShowElement(false);
      setShowMe(true);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 2500);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  const meta = {
    title: 'Biswajit Dash | React Native & Full Stack Mobile Developer',
    description: `React Native Developer with 3+ years of experience building scalable mobile & web applications using React Native, Expo, Next.js, React.js, TypeScript, Node.js, AI (LLM) integrations, Socket.IO, and Mapbox.`,
    url: 'https://portfolio-biswo.netlify.app/',
    image: 'https://portfolio-biswo.netlify.app/wisbox_showcase.jpg',
    type: 'website',
  };
  const isProd = process.env.NODE_ENV === 'production';

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Biswajit Dash',
    jobTitle: 'React Native & Mobile Developer',
    url: meta.url,
    sameAs: [
      'https://github.com/biswo907',
      'https://www.linkedin.com/in/biswajit-dash-129977221/',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bhubaneswar',
      addressRegion: 'Odisha',
      addressCountry: 'India',
    },
    knowsAbout: [
      'React Native',
      'Expo',
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Socket.IO',
      'Mapbox',
      'LLM APIs',
      'AI Integration',
      'Redux Toolkit',
    ],
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          name="keywords"
          content="Biswajit Dash, React Native Developer, Mobile App Developer, Expo, React.js, Next.js, TypeScript, Node.js, Socket.IO, Mapbox, LLM API, AI Integration, Bhubaneswar Developer"
        />
        <link rel="canonical" href={meta.url} />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="shortcut icon" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />

        {/* OpenGraph Tags */}
        <meta property="og:url" content={meta.url} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Biswajit Dash Portfolio" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {!isBlackListed ? (
        <div className="relative min-h-screen bg-AAprimary w-full overflow-x-hidden">
          <ThreeBackground />
          {ShowElement ? (
            <Startup />
          ) : (
            <>
              <Header finishedLoading={true} sectionsRef={homeRef} />
              <MyName finishedLoading={true} />
              <SocialMediaArround finishedLoading={true} />
              <AboutMe ref={aboutRef} />
              <WhereIHaveWorked />
              <SomethingIveBuilt />
              <GetInTouch />
              <Footer
                githubUrl={'https://github.com/biswo907'}
                hideSocialsInDesktop={true}
              />
              {!isProd && <ScreenSizeDetector />}
            </>
          )}
        </div>
      ) : (
        <Maintenance />
      )}
    </>
  );
}
