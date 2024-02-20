const useFooterLinks: () => {
  title: string;
  links: {
    id: number;
    text: string;
  }[];
}[] = () => {
  return [
    {
      title: "Shop Info",
      links: [
        {
          id: 1,
          text: "About Us",
        },
        {
          id: 2,
          text: "Contact Us",
        },
        {
          id: 3,
          text: "Privacy Policy",
        },
        {
          id: 4,
          text: "Terms & Condition",
        },
        {
          id: 5,
          text: "Return Policy",
        },
        {
          id: 6,
          text: "FAQs & Help",
        },
      ],
    },
    {
      title: "Account",
      links: [
        {
          id: 7,
          text: "My Account",
        },
        {
          id: 8,
          text: "Shop details",
        },
        {
          id: 9,
          text: "Shopping Cart",
        },
        {
          id: 10,
          text: "Wishlist",
        },
        {
          id: 11,
          text: "Order History",
        },
        {
          id: 12,
          text: "International Orders",
        },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          id: 13,
          text: "Address: 1429 Netus Rd, NY 48247",
        },
        {
          id: 14,
          text: "Email: Example@gmail.com",
        },
        {
          id: 15,
          text: "Phone: +0123 4567 8910",
        },
      ],
    },
  ];
};
export default useFooterLinks;
