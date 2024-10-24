import React, { useState } from 'react';

const LostItemCard = ({ item }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-[#DFF2EB]">
      <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 text-[#4A628A]">{item.title}</h2>
        <p className="text-sm text-[#7AB2D3]">{item.category}</p>
        <p className="text-gray-800">{item.description}</p>
      </div>
    </div>
  );
};

const LostItemsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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
    <div className="container h-full  mx-auto px-4 bg-[#B9E5E8] ">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-[#4A628A]">Lost Items in College</h1>
        <input
          type="text"
          placeholder="Search for lost items"
          className="border p-2 rounded-lg w-1/3 bg-white"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)} // Update the search query on change
        />
      </div>
  {/* Pagination Controls */}
  <div className="flex justify-between items-center py-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="bg-[#7AB2D3] text-white py-2 px-4 rounded-lg hover:bg-[#4A628A] disabled:opacity-50"
        >
          Previous
        </button>

        <p className="text-[#4A628A]">
          Page {currentPage} of {totalPages}
        </p>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="bg-[#7AB2D3] text-white py-2 px-4 rounded-lg hover:bg-[#4A628A] disabled:opacity-50"
        >
          Next
        </button>
      </div>
      {/* Display the filtered and paginated items */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {currentItems.map(item => (
          <LostItemCard key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
};

export default LostItemsPage;


const lostItems = [
    {
      id: 1,
      image: 'https://images-cdn.ubuy.co.in/660afb0ee5b60126023db7d9-aesthetic-backpack-cute-student-backpack.jpg',
      title: 'Backpack/Bag',
      category: 'Essentials',
      description: 'I lost my black backpack in the college campus, likely in the cafeteria or around the main building. It has a red zipper and a small keychain attached to the handle. There’s a laptop inside along with some notebooks. If found, please contact me at [Insert Contact Details].',
    },
    {
      id: 2,
      image: 'https://moonsterleather.com/cdn/shop/articles/journal_vs_notebook_1920x.jpg?v=1695818075',
      title: 'Notebooks',
      category: 'Stationery',
      description: 'I lost my notebook in the library. It’s a spiral-bound notebook with a blue cover and several important class notes. Inside, you’ll find my name, "Yash Malviya", written on the first page. If found, kindly contact me at [Insert Contact Details].',
    },
    {
      id: 3,
      image: 'https://m.media-amazon.com/images/I/81xOup+lFeL.jpg',
      title: 'Stationery (Pens, Pencils, etc.)',
      category: 'Stationery',
      description: 'I lost a set of pens and pencils, likely left behind in the lecture hall. The set is in a transparent pencil case with a black zipper. If found, please reach out to me at [Insert Contact Details].',
    },
    {
      id: 4,
      image: 'https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/India%20LOB/Stationery%2C%20Letterheads%20and%20Stamps/ID%20Cards%20(Horizontal%20%2B%20Vertcal)/IN_ID-cardsl_Hero-image_03',
      title: 'ID Card/Access Card',
      category: 'Identification',
      description: 'I misplaced my college ID card, possibly left in the cafeteria or near the main building. The ID card has my photo and my name, "Yash Malviya". If found, kindly return it by contacting me at [Insert Contact Details].',
    },
    {
      id: 5,
      image: 'https://moonsterleather.com/cdn/shop/articles/journal_vs_notebook_1920x.jpg?v=1695818075',
      title: 'Books',
      category: 'Essentials',
      description: 'I lost my book titled [Insert Book Title] in the college campus, most likely around the library or the cafeteria. The book has a distinct cover: it’s [Insert Color/Design of the Book], and there’s a small name tag with "Yash Malviya" written inside the first page. If found, please contact me at [Insert Contact Details].',
    },
    {
      id: 6,
      image: 'https://moonsterleather.com/cdn/shop/articles/journal_vs_notebook_1920x.jpg?v=1695818075',
      title: 'Wallet',
      category: 'Essentials',
      description: 'I lost my brown leather wallet, likely in the campus or near the dorms. It contains my student ID and a few cards. Please contact me if found at [Insert Contact Details].',
    },
    {
      id: 7,
      image: 'https://moonsterleather.com/cdn/shop/articles/journal_vs_notebook_1920x.jpg?v=1695818075',
      title: 'Keys (Dorm room, Bike, etc.)',
      category: 'Essentials',
      description: 'I lost a set of keys, including my dorm room key and bike key, attached to a red keychain. If found, kindly return them to me. Contact: [Insert Contact Details].',
    },
    {
      id: 8,
      image: 'https://moonsterleather.com/cdn/shop/articles/journal_vs_notebook_1920x.jpg?v=1695818075',
      title: 'Phone',
      category: 'Electronics',
      description: 'I lost my smartphone, a black [Insert Brand and Model], possibly in the gym or cafeteria. The phone has a green case. If found, please contact me at [Insert Contact Details].',
    },
    {
      id: 9,
      image: 'https://moonsterleather.com/cdn/shop/articles/journal_vs_notebook_1920x.jpg?v=1695818075',
      title: 'Laptop',
      category: 'Electronics',
      description: 'I misplaced my laptop, a silver [Insert Brand and Model], likely in the library or dorm room. It’s in a black case. Please contact me if found at [Insert Contact Details].',
    },
    {
      id: 10,
      image: 'https://moonsterleather.com/cdn/shop/articles/journal_vs_notebook_1920x.jpg?v=1695818075',
      title: 'Earphones/Headphones',
      category: 'Electronics',
      description: 'I lost my wireless earphones in the gym or on the college shuttle. They are white with a small charging case. Contact me at [Insert Contact Details] if found.',
    },
    {
      id: 11,
      image: 'https://moonsterleather.com/cdn/shop/articles/journal_vs_notebook_1920x.jpg?v=1695818075',
      title: 'Water Bottle',
      category: 'Essentials',
      description: 'I misplaced my blue water bottle, likely in the campus cafeteria. It has a sticker with "Stay Hydrated" written on it. Please contact me at [Insert Contact Details] if found.',
    },
    {
      id: 12,
      image: 'https://moonsterleather.com/cdn/shop/articles/journal_vs_notebook_1920x.jpg?v=1695818075',
      title: 'Glasses/Sunglasses',
      category: 'Essentials',
      description: 'I lost my sunglasses near the sports complex. They are black with gold frames. Please contact me at [Insert Contact Details] if found.',
    },
    {
      id: 13,
      image: 'https://moonsterleather.com/cdn/shop/articles/journal_vs_notebook_1920x.jpg?v=1695818075',
      title: 'Charger (Phone or Laptop)',
      category: 'Electronics',
      description: 'I lost my laptop charger in the library, likely on the second floor. It’s a white charger for a [Insert Brand]. If found, please contact me at [Insert Contact Details].',
    },
    {
      id: 14,
      image: 'https://moonsterleather.com/cdn/shop/articles/journal_vs_notebook_1920x.jpg?v=1695818075',
      title: 'Clothing items (Jacket, Sweater, etc.)',
      category: 'Apparel',
      description: 'I lost my grey hoodie, possibly in the sports complex or near the dorms. It has "SVVV" printed on the front. Contact me at [Insert Contact Details] if found.',
    },
    {
      id: 15,
      image: 'https://moonsterleather.com/cdn/shop/articles/journal_vs_notebook_1920x.jpg?v=1695818075',
      title: 'USB Drives',
      category: 'Electronics',
      description: 'I lost my USB drive, likely in the computer lab. It’s a black 32GB drive with a small sticker that has my initials. If found, please contact me at [Insert Contact Details].',
    },
  ];