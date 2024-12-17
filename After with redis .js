const cachedProducts = await redis.get("electronics_products");
if (!cachedProducts) {
  const products = await Product.find({ category: "electronics" });
  redis.set("electronics_products", JSON.stringify(products), "EX", 3600); // Cache for 1 hour
}
