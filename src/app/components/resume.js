'use client'
import React, { useEffect, useState, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import { BiSolidHome } from 'react-icons/bi';
import { MdLibraryBooks } from 'react-icons/md';
import Image from 'next/image';
import { FaBookOpen } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { FaFileAlt } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { PiFlowerTulipBold } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { BiSolidRightArrow } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BrowserRouter, Link as RouterLink, Route, Switch } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { IoMenu } from "react-icons/io5";

// import Head from 'next/head'; 
import 'intersection-observer';

const App = () => {
  return (
    <BrowserRouter>
      <Resume />
    </BrowserRouter>
  );
};

// ReactDOM.render(<App />, document.getElementById('root'));

const Resume = () => {
  const [activeTab, setActiveTab] = useState('/');
  const [starsFall, setStarsFall] = useState([]);

  const animatedRef1 = useRef(null);
  const animatedRef2 = useRef(null);
  const animatedRef3 = useRef(null);
  const animatedRef4 = useRef(null);

  const [animate1, setAnimate1] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [animate3, setAnimate3] = useState(false);
  const [animate4, setAnimate4] = useState(false);

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        switch (entry.target) {
          case animatedRef1.current:
            setAnimate1(entry.isIntersecting);
            break;
          case animatedRef2.current:
            setAnimate2(entry.isIntersecting);
            break;
          case animatedRef3.current:
            setAnimate3(entry.isIntersecting);
            break;
          case animatedRef4.current:
            setAnimate4(entry.isIntersecting);
            break;
          default:
            break;
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer1 = new IntersectionObserver(callback, options);
    const observer2 = new IntersectionObserver(callback, options);
    const observer3 = new IntersectionObserver(callback, options);
    const observer4 = new IntersectionObserver(callback, options);

    if (animatedRef1.current) {
      observer1.observe(animatedRef1.current);
    }
    if (animatedRef2.current) {
      observer2.observe(animatedRef2.current);
    }
    if (animatedRef3.current) {
      observer3.observe(animatedRef3.current);
    }
    if (animatedRef4.current) {
      observer4.observe(animatedRef4.current);
    }

    return () => {
      observer1.disconnect();
      observer2.disconnect();
      observer3.disconnect();
      observer4.disconnect();
    };
  }, [animatedRef1, animatedRef2, animatedRef3, animatedRef4]);


  const generateRandomPosition = () => ({
    top: `${Math.random() * 1000}vh`,
    left: `${Math.random() * 500}vw`,
  });

  const stars = Array.from({ length: 200 }, (_, index) => index + 1);

  useEffect(() => {
    const initialStarsFall = Array.from({ length: 5 }, (_, index) => ({
      id: index,
      ...generateRandomPosition(),
    }));

    setStarsFall(initialStarsFall);

    const intervalId = setInterval(() => {
      setStarsFall((prevStars) => {
        const updatedStars = prevStars.map(star => ({
          ...star,
          ...generateRandomPosition(),
        }));
        return updatedStars;
      });
    }, 2000);

    const timeoutId = setTimeout(() => {
      setStarsFall([]);
    }, 2000);

    // นำเวลาที่จะทำให้ดาวหายไปไว้ในตัวแปร
    const vanishTimeout = 3000;

    // ทำงานตลอดเวลาที่ทำให้ดาวหายไปและเข้ามา
    const intervalIdVanish = setInterval(() => {
      setStarsFall([]);
      setTimeout(() => {
        setStarsFall(initialStarsFall);
      }, vanishTimeout);
    }, vanishTimeout + 3000);

    return () => {
      clearInterval(intervalId);
      clearInterval(intervalIdVanish);
      clearTimeout(timeoutId);
    };
  }, []);




  return (
    <div className="bg-gradient-to-b from-[#0E0E3D] via-[#121355] to-[#2A36AA]  w-screen  text-white overflow-hidden  ">

      <div className="  w-screen  fixed z-50 top-0 left-0 right-0 lg:flex justify-center md:justify-end bg-[#0E0E3D] items-center border-b px-6 border-gray-200 dark:border-gray-700">
        <div>

          <ul className=" flex flex-wrap -mb-px text-sm font-medium text-center justify-center text-gray-500 dark:text-gray-400">
            <li className="me-2 cursor-pointer  ">
              <ScrollLink to="home" smooth={true} duration={500}

                className={`inline-flex items-center justify-center p-4 ${activeTab === '/1'
                  ? 'text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group'
                  : 'border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
                  }`}
              >
                <AiFillHome className='text-[15px] md:mr-2 ' />
                <span className='hidden md:block'>Home</span>
              </ScrollLink>
            </li>
            <li className="me-2 cursor-pointer">
              <ScrollLink to="profile" smooth={true} duration={500}
                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              >
                <IoPerson className='text-[15px] md:mr-2 ' />
                <span className='hidden md:block'>Profile</span>
              </ScrollLink>
            </li>
            <li className="me-2 cursor-pointer">
              <ScrollLink to="education" smooth={true} duration={500}

                className={`inline-flex items-center justify-center p-4 ${activeTab === '/4'
                  ? 'text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group'
                  : 'border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
                  }`}
                aria-current="page"
              >
                <FaUserGraduate className='text-[15px] md:mr-2' />
                <span className='hidden md:block'>Education</span>
              </ScrollLink>
            </li>
            <li className="me-2 cursor-pointer">
              <ScrollLink to="experience" smooth={true} duration={500}

                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              >
                <MdLibraryBooks className="text-[15px] md:mr-2" />

                <span className='hidden md:block'>Experience</span>
              </ScrollLink>
            </li>
            <li className="me-2 cursor-pointer">
              <ScrollLink to="profile" smooth={true} duration={500}

                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              >
                <FaFileAlt className="text-[15px] md:mr-2" />

                <span className='hidden md:block'>Skills</span>
              </ScrollLink>
            </li>
            {/* <li className="me-2 cursor-pointer">
              <ScrollLink to="profile" smooth={true} duration={500}

                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              >
                <BiSolidContact className="text-[15px] mr-2" />
                Contacts
              </ScrollLink>
            </li> */}
          </ul>
        </div>
      </div>
      {/* <div className=" fixed z-50 items-center top-0 left-0 right-0 lg:hidden h-[50px]  bg-[#0E0E3D] border-b px-6 border-gray-200 dark:border-gray-700">
      <IoMenu className='text-[30px] justify-end '/>
      </div> */}


      {/* <Image
        src="/img/saturn.png"
        alt="image description"
        width={300}
        height={300}
        className="animated-image absolute"
      /> */}

      <div className="top-0 left-0 w-full md:h-[3700px] h-[3800px] pointer-events-none absolute z-0">
        {stars.map((star, index) => (
          <div
            key={star}
            className="absolute w-[1px] h-[1px] bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 2 + 1}s infinite`,
              // animationDelay: `-${index * 1}s`, // Add animation delay based on index
            }}
          ></div>
        ))}

      </div>

      {/* <div className='w-screen overflow-hidden border relative'> */}
      <div className="rotate-45  w-[50px] h-[2000px]left-0 top-0 border">
        {starsFall.map((star) => (
          <div
            key={star.id}
            className="w-[500px] h-[1px] bg-gradient-to-l from-white via-transparent"
            style={{
              animation: `fall 3s linear forwards, twinkle 5s infinite`,
              position: 'absolute',
              top: `${Math.random() * 100}vh`, // ใช้ vh แทน %
              left: `${Math.random() * 100}vw`, // ใช้ vw แทน %

            }}
          ></div>
        ))}
      </div>
      {/* </div> */}



      <div ref={animatedRef1} id="home" className=" mx-auto  w-screen  text-center md:py-20 py-60 lg:py-60 absolute z-10 ">


        <div className={`${animate1 && 'animated-textDown'} flex lg:w-[800px]  mx-auto text-center justify-center mb-10 `}>
          <h1 className=' text-2xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl me-3'>I want to be a</h1>
          <h1 className='text-2xl type-word text-[#F5A100] font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl'><span></span></h1>
        </div>
        <p className={`${animate1 && 'animated-textUp'} mb-8 text-sm  font-normal text-gray-300 lg:text-xl px-8 lg:px-48`}>Hello<span className='animate-waving-hand'>👋🏻</span>, welcome to my personal information website. I hope you can get to know my basic information through this website. Very glad you visited.</p>
        <div className={`${animate1 && 'animated-textUp'} flex   justify-center space-x-4 `}>
          <ScrollLink to="profile" smooth={true} duration={500} className="inline-flex   items-center py-3 px-5 text-sm md:text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Let's go see

          </ScrollLink>
          <a href="Resume-Chadaphorn Thongphutorn.pdf" download="Resume-Chadaphorn Thongphutorn.pdf" className=" inline-flex  hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-sm md:text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
            Download resume
          </a>

        </div>

      </div>

      <section className="justify-center md:w-screen w-[200%] mx-auto relative z-1 ">
        <svg viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg" className="transform translate-y-[80%] md:translate-y-[50%]">
          <rect fill="#df6688" />
          <path
            d="M 0,1080 C 0,1080 0,180 0,180 C 131.13589743589742,180.24358974358972 262.27179487179484,180.48717948717947 373,195 C 483.72820512820516,209.51282051282053 574.048717948718,238.29487179487185 665,242 C 755.951282051282,245.70512820512815 847.5333333333333,224.3333333333333 960,201 C 1072.4666666666667,177.6666666666667 1205.8179487179486,152.37179487179486 1299,152 C 1392.1820512820514,151.62820512820514 1445.194871794872,176.17948717948718 1542,185 C 1638.805128205128,193.82051282051282 1779.4025641025642,186.9102564102564 1920,180 C 1920,180 1920,1080 1920,1080 Z"
            fill="#2430A0" opacity="0.2" />
          <path
            d="M 0,1080 C 0,1080 0,360 0,360 C 78.52564102564105,359.3538461538461 157.0512820512821,358.7076923076923 271,345 C 384.9487179487179,331.2923076923077 534.3205128205128,304.5230769230769 644,299 C 753.6794871794872,293.4769230769231 823.6666666666667,309.2 922,328 C 1020.3333333333333,346.8 1147.0128205128203,368.67692307692306 1266,359 C 1384.9871794871797,349.32307692307694 1496.2820512820515,308.09230769230766 1604,303 C 1711.7179487179485,297.90769230769234 1815.8589743589741,328.95384615384614 1920,360 C 1920,360 1920,1080 1920,1080 Z"
            fill="#2531A1" opacity="0.29999999999999998" />
          <path
            d="M 0,1080 C 0,1080 0,540 0,540 C 133.11794871794868,543.4358974358975 266.23589743589736,546.8717948717949 371,525 C 475.76410256410264,503.12820512820514 552.174358974359,455.94871794871796 637,481 C 721.825641025641,506.05128205128204 815.0666666666668,603.3333333333334 927,604 C 1038.9333333333332,604.6666666666666 1169.5589743589744,508.71794871794873 1282,503 C 1394.4410256410256,497.28205128205127 1488.697435897436,581.7948717948718 1592,603 C 1695.302564102564,624.2051282051282 1807.6512820512821,582.1025641025641 1920,540 C 1920,540 1920,1080 1920,1080 Z"
            fill="#5749DC" opacity="0.3" />
          <path
            d="M 0,1080 C 0,1080 0,720 0,720 C 132.45384615384617,745.376923076923 264.90769230769234,770.7538461538462 363,759 C 461.09230769230766,747.2461538461538 524.8230769230769,698.3615384615383 605,671 C 685.1769230769231,643.6384615384617 781.8000000000001,637.8000000000001 900,652 C 1018.1999999999999,666.1999999999999 1157.976923076923,700.4384615384616 1276,706 C 1394.023076923077,711.5615384615384 1490.2923076923075,688.4461538461538 1594,686 C 1697.7076923076925,683.5538461538462 1808.8538461538462,701.7769230769231 1920,720 C 1920,720 1920,1080 1920,1080 Z"
            fill="#5749DC" opacity="0.39999999999999997" />
        </svg>

      </section>


      <div className='md:block md:h-[220px] h-[1000px] mt-[320px]  w-screen bg-[#3D37B1] absolute z-0'></div>

      <h1 id="profile" className=' font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl mt-[200px] md:mt-[-100px]  '></h1>


      <div ref={animatedRef2} className=' w-screen px-10 text-white  md:mt-[130px]  mt-[300px] relative z-10 '>

        <div className='md:flex  justify-center '>
          <div className=''>
            <div className={`${animate2 && 'animated-textLeft'} flex  justify-center mt-[30px] `}>
              <Image
                  src="/img/profile.png"
                  alt="image description"
                  width={300}
                  height={300}
                  className="absolute z-10  mx-auto w-[200px] md:w-[300px]"
              />

              <h1 className="text-4xl  md:text-5xl lg:text-6xl relative z-1  text-center px-4 md:px-6" style={{ WebkitTextStroke: '2px #F5A100', color: 'transparent' }}>
                NEVER<br /><span className='mr-[80px]'>ST</span><span>OP</span><br /><span className='mr-[90px]'>LEAR</span><span>NING</span>
              </h1>
            </div>
          </div>
          <div className='grid md:ml-20  mt-[180px] md:mt-[0px]'>
            <div className={`${animate2 && 'animated-textDown'} w-[290px] md:w-[800px]  mx-auto`}>
              <h1 className=' font-extrabold tracking-tight w-[290px] md:w-[800px] text-center md:text-left leading-none md:text-5xl lg:text-6xl'>Chadaphorn Thongphutorn</h1>
              <p className=' md:w-[800px] text-sm md:text-base  w-[290px] md:text-left text-center mt-10 '>
                I am looking for challenging work that uses technical skills in computer engineering. By working on front-end development I can learn quickly. Have a lot of responsibility Ready to adapt to learn new skills
              </p>
            </div>
            <div className=' mt-[50px]  w-[290px] md:w-[800px]'>
              <div className={`mb-5 ${animate2 && 'animated-textUp'} text-sm`}>
                <div className='flex items-center '>
                  <FaFileAlt className='md:text-[30px] md:mr-5 mr-2 ' />
                  <h1 className="md:text-[40px] text-base font-semibold  text-white">Skills</h1>
                </div>
                <p className='mb-2 mt-5'>Stack & Programming</p>
                <div className='flex space-x-2 '>
                  <div className='bg-[#E2AC00] text-white p-1 px-2   rounded-[10px] flex items-center transition-transform transform hover:scale-105'><FaHtml5 className='mr-2' />HTML</div>
                  <div className='bg-[#FB7185] text-white p-1  px-2  rounded-[10px] flex items-center transition-transform transform hover:scale-105'><SiCss3 className='mr-2' />CSS</div>
                  <div className='bg-[#3C84B0] text-white p-1 px-2   rounded-[10px] flex items-center transition-transform transform hover:scale-105'><RiJavascriptFill className='mr-2' />Javascript</div>
                </div>
                <p className='mb-2 mt-2'>Framework & Database</p>
                <div className='flex flex-wrap md:space-x-2 '>
                  <div className='bg-[#BD529A] text-white p-1 px-2  mt-2 mr-2 md:mt-0 rounded-[10px] flex items-center transition-transform transform hover:scale-105'><IoLogoNodejs className='mr-2' />Node.js</div>
                  <div className='bg-[#22C55E] text-white p-1  px-2 mt-2 mr-2 md:mt-0 rounded-[10px] flex items-center transition-transform transform hover:scale-105'><SiExpress className='mr-2' />Express.js</div>
                  <div className='bg-[#5A57A4] text-white p-1 px-2 mt-2 mr-2 md:mt-0 rounded-[10px] flex items-center transition-transform transform hover:scale-105'><TbBrandNextjs className='mr-2' />Next.js</div>
                  <div className='bg-[#E2AC00] text-white p-1 px-2  mt-2  mr-2 md:mt-0 rounded-[10px] flex items-center transition-transform transform hover:scale-105'><FaReact className='mr-2' />React</div>
                  <div className='bg-[#04B19E] text-white p-1  px-2 mt-2 mr-2 md:mt-0 rounded-[10px] flex items-center transition-transform transform hover:scale-105'><FaBootstrap className='mr-2' />Bootstrap</div>
                  <div className='bg-[#EF315F] text-white p-1 px-2 mt-2  mr-2 md:mt-0 rounded-[10px] flex items-center transition-transform transform hover:scale-105'><SiTailwindcss className='mr-2' />Tailwind CSS</div>
                  <div className='bg-[#22C55E] text-white p-1 px-2  mt-2 mr-2 md:mt-0 rounded-[10px] flex items-center transition-transform transform hover:scale-105'><SiMysql className='mr-2' />MySQL</div>
                </div>
                <p className='mb-2 mt-2'>Tools</p>
                <div className='flex space-x-2'>
                  <div className='bg-[#CB4345] text-white p-1 px-2   rounded-[10px] flex items-center transition-transform transform hover:scale-105'><FaGitAlt className='mr-2' />Git</div>
                  <div className='bg-[#0093B2] text-white p-1  px-2  rounded-[10px] flex items-center transition-transform transform hover:scale-105'><SiPostman className='mr-2' />Postman</div>
                  <div className='bg-[#E2AC00] text-white p-1 px-2   rounded-[10px] flex items-center transition-transform transform hover:scale-105'><FaFigma className='mr-2' />Figma</div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div className='text-center '>
          <div className={`${animate2 && 'animated-textUp'} md:mt-[50px] text-sm md:text-lg font-semibold  md:flex justify-center items-center md:space-x-8 `}>
            <p className='flex items-center mt-2'>
              <BsTelephoneFill className='mr-3 ' />
              <a href='tel:+66993861226'>
                +66 99 386 1226
              </a>
            </p>
            <p className='flex items-center mt-2'>
              <IoMail className='mr-3 ' />
              <a href='mailto:chadaphornt20@gmail.com'>
                chadaphornt20@gmail.com
              </a>
            </p>
            <p className='flex items-center mt-2'>
              <FaGithub className='mr-3' />
              <a href='https://github.com/Chadaphorn0402' target='_blank' rel='noopener noreferrer'>
                https://github.com/Chadaphorn0402
              </a>
            </p>
            <p className='flex items-center mt-2'><FaLocationDot className='mr-3' />Kamphaeng Phet, Thailand</p>
          </div>
        </div>
      </div>

      <div className='hidden md:block h-[230px] mt-[-150px] w-screen bg-[#3D37B1] relative z-0'></div>

      <Image
        src="/img/moon1.png"
        alt="image description"
        width={200}
        height={200}
        className="animated-image absolute z-1 mt-[180px] md:right-40 right-10 md:w-[200px] w-[100px]"
      />

      <h1 id="education" className=' font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl mt-[50px] md:mt-[0px]'></h1>

      <div ref={animatedRef3} className=' w-screen px-10 md:mx-auto md:px-40  md:mt-[100px]'>

        <div className={`${animate3 && 'animated-textLeft'}  flex items-center mt-[120px]  mb-5`}>
          <FaUserGraduate className='md:text-[30px] md:mr-5 mr-2' />
          <h1 className="text-base md:text-[40px] font-semibold  text-white">Education</h1>
        </div>
        <ol className={`${animate3 && 'animated-textUp'} md:mt-[50px] relative border-s  border-gray-200  `}>
          <li className="mb-5 ms-4 ">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-white ">2017 - 2020</time>
            <div className='md:flex items-center '>
              <Image
                src="/img/KPPPAO1.png"
                alt="image description"
                width={100}
                height={100}
                className="me-10 "
              />
              <div>
                <h3 className="md:text-lg text-base font-semibold  text-white">High School</h3>
                <p className="mb-4 md:text-base text-sm font-normal text-gray-300">Kamphaengphet Provincial Administration Organization School<br />GPAX: 3.7</p>
              </div>
            </div>
          </li>
          <li className=" ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time className="mb-1 text-sm font-normal leading-none text-white ">2020 - 2024</time>
            <div className='md:flex items-center mt-3'>
              <Image
                src="/img/Naresuan.png"
                alt="image description"
                width={100}
                height={100}
                className="me-10"
              />
              <div className=''>
                <h3 className="md:text-lg text-base font-semibold  dtext-white">Bachelor of Engineering Program in Computer Engineering </h3>
                <p className="md:text-base text-sm font-normal text-gray-300">Naresuan University<br />GPA : 3.37  Second-Class Honors</p>
              </div>
            </div>
          </li>
        </ol>



      </div>

      <div className='flex ml-[-100px] mt-[-100px] md:mt-[-60px] overflow-hidden '>
        <Image
          src="/img/graduation.png"
          alt="image description"
          width={600}
          height={600}
          className="  "
        />
        <Image
          src="/img/graduation.png"
          alt="image description"
          width={600}
          height={300}
          className="  "
        />
        <Image
          src="/img/city1.png"
          alt="image description"
          width={600}
          height={300}
          className="  "
        />
      </div>

      <h1 id="experience" className=' font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl  mt-[0px]'></h1>

      <div ref={animatedRef4} className={`${animate4 && 'animated-textLeft'}  w-screen  px-10  flex items-center mb-5 mt-[80px] md:mt-[100px] md:px-40 `}>

        <MdLibraryBooks className='md:text-[30px] md:mr-5 mr-2' />
        <h1 className="text-base md:text-[40px] font-semibold  text-white">Experience</h1>
      </div>

      <div className={`${animate4 && ' animated-textUp'} text-sm md:text-base w-screen px-10 md:mx-auto  relative z-10`}>
        <div className=" text-black  md:mx-auto mt-[40px]">
          <div className="bg-white mx-auto md:w-[800px] p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-[18px] md:text-xl font-semibold mb-2 border-b-2 border-gray-400 pb-2">Software Tester Intern</h2>
            <div className="flex items-center justify-between">
              <p className="text-md md:text-xl font-bold">Extosoft Co.,Ltd.</p>
              <span className="text-[12px]">Apr2023 - Jun2023</span>
            </div>
            <p className='text-sm md:text-base'>Has internship experience as a Software Tester</p>
            <p className='text-md md:text-xl font-bold'>Responsibilities</p>
            <div className='md:flex'>
              <p className='text-sm md:text-base flex items-center '><BsStars className='text-[#E2AC00] mr-2' /><span className='text-[#CB4345] font-bold mr-2'>Manual Testing</span></p>
              <p className='text-sm md:text-base ml-[23px]'>create test cases and run test.</p>
            </div>
            <div className='md:flex'>
              <p className='text-sm md:text-base flex items-center'><BsStars className='text-[#E2AC00] mr-2' /><span className='text-[#CB4345] font-bold mr-2'>Automated Testing</span>  </p>
              <p className='text-sm md:text-base ml-[23px]'>functional testing according to Requirement.</p>
            </div>
            <div className='md:flex'>
              <p className='text-sm md:text-base flex items-center'><BsStars className='text-[#E2AC00] mr-2' /><span className='text-[#CB4345] font-bold mr-2'>Performance Testing</span> </p>
              <p className='text-sm md:text-base ml-[23px]'>test the performance of the developed software.</p>
            </div>

          </div>

          <div className="text-sm md:text-base bg-white mx-auto md:w-[800px] p-4 mt-5 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-[18px] md:text-xl font-semibold mb-2 border-b-2 border-gray-400 pb-2">Web application project</h2>
            <div className="flex items-center justify-between">
              <p className="text-md md:text-xl font-bold">Graduation project</p>
              <span className="text-[12px]">Jul2023 - Jan2023</span>
            </div>
            <p>Digital platform for safety officials, It is a responsive web application development for developing websites for safety personnel to use within the factory in place of notepads. It also incorporates the development of IOT, creating a button to report emergency situations.</p>
            <p className='font-bold'>Responsibilities</p>
            <p className='flex items-center'><BiSolidRightArrow className='text-[#E2AC00] mr-2 ' /><span className='text-[#2A36AA] font-bold '>Design</span><br /></p>
            <div className='ml-5'>
              <p className='flex   items-center'><PiFlowerTulipBold className='text-[#CB4345] mr-2 w-[30px]' /> Design the software architecture and system components.</p>
              <span className='flex   items-center'><PiFlowerTulipBold className='text-[#CB4345] md:mr-2 w-[30px] ml-[-7px] md:ml-0' />Create a database.<br /></span>
              <span className='flex items-center'><PiFlowerTulipBold className='text-[#CB4345] mr-2 w-[30px]' />Develop wireframes and mockups for the user interface (UI/UX).</span>
            </div>
            <p className='flex items-center'><BiSolidRightArrow className='text-[#E2AC00] mr-2' /><span className='text-[#2A36AA] font-bold'>Development (Coding)</span><br /></p>
            <div className='ml-5 '>
              <span className='flex items-center'><PiFlowerTulipBold className='text-[#CB4345] mr-2 w-[30px]' />Develop both the front-end and back-end components.<br /></span>
              <span className='flex items-center'><PiFlowerTulipBold className='text-[#CB4345] ml-1 md:ml-0 mr-2 w-[30px]' />Implement functionalities and integrate with databases or external services.</span>
            </div>
            <p className='flex items-center'><BiSolidRightArrow className='text-[#E2AC00] mr-2' /><span className='text-[#2A36AA] font-bold'>Testing</span><br /></p>
            <div className='ml-5'>
              <span className='flex items-center'><PiFlowerTulipBold className='text-[#CB4345] mr-2 w-[30px]' />Test components to make sure they work as intended.</span>
            </div>
            <p className='flex items-center'><BiSolidRightArrow className='text-[#E2AC00] mr-2' /><span className='text-[#2A36AA] font-bold'>Deployment</span><br /></p>
            <div className='ml-5'>
              <span className='flex items-center'><PiFlowerTulipBold className='text-[#CB4345] mr-2 w-[30px]' />Address any issues or bugs discovered during the deployment phase.<br /></span>
              <span className='flex items-center '><PiFlowerTulipBold className='text-[#CB4345] mr-2 w-[30px]' />Release the software to production once it passes all testing phases.</span>
            </div>
            <p className='flex items-center '><BiSolidRightArrow className='text-[#E2AC00] mr-2' /><span className='text-[#2A36AA] font-bold'>Internet of Things (IoT)</span><br /></p>
            <div className='ml-5'>
              <p className='flex '><PiFlowerTulipBold className='text-[#CB4345] mr-2 mt-1 md:ml-[6px] w-[70px] md:w-[30px]' />Develop IOT as a button to report emergency situations Real-time notifications with socket io communicate information to websites developed via HTTP protocol.</p>
            </div>
            <Image
              src="/img/web.png"
              alt="image description"
              width={5000}
              height={1000}
              className="rounded-b-lg  mt-5"
            />

          </div>

        </div>

      </div>


      <Image
        src="/img/wave.svg"
        alt="image description"
        width={5000}
        height={1000}
        className=""
      />

    </div>
  );
};

export default Resume;
