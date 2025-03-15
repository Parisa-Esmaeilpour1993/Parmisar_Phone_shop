import image1 from "@/assets/images/xiaomi-redmi-note-14-pro-5g-review.webp";
import image2 from "@/assets/images/samsung-s25-ultra-gaming-test.webp";
import image3 from "@/assets/images/huawei-mate-xt-ultimate-cover.webp";
import image4 from "@/assets/images/nothing-cmf-phone-1-teardown.webp";
import { reviewsLocalization } from "@/constants/localization/Localization";

export const reviews = [
  {
    id: 1,
    title: reviewsLocalization.title1,
    description: reviewsLocalization.description1,
    image: image1,
    url: "https://mobo.news/xiaomi-redmi-note-14-pro-plus/",
  },
  {
    id: 2,
    title: reviewsLocalization.title2,
    description: reviewsLocalization.description2,
    image: image2,
    url: "https://mobo.news/samsung-s25-ultra-gaming-test/",
  },
  {
    id: 3,
    title: reviewsLocalization.title3,
    description: reviewsLocalization.description3,
    image: image3,
    url: "https://mobo.news/huawei-mate-xt-ultimate/",
  },
  {
    id: 4,
    title: reviewsLocalization.title4,
    description: reviewsLocalization.description4,
    image: image4,
    url: "https://mobo.news/nothing-cmf-phone-1-teardown/",
  },
];
