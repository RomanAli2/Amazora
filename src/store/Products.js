import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => ({
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
        ProductTitle: "Navy White Men Shirt",
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
]

  }),
});
