type Product = {
  id: string;
  name: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
  discount?: number; 
};

const listProduct: Product[] = [
  {
    id: "P001",
    name: "Áo sơ mi",
    price: 300000,
    category: {
      id: "C001",
      name: "Thời trang nam",
    },
    discount: 20, 
  },
  {
    id: "P002",
    name: "Quần jeans",
    price: 500000,
    category: {
      id: "C002",
      name: "Thời trang nữ",
    },
  },
  {
    id: "P003",
    name: "Giày thể thao",
    price: 800000,
    category: {
      id: "C003",
      name: "Phụ kiện",
    },
    discount: 10,
  },
];

function getFinalPrice(product: Product): number {
  if (product.discount) {
    return product.price * (1 - product.discount / 100);
  }
  return product.price;
}

function printProductInfo(product: Product): void {
  const finalPrice = getFinalPrice(product);
  console.log(`Tên: ${product.name}`);
  console.log(`Giá gốc: ${product.price.toLocaleString()} VND`);
  console.log(`Giá sau giảm: ${finalPrice.toLocaleString()} VND`);
  console.log(`Danh mục: ${product.category.name}`);
}

listProduct.forEach(printProductInfo);
