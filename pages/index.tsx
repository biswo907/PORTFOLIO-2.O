import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../components/AppContextFolder/AppContext';
import ScreenSizeDetector from '../components/CustomComponents/ScreenSizeDetector';
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
  // context Variable to clearInterval
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  // userData state that will be used to get usr location
  const [userData, setUserData] = useState(null);

  // check if user from Black List
  const [isBlackListed, setIsBlackListed] = useState(false);

  // check if NEXT_PUBLC_BLACKLIST_COUNTRIES is empty
  const [IsBlackListEmpty, setIsBlackListEmpty] = useState(
    process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES === '' ? true : false,
  );

  // this userEffect will be called to get the user location, so we can check if he is from the blackList,
  // this will only run if NEXT_PUBLIC_BLACKLIST_COUNTRIES is not empty
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
          ); // Replace with your actual API endpoint
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error('Error fetching data location and ip address:', error);
          // Handle errors as needed
        }
      };

      fetchData();
    }
  }, [IsBlackListEmpty]); // Empty dependency array ensures that this effect runs once when the component mounts

  // this useEffect will be called when userData is set
  useEffect(() => {
    // this will only run if NEXT_PUBLIC_BLACKLIST_COUNTRIES is not empty
    if (!IsBlackListEmpty) {
      if (userData) {
        // check if the user country is in the blackList
        if (
          process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES?.includes(
            userData.country,
          )
        ) {
          // set isBlackListed to true
          setIsBlackListed(true);
        }
      }
    }
  }, [IsBlackListEmpty, userData]);

  useEffect(() => {
    // remove the interval Cookie timer setter when
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== 'undefined') {
      // remove UserDataPuller project EventListeners
      window.removeEventListener(
        'resize',
        context.sharedState.userdata.windowSizeTracker.current,
      );
      window.removeEventListener(
        'mousemove',
        context.sharedState.userdata.mousePositionTracker.current,
        false,
      );
      // remove Typing project EventListeners
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
    }, 4500);

    setTimeout(() => {
      setShowThisCantBeReached(false);
    }, 5400);
    // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
    setTimeout(() => {
      setShowElement(false);
      setShowMe(true);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 10400);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  console.log('website is rendering...');
  const meta = {
    title: 'Biswajit Dash - Software Engineer',
    description: `I've been working on Software development for 2 years straight. Get in touch with me to know more.`,
    image: '/titofCercle.png',
    type: 'website',
  };
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        {/* <meta property="og:url" content={`https://anaflous.com`} />
        <link rel="canonical" href={`https://anaflous.com`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@titofabdo" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} /> */}
      </Head>

      {/* <Head>
        <title>Biswo-Portfolio</title>
        <meta
          name="description"
          content="Welcome to Biswo's personal portfolio website."
        />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head> */}

      {!isBlackListed ? (
        <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
          {ShowElement ? (
            <Startup />
          ) : (
            <>
              <Header finishedLoading={true} sectionsRef={homeRef} />
              <MyName finishedLoading={true} />
              <SocialMediaArround finishedLoading={true} />
              {/* {context.sharedState.finishedLoading ? (
            <AboutMe ref={aboutRef} />
            ) : (
              <></>
              )} */}
              <AboutMe ref={aboutRef} />
              {/* {context.sharedState.finishedLoading ? <WhereIHaveWorked /> : <></>}
          {context.sharedState.finishedLoading ? <SomethingIveBuilt /> : <></>}
          {context.sharedState.finishedLoading ? <GetInTouch /> : <></>}
          {context.sharedState.finishedLoading ? (
            <Footer
              githubUrl={'https://github.com/biswo907'}
              hideSocialsInDesktop={true}
            />
          ) : (
            <></>
          )} */}
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
