import React, { useEffect, useState } from 'react'
import "./Ourservices.css"
import img1 from "../assets/images/projects/1725.jpg"
import img2 from "../assets/images/projects/Datingapp.webp"
import img3 from '../assets/images/projects/astrology.webp'
import img4 from '../assets/images/prod/MB/matir-app.png'
import img5 from '../assets/images/prod/MB/Socialmedia.jpg'
import img6 from '../assets/images/projects/lms2.jpeg'
import img7 from '../assets/images/projects/fooddelivery.png'
import img8 from '../assets/images/projects/schoolmanagment app.jpg'
import img9 from '../assets/images/projects/clinicmanagement.png'
import img10 from '../assets/images/prod/MB/job portal app.png'
import img11 from '../assets/images/prod/MB/recharge portal app.jpg'
import img12 from '../assets/images/prod/MB/MLM.webp'
import img13 from '../assets/images/projects/erpsoftwares.jpg'
import img14 from '../assets/images/projects/reachargeportal.png'
import img15 from '../assets/images/projects/mlmsoftware.jpg'
import img16 from "../assets/images/projects/quizsystem.png"
import img17 from "../assets/images/projects/crmsoftware2.jpg"
import img18 from "../assets/images/projects/hrmsoftware2.png"
import img19 from "../assets/images/projects/hrmssoftware3.jpeg"
import img20 from "../assets/images/projects/accountingsoft.webp"
import img21 from "../assets/images/projects/possoftware2.png"
import img22 from "../assets/images/projects/employeetracking2.jpg"
import img23 from "../assets/images/projects/inventorymanagementsystem.jpeg"
import img24 from "../assets/images/projects/warehousemanagementsystem.jpg"
import img25 from "../assets/images/prod/MB/university.jpg"
import img26 from "../assets/images/projects/lmsapplication.png"
import img27 from "../assets/images/projects/coaching_big.png"
import img28 from "../assets/images/projects/librarymanagement.jpeg"
import img29 from "../assets/images/projects/newsportal.jpg"
import img30 from "../assets/images/projects/blogingwebsite.jpg"
import img31 from "../assets/images/projects/projectmanagement.jpg"
import img32 from "../assets/images/projects/taskmanagement.png"
import img33 from "../assets/images/projects/onlinestreaming.png"
import img34 from "../assets/images/projects/audiopodcast.jpeg"
import img35 from "../assets/images/projects/ebooksoftware.jpg"
import img36 from "../assets/images/projects/hospitalmanagement.jpg"
import img37 from "../assets/images/projects/labmanagement.avif"
import img38 from "../assets/images/projects/doctorappointment.png"
import img39 from "../assets/images/projects/pharmacymanagement.jpg"
import img40 from "../assets/images/prod/MB/ac.jpeg"
import img41 from "../assets/images/prod/MB/advocateManagement.jpg";
import img42 from "../assets/images/prod/MB/Affilate Managment System.jpg"
import img43 from "../assets/images/prod/MB/AlgoTradingApp.jpg";
import img44 from "../assets/images/prod/MB/bus booking app.jpg";
import img45 from "../assets/images/prod/MB/cab booking app.jpg";
import img46 from "../assets/images/prod/MB/cattle.png";
import img47 from "../assets/images/prod/MB/courierSystem.jpg";
import img48 from "../assets/images/prod/MB/crowdfunding.jpg";
import img49 from "../assets/images/prod/MB/CryptoTradingApp.jpg";
import img50 from "../assets/images/prod/MB/DairyFarmManager.jpg";
import img51 from "../assets/images/prod/MB/EVchargingapp.png";
import img52 from "../assets/images/prod/MB/eventManagement.jpg";
import img53 from "../assets/images/prod/MB/FlightBooking.jpg";
import img54 from "../assets/images/prod/MB/GarageWorkshopManagementSystem.jpg";
import img55 from "../assets/images/prod/MB/grocry app.png";
import img56 from "../assets/images/prod/MB/gym app.jpg";
import img57 from "../assets/images/prod/MB/hotel managment app.png";
import img58 from "../assets/images/prod/MB/LivestockManagement.jpg";
import img59 from "../assets/images/prod/MB/loan managment app.png";
import img60 from "../assets/images/prod/MB/looder booking app.png";
import img61 from "../assets/images/prod/MB/Logistic System.jpg";
import img62 from "../assets/images/prod/MB/MetaTrader_app.jpg";
import img63 from "../assets/images/prod/MB/movie app.png";
import img64 from "../assets/images/prod/MB/NGO Management.jpg";
import img65 from "../assets/images/prod/MB/property_dribbble.png";
import img66 from "../assets/images/prod/MB/pg app.jpg";
import img67 from "../assets/images/prod/MB/propertylist.png";
import img68 from "../assets/images/prod/MB/property_dribbble.png";
import img69 from "../assets/images/prod/MB/RealStateSoftware.jpg";
import img70 from "../assets/images/prod/MB/ride sharing app.jpg";
import img71 from "../assets/images/prod/MB/saloonManagement.png";
import img72 from "../assets/images/prod/MB/spaManagement.jpg";
import img73 from "../assets/images/prod/MB/sports.png";
import img74 from "../assets/images/prod/MB/tiffin.jpg";
import img75 from "../assets/images/prod/MB/trading app.png";
import img76 from "../assets/images/prod/MB/TravelBookingApp.png";
import img77 from "../assets/images/prod/MB/VehicleManagement.png";
import img78 from "../assets/images/prod/MB/VehicleTrackingApp.jpg";
import img79 from '../assets/images/blockchain/blockcahindevelopment.jpg'
import img80 from '../assets/images/blockchain/launchpad.png'
import img81 from '../assets/images/blockchain/wallet.png'
import img82 from '../assets/images/blockchain/token.jpeg'
import img83 from '../assets/images/blockchain/defi.png'
import img84 from '../assets/images/blockchain/nft.jpeg'
import img85 from '../assets/images/blockchain/dex.png'
import img86 from '../assets/images/games/andarbahar.jpg'
import img87 from '../assets/images/games/bacarrat.jpeg';
import img88 from '../assets/images/games/casino.jpg';
import img89 from '../assets/images/games/dragontiger.jpeg';
import img90 from '../assets/images/games/fantasy.jpg';
import img91 from '../assets/images/games/gamedevelop.jpeg';
import img92 from '../assets/images/games/ludo.png';
import img93 from '../assets/images/games/metaverse.jpg';
import img94 from '../assets/images/games/poker.jpeg';
import img95 from '../assets/images/games/rummy.png';
import img96 from '../assets/images/games/teenpatti.jpg';
import img97 from '../assets/images/metaverse/avatar.jpg';
import img98 from '../assets/images/metaverse/eventplateform.jpg';
import img99 from '../assets/images/metaverse/launchpad.jpeg';
import img100 from '../assets/images/metaverse/metaversedevelop.png';
import img101 from '../assets/images/metaverse/nftmarketplace.png';
import img102 from '../assets/images/metaverse/realestate.jpeg';
import img103 from '../assets/images/metaverse/socialmedia.jpg';
import img104 from '../assets/images/metaverse/virtualland.jpg';
import img105 from '../assets/images/metaverse/virtualshowroom.jpg';

import imgage from "../assets/images/logo/metablock-logos-main.png"
import brand1 from "../assets/img/brand1.png";
import brand2 from "../assets/img/brand2.png";
import brand3 from "../assets/img/brand3.png";
import brand4 from "../assets/img/brand4.png";
import brand5 from "../assets/img/brand5.webp";
import brand6 from "../assets/img/brand6.jpg";
import brand7 from "../assets/img/brand7.png";
import brand8 from "../assets/img/brand8.png";
import brand9 from "../assets/img/brand9.jpg";
import brand10 from "../assets/img/brand10.png";
import brand11 from "../assets/img/brand11.png";
import brand12 from "../assets/img/brand12.png";
import video2 from "../assets/images/video1.mp4"
import imagess from "../assets/images/new-metablock-scanner.jpg"
import { FaHome, FaEnvelope, FaFacebookF, FaLinkedin, FaWhatsapp, FaSkype } from 'react-icons/fa';
import { FiFacebook, FiInstagram, FiLinkedin, FiPhoneCall, FiMessageCircle, FiMessageSquare } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Timer from './Timer';
// import Timer from './Timer';
const Home = () => {

  const handleLocationClick = () => {
    // Handle location click functionality here
  };


  const [showContactForm, setShowContactForm] = useState(false); // State variable to manage contact form visibility

  const handleContactFormOpen = () => {
    setShowContactForm(true); // Open the contact form when "Get Started Now!" button is clicked
  };




  const navigate = useNavigate()

  const portfolioItems = [
    {
      id: 1,
      category: ["SoftWare"],
      title: 'E-Commerce Website',
      image: img1,
      subtitle: 'development'
    },
    {
      id: 2,
      category: ["Application"],
      title: 'Dating App',
      image: img2,
      subtitle: 'design',
    },
    {
      id: 3,
      category: ["Application"],
      title: 'Astrology App',
      image: img3,
      subtitle: 'art'
    },
    {
      id: 4,
      category: ["SoftWare"],
      title: 'Matrimonial SoftWare',
      image: img4,
      subtitle: 'Photoshop'
    },
    {
      id: 5,
      category: ["SoftWare"],
      title: 'Social Media Portal',
      image: img5,
      subtitle: 'development'
    },
    {
      id: 6,
      category: ["SoftWare"],
      title: 'LMS SoftWare',
      image: img6,
      subtitle: 'SoftWare'
    },
    {
      id: 7,
      category: ["Application"],
      title: 'Food Delivery',
      image: img7,
      subtitle: 'Application'
    },
    {
      id: 8,
      category: ["SoftWare"],
      title: 'School Management',
      image: img8,
      subtitle: 'SoftWare'
    },
    {
      id: 9,
      category: ["SoftWare"],
      title: 'CLinic Management',
      image: img9,
      subtitle: 'SoftWare'
    },
    {
      id: 10,
      category: ["SoftWare"],
      title: 'Job Portal',
      image: img10,
      subtitle: 'development'
    },
    {
      id: 11,
      category: ["SoftWare"],
      title: 'Reacharge Application',
      image: img11,
      subtitle: 'design'
    },
    {
      id: 12,
      category: ["SoftWare"],
      title: 'MLM SoftWare',
      image: img12,
      subtitle: 'art'
    },
    {
      id: 13,
      category: ["SoftWare"],
      title: 'ERP SoftWare',
      image: img13,
      subtitle: 'development'
    },
    {
      id: 14,
      category: ['design'],
      title: 'Reacharge Portal',
      image: img14,
      subtitle: 'design'
    },
    {
      id: 15,
      category: ["SoftWare"],
      title: 'MLM SoftWare',
      image: img15,
      subtitle: 'art'
    },
    {
      id: 16,
      title: "Quiz System",
      image: img16,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 17,
      title: "CRM SoftWare",
      image: img17,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 18,
      title: "HRM SoftWare",
      image: img18,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 19,
      title: "HRMS SoftWare",
      image: img19,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 20,
      title: "Accounting SoftWare",
      image: img20,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 21,
      title: "POS SoftWare",
      image: img21,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 22,
      title: "Employee Tracking",
      image: img22,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 23,
      title: "Inventory SoftWare",
      image: img23,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 24,
      title: "WareHouse SoftWare",
      image: img24,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 25,
      title: "University Management",
      image: img25,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 26,
      title: "LMS Application",
      image: img26,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 27,
      title: "Coaching Management",
      image: img27,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 28,
      title: "Library Management",
      image: img28,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 29,
      title: "News Portal",
      image: img29,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 30,
      title: "Blogging Website",
      image: img30,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 31,
      title: "Project Management",
      image: img31,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 32,
      title: "Task Management",
      image: img32,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 33,
      title: "Online Streaming",
      image: img33,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 34,
      title: "Audio Podcast",
      image: img34,
      category: ["SoftWare"],
      subtitle: "development"
    },
    {
      id: 35,
      title: "E-Book SoftWare",
      image: img35,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 36,
      title: "Hospital Management",
      image: img36,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 37,
      title: "Lab Management",
      image: img37,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 38,
      title: "Doctor Appointment",
      image: img38,
      category: ["Software"],
      subtitle: "SoftWare"
    },
    {
      id: 39,
      title: "Pharmacy Management",
      image: img39,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 40,
      title: "AC Repairing",
      image: img40,
      category: [],
      subtitle: "development"
    },
    {
      id: 41,
      title: "Advocate Management",
      image: img41,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 42,
      title: "Affilate Management",
      image: img42,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 43,
      title: "Algo Trading",
      image: img43,
      category: ['Application'],
      subtitle: "Application"
    },
    {
      id: 44,
      title: "Bus Booking",
      image: img44,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 45,
      title: "Cab Booking",
      image: img45,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 46,
      title: "Cattle Manager",
      image: img46,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 47,
      title: "Courier System",
      image: img47,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 48,
      title: "Crowd Funding",
      image: img48,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 49,
      title: "Crypto Trading",
      image: img49,
      category: ['Application'],
      subtitle: "Application"
    },
    {
      id: 50,
      title: "Dairy Farm ",
      image: img50,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 51,
      title: "EV Charging",
      image: img51,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 52,
      title: "Event Management",
      image: img52,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 53,
      title: "Flight Booking",
      image: img53,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 54,
      title: "Garage Workshop",
      image: img54,
      category: [],
      subtitle: "development"
    },
    {
      id: 55,
      title: "Grocery",
      image: img55,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 56,
      title: "Gym Management",
      image: img56,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 57,
      title: "Hotel Management",
      image: img57,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 58,
      title: "LiveStock Management",
      image: img58,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 59,
      title: "Loan Management",
      image: img59,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 60,
      title: "Lodder Booking",
      image: img60,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 61,
      title: "Logistic System",
      image: img61,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 62,
      title: "Metatrade Trading",
      image: img62,
      category: ['Application'],
      subtitle: "Application"
    },
    {
      id: 63,
      title: "Movie Ticket Booking",
      image: img63,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 64,
      title: "NGO Management",
      image: img64,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 65,
      title: "Property Management",
      image: img65,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 66,
      title: "PG Management",
      image: img66,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 67,
      title: "Property Listing",
      image: img67,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 68,
      title: "Property Management",
      image: img68,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 69,
      title: "Real EState",
      image: img69,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 70,
      title: "Ride Sharing",
      image: img70,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 71,
      title: "Saloon Management",
      image: img71,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 72,
      title: "Spa Management",
      image: img72,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 73,
      title: "Sport Management",
      image: img73,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 74,
      title: "Tiffin Center",
      image: img74,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 75,
      title: "Trading App",
      image: img75,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 76,
      title: "Travel Booking",
      image: img76,
      category: ["Application"],
      subtitle: "Application"
    },

    {
      id: 77,
      title: "Vehicle Management",
      image: img77,
      category: ["SoftWare"],
      subtitle: "SoftWare"
    },
    {
      id: 78,
      title: "Vehicle Tracking",
      image: img78,
      category: ["Application"],
      subtitle: "Application"
    },
    {
      id: 79,
      category: ["Blockchain"],
      title: 'Blockchain Development',
      image: img79,
      subtitle: 'Blockchain'
    },

    {
      id: 80,
      category: ["Blockchain"],
      title: 'Launchpad Development',
      image: img80,
      subtitle: 'Blockchain'
    },
    {
      id: 81,
      category: ["Blockchain"],
      title: 'Wallet Development',
      image: img81,
      subtitle: 'Blockchain'
    },
    {
      id: 82,
      category: ["Blockchain"],
      title: 'Token Development',
      image: img82,
      subtitle: 'Blockchain'
    },
    {
      id: 83,
      category: ["Blockchain"],
      title: 'Defi Development',
      image: img83,
      subtitle: 'Blockchain'
    },
    {
      id: 84,
      category: ["Blockchain"],
      title: 'NFT Development',
      image: img84,
      subtitle: 'Blockchain'
    },
    {
      id: 85,
      category: ["Blockchain"],
      title: 'Dex Development',
      image: img85,
      subtitle: 'Blockchain'
    },
    {
      id: 86,
      category: ["Games"],
      title: 'Andar Bahar',
      image: img86,
      subtitle: 'Games'
    }, {
      id: 87,
      category: ["Games"],
      title: 'Baccarat',
      image: img87,
      subtitle: 'Games'
    }, {
      id: 88,
      category: ["Games"],
      title: 'Casino',
      image: img88,
      subtitle: 'Games'
    }, {
      id: 89,
      category: ["Games"],
      title: 'Dragon Tiger',
      image: img89,
      subtitle: 'Games'
    }, {
      id: 90,
      category: ["Games"],
      title: 'Fantasy',
      image: img90,
      subtitle: 'Games'
    }, {
      id: 91,
      category: ["Games"],
      title: 'Game Development',
      image: img91,
      subtitle: 'Games'
    }, {
      id: 92,
      category: ["Games"],
      title: 'Ludo',
      image: img92,
      subtitle: 'Games'
    }, {
      id: 93,
      category: ["Games"],
      title: 'Metaverse',
      image: img93,
      subtitle: 'Games'
    }, {
      id: 94,
      category: ["Games"],
      title: 'Poker',
      image: img94,
      subtitle: 'Games'
    }, {
      id: 95,
      category: ["Games"],
      title: 'Rummy',
      image: img95,
      subtitle: 'Games'
    },
    {
      id: 96,
      category: ["Games"],
      title: 'Teen Patti',
      image: img96,
      subtitle: 'Games'
    },
    {
      id: 97,
      category: ["Metaverse"],
      title: 'Avatar',
      image: img97,
      subtitle: 'Metaverse'
    }, {
      id: 98,
      category: ["Metaverse"],
      title: 'Event Plateform',
      image: img98,
      subtitle: 'Metaverse'
    }, {
      id: 99,
      category: ["Metaverse"],
      title: 'Launchpad Development',
      image: img99,
      subtitle: 'Metaverse'
    }, {
      id: 100,
      category: ["Metaverse"],
      title: 'Metaverse Development',
      image: img100,
      subtitle: 'Metaverse'
    }, {
      id: 101,
      category: ["Metaverse"],
      title: 'NFT Marketplace ',
      image: img101,
      subtitle: 'Metaverse'
    }, {
      id: 102,
      category: ["Metaverse"],
      title: 'Real State',
      image: img102,
      subtitle: 'Metaverse'
    }, {
      id: 103,
      category: ["Metaverse"],
      title: 'Social Media',
      image: img103,
      subtitle: 'Metaverse'
    }, {
      id: 104,
      category: ["Metaverse"],
      title: 'Virtual Land',
      image: img104,
      subtitle: 'Metaverse'
    }, {
      id: 105,
      category: ["Metaverse"],
      title: 'Virtual Showroom',
      image: img105,
      subtitle: 'Metaverse'
    }

  ];

  const brands = [
    {
      image: brand1
    },
    {
      image: brand2
    },
    {
      image: brand3
    },
    {
      image: brand4
    },
    {
      image: brand5
    },
    {
      image: brand6
    },

  ];

  const brands2 = [

    {
      image: brand7
    },
    {
      image: brand8
    },
    {
      image: brand9
    },
    {
      image: brand10
    },
    {
      image: brand11
    },
    {
      image: brand12
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [displayAllItems, setDisplayAllItems] = useState(false);
  const [displayCount, setDisplayCount] = useState(15);

  const filteredPortfolioItems =
    selectedCategory === 'All'
      ? displayAllItems ? portfolioItems : portfolioItems.slice(0, displayCount)
      : portfolioItems.filter((item) => item.category.includes(selectedCategory)).slice(0, displayCount);





  // Function to handle "View More" button click
  const handleViewToggle = () => {
    setDisplayAllItems(!displayAllItems);
  };


  const filteredPortfolioItemss = portfolioItems.slice(0, displayCount);

  const [showVideoModal, setShowVideoModal] = useState(false); // State variable to manage video modal visibility

  const handleKnowMoreClick = () => {
    setShowVideoModal(true); // Open the video modal when "Know More" button is clicked
  };

  const words = [
    'E-Commerce Website',
    'Dating App',
    'Astrology App',
    'Matrimonial Software',
    'Social Media Portal',
    'LMS Software',
    'Food Delivery App',
    'School Management SoftWare',
    'Clinic Management SoftWare',
    'Job Portal',
    'Recharge Portal',
    'MLM Software',
    'ERP Software',
    'HRMS Software',
    'Accounting Software'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change the word index
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);


    return () => clearInterval(intervalId);
  }, []);

  return (

    <div className='main-home'>
      <header className="rainbow-header header-default header-transparent header-center-align header-sticky">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-6 col-6">
              <div className="header-left d-flex">
                <div className="logo">
                  <a style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                    <img style={{ width: "130px" }} src={imgage} alt="Metablock Logo" />
                  </a>
                </div>
              </div>
            </div>


            <div className="col-lg-2 col-md-6 col-6">
              <div className="header-right">
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Slider Area  */}
      <div style={{ backgroundSize: "cover" }} className="slider-area slider-style-1 variation-default bg_image  height-950 d-flex align-items-center bg_image--23" id="home" data-black-overlay={7}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="inner text-center">
                <h1 style={{ marginTop: "20vh" }} className="title display-one">
                  Build Your Software<br />
                  <span className="">
                    <span className="cd-headline clip is-full-width">
                      <span className="cd-words-wrapper" >
                        {words.map((word, index) => (
                          <b
                            key={index}
                            className={index === currentIndex ? 'is-visible theme-gradient' : 'is-hidden theme-gradient'}
                          >
                            {word}
                          </b>
                        ))}
                      </span>
                    </span>
                  </span>
                </h1>
                <p className="description">We help Business grow and dominate their industries with the help of the latest IT technologies.
                  experiences, and print materials.</p>
                <div className="button-group mt--30">
                  <a onClick={handleContactFormOpen} style={{ cursor: "pointer" }} className="btn-default round btn-large">GET STARTED NOW!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Service-5 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Portfolio Area  */}
      <div className="rainbow-portfolio-area rainbow-section-gap masonary-wrapper-activation" id="projects">
        <div className="container">
          <div className="w-100 d-flex align-items-center justify-content-center flex-column">
            <h1 style={{ fontSize: '54px' }} className="display-6 pb-3 text-center pt-5 glow-text lh-1 mb-3 text-white fw-bold section-title g-text">
              Our Digital Product
            </h1>
            <p className="text-center text-white">Transform your digital landscape with MetaBlock's innovative IT solutions,specializing in Blockchain<br /> technology, online platforms, the metaverse, gaming, and software development. Discover <br /> unparalleled expertise andtailored solutions to meet your every IT need.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="rainbow-portfolio-filter filter-button-default messonry-button text-center mb--30">
                <button onClick={() => setSelectedCategory('All')} className={selectedCategory === 'All' ? 'is-checked' : ''} data-filter="*">
                  <span className="filter-text">All</span>
                </button>

                <button onClick={() => setSelectedCategory('Application')} className={selectedCategory === 'Application' ? 'is-checked' : ''} data-filter=".Application">
                  <span className="filter-text">Application</span>
                </button>
                <button onClick={() => setSelectedCategory('SoftWare')} className={selectedCategory === 'SoftWare' ? 'is-checked' : ''} data-filter=".SoftWare">
                  <span className="filter-text">Software</span>
                </button>
                <button onClick={() => setSelectedCategory('Blockchain')} className={selectedCategory === 'Blockchain' ? 'is-checked' : ''} data-filter=".Blockchain">
                  <span className="filter-text">Blockchain</span>
                </button>
                <button onClick={() => setSelectedCategory('Games')} className={selectedCategory === 'Games' ? 'is-checked' : ''} data-filter=".Games">
                  <span className="filter-text">Games</span>
                </button>
                <button onClick={() => setSelectedCategory('Metaverse')} className={selectedCategory === 'Metaverse' ? 'is-checked' : ''} data-filter=".Metaverse">
                  <span className="filter-text">Metaverse</span>
                </button>


                {/* Add category buttons dynamically here if needed */}
              </div>
              <div className="portfolio-items grid-metro3 mesonry-list">
                <div className="resizer" />
                {/* Render portfolio items dynamically */}
                <div className="portfolio-row">
                  {filteredPortfolioItems.map((item, index) => (
                    <div key={item.id} className={`portfolio-3 ${item.category.join(' ')}`}>
                      <div className="rainbow-card portfolio">
                        <div className="inner">
                          <div className="thumbnail">
                            <figure className="card-image">
                              <a href="portfolio-details.html">
                                <Link >
                                  <img style={{ height: "40vh" }} src={item.image} alt={item.title} />
                                </Link>

                              </a>
                            </figure>
                            <a className="rainbow-overlay" />
                          </div>
                          <div className="content">
                            <h5 className="title mb--30">
                              <a>{item.title}</a>
                            </h5>
                            <div style={{ margin: "auto" }}>
                              <button onClick={handleKnowMoreClick}>Know More</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Start Load More Button  */}
          <div className="row row--15">
            <div className="col-lg-12">
              <div className="rainbow-load-more text-center mt--60">
                <a className="btn btn-default btn-large btn-icon round" onClick={handleViewToggle}>
                  <span>{displayAllItems ? 'View Less' : 'View More'}</span>
                  <span className="icon"></span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* End Portfolio Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Brand Style-1  */}
      <div className="rainbow-brand-area rainbow-section-gap" id="clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center" data-sal-duration={700} data-sal-delay={100}>
                <h2 className="title w-600 mb--50">Brands We Have Worked With</h2>
                <p className="description b1"> </p>
              </div>
            </div>
          </div>
          <div className='brands-div'>
            {brands.map((item, index) => (
              <div key={index}>
                <img style={{ width: "100px", height: "80px", marginLeft: "70px" }} src={item.image} alt="" />
              </div>
            ))}
          </div>

          <div style={{ marginTop: "10vh" }} className='brands-div'>
            {brands2.map((item, index) => (
              <div key={index}>
                <img style={{ width: "100px", height: "80px", marginLeft: "70px" }} src={item.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Brand Style-1  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      <footer className="text-lg-start" style={{ backgroundColor: '#000000', textAlign: 'center' }}>
        <section style={{ background: '#010101' }}>
          <div className="container text-md-start mt-5">
            <div className="row mt-3 d-flex align-center">
              <div style={{ marginTop: '5vh' }} className="col-md-2 col-lg-2 col-xl-2 mx-auto footer_logo ">
                <div class="Company-logo">
                  <img style={{ marginBottom: 50, width: 400 }} className="Company-logo" src={imgage} alt />
                </div>
                <div className="payment-method">
                  <div className="image-container">
                    <img className="footer-in-payment-method" src={imagess} alt />
                    <div className="overlay-text">Scan Me</div>
                    <p style={{ fontSize: 15, textAlign: 'center' }}>Save Contact Details</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                <p>
                  <a href="#projects" onClick={() => setSelectedCategory('All')} className={selectedCategory === 'All' ? 'is-checked' : ''}   ><span className="footer-in-Pages">ALL</span></a>
                </p>
                <p>
                  <a href="#projects" onClick={() => setSelectedCategory('Blockchain')} className={selectedCategory === 'Blockchain' ? 'is-checked' : ''}  ><span className="footer-in-Pages">BLOCKCHAIN</span></a>
                </p>
                <p className="footer-contact-number">
                  <a href="#projects" onClick={() => setSelectedCategory('Application')} className={selectedCategory === 'Application' ? 'is-checked' : ''}><span className="footer-in-Pages">APPLICATION</span></a>
                </p>
                <p className="footer-contact-number">
                  <a href="#projects" onClick={() => setSelectedCategory('SoftWare')} className={selectedCategory === 'SoftWare' ? 'is-checked' : ''}><span className="footer-in-Pages">SOFTWARE</span></a>
                </p>
                <p className="footer-contact-number">
                  <a href="#projects" onClick={() => setSelectedCategory('Games')} className={selectedCategory === 'Games' ? 'is-checked' : ''}><span className="footer-in-Pages">GAMES</span></a>
                </p>
                <p className="footer-contact-number">
                  <a href="#projects" onClick={() => setSelectedCategory('Metaverse')} className={selectedCategory === 'Metaverse' ? 'is-checked' : ''} ><span className="footer-in-Pages">METAVERSE</span></a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                <p className="footer-contact-number">
                  <a href="#home"><span className="footer-in-Pages">HOME</span></a>
                </p>
                <p className="footer-contact-number">
                  <a href='#service'><span className="footer-in-Pages">SERVICE</span></a>
                </p>
                <p className="footer-contact-number">
                  <a href="#projects"><span className="footer-in-Pages">PROJECTS</span></a>
                </p>

                <p onClick={handleContactFormOpen} className="footer-contact-number">
                  <a><span className="footer-in-Pages">CONTACT</span></a>
                </p>

              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                <p><FaHome style={{ marginRight: 5 }} />30-A, Gopalpura Bypass Rd,
                  opp. Holiday Inn Hotel, opp.
                  Holiday Inn, Sultan Nagar, Santi Nagar, Gurjar Ki Thadi, Jaipur, Rajasthan 302020
                  <a target='_blank' href="https://maps.app.goo.gl/DtA7yg3N7yNKuXgE7">   <span onClick={handleLocationClick} style={{ background: 'purple', cursor: 'pointer', borderRadius: 2 }}><IoLocationOutline />
                  </span></a>
                </p>
                <a href="mailto:info@metablocktechnologies.in" target="_blank" rel="noopener noreferrer">
                  <p className="footer-contact-number"><FaEnvelope style={{ marginRight: 5 }} />info@metablocktechnologies.in</p>
                </a>
                <a href="tel:+919358593003" target="_blank" rel="noopener noreferrer">
                  <p className="footer-contact-number"> <FiPhoneCall style={{ marginRight: 5 }} />+91 935 859 3003</p>
                </a>
                <a href="tel:+919358593002" target="_blank" rel="noopener noreferrer">
                  <p className="footer-contact-number"> <FiPhoneCall style={{ marginRight: 5 }} />+91 935 859 3002</p>
                </a>
                <div style={{ marginBottom: "10px" }}>
                  <a href="https://www.facebook.com/metablocktechnologies" target="_blank" rel="noopener noreferrer" className=" me-4">
                    <FaFacebookF style={{ fontSize: "20px" }} />
                  </a>
                  <a href="https://www.instagram.com/metablocktechnologies1?igsh=Zmxva3Fnd3o1NzBw" target="_blank" rel="noopener noreferrer" className=" me-4">
                    <FiInstagram style={{ fontSize: "20px" }} />
                  </a>
                  <a href="https://www.linkedin.com/company/metablocktechnologies" target="_blank" rel="noopener noreferrer" className=" me-4">
                    <FaLinkedin style={{ fontSize: "20px" }} />
                  </a>
                  <a href="https://wa.me/919358593003" target="_blank" rel="noopener noreferrer" className=" me-4">
                    <FaWhatsapp style={{ fontSize: "20px" }} />
                  </a>
                  <a href="skype:live:.cid.example?chat" target="_blank" rel="noopener noreferrer" className=" me-4">
                    <FaSkype style={{ fontSize: "20px" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>

      <Modal className='main-modal' show={showVideoModal} onHide={() => setShowVideoModal(false)} size='lg' >
        <Modal.Header closeButton>
          <Modal.Title>Video Title</Modal.Title>
        </Modal.Header>
        <Modal.Body  >
          <iframe width="560" height="400" src={video2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button href='https://calendly.com/metablock-sale' target='_blank' className='modal-butt' variant="secondary" >
            Book A Call
          </Button>
        </Modal.Footer>
      </Modal>




      <Modal show={showContactForm} onHide={() => setShowContactForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "1100px" }}>
          <div className="wrappers contct-form" id="app">
            <div className="card-formd">

              <div className="card-form__inner">
                <div className="col-xl-12 ">
                  <div className="row">
                    <div className="col-md-6 p-3">
                      <div className="card-input">
                        <label htmlFor="cardNumber" className="card-input__label">Name</label>
                        <input type="text" placeholder=" Enter Name" id="cardNumber" className="col-md-12" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-md-6 p-3">
                      <div className="card-input">
                        <label htmlFor="contactNo" className="card-input__label">Contact No.</label>
                        <input
                          type="text"
                          id="contactNo"
                          placeholder="Enter Contact No."
                          className="col-md-12"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-12 ">
                  <div className="row">
                    <div className="col-md-12 p-3">
                      <div className="card-input">
                        <label htmlFor="cardNumber" className="card-input__label">In which Software You Are Intresrted</label>
                        <input type="text" placeholder="Enter Software Name" id="cardNumber" className="col-md-12 " autoComplete="off" />
                      </div>
                    </div>

                  </div>
                </div>


                <div className="col-xl-12 ">
                  <div className="row">
                    <div className="col-md-12 p-3">
                      <div className="card-input">
                        <label htmlFor="cardNumber" className="card-input__label">Description</label>
                        <textarea type="text" placeholder="Enter Your Message...." id="cardNumber" className="col-md-12 " autoComplete="off" />
                      </div>
                    </div>

                  </div>
                </div>


                <button className="card-form__button">
                  Submit
                </button>
              </div>
            </div>

          </div>
        </Modal.Body>

      </Modal>

      <div className='offers-upper-div'>
        <div className='offers-main'>
          <div>
            <h6 className='mt-4'>Hurry Up ! The offer is limited.</h6>
          </div>
          <div>
            <Timer />
          </div>
        </div>
      </div>

    </div>

  )
}

export default Home
