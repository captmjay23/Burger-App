const DBConnection = require("../db/connection");

const useProductService = () => {
  const createProduct = async (createObj) => {
    const { name, price } = createObj;
    try {
      const query = `INSERT INTO table_testing(name, price) VALUES ('${name}', '${price}')`;
      await DBConnection(query);

      return true;
    } catch (error) {
      console.log("Error Create Product:", error.message);
      return false;
    }
  };
  const retrieveProduct = async () => {
    try {
      const query = "SELECT * FROM table_testing";
      const results = await DBConnection(query);

      return results;
    } catch (error) {
      console.log("Error Retrieve Product:", error.message);
      return [];
    }
  };
  const updateProduct = async (updateObj) => {
    const { id, name, price } = updateObj;
    try {
      const query = `UPDATE table_testing SET name='${name}', price='${price}' WHERE id='${id}'`;
      await DBConnection(query);

      return true;
    } catch (error) {
      console.log("Error Update Product:", error.message);
      return false;
    }
  };
  const deleteProduct = async (id) => {
    try {
      const query = `DELETE FROM table_testing WHERE id='${id}'`;
      await DBConnection(query);

      return true;
    } catch (error) {
      console.log("Error Update Product:", error.message);
      return false;
    }
  };

  return {
    create: createProduct,
    retrieve: retrieveProduct,
    update: updateProduct,
    delete: deleteProduct,
  };
};

module.exports = useProductService;
