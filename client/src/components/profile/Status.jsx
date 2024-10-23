import React from 'react'

function Status() {
    return (<div className='flex gap-2 flex-col w-[90%] items-center'>
    <div className='bg-[#262525] px-4 gap-5  p-2 items-center overflow-x-auto no-scrollbar rounded-md flex w-[98%] h-24' >
              {user.map((data) => (
                <div className=' cursor-pointer items-center  flex flex-col gap-1 text-white ' >
                  {/* <img src={data.photo} alt="" className='h-12 object-cover w-12 rounded-full border-[3px] border-[#ece9e941]' /> */}
                  <h1 className='h-12 object-cover w-12 rounded-full border text-2xl font-mono font-[900] text-[#eaeaea92] flex items-center justify-center bg-[#ece9e941]' >
                    {data.name.charAt(0)}
                  </h1>
                  <h1 className=' flex items-center font-sans font-[600] text-base' >{data.name}</h1>
                </div>
              ))}
            </div>
          
        <div className="w-[98%] items-center rounded-md bg-[#ffffff27]  h-[36rem] gap-10 grid-cols-5 py-3 px-1 grid no-scrollbar overflow-auto">
            {lostItems.map((data) => (
                <div
                    key={data.id} // Ensure each item has a unique key
                    className="h-64 w-52 items-center bg-[#1B1D1F] border text-white border-gray-200 rounded-lg shadow  dark:border-gray-700"
                >
                    <img
                        src={data.image}
                        alt={data.name || "Lost Item"} // Use a meaningful alt text
                        className="p-3 rounded-t-2xl h-2/3 w-full"
                    />
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {data.category}
                            </h5>
                        </a>
                        <div className="flex font-sans font-[400] mt-2 w-full  text-xs text-[#888888] items-center">
                            <p className='line-clamp-2'>
                                {data.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
          
    </div>


    )
}

export default Status
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
const user = [
    {
        name: 'Aanya',
        photo: 'https://images.inc.com/uploaded_files/image/1024x576/getty_481292845_77896.jpg'
      },
      {
        name: 'John',
        photo: 'https://example.com/photos/john.jpg'
      },
      {
        name: 'Emily',
        photo: 'https://example.com/photos/emily.jpg'
      },
      {
        name: 'Michael',
        photo: 'https://example.com/photos/michael.jpg'
      },
      {
        name: 'Sarah',
        photo: 'https://example.com/photos/sarah.jpg'
      },
      {
        name: 'David',
        photo: 'https://example.com/photos/david.jpg'
      },
      {
        name: 'Sophia',
        photo: 'https://example.com/photos/sophia.jpg'
      },
      {
        name: 'Daniel',
        photo: 'https://example.com/photos/daniel.jpg'
      },
      {
        name: 'Olivia',
        photo: 'https://example.com/photos/olivia.jpg'
      },
      {
        name: 'James',
        photo: 'https://example.com/photos/james.jpg'
      },
      {
        name: 'Mia',
        photo: 'https://example.com/photos/mia.jpg'
      },
      {
        name: 'Lucas',
        photo: 'https://example.com/photos/lucas.jpg'
      },
      {
        name: 'Emma',
        photo: 'https://example.com/photos/emma.jpg'
      },
      {
        name: 'Liam',
        photo: 'https://example.com/photos/liam.jpg'
      },
      {
        name: 'Ava',
        photo: 'https://example.com/photos/ava.jpg'
      },
      {
        name: 'Noah',
        photo: 'https://example.com/photos/noah.jpg'
      },
      {
        name: 'Isabella',
        photo: 'https://example.com/photos/isabella.jpg'
      },
      {
        name: 'Ethan',
        photo: 'https://example.com/photos/ethan.jpg'
      },
      {
        name: 'Grace',
        photo: 'https://example.com/photos/grace.jpg'
      },
      {
        name: 'Logan',
        photo: 'https://example.com/photos/logan.jpg'
      },
      {
        name: 'Chloe',
        photo: 'https://example.com/photos/chloe.jpg'
      }
  
  ]