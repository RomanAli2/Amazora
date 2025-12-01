import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => ({
     searchText: "",
    Deals: [
      {
        id: 1,
        ProductTitle: "T-Shirt for boys",
        price: 15,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMJom5Z3D308Zg7rRR4dUDLuQEVkObnmqmg&s",
      },
      {
        id: 2,
        ProductTitle: "Famous Hoodie",
        price: 12,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRynVLCaB27b5XjFiW1AorD8TCGJ84AFlMm1g&s",
      },
      {
        id: 3,
        ProductTitle: "Mid-rise skinny jeans",
        price: 16,
        image: "https://images.napali.app/global/element-products/all/default/xlarge/eljdp00106_element,f_bnt0_frt1.jpg",
      },
       {
        id: 4,
        ProductTitle: "Navy White Men Shirt",
        price: 9,
        image: "https://thumbs.dreamstime.com/b/navy-white-men-shirt-isolated-white-background-men-shirt-isolated-white-background-clipping-path-included-cotton-twill-check-332195715.jpg",
      },
       {
        id: 5,
        ProductTitle: "White joger for men",
        price: 22,
        image: "https://www.xtep.com.pk/wp-content/uploads/2024/04/4cddf5bd-5553-46fc-aa95-9deb75760048.jpg",
      },
       {
        id: 6,
        ProductTitle: "Jr.Boy loafer",
        price: 17,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_RjUWQS6bOhsLDj8BHqQaThWY9MpdC26jg&s",
      },
       {
        id: 7,
        ProductTitle: "Girls Premium Sneaker",
        price: 16,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj3uxMMwVQI27_c9ihxEuYtAud8Pto3Ess9A&s",
      },
       {
        id: 8,
        ProductTitle: "Girls white sandals",
        price: 20,
        image: "https://st3.depositphotos.com/29384342/50009/i/450/depositphotos_500098624-stock-photo-white-girls-sandals-white-background.jpg",
      },
        {
        id: 9,
        ProductTitle: "Bag Wizrad ",
        price: 12,
        image: "https://images-cdn.ubuy.co.in/655408d7875ac179ce70cb23-bag-wizard-bags-for-teens-girls-purse.jpg",
      },
        {
        id: 10,
        ProductTitle: "Skmei Watches",
        price: 9,
        image: "https://i0.wp.com/watchcentre.pk/wp-content/uploads/2022/08/Skmei-1799-rose-gold-white.jpg?resize=247%2C296&ssl=1",
      },
 {
        id: 11,
        ProductTitle: "Black Watch for Boys",
        price: 7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLs4vuhnSv9Wm1_z6tkRoh0EStpFLxrf5aSg&s",
      },
       {
        id: 12,
        ProductTitle: "Pink College Backpack",
        price: 14,
        image: "https://genietravel.com/cdn/shop/files/45DegreeAngle2_3731809d-b075-4bb8-a531-e8447b894615_1200x.jpg?v=1737027793",
      },
      {
        id:13,
        ProductTitle:"Glasses for men's",
        price:5,
        image:"https://easysight.pk/wp-content/uploads/2025/09/APC_3131-Photoroom.jpg"
      },
      {
        id:14,
        ProductTitle:"Glasses Frame for men's",
        price:3,
        image:"https://vazeeropticalhall.com.pk/cdn/shop/files/1_e2aed455-980b-45d8-b0a2-f16db1c57df7_180x.webp?v=1753187403"
      },{
       id:15,
        ProductTitle:"Glasses for female's",
        price:6,
        image:"https://m.media-amazon.com/images/I/71bdzJaGpHL._AC_SL1500_.jpg"
      },
      {
       id:16,
        ProductTitle:"Glasses for female's",
        price:8,
        image:"https://m.media-amazon.com/images/I/61DOUcFLBpL._AC_SL1500_.jpg"
      }
      ,
      {
       id:17,
        ProductTitle:"Mobile back cover",
        price:5,
        image:"https://www.wecool.in/cdn/shop/products/1_a5abf881-a7f8-4b77-b9fb-50153ccffeb2.jpg?v=1650948678"
      }
      ,
      {
       id:18,
        ProductTitle:"Customize name covers",
        price:6,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Iw0InvppP9IBqxeAhvsKsKQnKqFTBrEN4g&s"
      }
      ,
      {
       id:19,
        ProductTitle:"Cool mobile cover for female's",
        price:8,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIUBqx5LRf1Ds9Ow-p5K7trcq3UVWR7X5gEw&s"
      }
      ,
      {
       id:20,
        ProductTitle:"Mobile cover for female's",
        price:6,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PXMhEwieenVb0q-ZCZHrQANSDsRApOKwmQ&s"
      },
      {
  id: 21,
  ProductTitle: "Bluetooth Wireless Earbuds",
  price: 18,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQb2ekB_2j017U6GF0gRMJWzDHNsbL07VmAw&s"
},
{
  id: 22,
  ProductTitle: "Smart Fitness Watch",
  price: 22,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWkX95rPyR8XkQqlqWNo5BNDVG98DvyPYbA&s"
},
{
  id: 23,
  ProductTitle: "Leather Wallet for Men",
  price: 10,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_2udLnq2xecjf0kf7QlqErsx5JWIZqYex5g&s"
},
{
  id: 24,
  ProductTitle: "Stylish Sunglasses",
  price: 8,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNblq720R3ryIdgLCLXAza-vfmUHCzfSUWOw&s"
},
{
  id: 25,
  ProductTitle: "School Backpack Bag",
  price: 20,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zsRwe85JLDB1-AcYHa3rNHyFD1Zk5mdUsw&s"
},
{
  id: 26,
  ProductTitle: "Cotton Casual Cap",
  price: 5,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDHLRX_14b2W80AMyekK_VwWmgV4br39VPgA&s"
},
{
  id: 27,
  ProductTitle: "Laptop Sleeve Cover",
  price: 12,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6CujBsg6Pxk4-pmSNwv8hsNjKUjE2qe3UA&s"
},
{
  id: 28,
  ProductTitle: "USB Fast Charging Cable",
  price: 4,
  image: "https://m.media-amazon.com/images/I/61whFcpC1nL._AC_SL1391_.jpg"
},
{
  id: 29,
  ProductTitle: "Mini Bluetooth Speaker",
  price: 15,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_aVWR_SxQy7SPPLXFkJEaWTD_35nC_PtEg&s"
},
{
  id: 30,
  ProductTitle: "Gaming Mouse RGB",
  price: 14,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbV0dh8uG6Mag0HrsdajjEo6hEq8mjUYf2w&s"
},
{
  id: 31,
  ProductTitle: "Notebook Diary Premium",
  price: 6,
  image: "https://m.media-amazon.com/images/I/61FCFUvG97L.jpg"
},
{
  id: 32,
  ProductTitle: "Kids Water Bottle",
  price: 5,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0V_ERUtFdXU3QtbIcHL2xtyEZqaz4kaGfg&s"
},
{
  id: 33,
  ProductTitle: "LED Table Study Lamp",
  price: 11,
  image: "https://wbm.com.pk/public/uploads/all/lNK8PhWVr15t1F4AQ4fmTdaB5m7Sw8UFOcmFJvN3.jpg"
},
{
  id: 34,
  ProductTitle: "Wall Clock Modern Design",
  price: 13,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMvh-65wn9Hk6OzkYrkFtANetDdrTXjZqaQ&s"
},
{
  id: 35,
  ProductTitle: "Travel Organizer Pouch",
  price: 7,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFh5l9Qx2iuS2KGEG6VkE_HXEY4OqlnoHiJw&s"
},
{
  id: 36,
  ProductTitle: "Wireless Keyboard",
  price: 16,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeFwjaU7TLxQeq8gj1QsGH2pblUXQkGd5TLQ&s"
},
{
  id: 37,
  ProductTitle: "Phone Stand Adjustable",
  price: 4,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbgA_YzeqG4bRNjGTTkZxrbyd6aLxwXf7mSw&s"
},
{
  id: 38,
  ProductTitle: "Portable Power Bank",
  price: 19,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1EfJDwHhBryk_YJg3Y-nk1Lnum3Bi8_Uk8Q&s"
},
{
  id: 39,
  ProductTitle: "Car Phone Holder",
  price: 6,
  image: "https://autojin.pk/cdn/shop/files/1_0c56b49f-8eb3-4cc8-ba65-bbf55570c2d1.jpg?v=1764415325"
},
{
  id: 40,
  ProductTitle: "Desk Organizer Box",
  price: 9,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbe-AMrMIsCclmkqLuePZCkLcCU7VTmiiog&s"
}

    ],
 ListSections: [
  {
    title: "Popular products in Wireless internationally",
    items: [
      { id: 1, image: "https://m.media-amazon.com/images/I/71blOLk9A6L._AC_SY200_.jpg" },
      { id: 2, image: "https://m.media-amazon.com/images/I/71DD1juSg8L._AC_SY200_.jpg" },
      { id: 3, image: "https://m.media-amazon.com/images/I/61IlZWb4FdL._AC_SY200_.jpg" },
      { id: 4, image: "https://m.media-amazon.com/images/I/61HO7-q0JNL._AC_SY200_.jpg" },
      { id: 5, image: "https://m.media-amazon.com/images/I/61AfYlS-zhL._AC_SY200_.jpg" },
      { id: 6, image: "https://m.media-amazon.com/images/I/61Mv3cWzZeL._AC_SY200_.jpg" },
      {id:7, image:"https://m.media-amazon.com/images/I/51VDYCFi-KL._AC_SY200_.jpg"},
      {id:8, image:"https://m.media-amazon.com/images/I/81BLNoe9OlL._AC_SY200_.jpg"},
    ]
  },
  {
    title:"Best Sellers in Home & Kitchen",
    items:[
      { id: 1, image: "https://m.media-amazon.com/images/I/71XEvtKF9oL._AC_SY200_.jpg" },
      { id: 2, image: "https://m.media-amazon.com/images/I/71Zg+lIkXeL._AC_SY200_.jpg" },
      { id: 3, image: "https://m.media-amazon.com/images/I/81LOT-SLKLL._AC_SY200_.jpg" },
      { id: 4, image: "https://m.media-amazon.com/images/I/811-tPSBMML._AC_SY200_.jpg" },
      { id: 5, image: "https://m.media-amazon.com/images/I/611S4FYZhsL._AC_SY200_.jpg" },
      { id: 6, image: "https://m.media-amazon.com/images/I/71xIgTqSN6L._AC_SY200_.jpg" },
      {id:7, image:"https://m.media-amazon.com/images/I/41ryNvEnNCL._AC_SY200_.jpg"},
      {id:8, image:"https://m.media-amazon.com/images/I/81Cn1+lUraL._AC_SY200_.jpg"},
      {id:9,image:"https://m.media-amazon.com/images/I/41Dz7KzIs6L._AC_SY200_.jpg"},
      {id:10, image:"https://m.media-amazon.com/images/I/81Ha7nqu+bL._AC_SY200_.jpg"}
     
    ]
  }
],
  }),
  
});
