// ملف المنتجات الرئيسي
// يمكنك تعديل أو إضافة منتجات هنا

const products = [
  {
    id: "d1",
    name: "دفتر سلك 70 ورقة",
    price: 90,
    mainCat: "أدوات مكتبية",
    category: "دفاتر",
    stock: 90,
    img: "https://i.imgur.com/Vp5j7dH.png"
  },
  {
    id: "d2",
    name: "دفتر جامعي 100 ورقة",
    price: 13,
    mainCat: "أدوات مكتبية",
    category: "دفاتر",
    stock: 5,
    img: "https://i.imgur.com/2Ud9P4q.png"
  },
  {
    id: "k1",
    name: "قلم أزرق جاف",
    price: 3,
    mainCat: "أدوات كتابية",
    category: "أقلام",
    stock: 50,
    img: "https://i.imgur.com/zx9c59V.png"
  },
  {
    id: "k9",
    name: "قلم أزرق جاف",
    price: 3,
    mainCat: "مطبوعات",
    category: "بنس",
    stock: 50,
    img: "https://i.imgur.com/zx9c59V.png"
  },
    {
    id: "k10",
    name: "كوع",
    price: 90,
    mainCat: "سباكه",
    category: "كوع",
    stock: 20,
    img: "https://i.imgur.com/zx9c59V.png"
  }
];

// تصدير المصفوفة للاستخدام في صفحات أخرى
if (typeof module !== 'undefined') {
  module.exports = products;
}
