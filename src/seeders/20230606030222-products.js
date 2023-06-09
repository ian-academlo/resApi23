"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Tacos al pastor",
          description:
            "Deliciosos tacos de puerquido adobados con cebolita y cilantro, orden de 6 tacos",
          price: 15.5,
          product_image:
            "https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tacos de suadero",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam ni",
          price: 10.0,
          product_image:
            "https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tacos campechanos",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam ni",
          price: 20.0,
          product_image:
            "https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tacos chistorra",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam ni",
          price: 25.5,
          product_image:
            "https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "coca cola",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam ni",
          price: 6.5,
          product_image:
            "https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "horchata",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam ni",
          price: 4.5,
          product_image:
            "https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "jamaica",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam ni",
          price: 4.5,
          product_image:
            "https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
