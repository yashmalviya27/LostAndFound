import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// Card component to display each lost item
const LostItemCard = ({ item }) => {
  const cardRef = useRef(null); // Reference to the card element

  useEffect(() => {
    // GSAP entry animation for the card when it first appears
    gsap.from(cardRef.current, {
      opacity: 50,
      y: 70, // Cards will appear to slide up from below
      duration: 1,
      ease: 'power3.out',
      stagger: 1, // Small stagger for each card
    });
  }, []);

  return (
    <div
      ref={cardRef} // Attach GSAP animation to this div
      className="border rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-32 object-cover" // Adjust height for better appearance
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
        <p className="text-sm text-gray-600">{item.category}</p>
        <p className="text-gray-800 mt-2">{item.description}</p>
      </div>
    </div>
  );
};

// Main page component
const LostItemsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 2 columns of 3 items each

  // Filter lost items based on the search query
  const filteredItems = lostItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate indices of the first and last items to display for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages based on the filtered items
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Lost Items in College</h1>
        <input
          type="text"
          placeholder="Search for lost items"
          className="border p-2 rounded-lg w-1/3"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Display the filtered and paginated items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map(item => (
          <LostItemCard key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg disabled:opacity-50 transition-opacity duration-200"
        >
          Previous
        </button>

        <p className="text-gray-700">
          Page {currentPage} of {totalPages}
        </p>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg disabled:opacity-50 transition-opacity duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};


const lostItems = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'Backpack/Bag',
      category: 'Essentials',
      description: 'I lost my black backpack in the college campus, likely in the cafeteria or around the main building. It has a red zipper and a small keychain attached to the handle. There’s a laptop inside along with some notebooks. If found, please contact me at [Insert Contact Details].',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      title: 'Notebooks',
      category: 'Stationery',
      description: 'I lost my notebook in the library. It’s a spiral-bound notebook with a blue cover and several important class notes. Inside, you’ll find my name, "Yash Malviya", written on the first page. If found, kindly contact me at [Insert Contact Details].',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      title: 'Stationery (Pens, Pencils, etc.)',
      category: 'Stationery',
      description: 'I lost a set of pens and pencils, likely left behind in the lecture hall. The set is in a transparent pencil case with a black zipper. If found, please reach out to me at [Insert Contact Details].',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150',
      title: 'ID Card/Access Card',
      category: 'Identification',
      description: 'I misplaced my college ID card, possibly left in the cafeteria or near the main building. The ID card has my photo and my name, "Yash Malviya". If found, kindly return it by contacting me at [Insert Contact Details].',
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/150',
      title: 'Books',
      category: 'Essentials',
      description: 'I lost my book titled [Insert Book Title] in the college campus, most likely around the library or the cafeteria. The book has a distinct cover: it’s [Insert Color/Design of the Book], and there’s a small name tag with "Yash Malviya" written inside the first page. If found, please contact me at [Insert Contact Details].',
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/150',
      title: 'Wallet',
      category: 'Essentials',
      description: 'I lost my brown leather wallet, likely in the campus or near the dorms. It contains my student ID and a few cards. Please contact me if found at [Insert Contact Details].',
    },
    {
      id: 7,
      image: 'https://via.placeholder.com/150',
      title: 'Keys (Dorm room, Bike, etc.)',
      category: 'Essentials',
      description: 'I lost a set of keys, including my dorm room key and bike key, attached to a red keychain. If found, kindly return them to me. Contact: [Insert Contact Details].',
    },
    {
      id: 8,
      image: 'https://via.placeholder.com/150',
      title: 'Phone',
      category: 'Electronics',
      description: 'I lost my smartphone, a black [Insert Brand and Model], possibly in the gym or cafeteria. The phone has a green case. If found, please contact me at [Insert Contact Details].',
    },
    {
      id: 9,
      image: 'https://via.placeholder.com/150',
      title: 'Laptop',
      category: 'Electronics',
      description: 'I misplaced my laptop, a silver [Insert Brand and Model], likely in the library or dorm room. It’s in a black case. Please contact me if found at [Insert Contact Details].',
    },
    {
      id: 10,
      image: 'https://via.placeholder.com/150',
      title: 'Earphones/Headphones',
      category: 'Electronics',
      description: 'I lost my wireless earphones in the gym or on the college shuttle. They are white with a small charging case. Contact me at [Insert Contact Details] if found.',
    },
    {
      id: 11,
      image: 'https://via.placeholder.com/150',
      title: 'Water Bottle',
      category: 'Essentials',
      description: 'I misplaced my blue water bottle, likely in the campus cafeteria. It has a sticker with "Stay Hydrated" written on it. Please contact me at [Insert Contact Details] if found.',
    },
    {
      id: 12,
      image: 'https://via.placeholder.com/150',
      title: 'Glasses/Sunglasses',
      category: 'Essentials',
      description: 'I lost my sunglasses near the sports complex. They are black with gold frames. Please contact me at [Insert Contact Details] if found.',
    },
    {
      id: 13,
      image: 'https://via.placeholder.com/150',
      title: 'Charger (Phone or Laptop)',
      category: 'Electronics',
      description: 'I lost my laptop charger in the library, likely on the second floor. It’s a white charger for a [Insert Brand]. If found, please contact me at [Insert Contact Details].',
    },
    {
      id: 14,
      image: 'https://via.placeholder.com/150',
      title: 'Clothing items (Jacket, Sweater, etc.)',
      category: 'Apparel',
      description: 'I lost my grey hoodie, possibly in the sports complex or near the dorms. It has "SVVV" printed on the front. Contact me at [Insert Contact Details] if found.',
    },
    {
      id: 15,
      image: 'https://via.placeholder.com/150',
      title: 'USB Drives',
      category: 'Electronics',
      description: 'I lost my USB drive, likely in the computer lab. It’s a black 32GB drive with a small sticker that has my initials. If found, please contact me at [Insert Contact Details].',
    },
  ];
export default LostItemsPage;
