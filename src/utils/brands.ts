import apple from "@/assets/images/apple.png";
import google from "@/assets/images/google.png";
import huawei from "@/assets/images/huawei.png";
import microSoft from "@/assets/images/microSoft.webp";
import nokia from "@/assets/images/nokiaa.jpg";
import nothingPhone from "@/assets/images/nothingPhone.webp";
import samsung from "@/assets/images/samsung.png";
import xiaomi from "@/assets/images/xiaomi.webp";
import { productslocalization } from "@/constants/localization/Localization";

export const brands = [
  { name: productslocalization.apple, slug: "apple", image: apple },
  { name: productslocalization.xiaomi, slug: "xiaomi", image: xiaomi },
  { name: productslocalization.samsung, slug: "samsung", image: samsung },
  { name: productslocalization.huawei, slug: "huawei", image: huawei },
  { name: productslocalization.nokia, slug: "nokia", image: nokia },
  { name: productslocalization.microsoft, slug: "microSoft", image: microSoft },
  {
    name: productslocalization.nothingPhone,
    slug: "nothingPhone",
    image: nothingPhone,
  },
  { name: productslocalization.google, slug: "google", image: google },
];
