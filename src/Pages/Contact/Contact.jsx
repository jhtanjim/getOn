import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mx-5 lg:mx-20">
      {/* Contact US Form */}
      <div className="lg:w-1/2 order-2 lg:order-1">
        <ContactForm />
      </div>
      {/* IMG */}
      <div className="lg:w-1/2 order-1 lg:order-2">
        <img
          src="src/assets/Contact us.gif"
          alt="Contact us"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Contact;
