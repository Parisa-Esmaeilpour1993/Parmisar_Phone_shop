import Image from "next/image";
import termsImage from "@/assets/images/T&C.svg";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { termsLocalization } from "@/constants/localization/Localization";

export default function Terms() {
  return (
    <div>
      <Header />
      <section className="m-12 flex flex-col gap-4">
        <Image src={termsImage} alt={"termsImage"} />
        <h1 className="text-xl font-semibold">{termsLocalization.heading}</h1>
        <p>{termsLocalization.hint}</p>
        <p>{termsLocalization.paragraphOfHeading}</p>
        <p>{termsLocalization.notes}</p>
        <p>{termsLocalization.p1}</p>
        <p>{termsLocalization.p2}</p>
        <p>{termsLocalization.p3}</p>
      </section>
      <Footer />
    </div>
  );
}
